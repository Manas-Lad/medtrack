import React from 'react';
import { 
  Building2, 
  ClipboardCheck, 
  AlertTriangle,
  ClipboardList,
  Filter,
  Search,
  CheckCircle,
  Minus,
  AlertCircle
} from 'lucide-react';

const AdminHospitals = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total Facilities</h3>
            <Building2 className="w-5 h-5 text-medtrack-teal" />
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">142</h4>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Avg Stock Index</h3>
            <ClipboardList className="w-5 h-5 text-medtrack-teal" />
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">87%</h4>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-red-100 p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
          
          <div className="absolute right-0 top-0 w-24 h-24 bg-red-50 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <h3 className="text-xs font-bold text-red-700 uppercase tracking-widest">Critical Risk</h3>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex items-baseline space-x-2 relative z-10">
            <h4 className="text-4xl font-bold text-red-600 tracking-tight">3</h4>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Pending Audits</h3>
            <ClipboardCheck className="w-5 h-5 text-medtrack-teal" />
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">12</h4>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-end items-center bg-gray-50/50">
          <div className="flex space-x-3">
             <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
             </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-100 font-bold bg-gray-50">
              <tr>
                <th className="px-6 py-4">Facility Name</th>
                <th className="px-6 py-4">District</th>
                <th className="px-6 py-4">Stock Index</th>
                <th className="px-6 py-4">Risk Status</th>
                <th className="px-6 py-4">Last Audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5">
                  <div className="font-bold text-gray-900">St. Jude Medical Center</div>
                  <div className="text-xs text-gray-400 mt-1">ID: FAC-8821</div>
                </td>
                <td className="px-6 py-5 text-gray-600">North Metro</td>
                <td className="px-6 py-5 font-bold text-gray-900">94%</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[11px] font-bold tracking-wide border border-green-200 bg-green-50 text-green-700">
                    <CheckCircle className="w-3 h-3 mr-1.5" />
                    Optimal
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-600">Oct 12, 2023</td>
              </tr>

              
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5">
                  <div className="font-bold text-gray-900">Mercy General Hospital</div>
                  <div className="text-xs text-gray-400 mt-1">ID: FAC-1044</div>
                </td>
                <td className="px-6 py-5 text-gray-600">South Metro</td>
                <td className="px-6 py-5 font-bold text-gray-900">82%</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[11px] font-bold tracking-wide border border-gray-300 bg-gray-200 text-gray-600">
                    <Minus className="w-3 h-3 mr-1.5" />
                    Stable
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-600">Oct 10, 2023</td>
              </tr>

              
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5">
                  <div className="font-bold text-gray-900">Valley Memorial Clinic</div>
                  <div className="text-xs text-gray-400 mt-1">ID: FAC-9022</div>
                </td>
                <td className="px-6 py-5 text-gray-600">East Region</td>
                <td className="px-6 py-5 font-bold text-red-500">41%</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[11px] font-bold tracking-wide border border-red-200 bg-red-50 text-red-600">
                    <AlertTriangle className="w-3 h-3 mr-1.5" />
                    Critical
                  </span>
                </td>
                <td className="px-6 py-5 text-red-500">Sep 28, 2023</td>
              </tr>

              
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5">
                  <div className="font-bold text-gray-900">Cedar Sinai Regional</div>
                  <div className="text-xs text-gray-400 mt-1">ID: FAC-3310</div>
                </td>
                <td className="px-6 py-5 text-gray-600">West Valley</td>
                <td className="px-6 py-5 font-bold text-gray-900">65%</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[11px] font-bold tracking-wide border border-gray-300 bg-gray-200 text-gray-700">
                    <AlertCircle className="w-3 h-3 mr-1.5" />
                    Warning
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-600">Oct 05, 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        
        <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/30">
           <span className="text-xs text-gray-500 font-medium">Showing <strong className="text-gray-900">1 to 4</strong> of <strong className="text-gray-900">142</strong> entries</span>
           <div className="flex space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50">
                 &lt;
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                 &gt;
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHospitals;
