import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const influencers = ['Peter Attia', 'Rhonda Patrick', 'Andrew Huberman', 'Bryan Johnson'];

export default function SocialProof() {
  return (
    <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg shadow-md max-w-2xl">
      {/*<div className="flex items-center justify-between mb-4">

      </div>*/}
    
      <div className='flex flex-row'>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
          ))}
        </div>
          <p className="text-sm text-muted-foreground pl-2">
             That helps 1000+ people{' '} <span className="font-semibold">stay up-to-date with trends, get actionable plans, and save a lot of time</span>
          </p>
      </div>
        <div className="flex items-center pt-2">
          <div className="flex -space-x-3 mr-4">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={`/paywall/people/${i + 1}.jpg`}
                alt={`User ${i + 1}`}
                width={40}
                height={40}
                className="rounded-full border-2 border-primary"
              />
            ))}
          </div>
      </div>
      
      <p className="text-sm text-muted-foreground pt-2">
        Most of our members follow {" "}
      <span className="font-medium text-primary">
           {influencers.slice(0, -1).join(', ')} and {influencers.slice(-1)}
        </span>
        . If that resonates with you, you got a match
      </p>
    </div>
  );
}