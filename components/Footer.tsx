import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800/30 text-gray-400 py-8 mt-auto border-t border-gray-700/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} {APP_NAME}. جميع الحقوق محفوظة.</p>
        <p className="mt-1 text-xs">
          مصمم بحب لتعليم البرمجة <span className="text-sky-500 animate-pulse text-sm">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;