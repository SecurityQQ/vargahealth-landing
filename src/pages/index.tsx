// LandingPage.tsx

// Import React and necessary hooks if needed
import React from 'react'

// Import custom components
import Hero from '@/components/Hero'
import Testimonials from '@/components/testimonials'

import MembershipBenefitsSection from '@/components/membership-benefits-section'
import ContentSection from '@/components/content-section'
import FAQ from "@/components/faq"
import Footer from "@/components/new-footer"
import StickyEmailCollection from '@/components/sticky-email-collection'
import DataBaseAcceess from "@/components/database-access-section"
import { EnhancedCompanies } from '@/components/paywall'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// Ensure to import any global styles if required
// import '../styles/globals.css'; (Adjust the path as necessary)

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">

        <div className="text-2xl font-bold text-primary">Brogevity.com</div>
        <nav>
           <Button variant="ghost" asChild>
          <Link className="no-underline relative flex items-center" href="/getapi">
            API
            <span className="ml-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
          </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link className='no-underline' href="https://alpha.brogevity.com">Database</Link>
          </Button>
          {/*<Button variant="ghost" asChild>
            <Link  className='no-underline' href="#get-started">Get Started</Link>
          </Button>*/}

        </nav>
      </header>
      {/* Hero Section */}
      <Hero />

      <Testimonials />


      {/* Paywall with onboarding and benefits */}
      {/*<EnhancedPaywallWithOnBoarding />*/}
       <ContentSection
        title="Stay Informed"
        highlightedText="Without the Effort"
        description="Brogevity AI turns 100+ hours of expert content into a 10-minute weekly summary, delivered to your inbox"
        cardTitle=""
        cardDescription=""
        imageSrc="/paywall/before-after.webp"
        imageAlt="AI-generated content preview"
        mobileImageSrc="/paywall/before-after-mobile.webp"
        imageAspectRatio="video"
      />
      <DataBaseAcceess />
      <ContentSection
        title="Don't be alone"
        highlightedText="Meet the Community"
        description='Join our free Reddit group, "Longevity Essentials," with 1,000+ members, and our premium-chat on Telegram'
        cardTitle='Discover "hidden gems" that work best for you'
        imageSrc="/paywall/paywall-3.webp"
        imageAlt="Brogevity database preview"
        mobileImageSrc='/paywall/community-mobile.webp'
        imageAspectRatio="video"
      />
      <EnhancedCompanies />
      {/*<CommunitySection />*/}
      {/*<MembershipBenefitsSection />*/}


      <FAQ />

      <Footer />
      <StickyEmailCollection />

    </div>
  )
}
