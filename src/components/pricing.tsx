'use client'

import { useRouter } from 'next/navigation' // Import useRouter from next/navigation for Next.js App Router
import { Check, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PricingTable() {
  const router = useRouter(); // Initialize the router

  const plans = [
    {
      name: "Free Plan",
      price: 0,
      features: [
        "Standard Newsletter",
        "Limited Brogevity.com Database Access",
      ],
      complementary: false,
      excludedFeatures: [
        "No Personalized Newsletter",
        "No Private Chat Access",
        "No Advanced Search & Filters",
        "No Knowledge Hub Reports",
        "No Claim Tracking",
      ],
      url: "/pricing/free-plan", // Add a URL for redirect
    },
    {
      name: "Standard Plan (Monthly)",
      monthlyPrice: 6,
      features: [
        "Personalized Newsletter Every Week",
        "Access to Brogevity.com Database",
        "Database Advanced Search & Filters",
        "Database Save & Track Claims",
        "15+ reports in Notion Knowledge Hub",
      ],
      complementary: true,
      comingSoon: [
        "Preferences Dashboard",
        "Our Partners' Discounts",
        "Real-Time Alerts",
      ],
      url: "/pricing/standard-monthly", // Add a URL for redirect
    },
    {
      name: "Standard Plan (Annual)",
      annualPrice: 48,
      badge: "Most Popular",
      complementary: true,
      features: [
        "17% cheaper than subscribing monthly",
        "Personalized Newsletter Every Week",
        "Access to Brogevity.com Database",
        "Database Advanced Search & Filters",
        "Database Save & Track Claims",
        "15+ reports in Notion Knowledge Hub",
      ],
      comingSoon: [
        "Preferences Dashboard",
        "Our Partners' Discounts",
        "Real-Time Alerts",
      ],
      url: "/pricing/standard-annual", // Add a URL for redirect
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className='pb-4 text-center'>🔥 Enjoy November 2024 Early Launch Prices</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => router.push(plan.url)} // Redirect on click
              className={`cursor-pointer rounded-2xl p-6 flex flex-col relative ${
                plan.name.includes("Annual")
                  ? "bg-accent/50 border-2 border-primary shadow-lg z-10"
                  : "bg-card border border-border"
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Badge section */}
                <div className="h-8 mb-2">
                  {plan.badge && (
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/20 relative overflow-hidden">
                      <span className="relative z-10">{plan.badge}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent shine"></span>
                    </Badge>
                  )}
                </div>

                {/* Title section */}
                <h3 className="text-xl font-semibold h-12 mb-2">{plan.name}</h3>

                {/* Price section */}
                <div className="h-24 mb-2">
                  <div className="flex items-start">
                    <span className="text-2xl">$</span>
                    <span className="text-5xl font-bold">
                      {plan.price !== undefined
                        ? plan.price
                        : plan.annualPrice || plan.monthlyPrice}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.price !== undefined ? (
                      <div>one-time payment</div>
                    ) : plan.annualPrice ? (
                      <>
                        <div>per year</div>
                        <div>(${(plan.annualPrice / 12).toFixed(0)}/month)</div>
                      </>
                    ) : (
                      <div>per month</div>
                    )}
                  </div>
                </div>

                {/* Button section */}
                <div className="h-24">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-2"
                    size="lg"
                    onClick={(e) => e.stopPropagation()} // Prevent redirect on button click
                  >
                    {plan.price === 0 ? "Get Started" : "Subscribe"}
                    {plan.name.includes("Annual") && <Zap className="ml-2 h-4 w-4" />}
                  </Button>
                </div>

                {/* Features list */}
                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plan.excludedFeatures && plan.excludedFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="line-through text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.complementary && (
                <div className="mt-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Also Complementary:</h4>
                    <div className="space-y-2">
                      <Badge className="bg-green-500/80 text-foreground hover:bg-green/20">
                            Access to 70+ members chat
                      </Badge>
                    </div>
                  </div>)}

                {/* Coming Soon section */}
                {plan.comingSoon && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Coming Soon:</h4>
                    <div className="space-y-2">
                      {plan.comingSoon.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Badge className="bg-warning/20 text-warning hover:bg-warning/20">
                            Soon
                          </Badge>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-120%) scale(1);
            opacity: 0.3;
            box-shadow: 0 0 8px rgba(0, 0, 139, 0.4);
          }
          50% {
            transform: translateX(50%) scale(1.1);
            opacity: 0.7;
            box-shadow: 0 0 15px rgba(0, 0, 139, 0.6);
          }
          100% {
            transform: translateX(120%) scale(1);
            opacity: 0.3;
            box-shadow: 0 0 8px rgba(0, 0, 139, 0.4);
          }
        }
        .shine {
          animation: shine 3.5s infinite cubic-bezier(0.4, 0.0, 0.2, 1);
          background-image: linear-gradient(
            90deg,
            rgba(0, 0, 230, 0.3) 0%,
            rgba(0, 0, 230, 0.8) 50%,
            rgba(0, 0, 238, 0.9) 100%
          );
          opacity: 0.75;
        }
      `}</style>
    </div>
  )
}
