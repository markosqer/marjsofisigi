
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          موقعي
        </h1>
        <nav className="hidden md:flex space-x-8 space-x-reverse">
          <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors">الرئيسية</a>
          <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors">عني</a>
          <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors">تواصل معي</a>
        </nav>
        <button className="md:hidden text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
