import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@/components/analytics";
import localFont from "next/font/local";

// Configure the local fonts
// Import the Geist font
const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
});

// Import the Geist Mono font
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${geist.variable} ${geistMono.variable}`}>
    {/*<main>*/}
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
