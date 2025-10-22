import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// Facebook Conversions API endpoint
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { eventName, eventId, userData, customData, attributionShare, originalEvent } = req.body;

  // Facebook API credentials
  const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN || 'EAAJlF7gyLaABPrFuFi5QDT2DhZCZCZC7ZBR0inDoTAJK6Cs9pATTjPNV0cvExpg96RwHkG17Ct5Qw0bf7sZAnKP4Q4WHrTjmEF3QaUToAWoM5cWihX302V86AKZCbOFi83A4uI6QB2OWn1ZAm4ug9ml48S149wJCbs2PBworRgXvI0stg82JHoTyP1gKSk566UekwZDZD';
  const PIXEL_ID = '738567675869556';

  // Hash email and phone for privacy
  const hashData = (data: string) => {
    return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
  };

  // Prepare the event data
  // Meta requires lead_id for proper deduplication and CRM integration
  const nowTs = Math.floor(Date.now() / 1000);
  
  // Generate lead_id if not provided (for web form leads)
  const leadId = userData?.leadId || Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
  
  const eventData = {
    data: [
      {
        // Meta CRM Integration compliant payload
        event_name: eventName || 'Lead',
        event_time: nowTs,
        action_source: 'website',
        event_id: eventId, // Required for deduplication
        user_data: {
          lead_id: leadId, // Required for CRM integration
          fbc: userData?.fbc ?? null,
          fbp: userData?.fbp ?? null,
          ...(userData?.email ? { em: hashData(userData.email) } : {}),
          ...(userData?.phone ? { ph: hashData(userData.phone) } : {}),
          ...(userData?.firstName ? { fn: hashData(userData.firstName) } : {}),
          ...(userData?.lastName ? { ln: hashData(userData.lastName) } : {}),
        },
        custom_data: {
          content_name: customData?.content_name || 'Contact Form',
          content_category: customData?.content_category || 'Lead Generation',
          lead_event_source: 'Website Form',
          event_source: 'crm',
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v24.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }
    );

    const result = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data: result });
    } else {
      return res.status(400).json({ error: 'Facebook API error', details: result });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
