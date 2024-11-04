import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function MembershipBenefitsSection() {
  const benefits = [
    "Knowledge Hub Reports: Access over 15 in-depth reports in our Notion-based knowledge hub",
    "Learn how to get started with new longevity routine from other people who been through the process",
    "Claim Tracking: Bookmark and track claims of interest across various topics like Sleep, Exercise, Longevity Research, and more",
    "Special Offers: Enjoy members-only discounts and early access to new products",
    "Community Reviews and Data: Learn from the experiences of like-minded individuals"
  ]

  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="p-8 space-y-6">
        <h3 className="text-3xl font-bold text-center">{"What is Also Included in the Membership?"}</h3>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 flex-shrink-0 mr-2" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        {/*<div className="text-center mt-8">
          <Button size="lg" variant="secondary">Join Brogevity Premium</Button>
        </div>*/}
      </CardContent>
    </Card>
  )
}