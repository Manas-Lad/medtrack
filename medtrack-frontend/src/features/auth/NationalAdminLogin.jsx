import React, { useState } from 'react';

const NationalAdminLogin = ({ onBack, onLogin }) => {
  const [activeTab, setActiveTab] = useState('identity');

  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-medtrack-teal transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-medtrack-dark mb-1">National Administrator</h2>
        <p className="text-sm text-gray-500">Strategic Oversight & Supply Chain Analytics</p>
      </div>

      
      <div className="flex space-x-2 mb-6 w-full">
        <button 
          onClick={() => setActiveTab('identity')}
          className="flex-1 flex flex-col items-center group focus:outline-none"
        >
          <span className={`text-xs font-semibold tracking-wide mb-2 ${activeTab === 'identity' ? 'text-medtrack-teal' : 'text-gray-400 group-hover:text-gray-600'}`}>
            Identity
          </span>
          <div className={`w-full rounded-full transition-all duration-200 ${activeTab === 'identity' ? 'h-[2px] bg-medtrack-teal' : 'h-[1px] bg-gray-200 group-hover:bg-gray-300'}`}></div>
        </button>
        <button 
          onClick={() => setActiveTab('verification')}
          className="flex-1 flex flex-col items-center group focus:outline-none"
        >
          <span className={`text-xs font-semibold tracking-wide mb-2 ${activeTab === 'verification' ? 'text-medtrack-teal' : 'text-gray-400 group-hover:text-gray-600'}`}>
            Verification
          </span>
          <div className={`w-full rounded-full transition-all duration-200 ${activeTab === 'verification' ? 'h-[2px] bg-medtrack-teal' : 'h-[1px] bg-gray-200 group-hover:bg-gray-300'}`}></div>
        </button>
        <button 
          onClick={() => setActiveTab('access')}
          className="flex-1 flex flex-col items-center group focus:outline-none"
        >
          <span className={`text-xs font-semibold tracking-wide mb-2 ${activeTab === 'access' ? 'text-medtrack-teal' : 'text-gray-400 group-hover:text-gray-600'}`}>
            Access
          </span>
          <div className={`w-full rounded-full transition-all duration-200 ${activeTab === 'access' ? 'h-[2px] bg-medtrack-teal' : 'h-[1px] bg-gray-200 group-hover:bg-gray-300'}`}></div>
        </button>
      </div>

      <form className="space-y-5" onSubmit={(e) => {
        e.preventDefault();
        onLogin && onLogin('national_admin_dashboard');
      }}>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
            Govt ID (PIV/CAC)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </div>
            <input 
              type="text" 
              className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-medtrack-teal focus:border-medtrack-teal bg-white/50 focus:bg-white transition-colors"
              placeholder="Enter alphanumeric ID"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <input 
              type="password" 
              className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-medtrack-teal focus:border-medtrack-teal bg-white/50 focus:bg-white transition-colors"
              placeholder="••••••••"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full mt-6 bg-medtrack-dark text-white rounded-md py-3 text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          <span>Access Command Center</span>
        </button>
      </form>
    </div>
  );
};

export default NationalAdminLogin;
