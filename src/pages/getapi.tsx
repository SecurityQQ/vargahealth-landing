import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Award, Brain, Users, Database, Shield, MessageSquare, Zap, Lock, Phone, Mail, Calendar } from 'lucide-react'
import { Star } from 'lucide-react';
import ApiExampleView from '@/components/api-example'
import AIExamplesTabs from '@/components/ai-api/markdown-tabs'
import { Card } from '@/components/ui/card'
import CompanyCard from '@/components/company-card'


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10">
      <Head>
        <title>Brogevity API - Unlock the Future of Health and Wellness</title>
        <meta name="description" content="Access comprehensive longevity data, research, and wellness content through Brogevity's powerful API." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Brogevity API</div>
        <nav>
          <Button variant="ghost" asChild>
            <Link className='no-underline' href="#API">API Examples</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link  className='no-underline' href="#get-started">Get Started</Link>
          </Button>

        </nav>
      </header>

      <main>
        <HeroSection />
        <EnhancedCompanies />
        <div id='API'>
          <AIExamplesTabs />
          </div>
        {/*<FeaturesSection />*/}
        <GetStartedSection />
        {/*<ContactSection />*/}
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        © {new Date().getFullYear()} Brogevity. All rights reserved.
      </footer>
    </div>
  )
}

function HeroSection() {
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
      // Placeholder for email sending logic
      alert('Thank you for subscribing!')
      setIsDialogOpen(false)
    } else {
      alert('Please fill in your name')
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background to-accent/10 text-foreground">
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
      
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-4 py-2 md:flex-row md:gap-6 lg:px-6">
        <div className="flex-1 space-y-2 md:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1 text-sm backdrop-blur-sm mx-auto border border-accent/30">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground font-semibold">Trusted by Industry Leaders</span>
          </div>

          <div className="space-y-2 md:space-y-6">
            <h1 className="text-4xl font-bold py-1 tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              API For Longevity
            </h1>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Database className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <span className="text-lg md:text-xl text-muted-foreground">
                  Access <strong>5,000+ evidence-based claims</strong> sourced from 100+ hours of longevity content and peer-reviewed research—updated weekly
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Zap className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <span className="text-lg md:text-xl text-muted-foreground">
                  Stream <strong>real-time updates</strong> directly into your app—live data, zero delays, fully customizable to your needs
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Lock className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <span className="text-lg md:text-xl text-muted-foreground">
                  Integrate in minutes with our <strong>GPT-compatible API</strong>—no extra setup, no learning curve, just results
                </span>
              </li>
            </ul>


            <div className="block md:hidden w-full max-w-md pt-3">
              <div className='bg-background rounded-lg shadow-lg'>
            <div className='pt-6 px-6'>
              <ApiExampleView />
            </div>
            <div className='w-full bg-background rounded-lg py-2'>
              <CompanyCard
                href="https://opencures.org/"
                src="/companies/2.png"
                alt="OpenCures Logo"
                tooltip="OpenCures"
              />
            </div>
          </div>
            </div>
            <SocialProof />
          </div>
        </div>

        <div className="hidden md:block w-full max-w-md">
          {/*<SignInButton email={email} setEmail={setEmail} onSubscribeClick={handleSubscribeClick} />*/}
          <div className='bg-background rounded-lg shadow-lg'>
            <div className='pt-6 px-6'>
              <ApiExampleView />
            </div>
            <div className='w-full bg-background rounded-lg py-2'>
              <CompanyCard
                href="https://opencures.org/"
                src="/companies/2.png"
                alt="OpenCures Logo"
                tooltip="OpenCures"
              />
            </div>
          </div>

          
          
        </div>
      </div>

      
    </section>
  )
}




function SignInButton({ email, setEmail, onSubscribeClick }: { email: string; setEmail: (email: string) => void; onSubscribeClick: () => void }) {
  return (
    <div className="w-full max-w-md p-2 md:p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-xl relative border border-accent/20">
      <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium transform rotate-12 shadow-lg">
        API Access Request
      </div>

      <div className="mb-4">
        <Input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-6 py-3 rounded-full bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-accent"
        />
      </div>

      <Button 
        className="w-full p-6 mb-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" 
        onClick={onSubscribeClick}
      >
        Request API Access
      </Button>
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <p className="text-sm text-muted-foreground">Brogevity API used by</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="bg-white p-4 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                <Link href='https://opencures.org/'>
                  <Image
                    src="/companies/2.png"
                    alt="OpenCures Logo"
                    width={90}
                    height={90}
                    className="filter grayscale opacity-75 hover:filter-none hover:opacity-100 transition-all duration-300"
                  />
                </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>OpenCures</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  const features = [
    { icon: Database, title: "Extensive Data Access", description: "Regular updates with new claims and content." },
    { icon: Shield, title: "Authoritative Information", description: "Verified data from medical professionals and researchers." },
    { icon: MessageSquare, title: "Advanced AI Integration", description: "Utilize our GPT-compatible API for conversational interfaces." },
    { icon: Zap, title: "Real-Time Streaming", description: "Stream data seamlessly into your systems." },
    { icon: Lock, title: "Secure and Reliable", description: "Robust security protocols to protect your data." },
  ]

  return (
    <section id="features" className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card shadow-sm">
            <feature.icon className="h-6 w-6 text-primary" />
            <div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function GetStartedSection() {
  return (
    <section id="get-started" className="bg-accent/20 py-8 sm:py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Get Started</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "1. Book a Call",
              description: "Discuss your needs and learn how Brogevity can enhance your projects.",
              action: (
                <Button asChild className="w-full">
                  <Link className="no-underline" href="/apicall">
                    Schedule a Call Now
                  </Link>
                </Button>
              ),
            },
            {
              title: "2. Explore Documentation",
              description: "Review our API endpoints and integration guidelines.",
              action: (
                <Button asChild className="w-full">
                  <Link className="no-underline" href="/docs">
                    View Documentation
                  </Link>
                </Button>
              ),
            },
            {
              title: "3. Integrate the API",
              description: "Start incorporating Brogevity's data and AI features into your applications.",
              action: (
                <Card className="bg-card p-4 rounded-lg">
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`curl -X GET "https://api.brogevity.com/v1/chat/completions" \\
     -H "Authorization: Bearer YOUR_API_KEY"`}</code>
                  </pre>
                </Card>
              ),
            },
          ].map((item, index) => (
            <Card key={index} className="flex flex-col justify-between p-4 sm:p-6 space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
              </div>
              <div className="mt-auto">{item.action}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <p className="text-xl text-muted-foreground text-center mb-8">Ready to elevate your health solutions with Brogevity?</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          <a href="mailto:contact@brogevity.com" className="text-muted-foreground hover:text-primary">contact@brogevity.com</a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-6 w-6 text-primary" />
          <span className="text-muted-foreground">+1 (XXX) XXX-XXXX</span>
        </div>
        <Button asChild>
          <Link href="/apicall">
            <Calendar className="h-4 w-4 mr-2" />
            Book a Call
          </Link>
        </Button>
      </div>
    </section>
  )
}



function SocialProof() {
  return (
    <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg shadow-md max-w-2xl">
      <div className='flex flex-row'>
        <div className="pl-2 flex -space-x-3 mr-4">
         {[...Array(10)].map((_, i) => (
              <Image
                key={i}
                src={`/paywall/people/${i + 1}.webp`}
                alt={`User ${i + 1}`}
                width={40}
                height={40}
                className="rounded-full border-2 border-primary"
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center pt-2 gap-1">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground pl-2">
          1000+ people use our API by reading daily content, and they like it for{' '} 
          <span className="font-semibold">factual, accurate citations</span>
        </p>
      </div>
    </div>
  );
}

const companyLogos = [
  { name: 'OpenCures', src: '/companies/2.png' },
  { name: 'San Francisco Standard', src: '/sf-standard.png' },
  { name: 'Blueprint Bryan Johnson', src: '/companies/1.png' },
  { name: 'BiohackerDAO', src: '/companies/3.png' },
  { name: 'YCombinator', src: '/companies/4.png' },
  { name: 'Longevity Biotech Fellowship', src: '/companies/5.png' },
]


export function EnhancedCompanies() {
  return (
    <div className="w-full bg-muted py-8 px-6 shadow-lg rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h3 className="text-2xl px-2 md:px-0 font-semibold text-primary">
            Made by Brogevity Newsletter, read by people from:
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