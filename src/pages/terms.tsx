// /app/terms-of-use/page.tsx
import Link from 'next/link';
import React from 'react';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 prose" style={{ maxWidth: '100%' }}>
      <h1>{"Terms of Use"}</h1>
      <p><em>{"Last updated: November 5, 2024"}</em></p>

      <h2>{"Introduction"}</h2>
      <p>
        {"These Terms of Use (\"Terms\") govern your access to and use of the Brogevity AI service (\"Service\"), a product of VP Solutions Inc. (\"Brogevity,\" \"we,\" \"us,\" or \"our\"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service."}
      </p>

      <h2>{"Subscription Plans and Access"}</h2>
      <p>
        {"Brogevity AI offers three subscription plans: Free, Standard Monthly, and Standard Annual."}
      </p>
      <ul>
        <li>{"Free Plan: Provides a standard weekly newsletter and basic access to the Brogevity.com database."}</li>
        <li>{"Standard Monthly and Annual Plans: Include a personalized weekly newsletter tailored to user preferences and enhanced access to Brogevity.com, offering advanced filters, search capabilities, and features to save and track claims."}</li>
        <li>{"Additional Benefits for Premium Members: Subscribers to the Standard plans receive access to an exclusive private chat, which includes in-depth reports from the Notion Knowledge Hub and discussions on longevity and life optimization."}</li>
      </ul>
      <p>
        {"Access to the Brogevity.com database is provided at no cost; however, certain features and functionalities are available only with a subscription to the Standard Monthly or Annual plans."}
      </p>

      <h2>{"Payment, Refunds, and Billing"}</h2>
      <p>
        {"Payments for the Service are processed through Stripe, and Brogevity does not store any bank information. By making a payment, you agree to pay the fees indicated for the selected subscription plan. The payment grants you access for the duration specified in your subscription plan."}
      </p>
      <p>
        {"If you are a premium member, and you want to unsubscribe, please use this"} <Link href='https://billing.stripe.com/p/login/7sI03t3cxcuAdKU7ss'>link</Link>
      </p>
      <p>
        {"Refunds are available within the first 30 days of purchase and are prorated based on the number of days the Service was used. Refunds will be processed back to the original payment method used at the time of purchase. Please allow up to 7-10 business days for the refund to reflect in your account. After the initial 30-day period, purchases are non-refundable."}
      </p>
      <p>
        {"Receipts or invoices will be automatically sent to your registered email upon payment. If a receipt or invoice is not received, please contact our support team to request a copy."}
      </p>

      <h2>{"Privacy"}</h2>
      <p>
        {"Your privacy is important to us. Please review our "}
        <Link href="/privacy">{"Privacy Policy"}</Link>
        {", which explains how we collect, use, and protect your personal information. By using the Service, you agree to the collection and use of your information in accordance with our Privacy Policy."}
      </p>

      <h2>{"User Conduct"}</h2>
      <p>
        {"Users are expected to conduct themselves in a lawful, respectful, and responsible manner while using the Service. Prohibited activities include, but are not limited to:"}
      </p>
      <ul>
        <li>{"Harassment, abuse, or causing harm to other users."}</li>
        <li>{"Posting or distributing content that is defamatory, obscene, or objectionable."}</li>
        <li>{"Impersonating any person or entity."}</li>
        <li>{"Engaging in activities that disrupt or interfere with the Service's performance."}</li>
      </ul>
      <p>
        {"Any violation of these terms may result in account suspension or termination, and users will be held responsible for any consequences arising from such misuse."}
      </p>

      <h2>{"User-Generated Content"}</h2>
      <p>
        {"The Service may allow users to submit, post, publish, or transmit content (\"User Content\"). Users retain ownership of any intellectual property rights associated with their User Content. However, by submitting User Content, users grant Brogevity a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to use, reproduce, modify, distribute, and display the User Content in connection with the Service."}
      </p>
      <p>
        {"Users represent and warrant that they hold all necessary rights to grant this license and that their User Content does not violate any laws or third-party rights."}
      </p>

      <h2>{"Content Disclaimer"}</h2>
      <p>
        <strong>{"Content on Brogevity.com is generated automatically and is intended for educational purposes only. This content may include errors, inaccuracies, or omissions and should not be used as a substitute for professional advice, including medical, health, or legal guidance. Users are advised to consult qualified professionals before implementing any new routines or practices, as such changes may present hidden risks. Reliance on any content provided by the Service is at the user’s own risk."}</strong>
      </p>

      <h2>{"Indemnification"}</h2>
      <p>
        {"Users agree to indemnify, defend, and hold harmless Brogevity, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from their use of the Service, violation of these Terms, or infringement of any third-party rights."}
      </p>

      <h2>{"Limitation of Liability"}</h2>
      <p>
        {"To the maximum extent permitted by applicable law, Brogevity shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from the use of or inability to use the Service, even if Brogevity has been advised of the possibility of such damages. Brogevity's total liability for any claims related to the use of the Service shall not exceed the amount paid by the user for the Service."}
      </p>

      <h2>{"Modifications and Termination"}</h2>
      <p>
        {"Brogevity reserves the right to modify, suspend, or terminate the Service or user access to the Service at its discretion and without notice. Users may also terminate their accounts at any time. Termination may result in the loss of access to the Service and deletion of user data."}
      </p>

      <h2>{"Governing Law and Dispute Resolution"}</h2>
      <p>
        {"These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the Georgian International Arbitration Centre (GIAC). The arbitration shall take place in Tbilisi, Georgia, in English. Dispute resolution proceedings will be conducted on an individual basis and not as part of a class or collective action."}
      </p>

      <h2>{"Severability"}</h2>
      <p>
        {"If any provision of these Terms is found to be invalid or unenforceable by a court, the remaining provisions shall remain in full force and effect. These Terms represent the entire agreement between the user and Brogevity and supersede any prior agreements."}
      </p>

      <h2>{"Contact Information"}</h2>
      <p>
        {"For any questions regarding these Terms, please contact:"}
      </p>
      <p>
        {"VP Solutions Inc."}<br />
        {"Address: 300 Delaware Ave Ste 210 #700 Wilmington, DE 19801"}<br />
        {"Email: hello@brogevity.com"}
      </p>
    </div>
  );
};

export default TermsOfUsePage;
