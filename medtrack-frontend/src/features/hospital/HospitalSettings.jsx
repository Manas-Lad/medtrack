import React from 'react';
import { 
  Bot, 
  Info,
  Plus,
  Box,
  Pencil,
  Save
} from 'lucide-react';

const HospitalSettings = () => {
  return (
    <div className="space-y-6 pb-20 relative">
      <div className="flex justify-between items-start border-b border-gray-200 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">System Settings</h2>
          <p className="text-sm text-gray-500 mt-1">Manage global configurations, procurement rules, and integrations for the Command Center.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 pt-2">
         
         <div className="w-full md:w-64 shrink-0 space-y-1">
            <button className="w-full text-left px-4 py-3 bg-white border border-[#0f766e] text-[#0f766e] text-sm font-bold rounded-lg shadow-sm border-l-4 border-l-[#0f766e]">
               General & Rules
            </button>
            <button className="w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium rounded-lg transition-colors">
               Notification Preferences
            </button>
            <button className="w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium rounded-lg transition-colors">
               User Management
            </button>
            <button className="w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-medium rounded-lg transition-colors">
               API Integrations
            </button>
         </div>

         
         <div className="flex-1 space-y-6">
            
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
               <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                     <Bot className="w-5 h-5 text-[#0f766e] mr-3" />
                     <h3 className="text-lg font-bold text-gray-900">AI-Driven Reordering</h3>
                  </div>
                  
                  <div className="w-12 h-6 bg-[#0f766e] rounded-full relative cursor-pointer flex items-center px-1 shadow-inner">
                     <div className="absolute right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-[#0f766e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                     </div>
                  </div>
               </div>
               <p className="text-sm text-gray-600 mb-6 pl-8">Automatically draft procurement orders based on predictive usage models and current stock levels.</p>
               
               <div className="pl-8 space-y-4">
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border-t border-dashed border-gray-200 pt-6 mb-4">Sensitivity Threshold</h4>
                  
                  
                  <div className="relative pt-2 pb-6">
                     <div className="w-full h-1 bg-gray-200 rounded-full relative">
                        
                        <div className="absolute left-0 top-0 h-full bg-[#0f766e] rounded-full w-[75%]"></div>
                        
                        <div className="absolute top-1/2 -mt-2.5 w-5 h-5 bg-white border-2 border-[#0f766e] rounded-full left-[75%] -ml-2.5 shadow-sm cursor-grab"></div>
                     </div>
                     <div className="flex justify-between text-xs mt-3 font-medium">
                        <span className="text-gray-500">Conservative (Wait)</span>
                        <span className="text-[#0f766e] font-bold absolute left-[75%] transform -translate-x-1/2">Balanced (75%)</span>
                        <span className="text-gray-400">Aggressive (Pre-stock)</span>
                     </div>
                  </div>

                  
                  <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-4 flex items-start text-[#0369a1] text-sm">
                     <Info className="w-5 h-5 mr-3 shrink-0" />
                     <p>At current settings, AI will propose reorders approximately 4 days before critical shortage based on historical usage velocity.</p>
                  </div>
               </div>
            </div>

            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
               <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Preferred Vendors</h3>
                  <button className="text-[#0f766e] text-sm font-bold flex items-center hover:text-teal-800 transition-colors">
                     <Plus className="w-4 h-4 mr-1" /> Add Vendor
                  </button>
               </div>
               <p className="text-sm text-gray-600 mb-6">Manage primary supply chain partners for automated routing.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="border border-gray-200 rounded-lg p-5 relative">
                     <div className="absolute right-0 top-0 bg-[#0f766e] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-bl-lg rounded-tr-lg">Primary</div>
                     <div className="flex items-center mb-4 mt-2">
                        <div className="w-10 h-10 bg-teal-50 rounded flex items-center justify-center mr-3 border border-teal-100">
                           <Box className="w-5 h-5 text-[#0f766e]" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900">PharmaCorp Inc.</h4>
                           <span className="text-[10px] text-gray-500 font-mono tracking-wider">ID: V-8472</span>
                        </div>
                     </div>
                     <div className="border-t border-gray-100 pt-3 flex justify-between text-xs">
                        <div>
                           <p className="text-gray-400 font-medium mb-0.5">Category</p>
                           <p className="font-semibold text-gray-800">Medications</p>
                        </div>
                        <div>
                           <p className="text-gray-400 font-medium mb-0.5">SLA Avg</p>
                           <p className="font-semibold text-gray-800 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#0f766e] mr-1.5"></span> 24h</p>
                        </div>
                     </div>
                  </div>

                  
                  <div className="border border-gray-200 rounded-lg p-5 relative bg-gray-50/50">
                     <div className="absolute right-0 top-0 bg-gray-200 text-gray-600 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-bl-lg rounded-tr-lg">Secondary</div>
                     <div className="flex items-center mb-4 mt-2">
                        <div className="w-10 h-10 bg-white rounded flex items-center justify-center mr-3 border border-gray-200 shadow-sm">
                           <Box className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                           <h4 className="font-bold text-gray-900">BioLogistics US</h4>
                           <span className="text-[10px] text-gray-500 font-mono tracking-wider">ID: V-1093</span>
                        </div>
                     </div>
                     <div className="border-t border-gray-100 pt-3 flex justify-between text-xs">
                        <div>
                           <p className="text-gray-400 font-medium mb-0.5">Category</p>
                           <p className="font-semibold text-gray-800">Surgical Equipt.</p>
                        </div>
                        <div>
                           <p className="text-gray-400 font-medium mb-0.5">SLA Avg</p>
                           <p className="font-semibold text-gray-800 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-1.5"></span> 48h</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
               <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Hospital Unit Configuration</h3>
                  <p className="text-sm text-gray-600">Define routing priorities and default supply caches for specific departments.</p>
               </div>
               
               <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center relative overflow-hidden bg-gray-50/30">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#d32f2f]"></div>
                  <div className="pl-3">
                     <h4 className="font-bold text-gray-900 text-sm mb-0.5">Emergency Department</h4>
                     <p className="text-xs text-gray-600">Critical Priority Route</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors p-2">
                     <Pencil className="w-4 h-4" />
                  </button>
               </div>
            </div>

         </div>
      </div>

      
      <div className="fixed bottom-0 right-0 left-56 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 flex justify-end space-x-3 z-20">
         <button className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors text-sm">
            Cancel
         </button>
         <button className="px-6 py-2.5 bg-[#0f766e] text-white font-semibold rounded-md hover:bg-teal-800 transition-colors text-sm flex items-center shadow-sm">
            <Save className="w-4 h-4 mr-2" /> Save Changes
         </button>
      </div>

    </div>
  );
};

export default HospitalSettings;
