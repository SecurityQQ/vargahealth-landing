// /app/terms-of-use/page.tsx
import Link from 'next/link';
import React from 'react';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 prose" style={{ maxWidth: '100%' }}>
      <h1>{"Terms of Use"}</h1>
      <p><em>{"Last updated: October 15, 2024"}</em></p>

      <h2>{"Introduction"}</h2>
      <p>
        {"These Terms of Use (\"Terms\") govern your access to and use of the Brogevity service (\"Service\"), a product of IE Aleksandr Malyshev (\"Brogevity,\" \"we,\" \"us,\" or \"our\"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service."}
      </p>

      <h2>{"Eligibility"}</h2>
      <p>
        {"To access and use the Service, you must be at least 13 years old or the minimum age required in your country, have a valid account, and be located in a country where the Service is available. By using the Service, you represent and warrant that you meet these eligibility requirements."}
      </p>

      <h2>{"Privacy"}</h2>
      <p>
        {"Your privacy is important to us. Please review our "} 
        <Link href="/privacy">{"Privacy Policy"}</Link>
        {", which explains how we collect, use, and protect your personal information. By using the Service, you agree to the collection and use of your information in accordance with our Privacy Policy."}
      </p>

      <h2>{"User Conduct"}</h2>
      <p>
        {"You agree not to use the Service for any illegal activities, infringe on the rights of others, or distribute harmful or offensive content. Misuse of the Service may result in account suspension or termination, and you are responsible for any consequences arising from your actions while using the Service."}
      </p>

      <ul>
        <li>{"Harassment, abuse, or harm to other users."}</li>
        <li>{"Posting or sharing content that is defamatory, obscene, or otherwise objectionable."}</li>
        <li>{"Impersonating any person or entity."}</li>
        <li>{"Engaging in any activity that disrupts or interferes with the performance of the Service."}</li>
      </ul>

      <p>
        {"Misuse of the Service may result in account suspension or termination, and you are responsible for any consequences arising from your actions while using the Service."}
      </p>

      <h2>{"User-Generated Content"}</h2>
      <p>
        {"The Service may allow you to post, submit, publish, display, or transmit content to other users or persons (\"User Content\"). You retain ownership of any intellectual property rights that you hold in the User Content."}
      </p>
      <p>
        {"By providing any User Content on the Service, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to use, reproduce, modify, distribute, and display the User Content in connection with the Service."}
      </p>
      <p>
        {"        least 13 years old or the minimum age required in your country, have a valid account, and be located in a country where the Service is available. By using the Service, you represent and warrant that you meet these eligibility requirements."}
      </p>

      <h2>{"Privacy"}</h2>
      <p>
        {"Your privacy is important to us. Please review our "} 
        <Link href="/privacy">{"Privacy Policy"}</Link>
        {", which explains how we collect, use, and protect your personal information. By using the Service, you agree to the collection and use of your information in accordance with our Privacy Policy."}
      </p>

      <h2>{"User Conduct"}</h2>
      <p>
        {"You agree not to use the Service for any illegal activities, infringe on the rights of others, or distribute harmful or offensive content. Misuse of the Service may result in account suspension or termination, and you are responsible for any consequences arising from your actions while using the Service."}
      </p>

      <ul>
        <li>{"Harassment, abuse, or harm to other users."}</li>
        <li>{"Posting or sharing content that is defamatory, obscene, or otherwise objectionable."}</li>
        <li>{"Impersonating any person or entity."}</li>
        <li>{"Engaging in any activity that disrupts or interferes with the performance of the Service."}</li>
      </ul>

      <p>
        {"Misuse of the Service may result in account suspension or termination, and you are responsible for any consequences arising from your actions while using the Service."}
      </p>

      <h2>{"User-Generated Content"}</h2>
      <p>
        {"The Service may allow you to post, submit, publish, display, or transmit content to other users or persons (\"User Content\"). You retain ownership of any intellectual property rights that you hold in the User Content."}
      </p>
      <p>
        {"By providing any User Content on the Service, you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicensable, and transferable license to use, reproduce, modify, distribute, and display the User Content in connection with the Service."}
      </p>
      <p>
        {"You represent and warrant that you have all rights necessary to grant us this license and that your User Content does not violate any laws or infringe any third-party rights."}
      </p>

      <h2>{"Transformation of Open Information"}</h2>
      <p>
        {"Our website takes openly available information, such as videos, and transforms it into cards with claims using AI tools. "} 
        <strong>{"The content is automatically generated and may contain errors or inaccuracies."}</strong>
      </p>

      <h2>{"Content Disclaimer"}</h2>
      <p>
        <strong>{"The content provided on the Service is generated by AI tools and is for informational purposes only. It may contain errors, inaccuracies, or omissions. The content is not intended to be a substitute for professional advice, including but not limited to medical, health, or legal advice. Reliance on any information provided by the Service is solely at your own risk. Always seek the advice of qualified professionals regarding any questions or concerns you may have."}</strong>
      </p>

      <h2>{"Intellectual Property Rights"}</h2>
      <p>
        {"Brogevity respects the intellectual property rights of others and expects users to do the same. The Service aggregates podcasts from YouTube videos using AI tools and converts openly available information into cards with claims. You must ensure that you have the necessary rights to use any input content. Brogevity is not responsible for any copyright or trademark infringements resulting from your use of the Service. Brogevity disclaims any warranties of merchantability, fitness for a particular purpose, and non-infringement."}
      </p>

      <h2>{"Disclaimer of Warranties"}</h2>
      <p>
        {"Brogevity provides the Service \"as is\" and does not guarantee the accuracy, reliability, or completeness of the AI-generated content. Our AI tools might make mistakes, and the content is not financial, medical, or other legally obligated advice. Users should not rely solely on the content for making decisions and should consult appropriate professionals. Brogevity disclaims any warranties, express or implied."}
      </p>

      <h2>{"Payment and Refund Policy"}</h2>
      <p>
        {"Brogevity offers access to our website and services for a one-time payment. By making this payment, you agree to pay the fees indicated for the Service. The payment is billed once and grants you lifetime access to the features specified in the Service description."}
      </p>

      <h3>{"Refund Policy"}</h3>
      <p>
        {"If you are not satisfied with the Service, you may request a refund within the first "} 
        <strong>{"30 days"}</strong>
        {" of your purchase. To request a refund, please contact our support team at "}
        <Link href="mailto:hello@brogevity.com">{"hello@brogevity.com"}</Link>
        {"."}
      </p>
      <p>
        {"Refunds will be credited back to the original payment method used for the purchase. Please allow up to "}
        <strong>{"7-10 business days"}</strong>
        {" for the refund to reflect in your account."}
      </p>
      <p>
        {"After the initial 30-day period, purchases are non-refundable."}
      </p>
      <p>
        {"This refund policy does not affect any statutory rights that may apply."}
      </p>
      <h2>{"Third-Party Services"}</h2>
      <p>
        {"Users must comply with the terms and conditions of any third-party services or platforms integrated with Brogevity. Brogevity is not responsible for the content, policies, or practices of these third-party services."}
      </p>

      <h2>{"Dispute Resolution"}</h2>
      <p>
        {"Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the Georgian International Arbitration Centre (GIAC). The arbitration shall take place in Tbilisi, Georgia, and the language of the arbitration shall be English."}
      </p>
      <p>
        {"You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action."}
      </p>

      <h2>{"Modifications and Termination"}</h2>
      <p>
        {"Brogevity reserves the right to modify, suspend, or terminate the Service or user access to the Service at any time, with or without notice. You may also choose to terminate your account at any time. Consequences of termination may include loss of access to the Service and deletion of user data."}
      </p>

      <h2>{"Indemnification"}</h2>
      <p>
        {"You agree to indemnify, defend, and hold harmless Brogevity, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the Service, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party."}
      </p>

      <h2>{"Limitation of Liability"}</h2>
      <p>
        {"To the extent permitted by law, Brogevity's total liability for any claims arising from the use of the Service shall not exceed the amount paid by you for the Service. Brogevity shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising from the use of or inability to use the Service, even if Brogevity has been advised of the possibility of such damages."}
      </p>

      <h2>{"Force Majeure"}</h2>
      <p>
        {"Brogevity shall not be liable for any delay or failure to perform its obligations under these Terms due to circumstances beyond its reasonable control, such as natural disasters, acts of God, war, terrorism, labor disputes, or government actions."}
      </p>

      <h2>{"Changes to the Terms"}</h2>
      <p>
        {"We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review this page periodically for any changes. Changes to these Terms are effective when they are posted on this page."}
      </p>

      <h2>{"Governing Law"}</h2>
      <p>
        {"These Terms shall be governed and construed in accordance with the laws of Georgia, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located within Georgia for the purpose of litigating all such claims or disputes that are not subject to arbitration."}
      </p>

      <h2>{"Severability"}</h2>
      <p>
        {"If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. These Terms constitute the entire agreement between you and Brogevity regarding our Service and supersede any prior agreements."}
      </p>

      <h2>{"Miscellaneous"}</h2>
      <p>
        {"The relationship between the parties is that of independent contractors. The waiver of any provision of these Terms shall not be considered a waiver of any other provision or of Brogevity's right to require strict observance of each term herein. You may not assign your rights and obligations under these Terms without the prior written consent of Brogevity. The headings used in these Terms are for reference purposes only and shall not affect the interpretation of the Terms."}
      </p>

      <h2>{"Contact Us"}</h2>
      <p>
        {"If you have any questions about these Terms, please contact us at:"}
      </p>
      <p>
        {"IE Aleksandr Malyshev"}<br />
        {"Address: Georgia, Tbilisi, Krtsanisi district, Fonichala settlement 3, building 5, auxiliary storage hall 2, floor 4"}<br />
        {"Email: hello@brogevity.com"}
      </p>
    </div>
  );
};

export default TermsOfUsePage;

