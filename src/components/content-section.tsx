"use client"

import Image from 'next/image'
import { motion } from "framer-motion"
import { useState, useEffect } from 'react'

interface ContentSectionProps {
  title: string
  highlightedText: string
  description: string
  cardTitle: string
  cardDescription?: string
  imageSrc: string
  mobileImageSrc?: string
  imageAlt: string
  imageAspectRatio?: "video" | "square" | "2:1"
}

export default function ContentSection({
  title,
  highlightedText,
  description,
  cardTitle,
  cardDescription,
  imageSrc,
  mobileImageSrc,
  imageAlt,
  imageAspectRatio = "video"
}: ContentSectionProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const imageSource = isMobile && mobileImageSrc ? mobileImageSrc : imageSrc

  const getAspectRatioClass = () => {
    if (isMobile) {
      return "aspect-[9/16]"
    }
    switch (imageAspectRatio) {
      case "video":
        return "aspect-video"
      case "square":
        return "aspect-square"
      case "2:1":
        return "aspect-[2/1]"
      default:
        return "aspect-video"
    }
  }

  return (
    <section className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 sm:space-y-6 mb-6 sm:mb-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
          {title} <span className="text-primary">{highlightedText}</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:px-6"
      >
        <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg">
          {cardDescription && (
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 sm:mb-4">
                {cardTitle}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center mb-4">
                {cardDescription}
              </p>
            </div>
          )}
          <div className={`relative w-full ${getAspectRatioClass()}`}>
            <Image
              src={imageSource}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}