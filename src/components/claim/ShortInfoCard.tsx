"use client";

import CardHeader from "@/components/claim/CardHeader";
import CardSource from "@/components/claim/CardSource";
import CardTags from "@/components/claim/CardTags";
import SocialMetrics from "./SocialMetrics";
import TimeAdded from "./TimeAdded";

interface SocialMetricsType {
  views: number;
  likes: number;
  dislikes: number;
  bookmarks: number;
}

interface UserInteractionType {
  liked?: boolean;
  disliked?: boolean;
  bookmarked?: boolean;
}

interface ShortInfoCardProps {
  title: string;
  source: string;
  sourceImageUrl?: string;
  slug: string;
  description: string;
  use_cases: string[];
  tools: string[];
  createdAt?: string;
  sourcePublishDate?: string;
  best_for: string;
  quotes: string[];
  metrics?: SocialMetricsType;
  userInteractions?: UserInteractionType;
}

const ShortInfoCard = ({
  title,
  source,
  sourceImageUrl,
  slug,
  description,
  use_cases,
  tools,
  createdAt,
  sourcePublishDate,
  best_for,
  quotes,
  metrics,
  userInteractions,
}: ShortInfoCardProps) => {
  return (
    <div className="relative">
      <div className="absolute -top-5 -right-5 z-100">
        <TimeAdded createdAt={createdAt} sourcePublishDate={sourcePublishDate} />
      </div>
      <div className="bg-card rounded-lg p-4 shadow-sm">
        <div className="mb-4">
          <CardHeader title={title} source={source} slug={slug} />
          <div className="mt-2 md:w-[100%]">
            <SocialMetrics ratings={metrics} userInteractions={userInteractions} />
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <CardSource source={source} sourceImageUrl={sourceImageUrl} />
        </div>
        <CardTags use_cases={use_cases} tools={tools} />
        <p className="text-muted-foreground mb-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ShortInfoCard;
