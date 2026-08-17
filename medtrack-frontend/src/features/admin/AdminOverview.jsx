import React from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  Package,
  TrendingUp,
  Filter,
  Download
} from 'lucide-react';

const AdminOverview = () => {
  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-bold text-gray-600">National Availability Rate</h3>
            <CheckCircle className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-4xl font-bold text-gray-900 tracking-tight">98%</h4>
               <span className="text-sm font-semibold text-blue-500 flex items-center">
                 <TrendingUp className="w-3 h-3 mr-1" />
                 +0.5%
               </span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
               <div className="bg-blue-500 h-full rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-bold text-gray-600">Active Stockout Hotspots</h3>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-4xl font-bold text-red-500 tracking-tight">3</h4>
               <span className="text-sm font-semibold text-red-500 flex items-center">
                 <TrendingUp className="w-3 h-3 mr-1" />
                 +1
               </span>
            </div>
            <div className="flex space-x-1 mt-4">
               <div className="w-2 h-2 rounded-full bg-red-400"></div>
               <div className="w-2 h-2 rounded-full bg-red-400"></div>
               <div className="w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-bold text-gray-600">Total Distributed Batches</h3>
            <Package className="w-5 h-5 text-gray-700" />
          </div>
          <div>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-4xl font-bold text-gray-900 tracking-tight">1.2M</h4>
               <span className="text-xs font-semibold text-gray-500 uppercase">
                 This Month
               </span>
            </div>
            <div className="flex space-x-4 mt-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
               <span>VACCINES: 800K</span>
               <span>PPE: 400K</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-lg">Regional Overview</h3>
            <div className="flex space-x-3">
               <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
               </button>
               <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
               </button>
            </div>
          </div>
          
          <div className="overflow-x-auto p-4">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                <tr>
                  <th className="px-4 py-3">District Name</th>
                  <th className="px-4 py-3">Total Facilities</th>
                  <th className="px-4 py-3">Avg Stock Level</th>
                  <th className="px-4 py-3">Risk Level</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-5 font-bold text-gray-900 flex items-center">
                     <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                     North Sector
                  </td>
                  <td className="px-4 py-5 text-gray-600 font-medium">42</td>
                  <td className="px-4 py-5">
                    <div className="flex items-center">
                       <span className="w-8 font-bold text-gray-900 mr-2">34%</span>
                       <div className="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full rounded-full" style={{ width: '34%' }}></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-red-100 text-red-600 uppercase">HIGH</span>
                  </td>
                  <td className="px-4 py-5">
                     <button className="text-xs font-bold text-gray-900 hover:text-gray-600 text-center leading-tight">View<br/>Details</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-5 font-bold text-gray-900 flex items-center">
                     <div className="w-2 h-2 rounded-full bg-yellow-500 mr-3"></div>
                     East Valley
                  </td>
                  <td className="px-4 py-5 text-gray-600 font-medium">18</td>
                  <td className="px-4 py-5">
                    <div className="flex items-center">
                       <span className="w-8 font-bold text-gray-900 mr-2">68%</span>
                       <div className="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-yellow-500 h-full rounded-full" style={{ width: '68%' }}></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-orange-100 text-orange-600 uppercase">MEDIUM</span>
                  </td>
                  <td className="px-4 py-5">
                     <button className="text-xs font-bold text-gray-900 hover:text-gray-600 text-center leading-tight">View<br/>Details</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-5 font-bold text-gray-900 flex items-center">
                     <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                     Central Metro
                  </td>
                  <td className="px-4 py-5 text-gray-600 font-medium">156</td>
                  <td className="px-4 py-5">
                    <div className="flex items-center">
                       <span className="w-8 font-bold text-gray-900 mr-2">92%</span>
                       <div className="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full rounded-full" style={{ width: '92%' }}></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-blue-50 text-blue-600 uppercase">LOW</span>
                  </td>
                  <td className="px-4 py-5">
                     <button className="text-xs font-bold text-gray-900 hover:text-gray-600 text-center leading-tight">View<br/>Details</button>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-5 font-bold text-gray-900 flex items-center">
                     <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                     West Coast District
                  </td>
                  <td className="px-4 py-5 text-gray-600 font-medium">89</td>
                  <td className="px-4 py-5">
                    <div className="flex items-center">
                       <span className="w-8 font-bold text-gray-900 mr-2">88%</span>
                       <div className="w-24 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full rounded-full" style={{ width: '88%' }}></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-blue-50 text-blue-600 uppercase">LOW</span>
                  </td>
                  <td className="px-4 py-5">
                     <button className="text-xs font-bold text-gray-900 hover:text-gray-600 text-center leading-tight">View<br/>Details</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-red-100 shadow-sm overflow-hidden relative">
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <AlertTriangle className="w-32 h-32 text-red-500 transform translate-x-8 -translate-y-8" />
             </div>
             
             <div className="px-6 py-5">
                <h3 className="font-bold text-red-500 text-sm flex items-center tracking-wide uppercase">
                   <AlertTriangle className="w-4 h-4 mr-2" /> Risk Alerts
                </h3>
             </div>

             <div className="px-4 pb-4 space-y-4 relative z-10">
                
                <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:border-gray-200 transition-colors">
                   <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">North Sector<br/>General</h4>
                      <span className="text-[10px] text-gray-400 font-medium leading-tight text-right">10m<br/>ago</span>
                   </div>
                   <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      Critical shortage of O-Negative blood units. Estimated depletion in 4 hours.
                   </p>
                   <button className="w-full bg-[#e53e3e] text-white py-2 rounded-[4px] text-[10px] font-bold tracking-widest uppercase hover:bg-red-700 transition-colors">
                      Dispatch Priority
                   </button>
                </div>

                
                <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:border-gray-200 transition-colors">
                   <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">East Valley Clinic</h4>
                      <span className="text-[10px] text-gray-400 font-medium leading-tight text-right pt-1">1h ago</span>
                   </div>
                   <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      Cold chain warning: Freezer unit 3 fluctuating near threshold. Maintenance alerted.
                   </p>
                   <button className="w-full bg-gray-50 text-gray-700 border border-gray-200 py-2 rounded-[4px] text-[10px] font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
                      Acknowledge
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
