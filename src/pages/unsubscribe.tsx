// File: /pages/unsubscribe.tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Unsubscribe = () => {
  const router = useRouter();
  const [contactId, setContactId] = useState('');
  const [message, setMessage] = useState('');

  // Extract contactId from the query parameters
  useEffect(() => {
    if (router.query.id) {
      setContactId(router.query.id as string);
    }
  }, [router.query]);

  const handleUnsubscribe = async () => {
    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contactId }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Successfully unsubscribed`);
      } else {
        const errorData = await response.json();
        setMessage('Error unsubscribing. Please contact us at hello@brogevity.com');
        console.error(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setMessage('Error unsubscribing. Please contact us at hello@brogevity.com');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Unsubscribe</h1>
      <p>Click the button to unsubscribe from our mailing list.</p>
      <button onClick={handleUnsubscribe} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Unsubscribe
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Unsubscribe;
