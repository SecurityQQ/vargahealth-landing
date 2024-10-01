// pages/api/waitlist.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Use the environment variable here

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
      return res.status(400).json({ error: 'Email and first name are required' });
    }

    try {
      // Call Resend API to create the contact
      const response = await resend.contacts.create({
        email,
        firstName,
        unsubscribed: false,
        audienceId: '986f795d-7f9a-4f6c-8851-b8cac79d258c', // Replace with your real audienceId
      });

      return res.status(200).json({ message: 'Contact saved successfully', response });
    } catch (error) {
      console.error('Error saving contact to Resend:', error);
      return res.status(500).json({ error: 'Failed to save contact to Resend' });
    }
  } else if (req.method === 'GET') {
    try {
      // Fetch the list of contacts from Resend
      const contactsList = await resend.contacts.list({
        audienceId: '986f795d-7f9a-4f6c-8851-b8cac79d258c', // Replace with your real audienceId
      });

      // Count the total number of contacts
      const totalContacts = contactsList?.data?.data?.length || 100;

      return res.status(200).json({ totalContacts });
    } catch (error) {
      console.error('Error fetching contact list from Resend:', error);
      return res.status(500).json({ error: 'Failed to retrieve contacts' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
