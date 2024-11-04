'use client'

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { sendIntroEmail } from '@/utils/emailService';

export default function StickyEmailCollection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      const heroHeight = heroSection?.offsetHeight || 800; // fallback height
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribeClick = () => {
    if (email) {
      setIsDialogOpen(true);
    } else {
      alert('Please enter your email');
    }
  };

  const handleSendEmail = async () => {
    if (name && email) {
      const isSuccess = await sendIntroEmail(email, name);
      if (isSuccess) {
        alert('Check Your Email and Confirm Subscription!');
        setIsDialogOpen(false);
      } else {
        alert('Failed to send the email');
      }
    } else {
      alert('Please fill in both your name and email');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm border-t border-accent/20 transform transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <Input
          type="email"
          placeholder="Type your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-6 py-3 rounded-full bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-accent"
        />
        <Button 
          className="w-full sm:w-auto px-6 py-6 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          onClick={handleSubscribeClick}
        >
          Become a Smarter Life Optimizer
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
            <DialogDescription>
              Please provide your name and email to complete the subscription process.
            </DialogDescription>
          </DialogHeader>
          <Input
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4"
          />
          <Input
            type="email"
            placeholder="Your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <DialogFooter>
            <Button onClick={handleSendEmail}>Confirm and Subscribe</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
