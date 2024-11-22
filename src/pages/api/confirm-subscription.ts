import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { PrismaClient } from '@prisma/client';

const resend = new Resend(process.env.RESEND_API_KEY); // Ensure you have the environment variable set
const prisma = new PrismaClient();
const audienceId = '986f795d-7f9a-4f6c-8851-b8cac79d258c';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { contactId } = req.query;

    if (!contactId) {
      return res.status(400).json({ error: 'Contact ID is required' });
    }

    try {
      // Fetch the contact details from Resend
      const contactData = await resend.contacts.get({
        id: contactId as string,
        audienceId: audienceId, // Replace with your audienceId
      });

      const contact = contactData.data

      console.log("handler", contactData, contactId, contact);

      if (!contact || !contact.email) {
        return res.status(404).json({ error: 'Contact not found or email missing' });
      }

      const email = contact.email;

      // Update the contact's subscribed status
      const response = await resend.contacts.update({
        id: contactId as string,
        audienceId: audienceId,
        unsubscribed: false, // Set unsubscribed to false
      });


      // Upsert the user in the database using Prisma
      const user = await prisma.user.upsert({
        where: { email },
        update: {
          emailVerified: new Date(),
        },
        create: {
          email,
          emailVerified: new Date(),
        },
      });

      // Respond with a success message
      return res.status(200).json({ message: 'Subscription confirmed and user updated', user, response });
    } catch (error) {
      console.error('Error confirming subscription:', error);
      return res.status(500).json({ error: 'Failed to confirm subscription' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
