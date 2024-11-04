//components/paywall.tsx

'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import PricingTable from "@/components/pricing"
import Testimonials from "@/components/testimonials"


const companyLogos = [
  { name: 'Blueprint Bryan Johnson', src: '/companies/1.png' },
  { name: 'OpenCures', src: '/companies/2.png' },
  { name: 'BiohackerDAO', src: '/companies/3.png' },
  { name: 'YCombinator', src: '/companies/4.png' },
  { name: 'Longevity Biotech Fellowship', src: '/companies/5.png' },
]


const influencers = ['Peter Attia', 'Rhonda Patrick', 'Andrew Huberman', 'Bryan Johnson']


export function EnhancedPaywallWithOnBoarding() {
  const [email, setEmail] = useState('')
  const [isSmallHeight, setIsSmallHeight] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setIsSmallHeight(window.innerHeight < 500)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if (!email) {
      setMessage('Please enter a valid email.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName: '' }),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage('You have successfully joined the waitlist!')
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Failed to join the waitlist. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted text-foreground">
      {/* Paywall Element */}
      {/*<div className="w-full p-6 md:p-8 lg:p-12">
        <PricingTable />
      </div>*/}

      {/* Fullscreen Video Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full text-black hover:bg-opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            <X className="w-6 h-6" />
          </button>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4OSIC3ugE8A?autoplay=1"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}

      <div className="flex flex-col flex-grow overflow-auto">
        {/* Main Content */}
        <div className="p-6 md:p-8 lg:p-12 md:pt-6 lg:pt-6 flex-grow">


          <h2 className="text-3xl font-bold mb-6 text-primary">Brogevity Premium Membership</h2>
          <p className="text-xl mb-8 text-muted-foreground">🔑 Become Smarter About Life Optimisation</p>

          <div className="space-y-8 mb-12">
            {[
              { text: "Personalized Weekly Newsletter: Receive a personalized experience in the newsletter tailored to your preferences, providing content aligned with your goals", img: "/paywall/ads-newsletter.webp"},
              { text: "Get access to the Chat on Telegram and find discussion about longevity topic that matters for you", img: "/paywall/paywall-3.webp" },
              { text: "Preferences Dashboard: Customize your experience by selecting topics and filters that matter to you for a smarter", img: "/paywall/paywall-1.webp" },
              { text: "Unlock Advanced Search & Filters. Search by topic, budget, expert, goal, or solution type to discover \"hidden gems\" that works best for you", img: "/paywall/paywall-2.webp" },
              { text: "Community Knowledge Page", img: "/paywall/ads-knowledge.webp" },
              { text: "Attend Brogevity.com webinars and meet-ups with longevity experts and opinion-leaders", img: "/paywall/paywall-4.webp" },
              { text: "Learn how to get started with new longevity routine from other people who been through the process", img: "/paywall/paywall-5.webp" },
              { text: "Bookmark and track claims that are interesting for you. Like Sleep, Exercise, Longevity Research & 16 more topics", img: "/paywall/paywall-6.webp" }
            ].map((benefit, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-green-500 mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-lg">{benefit.text}</span>
                  </div>
                  {benefit?.img && (
                    <div className='max-w-2xl mx-auto'>
                      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                        <Image src={benefit.img} alt={`Paywall feature ${index + 1}`} fill className="object-cover" />
                      </AspectRatio>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-primary">✅ Be the first to receive access to new features on our website:</h3>
          <div className="space-y-6 mb-12">
            {[
              "Access To Brogevity AI Copilot: keep track of the claims you've explored and create a personalized well-being routine",
              "Special Offers: Enjoy members-only discounts and early-access on products",
              "Access Community Reviews and Data. Learn about routines from community experiences from same-minded people",
              "Get monthly reports: Receive short monthly updates on new claims added on the website to stay Up-to-Date with the Latest Research",
              "Get alerts when opinions on topics that interest you change. Everyday new claims emerge, and you may need to be up-to-date"
            ].map((feature, index) => (
              <Card key={index} className="p-4 transition-all duration-300 hover:shadow-md">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>{feature}</span>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            By signing up, you agree to our <Link href='/terms' className="text-primary hover:underline">terms of service</Link>
          </p>

          {!isSmallHeight && (
            <div className="mt-12 max-w-2xl mx-auto">
              <AspectRatio ratio={16 / 9} className="bg-muted mb-4 rounded-lg cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl" onClick={() => setIsFullscreen(true)}>
                <Image 
                  src="/paywall/video-preview.webp" 
                  alt="Video preview" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-50">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </AspectRatio>
              <Card className="text-center p-4 bg-primary/10 border-primary">
                <p className="text-lg font-semibold text-primary">
                  950 members on Reddit + 70 people joined private chat
                </p>
              </Card>
            </div>
          )}
        </div>
        
      </div>

      <EnhancedCompanies />
    </div>
  )
}

export function EnhancedCompanies() {
  return (
    <div className="w-full bg-muted py-8 px-6 shadow-lg rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h3 className="text-lg font-semibold text-primary">
            Brogevity.com members also are at
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {companyLogos.map((company) => (
              <TooltipProvider key={company.name}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="bg-white p-4 h-16 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                      <Image
                        src={company.src}
                        alt={`${company.name} logo`}
                        width={120}
                        height={120}
                        className="filter grayscale opacity-75 hover:filter-none hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{company.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}