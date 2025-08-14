import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Type for webkit audio context
interface WindowWithWebkitAudioContext extends Window {
  webkitAudioContext?: typeof AudioContext;
}

interface NotificationBadgeProps {
  delay: number;
  initialNumber?: number;
}

export default function NotificationBadge({ delay, initialNumber = 1 }: NotificationBadgeProps) {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(initialNumber);

  // Use browser's default notification sound
  const playNotificationSound = useCallback(() => {
    try {
      // Use browser's built-in notification sound
      if ('Notification' in window && Notification.permission === 'granted') {
        // Create a professional notification for health tourism company
        new Notification(getNotificationTitle(), {
          body: getNotificationMessage(),
          icon: '/images/logo-besafe-dark.png',
          badge: '/images/logo-besafe-dark.png',
          tag: 'consultation-request',
          requireInteraction: false,
          silent: false // This will play the default system sound
        });
        console.log("🔊 Browser notification sound played successfully");
        return true;
      } else {
        // Fallback: use Web Audio API to create a simple beep
        createBeepSound();
        return true;
      }
    } catch (error) {
      console.error("❌ Failed to play notification sound:", error);
      // Fallback: create a simple beep sound
      createBeepSound();
      return false;
    }
  }, []);

  // Fallback beep sound using Web Audio API
  const createBeepSound = () => {
    try {
      // Check if Web Audio API is supported
      if (!window.AudioContext && !(window as WindowWithWebkitAudioContext).webkitAudioContext) {
        console.error("❌ Web Audio API not supported");
        return false;
      }

      const audioContext = new (window.AudioContext || (window as WindowWithWebkitAudioContext).webkitAudioContext)();
      
      // Resume context if suspended
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a simple beep sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.2);
      
      // Set volume envelope
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      // Start and stop the sound
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
      
      console.log("🔊 Fallback beep sound played successfully");
      return true;
    } catch (error) {
      console.error("❌ Fallback beep sound also failed:", error);
      return false;
    }
  };

  // Function to update notification number randomly
  const updateNotificationNumber = useCallback(() => {
    // Always increase the number by 1 to simulate accumulating notifications
    const newNumber = number + 1;
    
    setNumber(newNumber);
    
    console.log(`🔔 New notification! Number increased from ${number} to ${newNumber} (+1)`);
    
    // Play sound for new notification
    playNotificationSound();
    
    // Schedule next update exactly every 60 seconds (1 minute)
    const nextUpdateDelay = 60 * 1000; // 60 seconds = 1 minute
    console.log(`⏰ Next notification update in: ${nextUpdateDelay / 1000} seconds (1 minute)`);
    setTimeout(updateNotificationNumber, nextUpdateDelay);
  }, [number, playNotificationSound]);

  // Get different notification messages for variety
  const getNotificationMessage = () => {
    const messages = [
      'New consultation request received',
      'Patient inquiry about hair transplant',
      'Dental treatment consultation request',
      'Aesthetic surgery inquiry received',
      'New patient from Turkey',
      'Consultation scheduled for tomorrow',
      'Patient feedback received',
      'New appointment request',
      'Treatment plan inquiry',
      'Price quote requested'
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  // Get different notification titles for variety
  const getNotificationTitle = () => {
    const titles = [
      'Be Safe Health',
      'New Patient Inquiry',
      'Consultation Request',
      'Patient Message',
      'Appointment Update',
      'Treatment Inquiry',
      'Patient Feedback',
      'New Request',
      'Health Consultation',
      'Medical Tourism'
    ];
    
    const randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
  };

  // Animation key for number changes
  const [key, setKey] = useState(0);
  
  // Update key when number changes to trigger animation
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [number]);

  // Request notification permission on component mount
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      
      console.log(`🔔 Initial notification appeared! Number: ${initialNumber}`);
      
      // Play initial notification sound
      playNotificationSound();
      
      // Start the update cycle - first update in exactly 1 minute
      const firstUpdateDelay = 60 * 1000; // First update in exactly 60 seconds (1 minute)
      console.log(`⏰ First notification update in: ${firstUpdateDelay / 1000} seconds (1 minute)`);
      setTimeout(updateNotificationNumber, firstUpdateDelay);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay, initialNumber, playNotificationSound, updateNotificationNumber]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 15,
            duration: 0.3 
          }}
          className="absolute z-50 -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-white animate-pulse cursor-pointer"
          onClick={() => {
            console.log("🧪 Testing notification sound...");
            playNotificationSound();
          }} // Click to test sound
          title={`Click to test notification sound (Permission: ${Notification.permission})`}
        >
          <motion.span
            key={key}
            initial={{ scale: 1.2, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 20,
              duration: 0.2 
            }}
            className="block"
          >
            {number}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
