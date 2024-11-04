import Image from 'next/image'
import { motion } from "framer-motion"

interface ContentSectionProps {
  title: string
  highlightedText: string
  description: string
  cardTitle: string
  cardDescription?: string
  imageSrc: string
  imageAlt: string
  imageAspectRatio?: "video" | "2:1"
}

export default function ContentSection({
  title,
  highlightedText,
  description,
  cardTitle,
  cardDescription,
  imageSrc,
  imageAlt,
  imageAspectRatio = "video"
}: ContentSectionProps) {
  return (
    <section className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title} <span className="text-primary">{highlightedText}</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 md:px-6"
      >
        <div className="bg-card text-card-foreground rounded-lg overflow-hidden">
          {cardDescription ? (
            <div className="p-6">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
                {cardTitle}
              </h3>
              <p className="text-lg text-muted-foreground text-center mb-2">
                {cardDescription}
              </p>
            </div>
          ) : null}
          <div className={`relative w-full ${imageAspectRatio === "video" ? "aspect-video" : "aspect-[2/1]"}`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}