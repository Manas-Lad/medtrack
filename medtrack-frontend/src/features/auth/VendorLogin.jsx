import React from 'react';

const VendorLogin = ({ onBack, onLogin }) => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-medtrack-teal transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-medtrack-dark rounded-xl mb-4 shadow-md flex items-center justify-center">
          
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Vendor Portal</h2>
        <p className="text-sm text-gray-500">Process shipments and fulfill supply</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => {
        e.preventDefault();
        onLogin && onLogin('vendor_dashboard');
      }}>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2">
            Vendor ID
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
              placeholder="e.g. VEN-123456"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input 
              type="password" 
              className="pl-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-medtrack-teal focus:border-medtrack-teal bg-white/50 focus:bg-white transition-colors"
              placeholder="••••••••"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input 
              id="remember_me" 
              name="remember_me" 
              type="checkbox" 
              className="h-4 w-4 text-medtrack-teal focus:ring-medtrack-teal border-gray-300 rounded" 
            />
            <label htmlFor="remember_me" className="ml-2 block text-xs text-gray-500">
              Remember me
            </label>
          </div>

          <div className="text-xs">
            <a href="#" className="font-medium text-medtrack-teal hover:text-teal-700">
              Forgot Vendor ID?
            </a>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full mt-6 bg-medtrack-teal text-white rounded-md py-3 text-sm font-semibold hover:bg-teal-700 transition-colors shadow-sm"
        >
          Access Portal
        </button>
      </form>
    </div>
  );
};

export default VendorLogin;
