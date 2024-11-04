// components/SubscribeButtonWithDialog.tsx
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { sendIntroEmail } from '@/utils/emailService';

export function SubscribeButtonWithDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSendEmail = async () => {
    if (name && email) {
      const isSuccess = await sendIntroEmail(email, name);
      if (isSuccess) {
        alert('Intro email sent successfully!');
        setIsDialogOpen(false);
      } else {
        alert('Failed to send the email');
      }
    } else {
      alert('Please fill in both your name and email');
    }
  };

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Become a Smarter Life Optimizer</Button>
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
    </>
  );
}
