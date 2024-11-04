// components/claim/CardTags.tsx

export const tagsMapping = [
  { name: 'Anti-Aging', slug: 'anti_aging' },
  { name: 'Lose Weight', slug: 'lose_weight' },
  { name: 'Mental Health', slug: 'mental_health' },
  { name: 'Sleep', slug: 'sleep' },
  { name: 'Gut Health', slug: 'gut_health' },
  { name: 'Immunity', slug: 'immunity' },
  { name: 'General Health', slug: 'general_health' },
  { name: 'Sexual Health', slug: 'sexual_health' },
  { name: 'Hormones', slug: 'hormones' },
  { name: 'Heart', slug: 'heart' },
  { name: 'Grow Hair', slug: 'grow_hair' },
  { name: 'Menopause', slug: 'menopause' },
  { name: 'Glucose', slug: 'glucose' },
  { name: 'Eye Health', slug: 'eye_health' },
  { name: 'Grey Hair', slug: 'grey_hair' }
];


export const toolsMapping = [
  { name: 'Supplements', slug: 'supplements' },
  { name: 'Diet', slug: 'diet' },
  { name: 'Exercise', slug: 'exercise' },
  { name: 'Medical', slug: 'medical' },
  { name: 'Lifestyle', slug: 'lifestyle' },
  { name: 'Wearables', slug: 'wearables' },
  { name: 'Content', slug: 'content' },
  { name: 'Community', slug: 'community' },
  { name: 'Home', slug: 'home' },
  { name: 'Testing', slug: 'testing' },

];


const CardTags = ({ use_cases, tools }: { use_cases: string[]; tools: string[] }) => {
  const useCaseNames = use_cases.map(
    (slug) =>  slug
  );
  const toolNames = tools.map(
    (slug) => slug
  );

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {useCaseNames.map((useCase, i) => (
        <span
          key={`usecase-${i}`}
          className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs"
        >
          {useCase}
        </span>
      ))}
      {toolNames.map((tool, i) => (
        <span
          key={`tool-${i}`}
          className="px-2 py-1 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] rounded-full text-xs"
        >
          {tool}
        </span>
      ))}
    </div>
  );
};

export default CardTags;
