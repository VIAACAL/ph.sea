"use client"

import { useEffect, useRef, useState } from "react"

interface VideoBackgroundProps {
  videoSrc: string;
}

export function VideoBackground({ videoSrc }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      setIsMobile(/iphone|ipad|ipod|android/.test(userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Ensure video plays when component mounts
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // For iOS, we need to load the video first
          videoRef.current.load();
          
          // Try to play immediately
          await videoRef.current.play();
        } catch (error) {
          console.error("Video autoplay failed:", error);
          
          // If autoplay fails, try again with user interaction
          document.addEventListener('touchstart', () => {
            videoRef.current?.play();
          }, { once: true });
        }
      }
    };
    
    playVideo();
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay to darken or adjust video visibility */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
}
