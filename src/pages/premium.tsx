// LandingPage.tsx

// Import React and necessary hooks if needed
import React from 'react'

// Import custom components
import {EnhancedPaywallWithOnBoarding} from '@/components/paywall'
import PricingTable from '@/components/pricing'
// Ensure to import any global styles if required
// import '../styles/globals.css'; (Adjust the path as necessary)

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
      <PricingTable />
    </div>
  )
}
