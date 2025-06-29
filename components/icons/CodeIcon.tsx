import React from 'react';

interface CodeIconProps {
  className?: string;
  style?: React.CSSProperties; // Added style prop
}

const CodeIcon: React.FC<CodeIconProps> = ({ className, style }) => ( // Added style to destructuring
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style} // Applied style prop
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
    <line x1="10" y1="4" x2="14" y2="20"></line>
  </svg>
);

export default CodeIcon;