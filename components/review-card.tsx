"use client"

import { FC } from "react"

interface ReviewCardProps {
  name: string
  company: string
  position: string
  rating: number
  content: string
  websiteUrl?: string
  companyLogo?: string
}

export const ReviewCard: FC<ReviewCardProps> = ({
  name,
  company,
  position,
  rating,
  content,
  websiteUrl,
  companyLogo
}) => {
  // Get first letter of name for the avatar
  const firstLetter = name.charAt(0)
  
  // Generate random color for avatar background (just like in the screenshot)
  const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500']
  const colorIndex = Math.floor(name.length % colors.length)
  const avatarBgColor = colors[colorIndex]

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {/* Avatar circle with first letter */}
        <div className={`w-10 h-10 rounded-full ${avatarBgColor} flex items-center justify-center text-white font-semibold mr-3`}>
          {firstLetter}
        </div>
        
        <div>
          {/* Name */}
          <h3 className="font-semibold text-gray-800">{name}</h3>
          
          {/* Star rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      
      {/* Review text */}
      <p className="text-gray-600 mb-4" style={{ minHeight: '100px' }}>{content}</p>
      
      {/* Company & Position */}
      <div className="pt-2 border-t border-gray-100">
        <p className="text-xs text-gray-500">{position} | {company}</p>
      </div>
    </div>
  )
}
