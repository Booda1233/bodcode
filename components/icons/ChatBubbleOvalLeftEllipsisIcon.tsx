import React from 'react';

interface ChatBubbleOvalLeftEllipsisIconProps {
  className?: string;
}

const ChatBubbleOvalLeftEllipsisIcon: React.FC<ChatBubbleOvalLeftEllipsisIconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-3.86 8.25-8.625 8.25S3.75 16.556 3.75 12D3.75 7.444 7.61 3.75 12.375 3.75S21 7.444 21 12Z" />
  </svg>
);

export default ChatBubbleOvalLeftEllipsisIcon;