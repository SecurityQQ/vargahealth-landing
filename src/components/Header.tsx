import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 no-underline">
          <span className="text-2xl font-bold bg-accent bg-clip-text text-transparent">
            Brogevity AI
          </span>
        </Link>

        {/* Nav links for desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Solution', 'How It Works', 'Founders'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Always visible button */}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
            onClick={() => {
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
              closeMenu(); // Close burger menu if open
            }}
          >
            Join Waitlist
          </Button>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav 
        className={`md:hidden absolute top-full left-0 w-full bg-background shadow-lg py-4 space-y-4 text-center transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {['Solution', 'How It Works', 'Founders'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="block text-foreground hover:text-primary py-2 transition-colors duration-200"
            onClick={closeMenu}
          >
            {item}
          </Link>
        ))}
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
          onClick={() => {
            document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close burger menu if open
          }}
        >
          Join Waitlist
        </Button>
      </nav>
    </header>
  )
}
