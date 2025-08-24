import type { NextApiRequest, NextApiResponse } from "next";
import { googleConfig } from "../../config/index";

// This API proxies Google Places reviews. Provide PLACE_ID and API_KEY via env.
// It returns a trimmed list of 3 reviews for the frontend.

type Review = { author_name: string; rating: number; text: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const placeId = googleConfig.places.placeId;
  const apiKey = googleConfig.places.apiKey;

  if (!placeId || !apiKey) {
    res.status(200).json({ reviews: [] });
    return;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=reviews&key=${apiKey}`;
    const r = await fetch(url);
    const data = await r.json();
    const reviews: Review[] = data?.result?.reviews || [];
    const trimmed = reviews.slice(0, 3).map((rv) => ({
      author_name: rv.author_name,
      rating: rv.rating,
      text: rv.text,
    }));
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({ reviews: trimmed });
  } catch {
    res.status(200).json({ reviews: [] });
  }
}




