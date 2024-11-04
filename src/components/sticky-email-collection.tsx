'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function StickyEmailCollection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (assuming it's the first section)
      const heroSection = document.querySelector('section')
      const heroHeight = heroSection?.offsetHeight || 800 // fallback height

      // Show the email collection when scrolled past hero
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm border-t border-accent/20 transform transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <input
          type="email"
          placeholder="Type your email..."
          className="w-full sm:w-96 px-6 py-3 rounded-full bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-accent"
        />
        <Button 
          className="w-full sm:w-auto px-6 py-6 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Become a Smarter Life Optimizer
        </Button>
      </div>
    </div>
  )
}