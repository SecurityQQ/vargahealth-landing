'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Award, Brain, Users } from "lucide-react"
import SocialProof from "./SocialProof"

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const background = backgroundRef.current
    if (!background) return

    let animationFrameId: number

    const animate = () => {
      background.style.transform = `translateX(${Date.now() / 100 % 50}px)`
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleSubscribeClick = () => {
    if (email) {
      setIsDialogOpen(true)
    } else {
      alert('Please enter your email')
    }
  }

  const handleSendEmail = async () => {
    if (name && email) {
      try {
        const response = await fetch('/api/send-intro-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, name })
        })
        if (response.ok) {
          alert('Intro email sent successfully!')
          setIsDialogOpen(false)
        } else {
          alert('Failed to send the email')
        }
      } catch (error) {
        console.error('Error sending email:', error)
        alert('An error occurred while sending the email')
      }
    } else {
      alert('Please fill in your name')
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background to-accent/10 text-foreground">
      {/* Background Grid */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 grid grid-cols-4 gap-2 opacity-30 md:grid-cols-6"
      >
        {[...Array(48)].map((_, i) => (
          <div
            key={i}
            className="w-full overflow-hidden rounded-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5"
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:gap-12 lg:px-8">
        {/* Left Column */}
        <div className="flex-1 space-y-2 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1 text-sm backdrop-blur-sm mx-auto border border-accent/30">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground font-semibold">#1 Longevity Newsletter by AI</span>
          </div>

          {/* Main Content */}
          <div className="space-y-2 md:space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Become a Smarter Life Optimizer
            </h1>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                <span className="text-xl font-bold text-muted-foreground">Get a personalized newsletter about longevity every week</span>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
                <span className="text-xl font-bold text-muted-foreground">Explore over 2,000 life optimization claims on Brogevity.com database</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-xl font-bold text-muted-foreground">Join a community of people who care about latest bio discoveries</span>
              </li>
            </ul>
            
            <div className="block md:hidden w-full max-w-md pt-3">
              <SignInButton email={email} setEmail={setEmail} onSubscribeClick={handleSubscribeClick} />
            </div>
            <SocialProof/>
          </div>
        </div>

        {/* Right Column - Sign Up Card */}
        <div className="hidden md:block w-full max-w-md">
          <SignInButton email={email} setEmail={setEmail} onSubscribeClick={handleSubscribeClick} />
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Your Name</DialogTitle>
            <DialogDescription>
              Please provide your name to complete the subscription process.
            </DialogDescription>
          </DialogHeader>
          <Input
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
          <DialogFooter>
            <Button onClick={handleSendEmail}>Confirm and Subscribe</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function SignInButton({ email, setEmail, onSubscribeClick }: { email: string; setEmail: (email: string) => void; onSubscribeClick: () => void }) {
  return (
    <div className="w-full max-w-md p-4 md:p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-xl relative border border-accent/20">
      {/* Free label */}
      <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium transform rotate-12 shadow-lg">
        Newsletter is Free
      </div>

      {/* Email input */}
      <div className="mb-4">
        <Input
          type="email"
          placeholder="Type your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-6 py-3 rounded-full bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-accent"
        />
      </div>

      {/* Main CTA button */}
      <Button className="w-full px-6 py-6 mb-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" onClick={onSubscribeClick}>
        Subscribe
      </Button>
      
      {/* Bottom text */}
      <p className="text-muted-foreground text-sm text-center mt-4">
        {"If you already have an account, we'll log you in"}
      </p>
    </div>
  )
}