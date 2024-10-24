// File: /pages/api/unsubscribe.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Ensure you have the environment variable set

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { contactId } = req.body;

    if (!contactId) {
      return res.status(400).json({ error: 'Contact ID is required' });
    }

    try {


      // Update the contact's unsubscribed status
      const response = await resend.contacts.update({
        id: contactId, // Use contact ID passed in the request body
        audienceId: '986f795d-7f9a-4f6c-8851-b8cac79d258c', // Replace with your audienceId
        unsubscribed: true, // Set unsubscribed to true
      });

      return res.status(200).json({ message: 'Successfully unsubscribed', response });
    } catch (error) {
      console.error('Error unsubscribing contact:', error);
      return res.status(500).json({ error: 'Failed to unsubscribe contact' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
