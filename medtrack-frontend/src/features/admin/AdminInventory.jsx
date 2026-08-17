import React from 'react';
import { 
  Package, 
  AlertTriangle, 
  Clock, 
  Snowflake,
  TrendingUp,
  Map,
  Syringe,
  Box,
  Briefcase,
  CheckCircle
} from 'lucide-react';

const AdminInventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">National Inventory Health</h2>
          <p className="text-sm text-gray-500 mt-1">System-wide overview of critical supplies and logistical integrity.</p>
        </div>
        <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-widest bg-white border border-gray-200 px-3 py-1.5 rounded-md shadow-sm">
           <Clock className="w-3 h-3 mr-2" />
           Last Updated: Just Now
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between border-b-4 border-b-[#0f766e]">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
               <Package className="w-4 h-4 text-[#0f766e]" />
            </div>
            <span className="text-xs font-bold text-[#0f766e] bg-teal-50 px-2 py-1 rounded-md flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              +0.2%
            </span>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Total SKU Availability</h3>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">96.4%</h4>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-red-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center border border-red-100">
               <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Critical Stock-Outs</h3>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-3xl font-bold text-red-500 tracking-tight">14</h4>
               <span className="text-sm font-semibold text-gray-500">Facilities</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
               <Clock className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Expiring Within 30D</h3>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-3xl font-bold text-gray-900 tracking-tight">245</h4>
               <span className="text-sm font-semibold text-gray-500">Batches</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between border-b-4 border-b-gray-300">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
               <Snowflake className="w-4 h-4 text-blue-900" />
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Cold-Chain Integrity</h3>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">99.1%</h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="px-6 py-5 flex justify-between items-center border-b border-gray-100">
            <h3 className="font-bold text-gray-900 text-lg">Inventory Heatmap by District</h3>
            <button className="text-sm font-bold text-[#0f766e] hover:text-teal-800 transition-colors flex items-center">
               View Map
            </button>
          </div>
          
          <div className="overflow-x-auto p-2">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-4">District</th>
                  <th className="px-6 py-4">Avg Stock Level</th>
                  <th className="px-6 py-4">Capacity</th>
                  <th className="px-6 py-4 text-right">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-bold text-gray-900">North Sector</td>
                  <td className="px-6 py-5 text-gray-600 font-mono">88.5%</td>
                  <td className="px-6 py-5">
                    <div className="w-32 bg-gray-200 h-2 rounded-full overflow-hidden">
                       <div className="bg-[#0f766e] h-full rounded-full" style={{ width: '88.5%' }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase">
                      <CheckCircle className="w-3 h-3 mr-1" /> LOW
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-bold text-gray-900">East Valley</td>
                  <td className="px-6 py-5 text-gray-600 font-mono">42.1%</td>
                  <td className="px-6 py-5">
                    <div className="w-32 bg-gray-200 h-2 rounded-full overflow-hidden">
                       <div className="bg-gray-500 h-full rounded-full" style={{ width: '42.1%' }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-gray-50 text-gray-600 border border-gray-200 uppercase">
                      - MED
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-bold text-gray-900 flex items-center">
                    Central Metro <div className="w-2 h-2 rounded-full bg-red-500 ml-2"></div>
                  </td>
                  <td className="px-6 py-5 text-red-600 font-bold font-mono">12.4%</td>
                  <td className="px-6 py-5">
                    <div className="w-32 bg-red-100 h-2 rounded-full overflow-hidden">
                       <div className="bg-red-600 h-full rounded-full" style={{ width: '12.4%' }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-red-600 text-white uppercase">
                      ! HIGH
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-bold text-gray-900">West Coastal</td>
                  <td className="px-6 py-5 text-gray-600 font-mono">91.0%</td>
                  <td className="px-6 py-5">
                    <div className="w-32 bg-gray-200 h-2 rounded-full overflow-hidden">
                       <div className="bg-[#0f766e] h-full rounded-full" style={{ width: '91%' }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase">
                      <CheckCircle className="w-3 h-3 mr-1" /> LOW
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-bold text-gray-900">South Annex</td>
                  <td className="px-6 py-5 text-gray-600 font-mono">65.8%</td>
                  <td className="px-6 py-5">
                    <div className="w-32 bg-gray-200 h-2 rounded-full overflow-hidden">
                       <div className="bg-gray-500 h-full rounded-full" style={{ width: '65.8%' }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-gray-50 text-gray-600 border border-gray-200 uppercase">
                      - MED
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100">
             <h3 className="font-bold text-gray-900 text-lg">Top 5 At-Risk SKUs</h3>
          </div>
          <div className="p-4 flex-1 flex flex-col space-y-4">
             
             
             <div className="border border-red-200 bg-red-50/30 rounded-lg p-4">
                <div className="flex space-x-4 items-center">
                   <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center shrink-0">
                      <Syringe className="w-5 h-5 text-red-500" />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-900">Epinephrine Auto-Injectors</h4>
                      <div className="text-xs text-gray-600 mt-1">
                         Stock: <span className="font-bold text-red-500 font-mono">1,204</span> units
                      </div>
                      <div className="text-[10px] font-mono text-red-500 mt-1.5 flex items-center">
                         <Clock className="w-3 h-3 mr-1" />
                         Depletes in 4 Days
                      </div>
                   </div>
                </div>
             </div>

             
             <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex space-x-4 items-center">
                   <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center shrink-0">
                      <Box className="w-5 h-5 text-gray-600" />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-900">Insulin Glargine</h4>
                      <div className="text-xs text-gray-600 mt-1">
                         Stock: <span className="font-bold text-gray-900 font-mono">8,450</span> vials
                      </div>
                      <div className="text-[10px] font-mono text-gray-500 mt-1.5 flex items-center">
                         <Clock className="w-3 h-3 mr-1" />
                         Depletes in 12 Days
                      </div>
                   </div>
                </div>
             </div>

             
             <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex space-x-4 items-center">
                   <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-gray-600" />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-900">Surgical Trauma Kits (Type B)</h4>
                      <div className="text-xs text-gray-600 mt-1">
                         Stock: <span className="font-bold text-gray-900 font-mono">430</span> kits
                      </div>
                      <div className="text-[10px] font-mono text-gray-500 mt-1.5 flex items-center">
                         <Clock className="w-3 h-3 mr-1" />
                         Depletes in 15 Days
                      </div>
                   </div>
                </div>
             </div>
             
             <button className="w-full mt-auto bg-white border border-[#0f766e] text-[#0f766e] py-2 rounded-md text-xs font-bold hover:bg-teal-50 transition-colors">
                View All Risks
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInventory;
