import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownProps {
  children: string;
  [key: string]: any;
}

const Markdown: React.FC<MarkdownProps> = ({ children, ...props }) => {
  const wrapIframesWithAspectRatioDiv = (markdown: string) => {
    return markdown.replace(
      /<iframe(.*?)<\/iframe>/g,
      (iframe) => `<div class="aspect-w-16 aspect-h-9 w-full">${iframe}</div>`
    );
  };

  const markdownWithIframeWrapper = wrapIframesWithAspectRatioDiv(children);

  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        {...props}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {markdownWithIframeWrapper}
      </ReactMarkdown>
    </div>
  );
}

export default Markdown;
