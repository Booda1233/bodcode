import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { APP_NAME, ROUTES } from '../constants';
import CodeIcon from './icons/CodeIcon';
import ChatBubbleOvalLeftEllipsisIcon from './icons/ChatBubbleOvalLeftEllipsisIcon';
import TerminalIcon from './icons/TerminalIcon'; // Import new TerminalIcon

const Header: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 sm:px-4 rounded-md text-sm font-medium transition-all duration-300 ease-in-out 
     focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75
     flex items-center space-x-1 rtl:space-x-reverse
     ${
      isActive 
        ? 'bg-sky-600 text-white shadow-lg scale-105' 
        : 'text-gray-300 hover:bg-gray-700/80 hover:text-sky-300 hover:scale-105'
    }`;

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={ROUTES.HOME} className="flex items-center space-x-2 rtl:space-x-reverse group">
            <CodeIcon className="h-8 w-8 text-sky-400 group-hover:text-sky-300 transition-colors duration-300 transform group-hover:rotate-[-5deg]" />
            <span className="text-2xl font-bold text-sky-400 group-hover:text-sky-300 transition-colors duration-300">{APP_NAME}</span>
          </Link>
          <nav className="flex space-x-1 sm:space-x-2 rtl:space-x-reverse">
            <NavLink to={ROUTES.HOME} className={navLinkClasses} end>
              الرئيسية
            </NavLink>
            <NavLink to={ROUTES.LEARNING_PLAN} className={navLinkClasses}>
              خطة التعلم
            </NavLink>
            <NavLink to={ROUTES.CURRICULUM} className={navLinkClasses}>
              الدروس
            </NavLink>
            <NavLink to={ROUTES.PLAYGROUND} className={navLinkClasses}>
              <TerminalIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-0 rtl:ml-1 rtl:mr-0" />
              <span className="hidden sm:inline">ساحة الأكواد</span>
            </NavLink>
            <NavLink to={ROUTES.CHAT_AI} className={navLinkClasses}>
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-0 rtl:ml-1 rtl:mr-0"/>
              <span className="hidden sm:inline">دردشة AI</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;