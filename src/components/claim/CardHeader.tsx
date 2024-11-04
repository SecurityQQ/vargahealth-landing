"use client";

// components/claim/CardHeader.tsx


// import ShareButton from './ShareButton';

const handleShare = async (event: React.MouseEvent) => {
    event.stopPropagation();
    console.log('Bookmark clicked')
}

const CardHeader = ({ title, source, slug }: { title: string; source: string; slug: string }) => (
  <div className="flex justify-between items-start">
    <h2 className="text-3xl sm:text-2xl font-bold text-card-foreground mr-2">{title}</h2>
    {/*<div className="">
      <ShareButton slug={slug} />
    </div>*/}
  </div>
);

export default CardHeader;
