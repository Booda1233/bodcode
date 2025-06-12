import React from 'react';

interface PythonIconProps {
  className?: string;
}

const PythonIcon: React.FC<PythonIconProps> = ({ className = "w-6 h-6" }) => ( // Added a default className for safety, though typically overridden
  <svg 
    className={className} // Ensures the passed className is always applied
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.33 21.79H9.92C5.33 21.79 3 19.51 3 15V9.22C3 4.71 5.33 2.43 9.92 2.43H12.1V6.7H9.92C7.62 6.7 6.48 7.82 6.48 10.07V14.15C6.48 16.4 7.62 17.52 9.92 17.52H12.1V21.79H14.33V17.52H16.54C18.84 17.52 20 16.4 20 14.15V11.61H16.54V14.15C16.54 14.97 16.07 15.42 15.25 15.42C14.42 15.42 13.98 14.97 13.98 14.15V10.07C13.98 7.82 15.11 6.7 17.41 6.7H19.62V2.43H17.41C12.82 2.43 10.49 4.71 10.49 9.22V12.37H14.33C15.16 12.37 15.6 11.92 15.6 11.1V8.8H19.62V11.1C19.62 13.35 18.49 14.47 16.19 14.47H13.98L14.33 21.79Z" />
  </svg>
);

export default PythonIcon;
