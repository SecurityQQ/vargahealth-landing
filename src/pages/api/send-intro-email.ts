import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';
import { env } from '@/env.mjs';
const resend = new Resend(process.env.RESEND_API_KEY); // Ensure your API key is set

interface ContactResponse {
  data: {
    object: string;
    id: string;
  };
  error: any; // Adjust this type based on what the `error` field can contain
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name } = req.body;

    if (!email || !name ) {
      return res.status(400).json({ error: 'Email, name, and contact ID are required' });
    }

    let contactId = "";

    try {
      // Call Resend API to create the contact
      const response = (await resend.contacts.create({
          email,
          firstName: name,
          unsubscribed: true,
          audienceId: '986f795d-7f9a-4f6c-8851-b8cac79d258c',
      })) as unknown as ContactResponse;


      contactId = response.data.id;

      console.log("contactID: ", contactId, response)

    } catch (error) {
      console.error('Error saving contact to Resend:', error);
      return res.status(500).json({ error: 'Failed to save contact to Resend' });
    }

    try {
      // Read the intro.html template
      const templatePath = path.join(process.cwd(), 'src', 'email_templates', 'intro.html');
      let htmlContent = fs.readFileSync(templatePath, 'utf8');

      // Replace the placeholder in the template with the actual confirmation URL
      const confirmUrl = `${env.NEXT_PUBLIC_APP_URL}/premium?contactId=${contactId}`;

      
      htmlContent = htmlContent.replace('$confirm_url', confirmUrl);

      // Send the email using Resend
      await resend.emails.send({
          to: email,
          subject: `Welcome to Longevity Essentials, ${name}! Confirm Your Subscription`,
          html: htmlContent,
          from: "Alex <hello@brogevity.com>"
      });

      return res.status(200).json({ message: 'Intro email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send the email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
