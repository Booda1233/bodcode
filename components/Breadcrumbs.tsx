import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
      <ol className="flex space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.path ? (
              <Link to={item.path} className="hover:text-sky-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-200">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1 rtl:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            )}
            {index < items.length - 1 && (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1 ltr:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;