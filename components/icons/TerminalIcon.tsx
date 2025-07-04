import React from 'react';

interface TerminalIconProps {
  className?: string;
}

const TerminalIcon: React.FC<TerminalIconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 9.75 2.25 2.25-2.25 2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15h3" />
  </svg>
);

export default TerminalIcon;