import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ShieldCheck, ShieldBan as ShieldLock, FileText } from 'lucide-react';



const words = ["evidence-based", "integrative", "personalized", "cutting-edge", "genomics", "telehealth", "holistic", "respectful"];

interface SponsorProps {
  imgSrc: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    imgSrc: "/images/lbf.jpg",
    name: "Longevity Biotech Fellowship",
  },
  {
    imgSrc: "/images/numenor.jpeg",
    name: "Numenor Health",
  },
  {
    imgSrc: "/images/yc.png",
    name: "YCombinator Startup School",
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-4 pb-12">
      <h2 className="text-center text-xl lg:text-2xl font-bold mb-4 text-primary">
        Seen at
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {sponsors.map(({ imgSrc, name }: SponsorProps) => (
          <div key={name} className="flex flex-col items-center space-y-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="relative w-10 h-10 md:w-16 md:h-16">
              <Image src={imgSrc} alt={name} layout="fill" objectFit="contain" className="rounded-lg shadow-lg" />
            </div>
            <h3 className="text-md font-bold text-center">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1700); // Change every x second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-muted overflow-hidden">
      <Head>
        <title>Varga AI</title>
      </Head>

      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-background opacity-80 z-0"></div>

      <header className="w-full bg-primary text-background py-2 fixed top-0 z-10 shadow-lg">
        <h1 className="text-center text-2xl font-extrabold tracking-tight">Varga Health AI</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10 mt-16 mb-12">
        <motion.h2
          className="text-5xl font-extrabold mb-4 text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Become a{" "}
          <motion.span
            className="inline-block"
            key={currentWordIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {words[currentWordIndex]}
          </motion.span>{" "}
          doctor
        </motion.h2>
        <p className="text-lg md:text-xl mb-2 md:mb-8 text-foreground">
          Automate Your Medical Expertise With Artificial Intelligence
        </p>
        <p className="mb-4 mx-2 md:mx-0 text-md text-primary/60 max-w-xl mx-auto">
          Booking, Assessment, Medical System designed for Private Doctors helping them serve more patients and get more scientific reputation in the community
        </p>
        <motion.div
          className="bg-background p-4 rounded-lg shadow-md mb-2 max-w-sm w-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <form className="flex flex-row space-x-3">
            <Input type="email" placeholder="Your Professional Email" className="p-3 border rounded-md" />
            <Button type="submit" className="p-3 bg-primary text-background rounded-md hover:bg-primary-dark">Get Started</Button>
          </form>
        </motion.div>
        <Sponsors />
      </main>

      <footer className="w-full bg-primary text-background py-2 fixed bottom-0 z-10">
    <div className="container mx-auto text-center">
      <p className="text-sm font-medium md:hidden">&copy; 2024 Varga Health AI</p>
      <div className="mt-2 flex justify-center items-center space-x-4">
      <p className="text-sm font-medium hidden md:block">&copy; 2024 Varga Health AI</p>
        <div className="flex items-center space-x-2 text-xs">
          <ShieldCheck className="text-green-500" />
          <span>GDPR Compliant</span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <ShieldLock className="text-blue-500" />
          <span>HIPAA Compliant</span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <FileText className="text-yellow-500" />
          <span>ISO 27001</span>
        </div>
      </div>
    </div>
  </footer>

    </div>
  );
};

export default Home;
