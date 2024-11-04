// LandingPage.tsx

// Import React and necessary hooks if needed
import React from 'react'

// Import custom components
import {EnhancedCompanies, EnhancedPaywallWithOnBoarding} from '@/components/paywall'
import PricingTable from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import FAQComponent from '@/components/faq';
// Ensure to import any global styles if required
// import '../styles/globals.css'; (Adjust the path as necessary)

const faqs = [
  {
    question: "Is Brogevity AI Free? What Are the Subscription Plans?",
    answer: "Brogevity AI offers three subscription plans: Free, Standard Monthly, and Standard Annual.\n\n- **Free Plan**: Includes a standard weekly newsletter and basic access to the Brogevity.com database.\n- **Standard Monthly and Annual Plans**: Provide access to a personalized weekly newsletter tailored to your preferences and enhanced features of the Brogevity.com database, such as advanced filters, search capabilities, and the ability to save and track claims.\n- **Additional Benefits for Premium Members**: Standard plan subscribers also receive a link to join an exclusive private chat. In this chat, we share valuable content, including in-depth reports from our Notion Knowledge Hub, and facilitate discussions about the latest in longevity and life optimization."
  },
  {
    question: "Who are Premium Members?",
    answer: "These are people who purchased **Standard Monthly or Standard Annual plans**."
  },
  {
    question: "When do I receive my first newsletter?",
    answer: "We usually send the newsletter at the beginning of the week."
  },
  {
    question: "Will I have immediate access to the Brogevity AI Database after payment?",
    answer: "Yes, access is granted immediately."
  },
  {
    question: "Why can I not downgrade?",
    answer: "Downgrading is currently not supported due to subscription management limitations. You may need to cancel and resubscribe to a lower plan."
  },
  {
    question: "Is the payment service secure?",
    answer: "Yes, we use Stripe, which holds transactions with industry-standard encryption. We do not store any information about your card. Stripe ensures bank-level security standards."
  },
  {
    question: "Can I get a receipt or invoice?",
    answer: "Yes, receipts or invoices are automatically sent to your registered email upon payment. If you did not receive your receipt, please contact us, and we will send you a copy."
  },
  {
    question: "What methods of payment do you accept?",
    answer: "We accept major credit and debit cards like MasterCard, VISA, American Express, as well as iDeal, SOFORT, Bancontact, Przelewy24, Giropay, EPS, GrabPay, AliPay, and many more."
  },
  {
    question: "Can I upgrade or downgrade my subscription?",
    answer: "Upgrades are available at any time. Downgrades may require cancellation and re-subscribing to a different plan."
  },
  {
    question: "Can I delete my data?",
    answer: "Yes, you can request data deletion at any time by contacting our support team."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time through your account settings. You can also easily unsubscribe using the 'Unsubscribe' button found in any email."
  },
  {
    question: "Can I get a refund?",
    answer: "Refunds may be available under specific conditions. Please refer to our refund policy or contact support for assistance."
  },
  {
    question: "Do you have a community chat?",
    answer: "Yes, we offer a community chat on Telegram, which is available to premium subscribers."
  }
];


export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <PricingTable />
      <Testimonials />
      <FAQComponent faqs={faqs} />;
      <EnhancedCompanies />
    </div>
  )
}
