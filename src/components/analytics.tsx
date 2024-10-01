import { Analytics as VercelAnalytics } from "@vercel/analytics/react"
// import { GoogleAnalytics } from '@next/third-parties/google'
// import { headers } from 'next/headers'
// import Script from 'next/script'


const EU_COUNTRY_CODES = [
    "AT", // Austria
    "BE", // Belgium
    "BG", // Bulgaria
    "HR", // Croatia
    "CY", // Cyprus
    "CZ", // Czech Republic
    "DK", // Denmark
    "EE", // Estonia
    "FI", // Finland
    "FR", // France
    "DE", // Germany
    "GR", // Greece
    "HU", // Hungary
    "IE", // Ireland
    "IT", // Italy
    "LV", // Latvia
    "LT", // Lithuania
    "LU", // Luxembourg
    "MT", // Malta
    "NL", // Netherlands
    "PL", // Poland
    "PT", // Portugal
    "RO", // Romania
    "SK", // Slovakia
    "SI", // Slovenia
    "ES", // Spain
    "SE", // Sweden
];


export function Analytics() {
  // const countryCode = headers().get('x-vercel-ip-country') || 'US';

  // if (EU_COUNTRY_CODES.includes(countryCode)) {
  //   return <VercelAnalytics />;
  // }

  return (
    <>
      <VercelAnalytics />
      {/*<GoogleAnalytics gaId="G-DC2FEVDRZY" />*/}
      {/*<Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-DC2FEVDRZY`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DC2FEVDRZY', {
            page_path: window.location.pathname,
          });
        `}
      </Script>*/}
    </>
  );
}