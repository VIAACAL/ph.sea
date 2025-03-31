"use client"

import { useState } from "react"

interface CustomerLogoProps {
  name: string
  defaultImage: string
  hoverImage: string
  alt: string
}

export function CustomerLogo({ name, defaultImage, hoverImage, alt }: CustomerLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square w-full mb-2 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <img 
            src={defaultImage} 
            alt={`${alt} logo`} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={hoverImage} 
            alt={`${alt} success story`} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <p className="text-center text-sm font-medium">{name}</p>
    </div>
  )
}
