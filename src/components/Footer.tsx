// components/Footer.tsx

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Brogevity AI. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/privacy" className="hover:text-primary mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-primary mx-2">
            Terms of Service
          </Link>
          {/*<Link href="https://x.com/vargastartup" className="hover:text-primary mx-2">
            Contact Us
          </Link>*/}
          {/*<Link href="/terms">Terms of Use</Link> |{' '}
          <Link href="/privacy">Privacy Policy</Link>*/}
        </div>
      </div>
    </footer>
  )
}
