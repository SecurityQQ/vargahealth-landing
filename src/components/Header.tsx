// components/Header.tsx

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center no-underline">
          <span className="ml-2 text-xl font-bold text-foreground">
            Brogevity AI
          </span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="#features" className="text-foreground hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="text-foreground hover:text-primary">
            How It Works
          </Link>
          <Link href="#founders" className="text-foreground hover:text-primary">
            Founders
          </Link>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
            onClick={() =>
              document
                .getElementById('waitlist')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Join Waitlist
          </Button>
        </nav>
      </div>
    </header>
  )
}
