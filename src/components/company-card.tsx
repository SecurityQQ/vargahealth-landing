import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"



interface CompanyCardProps {
  href: string; // URL the card links to
  src: string; // Path to the image
  alt: string; // Alt text for the image
  tooltip: string; // Text to display in the tooltip
}

const CompanyCard: React.FC<CompanyCardProps> = ({ href, src, alt, tooltip }) => {  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-2">
        <p className="text-sm text-muted-foreground">Brogevity API used by</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="bg-white p-4 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                <Link href={href}>
                  <Image
                    src={src}
                    alt={alt}
                    width={90}
                    height={90}
                    className="filter grayscale opacity-75 hover:filter-none hover:opacity-100 transition-all duration-300"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};


export default CompanyCard;