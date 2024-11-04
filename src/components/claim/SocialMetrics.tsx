"use client";

import { ThumbsUp, ThumbsDown, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

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

interface SocialMetricsProps {
  ratings?: SocialMetricsType;
  userInteractions?: UserInteractionType;
  onSocialMetricChange?: (
    metric: InteractionType,
    newValue: number,
    incrementValue: number,
    sendToServer?: boolean
  ) => void;
}

type InteractionType = 'LIKED' | 'DISLIKED' | 'BOOKMARKED';

export default function SocialMetrics({
  ratings,
  userInteractions,
}: SocialMetricsProps) {
  return (
    <div className="flex flex-wrap gap-1">
      <MetricButton icon={ThumbsUp} value={ratings?.likes ?? 0} label="Likes" toggled={userInteractions?.liked ?? false} />
      <MetricButton icon={ThumbsDown} value={ratings?.dislikes ?? 0} label="Dislikes" toggled={userInteractions?.disliked ?? false} />
      <MetricButton icon={Bookmark} value={ratings?.bookmarks ?? 0} label="Bookmarks" toggled={userInteractions?.bookmarked ?? false} />
    </div>
  );
}

type MetricButtonProps = {
  icon: React.ElementType;
  value: number;
  label: string;
  toggled: boolean;
};

function MetricButton({ icon: Icon, value, label, toggled }: MetricButtonProps) {
  return (
    <motion.button
      className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-colors ${
        toggled ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary/80"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`${label}: ${value}`}
    >
      <Icon className="w-4 h-4" />
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {value}
      </motion.span>
    </motion.button>
  );
}
