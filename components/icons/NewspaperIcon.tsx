import React from 'react';

interface NewspaperIconProps {
  className?: string;
}

const NewspaperIcon: React.FC<NewspaperIconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.875c0-.621.504-1.125 1.125-1.125H6.75M12 7.5V9m0 3V9m0 3v2.25m0 3v-2.25m0 0V15m0-6.75V9m0 3h.008v.008H12v-.008zm0 3h.008v.008H12v-.008zm0 3h.008v.008H12v-.008z" />
  </svg>
);

export default NewspaperIcon;
