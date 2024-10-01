import Image from 'next/image'
import { FaSquareXTwitter } from 'react-icons/fa6' // Import X (Twitter) icon

interface FounderCardProps {
  imageSrc: string
  name: string
  bio: string[]
  twitter: string // Twitter handle or URL
}

export default function FounderCard({ imageSrc, name, bio, twitter }: FounderCardProps) {
  return (
    <div className="bg-card shadow-md rounded-lg p-6 text-center">
      <Image
        src={imageSrc}
        alt={name}
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
      <ul className="text-left list-disc pl-5 space-y-2 text-foreground">
        {bio.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* X (Twitter) Icon */}
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground mt-4 inline-flex items-center"
        >
          <FaSquareXTwitter className="mr-2" /> Follow on X
        </a>
      )}
    </div>
  )
}
