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
// Ensure to import any global styles if required
// import '../styles/globals.css'; (Adjust the path as necessary)

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      <Testimonials />

      {/* Paywall with onboarding and benefits */}
      {/*<EnhancedPaywallWithOnBoarding />*/}
       <ContentSection
        title="Stay Informed"
        highlightedText="Without the Effort"
        description="Brogevity AI summarizes up to 100 hours of expert content each week, so you receive a concise, 10-minute read delivered to your inbox"
        cardTitle="Just set your preferences, and AI will explore content for you"
        cardDescription="Every week our AI sends you a personalized email, so you can have more time to be healthy, productive, focused"
        imageSrc="/paywall/before-after.webp"
        imageAlt="AI-generated content preview"
        imageAspectRatio="video"
      />
      <DataBaseAcceess />
      <ContentSection
        title="Don't be alone"
        highlightedText="Meet the Community"
        description="We invite you to join our Free Reddit “Longevity Essentials” With 1000+ members, where you get community-proved tactics for the best version of your life. And for our premium members, we offer a Private Chat Group, where you find discussion about longevity topic that matters for you"
        cardTitle='Discover "hidden gems" that work best for you'
        imageSrc="/paywall/paywall-3.webp"
        imageAlt="Brogevity database preview"
        imageAspectRatio="video"
      />
      {/*<CommunitySection />*/}
      <MembershipBenefitsSection />

      <FAQ />

      <Footer />
      <StickyEmailCollection />

    </div>
  )
}
