import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Ensure you have the environment variable set

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { contactId } = req.query;

    if (!contactId) {
      return res.status(400).json({ error: 'Contact ID is required' });
    }

    try {
      // Update the contact's subscribed status
      const response = await resend.contacts.update({
        id: contactId as string, // Ensure contactId is a string
        audienceId: '986f795d-7f9a-4f6c-8851-b8cac79d258c', // Replace with your audienceId
        unsubscribed: false, // Set unsubscribed to true
      });

      // Redirect user to a confirmation success page or show a message
      return res.status(200).json({ message: 'Subscription confirmed', response });
    } catch (error) {
      console.error('Error confirming subscription:', error);
      return res.status(500).json({ error: 'Failed to confirm subscription' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
