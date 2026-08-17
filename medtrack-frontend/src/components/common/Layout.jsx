import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-gray-50">
      
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
