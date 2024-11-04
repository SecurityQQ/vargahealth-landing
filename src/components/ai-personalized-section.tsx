import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Stay Informed <span className="text-accent">Without the Effort</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Brogevity AI summarizes up to 100 hours of expert content each week, so <span className="font-bold">you</span> receive a concise, 10-minute read delivered to your inbox
        </p>
      </div>
      <Card className="mt-12">
        <CardContent className="p-6 space-y-6">
          <header className="space-y-2 text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Just set your preferences, and AI will explore content for you
            </h3>
            <p className="text-lg text-muted-foreground">
              Every week our AI sends you a personalized email, so you can have more time to be healthy, productive, focused
            </p>
          </header>
          <div className="relative w-full aspect-video">
            <Image
              src="/beforeafter.png" 
              alt="AI-generated content preview"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}