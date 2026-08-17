import React from 'react';
import { 
  Wallet, 
  Clock, 
  ClipboardCheck, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Calendar,
  MoreHorizontal,
  Activity
} from 'lucide-react';

const HospitalAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Procurement Analytics</h2>
          <p className="text-sm text-gray-500 mt-1">Real-time insights across hospital supply chain operations.</p>
        </div>
        <div>
           <button className="flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-md hover:bg-gray-50 transition-colors shadow-sm">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              Last 30 Days
              <svg className="w-4 h-4 ml-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
           </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Total<br/>Procurement<br/>Spend</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
               <Wallet className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">$420k</h4>
            <div className="flex flex-col text-xs font-medium text-gray-400">
               <span className="text-[#0f766e] flex items-center mb-0.5">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5.2%
               </span>
               vs prev month
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Avg Order<br/>Cycle Time</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
               <Clock className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">3.2 <span className="text-sm font-semibold text-gray-500">Days</span></h4>
            <div className="flex flex-col text-xs font-medium text-gray-400">
               <span className="text-[#0f766e] flex items-center mb-0.5">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  -0.4 days
               </span>
               vs prev month
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Vendor<br/>Fulfillment</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
               <ClipboardCheck className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">98.4%</h4>
            <div className="flex flex-col text-xs font-medium text-gray-400">
               <span className="text-[#0f766e] flex items-center mb-0.5">
                  <CheckCircleIcon className="w-3 h-3 mr-1" />
                  On Target
               </span>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Stock-Out Rate</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
               <AlertTriangle className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">0.8%</h4>
            <div className="flex flex-col text-xs font-medium text-gray-400">
               <span className="text-gray-500 flex items-center mb-0.5">
                  <MinusIcon className="w-3 h-3 mr-1" />
                  Stable
               </span>
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        
        <div className="lg:col-span-2 space-y-6">
           
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-gray-900 text-lg">Spend by Category</h3>
                 <button className="text-sm font-bold text-[#0f766e] hover:text-teal-800 transition-colors">
                    View Detailed Report
                 </button>
              </div>
              <div className="h-64 w-full relative">
                 
                 <div className="absolute inset-0 border-l border-b border-gray-200 opacity-50" style={{ backgroundImage: 'linear-gradient(#f3f4f6 1px, transparent 1px), linear-gradient(90deg, #f3f4f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                 
                 <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] font-bold text-gray-400 -ml-10 py-1">
                    <span>$200k</span>
                    <span>$150k</span>
                    <span>$100k</span>
                    <span>$50k</span>
                    <span>$0</span>
                 </div>

                 <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] font-bold text-gray-400 -mb-6 px-4">
                    <span>Me...</span>
                    <span>Consu...</span>
                    <span>Equi...</span>
                    <span>Flui...</span>
                 </div>
                 
                 
                 <div className="absolute bottom-0 left-[10%] w-8 h-[75%] bg-teal-100 rounded-t-sm opacity-50"></div>
                 <div className="absolute bottom-0 left-[35%] w-8 h-[40%] bg-teal-100 rounded-t-sm opacity-50"></div>
                 <div className="absolute bottom-0 left-[60%] w-8 h-[60%] bg-teal-100 rounded-t-sm opacity-50"></div>
                 <div className="absolute bottom-0 left-[85%] w-8 h-[25%] bg-teal-100 rounded-t-sm opacity-50"></div>
              </div>
           </div>

           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-5 flex justify-between items-center border-b border-gray-100">
                 <h3 className="font-bold text-gray-900 text-lg">Top Consumed SKUs</h3>
                 <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                 </button>
              </div>
              
              <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left">
                    <thead className="text-[10px] text-gray-500 uppercase tracking-widest font-bold bg-white">
                       <tr>
                          <th className="px-6 py-4">SKU ID</th>
                          <th className="px-6 py-4">Item Name</th>
                          <th className="px-6 py-4">Total Consumed</th>
                          <th className="px-6 py-4">Cost Impact</th>
                          <th className="px-6 py-4">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-5 font-mono text-xs text-gray-500">MED-8492</td>
                          <td className="px-6 py-5 font-bold text-gray-900">Saline Solution (1000ml)</td>
                          <td className="px-6 py-5 text-gray-600">1,240 Units</td>
                          <td className="px-6 py-5 text-gray-600 font-mono">$4,960</td>
                          <td className="px-6 py-5">
                             <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest bg-teal-100 text-[#0f766e]">
                                <CheckCircleIcon className="w-3 h-3 mr-1" /> Stable
                             </span>
                          </td>
                       </tr>
                       
                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-5 font-mono text-xs text-gray-500">SRG-1024</td>
                          <td className="px-6 py-5 font-bold text-gray-900">Surgical Gloves (Latex-Free)</td>
                          <td className="px-6 py-5 text-gray-600">8,500 Pairs</td>
                          <td className="px-6 py-5 text-gray-600 font-mono">$2,550</td>
                          <td className="px-6 py-5">
                             <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest bg-teal-100 text-[#0f766e]">
                                <CheckCircleIcon className="w-3 h-3 mr-1" /> Stable
                             </span>
                          </td>
                       </tr>

                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-5 font-mono text-xs text-gray-500">EQP-3391</td>
                          <td className="px-6 py-5 font-bold text-gray-900">IV Giving Sets</td>
                          <td className="px-6 py-5 text-gray-600">950 Units</td>
                          <td className="px-6 py-5 text-gray-600 font-mono">$3,325</td>
                          <td className="px-6 py-5">
                             <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest bg-red-100 text-red-600">
                                <TrendingDown className="w-3 h-3 mr-1" /> Low
                             </span>
                          </td>
                       </tr>

                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-5 font-mono text-xs text-gray-500">MED-2011</td>
                          <td className="px-6 py-5 font-bold text-gray-900">Propofol (50ml Vials)</td>
                          <td className="px-6 py-5 text-gray-600">320 Vials</td>
                          <td className="px-6 py-5 text-gray-600 font-mono">$8,640</td>
                          <td className="px-6 py-5">
                             <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest bg-teal-100 text-[#0f766e]">
                                <CheckCircleIcon className="w-3 h-3 mr-1" /> Stable
                             </span>
                          </td>
                       </tr>

                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-5 font-mono text-xs text-gray-500">CNS-9980</td>
                          <td className="px-6 py-5 font-bold text-gray-900">N95 Respirator Masks</td>
                          <td className="px-6 py-5 text-gray-600">2,100 Units</td>
                          <td className="px-6 py-5 text-gray-600 font-mono">$4,200</td>
                          <td className="px-6 py-5">
                             <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest bg-gray-200 text-gray-600">
                                <Clock className="w-3 h-3 mr-1" /> Pending
                             </span>
                          </td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>
        </div>

        
        <div className="space-y-6">
           
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Monthly Budget</h3>
              <div className="mb-2 flex justify-between items-end">
                 <div>
                    <h4 className="text-3xl font-bold text-gray-900 tracking-tight">68%</h4>
                    <span className="text-xs font-semibold text-gray-500">Utilization</span>
                 </div>
                 <div className="text-sm font-bold text-[#0f766e]">
                    $340k <span className="text-gray-400 font-normal">/ $500k</span>
                 </div>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-4">
                 <div className="bg-gray-900 h-full rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-xs text-gray-500 text-center">On track to stay within monthly limits.</p>
           </div>

           
           <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center justify-center py-12 hover:bg-gray-100 transition-colors cursor-pointer">
              <Activity className="w-8 h-8 text-gray-400 mb-3" />
              <h3 className="font-bold text-gray-900 text-lg mb-1">Replenishment Trends</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">View Lead Times</p>
           </div>

        </div>

      </div>
    </div>
  );
};

const CheckCircleIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
  </svg>
);

export default HospitalAnalytics;
