// components/claim/CardSource.tsx

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CardSourceProps {
  source: string;
  sourceImageUrl?: string; // New field
}

const CardSource = ({ source, sourceImageUrl }: CardSourceProps) => (
  <div className="flex items-center mb-4">
    <Avatar className="mr-2">
      <AvatarImage src={sourceImageUrl} alt={source} />
      <AvatarFallback>{source.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
    <p className="text-sm text-muted-foreground">{source}</p>
  </div>
);

export default CardSource;
