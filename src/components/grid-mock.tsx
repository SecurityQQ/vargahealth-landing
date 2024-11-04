import React from 'react';
import ShortInfoCard from "@/components/claim/ShortInfoCard";

const MockData = [
  {
    "title": "Extending Lifespan Through Metabolic Health",
    "source": "Peter Attia",
    "slug": "extending-lifespan-metabolic-health",
    "description": "Explore how optimizing metabolic health can significantly impact longevity.",
    "use_cases": ["Anti-Aging", "Lose Weight", "General Health"],
    "tools": ["Diet", "Exercise", "Medical"],
    "best_for": "Health Enthusiasts",
    "quotes": ["Metabolic health is the cornerstone of longevity", "Insulin sensitivity affects aging"],
    "metrics": { "views": 5000, "likes": 2500, "dislikes": 10, "bookmarks": 800 },
    "userInteractions": { "liked": true, "bookmarked": false },
    "createdAt": "2024-11-04",
    "sourcePublishDate": "2024-10-28"
  },
  {
    "title": "The Role of Micronutrients in Aging",
    "source": "Rhonda Patrick",
    "slug": "micronutrients-and-aging",
    "description": "Discover how essential vitamins and minerals can slow down the aging process.",
    "use_cases": ["Anti-Aging", "Immunity", "General Health"],
    "tools": ["Supplements", "Diet", "Testing"],
    "best_for": "Nutrition Enthusiasts",
    "quotes": ["Micronutrients are key to cellular health", "Deficiencies accelerate aging"],
    "metrics": { "views": 4200, "likes": 2100, "dislikes": 5, "bookmarks": 650 },
    "userInteractions": { "liked": true, "bookmarked": true },
    "createdAt": "2024-11-04",
    "sourcePublishDate": "2024-10-26"
  },
  {
    "title": "Optimizing Sleep for Longevity",
    "source": "Andrew Huberman",
    "slug": "optimizing-sleep-longevity",
    "description": "Learn how sleep quality affects lifespan and strategies to improve it.",
    "use_cases": ["Sleep", "Mental Health", "General Health"],
    "tools": ["Lifestyle", "Wearables", "Home"],
    "best_for": "Anyone Seeking Better Sleep",
    "quotes": ["Sleep is the foundation of health", "Circadian rhythms govern longevity"],
    "metrics": { "views": 3800, "likes": 1900, "dislikes": 15, "bookmarks": 500 },
    "userInteractions": { "liked": false, "bookmarked": true },
    "createdAt": "2024-11-04",
    "sourcePublishDate": "2024-10-27"
  },
  {
    "title": "Blueprint for Rejuvenation: Bryan Johnson's Approach",
    "source": "Bryan Johnson",
    "slug": "blueprint-rejuvenation-bryan-johnson",
    "description": "An in-depth look at Bryan Johnson's protocol for reversing aging processes.",
    "use_cases": ["Anti-Aging", "Hormones", "General Health"],
    "tools": ["Supplements", "Medical", "Testing"],
    "best_for": "Biohackers and Longevity Enthusiasts",
    "quotes": ["Rejuvenation is within reach", "Data-driven health optimization"],
    "metrics": { "views": 4500, "likes": 2250, "dislikes": 8, "bookmarks": 750 },
    "userInteractions": { "liked": true, "bookmarked": true },
    "createdAt": "2024-11-04",
    "sourcePublishDate": "2024-10-29"
  },
  {
    "title": "Intermittent Fasting and Cellular Autophagy",
    "source": "Peter Attia",
    "slug": "intermittent-fasting-cellular-autophagy",
    "description": "Understand how intermittent fasting can promote autophagy and extend lifespan.",
    "use_cases": ["Anti-Aging", "Lose Weight", "Gut Health"],
    "tools": ["Diet", "Lifestyle", "Testing"],
    "best_for": "Health and Fitness Enthusiasts",
    "quotes": ["Fasting triggers cellular cleanup", "Autophagy is crucial for longevity"],
    "metrics": { "views": 4000, "likes": 2000, "dislikes": 12, "bookmarks": 600 },
    "userInteractions": { "liked": true, "bookmarked": false },
    "createdAt": "2024-11-04",
    "sourcePublishDate": "2024-10-30"
  },
  {
    "title": "Neuroplasticity and Lifespan Extension",
    "source": "Andrew Huberman",
    "slug": "neuroplasticity-lifespan-extension",
    "description": "Explore how enhancing neuroplasticity can contribute to a longer, healthier life.",
    "use_cases": ["Mental Health", "Anti-Aging", "General Health"],
    "tools": ["Exercise", "Lifestyle", "Supplements"],
    "best_for": "Anyone Interested in Brain Health",
    "quotes": ["The brain's ability to change decreases with age", "Neuroplasticity can be harnessed for longevity"],
    "metrics": { "views": 3600, "likes": 1800, "dislikes": 9, "bookmarks": 550 },
    "userInteractions": { "liked": false, "bookmarked": true },
    "createdAt": "2024-11-04",
    "sourcePublishDate": "2024-10-31"
  }
]


const ShortInfoCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
      {MockData.map((data, index) => (
        <div  key={index} className="flex flex-col justify-between max-w-md lg:max-w-2xl mx-auto bg-card shadow-lg rounded-lg overflow-hidden border-2 cursor-zoom-in p-6" >
          <ShortInfoCard {...data} />
        </div>
      ))}
    </div>
  );
};

export default ShortInfoCardGrid;
