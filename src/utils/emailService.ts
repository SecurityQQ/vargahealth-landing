// utils/emailService.ts
export async function sendIntroEmail(email: string, name: string): Promise<boolean> {
  try {
    const response = await fetch('/api/send-intro-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name }),
    });
    return response.ok;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
