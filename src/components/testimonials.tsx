import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Component() {
  const testimonials = [
    {
      rating: 5,
      text: "Just join a membership with Brogevity! Shout out to @annzrva for building this community 🙌 Love the tailored content sent my way!",
      author: "Francesca",
      type: "Member",
      verified: true
    },
    {
      rating: 5,
      text: "Guys, got a demo today. Directly paid, this tool is a no-brainer for me, wanted this for years",
      author: "Vincenzo",
      type: "Member",
      verified: true
    },
    {
      rating: 5,
      text: "The newsletter is working really well for me because it naturally fits into my existing email habits",
      author: "Vishal",
      type: "Member",
      verified: true
    }
  ]

  return (
    <div className="px-4 py-12 md:px-6 lg:px-8 bg-accent rounded-lg">
      <div className="mx-auto max-w-6xl space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-accent-foreground">What Our Premium Members Say</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="bg-card rounded-lg">
                <CardContent className="p-6 text-foreground">
                  <div className="space-y-4">
                    <div className="pl-2 flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-600" />
                      ))}
                    </div>
                    <blockquote className="space-y-2">
                      <p className="text-lg leading-relaxed">{"\""}{testimonial.text}{"\""}</p>
                    </blockquote>
                    <footer className="flex items-center justify-between text-sm">
                        <span className="font-medium">{testimonial.author}</span>
                        {testimonial.verified && (
                          <span className="text-xs text-gray-400">VERIFIED {testimonial.type.toUpperCase()}</span>
                        )}
                      </footer>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}