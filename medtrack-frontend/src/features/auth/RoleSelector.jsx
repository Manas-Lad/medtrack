import React from 'react';

const RoleSelector = ({ onSelectRole }) => {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-medtrack-dark tracking-tight mb-2">MEDTRACK</h1>
        <p className="text-sm text-gray-500 font-medium">Secure Logistics Command Portal</p>
      </div>

      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Select your operational role</p>
        
        <div className="space-y-3">
          
          <button 
            onClick={() => onSelectRole('national_admin')}
            className="w-full text-left group relative bg-white border border-medtrack-teal rounded-lg p-4 hover:bg-teal-50 transition-colors focus:outline-none focus:ring-2 focus:ring-medtrack-teal focus:ring-offset-2"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                
                <svg className="w-6 h-6 text-medtrack-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-medtrack-teal transition-colors">National Administrator</h3>
                <p className="text-xs text-gray-500 mt-1">Full system oversight and analytics</p>
              </div>
            </div>
          </button>

          
          <button 
            onClick={() => onSelectRole('hospital')}
            className="w-full text-left group relative bg-white border border-gray-200 rounded-lg p-4 hover:border-medtrack-teal hover:bg-teal-50 transition-colors focus:outline-none focus:ring-2 focus:ring-medtrack-teal focus:ring-offset-2"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                
                <svg className="w-6 h-6 text-gray-400 group-hover:text-medtrack-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-medtrack-teal transition-colors">Hospital Procurement</h3>
                <p className="text-xs text-gray-500 mt-1">Manage inventory and submit demands</p>
              </div>
            </div>
          </button>


          
          
          <button 
            onClick={() => onSelectRole('vendor')}
            className="w-full text-left group relative bg-white border border-gray-200 rounded-lg p-4 hover:border-medtrack-teal hover:bg-teal-50 transition-colors focus:outline-none focus:ring-2 focus:ring-medtrack-teal focus:ring-offset-2"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                
                <svg className="w-6 h-6 text-gray-400 group-hover:text-medtrack-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-medtrack-teal transition-colors">Vendor / Distributor</h3>
                <p className="text-xs text-gray-500 mt-1">Process shipments and fulfill supply</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
