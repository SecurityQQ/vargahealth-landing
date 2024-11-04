import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Ensure you have the environment variable set

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: 'Email and name are required' });
    }

    try {
      // Add the user to the audience with `subscribed: false`
      const response = await resend.contacts.create({
        audienceId: '986f795d-7f9a-4f6c-8851-b8cac79d258c', // Replace with your actual audienceId
        email,
        firstName: name,
        unsubscribed: true,
      });

      return res.status(200).json({ message: 'User added to audience', response });
    } catch (error) {
      console.error('Error adding to audience:', error);
      return res.status(500).json({ error: 'Failed to add user to audience' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
