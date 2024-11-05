// /app/privacy-policy/page.tsx
import Link from 'next/link';
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 prose" style={{ maxWidth: '100%' }}>
      <h1>{"Privacy Policy"}</h1>
      <p><em>{"Last updated: October 15, 2024"}</em></p>

      <h2>{"Introduction"}</h2>
      <p>
        {"VP Solutions Inc. (\"Brogevity,\" \"we,\" \"us,\" or \"our\") values the privacy of our users (\"user\" or \"you\"). This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website "}
        <Link href="https://brogevity.com">{"https://brogevity.com"}</Link>
        {" (the \"Site\") and our services. By using the Site, you consent to the data practices described in this policy."}
      </p>

      <h2>{"Information We Collect"}</h2>
      <h3>{"Personal Data"}</h3>
      <p>
        {"We collect personal information such as your name and email address when you register or interact with our services."}
      </p>

      <h3>{"Derivative Data"}</h3>
      <p>
        {"We automatically collect certain information when you visit, use, or navigate the Site. This may include your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site."}
      </p>

      <h3>{"App Usage Data"}</h3>
      <p>
        {"We monitor how you use our application to enhance our services, including tracking the features you use, the actions you take, and the time spent on the Site."}
      </p>

      <h2>{"Use of Information"}</h2>
      <p>{"Your information is used to:"}</p>
      <ul>
        <li>{"Manage your account and provide you with customer support."}</li>
        <li>{"Produce anonymized analytics to improve our services."}</li>
        <li>{"Ensure the functionality and security of our services."}</li>
      </ul>

      <h2>{"Cookies and Tracking Technologies"}</h2>
      <p>
        {"We use cookies and similar tracking technologies to access or store information. Cookies facilitate the core functions of our Site and services. Third-party services, such as the YouTube embedded player, may also use cookies."}
      </p>

      <h2>{"Data Retention"}</h2>
      <p>
        {"We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law."}
      </p>

      <h2>{"Data Security"}</h2>
      <p>
        {"We implement a variety of security measures to maintain the safety of your personal information. While we strive to protect your information, no security measures can guarantee absolute protection."}
      </p>

      <h2>{"Your Choices and Rights"}</h2>
      <p>{"You have the right to:"}</p>
      <ul>
        <li>{"Review, update, or delete your personal information."}</li>
        <li>{"Opt-out of email communications by following the unsubscribe instructions provided in the email."}</li>
        <li>{"Withdraw your consent at any time where we are relying on consent to process your personal information."}</li>
      </ul>
      <p>
        {"To exercise these rights, please contact us at "}
        <Link href="mailto:hello@brogevity.com">{"hello@brogevity.com"}</Link>.
      </p>

      <h2>{"Changes to This Privacy Policy"}</h2>
      <p>
        {"We may update this Privacy Policy from time to time. The updated version will be indicated by an updated \"Last updated\" date and will be effective as soon as it is accessible. We encourage you to review this Privacy Policy periodically to stay informed of our privacy practices."}
      </p>

      <h2>{"Contact Us"}</h2>
      <p>
        {"If you have any questions or comments about this Privacy Policy, please contact us at:"}
      </p>
      <p>
        {"VP Solutions Inc."}<br />
        {"Address: 300 Delaware Ave Ste 210 #700 Wilmington, DE 19801"}<br />
        {"Email: hello@brogevity.com"}
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
