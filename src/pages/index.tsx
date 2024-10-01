// pages/index.tsx

import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  CheckCircle,
  Brain,
  Shield,
  Zap,
  BarChart,
  ListChecks,
  AlertTriangle,
} from 'lucide-react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureCard from '@/components/FeatureCard'
import FounderCard from '@/components/FounderCard'
import { Resend } from 'resend';



export default function BrogevityLanding() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalContacts, setTotalContacts] = useState(0); // State to store total waitlist contacts
  const [isWaitlistFull, setIsWaitlistFull] = useState(false); // State to check if waitlist is full

  

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch('/api/waitlist', { method: 'GET' });
        const data = await response.json();
        setTotalContacts(data.totalContacts);
        setIsWaitlistFull(data.totalContacts >= 100); // Check if waitlist is full
      } catch (error) {
        console.error('Failed to fetch total contacts:', error);
      }
    };

    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      console.error('Failed to join waitlist:', data.error);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};


  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Head>
        <title>Brogevity AI - Unlock Personalized Longevity Insights</title>
        <meta
          name="description"
          content="Brogevity AI uses cutting-edge AI to provide personalized, actionable longevity strategies. Join our waitlist today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add Open Graph and Twitter meta tags */}
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Urgency Message */}
        <div className="bg-accent text-accent-foreground py-2 text-center">
          <p>
            <AlertTriangle className="inline-block mr-2" />
            {isWaitlistFull
              ? 'Uh oh... The first 100 spots are taken, but you can still apply and be put on a waitlist.'
              : `Hurry! Only 100 spots available! ${totalContacts}/100 spots are taken. Apply immediately!`}
          </p>
        </div>

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
        >
          <div className="bg-background bg-opacity-60">
            <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-5xl font-bold mb-4">
                Transform Podcasts Into Actions
                <br />
                <span className="text-primary">In Minutes, Not Years.</span>
              </h1>
              <p className="text-xl mb-8">
                Dynamic AI Interface that cuts through the noise for <strong>trustworthy & personalized longevity actions</strong>
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground"
                onClick={() =>
                  document
                    .getElementById('waitlist')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Join the Waitlist Now
              </Button>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Just Listening To Longevity Podcasts is Overwhelming Because...
            </h2>
            <ul className="list-disc space-y-4 text-lg max-w-2xl mx-auto">
              <li>
                <strong>{`Generic Advice Overload:`}</strong> {`Endless generic tips
                that don't address your unique needs`}
              </li>
              <li>
                <strong>{`Conflicting Information:`}</strong> {`Contradictory
                recommendations leave you confused and stuck`}
              </li>
              <li>
                <strong>{`Mistrust in Sources:`}</strong> {`Paid promotions make it
                hard to know what's genuinely beneficial`}
              </li>
              <li>
                <strong>{`High Costs Barrier:`}</strong> {`Longevity solutions often
                seem unaffordable and out of reach`}
              </li>
              <li>
                <strong>{`Lack of Tracking Tools:`}</strong> {`Without reliable
                metrics, it's hard to monitor progress and stay motivated`}
              </li>
            </ul>
          </div>
        </section>

        {/* Solution Introduction */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {`And That's Why We're Bringing a Solution for You!`}
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              {`No more sifting through countless articles and podcasts`}
              <br />
              {`No more confusion from conflicting advice`}
              <br />
              {`No more expensive consultations or inaccessible solutions`}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background" id='how-it-works'>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {"We're Building the Super Intelligence for Personalized Longevity!"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Brain className="h-8 w-8 text-primary" />}
                title="AI-Powered Intelligence"
                description="Delivers customized guidance tailored specifically to your needs, cutting through generic advice"
              />
              <FeatureCard
                icon={<Shield className="h-8 w-8 text-primary" />}
                title="Information Verification"
                description="Cross-references data from multiple trusted sources to eliminate conflicting advice and build your trust"
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Accessible Solutions"
                description="Recommends affordable alternatives, making longevity strategies accessible to everyone"
              />
              <FeatureCard
                icon={<BarChart className="h-8 w-8 text-primary" />}
                title="Integrated Tracking"
                description="Offers reliable metrics and tools so you can easily monitor your progress and stay motivated"
              />
              <FeatureCard
                icon={<ListChecks className="h-8 w-8 text-primary" />}
                title="Actionable Insights"
                description="Transforms complex health data into practical, personalized action plans you can implement immediately"
              />
            </div>
          </div>
        </section>

        {/* Founder Trust Section */}
        <section className="py-16 bg-background" id='founders'>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              {"Why You Should Trust Brogevity AI"}
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              {`We're not just another platform; we're a team committed to
              transforming the way you approach longevity`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FounderCard
                imageSrc="/alex.jpg"
                name="Alex: Founder, CEO & CTO"
                bio={[
                  'TechStars, Google, Facebook, and 15+ Math & Hackathon awards winner',
                  'Fellow at Longevity Biotech Fellowship and Resident at Vitalia, Honduras',
                  'Increased Yandex revenue by $12M with AI-driven ad systems',
                  'Bootstrapped a $500,000 ARR Healthy Meal Plan Business',
                ]}
                twitter={"https://x.com/vargastartup"}
              />
              <FounderCard
                imageSrc="/anna.png"
                name="Anna: Co-Founder, CPO & CMO"
                bio={[
                  'Former CPO at Berkeley SkyDeck startup',
                  'Previously founded a language learning app',
                  'Product Manager at Lensa, an app with over 2M Daily Active Users',
                ]}
                twitter={"https://x.com/burninganna"}
              />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 bg-muted" id='waitlist'>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {`The Platform Will Soon Be Available... Be One of Our First Users!`}
            </h2>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={() =>
                document
                  .getElementById('waitlist')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Join the Waitlist Now
            </Button>
            <p className="mt-4 text-sm">
              {`We won't spam you, and the only emails you'll receive will be
              directly related to the platform.`}
            </p>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-card shadow-md rounded px-8 py-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      <div className="mb-2">
                        <h3>Join the Waitlist Now</h3>
                        <p className="text-sm text-muted-foreground">
                        {isWaitlistFull
                          ? `Uh oh... The first 100 spots are taken, but you can still apply and be put on a waitlist.`
                          : `Hurry! Only 100 spots available! ${totalContacts}/100 spots are taken. Apply immediately!`}
                        </p>
                      </div>
                      {!isWaitlistFull && (
                        <>
                          <Input
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="mb-4"
                          />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mb-4"
                          />
                          <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                          >
                            Join Waitlist
                          </Button>
                        </>
                      )}
                    </div>
                  </form>
                ) : (
                  <div className="text-center text-success">
                    <CheckCircle className="mx-auto mb-4" size={48} />
                    <p className="text-xl">Thank you for joining our waitlist!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
