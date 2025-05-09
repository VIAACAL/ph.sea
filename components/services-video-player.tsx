'use client'

import React, { useRef, useState } from 'react'
import { cn } from "@/lib/utils"; // Added cn import

interface ServicesVideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ServicesVideoPlayer({ src, className, style }: ServicesVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div 
      className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg cursor-pointer" // Added cursor-pointer
      style={style} 
      onClick={toggleMute}
      title={isMuted ? "Click to unmute" : "Click to mute"} // Tooltip for UX
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted // Start muted
        playsInline
        className={cn(className, "object-cover")} // Ensure object-cover is applied
        style={{ objectPosition: 'center 20%' }} // Shift video upwards
      >
        Your browser does not support the video tag.
      </video>
      {/* Optional: Add a custom mute/unmute icon overlay if desired later */}
    </div>
  )
}
