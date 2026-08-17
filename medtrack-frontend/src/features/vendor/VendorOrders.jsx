import React from 'react';
import { 
  FileText, 
  Truck, 
  Search,
  ChevronRight
} from 'lucide-react';

const VendorOrders = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Vendor Portal</h2>
        <p className="text-sm text-gray-500">Manage incoming requisitions and active shipments.</p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-semibold text-gray-600">Open POs</h3>
            <FileText className="w-8 h-8 text-gray-200" />
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">24</h4>
            <span className="text-xs font-semibold text-gray-500 flex items-center">
              <span className="text-gray-900 mr-0.5">↑</span>12%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-semibold text-gray-600">In-Transit Shipments</h3>
            <Truck className="w-8 h-8 text-gray-200" />
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">18</h4>
            <span className="text-xs font-semibold text-gray-500 flex items-center">
              <span className="w-2 h-[2px] bg-gray-400 mr-1 rounded-full"></span>Stable
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
          
          <div className="absolute right-0 top-0 w-24 h-24 bg-gray-50 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="flex justify-between items-start mb-2 relative z-10">
            <h3 className="text-sm font-semibold text-gray-600">On-Time Fulfillment</h3>
          </div>
          <div className="flex items-baseline space-x-2 relative z-10">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">94.2<span className="text-2xl text-gray-500">%</span></h4>
            <span className="text-xs font-semibold text-gray-500 flex items-center">
              <span className="text-gray-900 mr-0.5">↑</span>2.1%
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="font-bold text-gray-900 text-lg">Incoming Requisitions</h3>
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search orders..." 
                className="pl-9 pr-4 py-1.5 w-48 border-none text-sm focus:ring-0 bg-transparent placeholder-gray-400"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] text-gray-500 uppercase tracking-wider border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Hospital Name</th>
                  <th className="px-6 py-4 font-semibold">Order ID</th>
                  <th className="px-6 py-4 font-semibold">Priority</th>
                  <th className="px-6 py-4 font-semibold">Items</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">Mercy<br/>General<br/>Hospital</td>
                  <td className="px-6 py-4 text-gray-600 font-medium">REQ-<br/>8902</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest border border-gray-900 bg-transparent text-gray-900">CRITICAL</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-medium">42<br/>Units</td>
                  <td className="px-6 py-4 text-gray-500 font-medium">Pending<br/>Review</td>
                  <td className="px-6 py-4">
                    <div className="flex border border-gray-200 rounded-md overflow-hidden bg-gray-100 w-max">
                      <button className="px-4 py-2 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors border-r border-gray-200">Accept</button>
                      <button className="px-4 py-2 text-xs font-bold text-white bg-medtrack-dark hover:bg-gray-800 transition-colors shadow-inner">Dispatch</button>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">St. Jude<br/>Medical<br/>Center</td>
                  <td className="px-6 py-4 text-gray-600 font-medium">REQ-<br/>8901</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest border border-yellow-500 bg-transparent text-yellow-600">STANDARD</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-medium">150<br/>Units</td>
                  <td className="px-6 py-4 text-gray-500 font-medium">Processing</td>
                  <td className="px-6 py-4">
                    <div className="flex border border-gray-200 rounded-md overflow-hidden bg-gray-100 w-max opacity-60">
                      <button className="px-4 py-2 text-xs font-bold text-gray-700 bg-gray-100 border-r border-gray-200">Details</button>
                      <button className="px-4 py-2 text-xs font-bold text-gray-400 bg-gray-100" disabled>Dispatch</button>
                    </div>
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">City<br/>Health<br/>Clinic</td>
                  <td className="px-6 py-4 text-gray-600 font-medium">REQ-<br/>8895</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest border border-yellow-500 bg-transparent text-yellow-600">STANDARD</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-medium">12<br/>Units</td>
                  <td className="px-6 py-4 text-gray-500 font-medium">Awaiting<br/>Stock</td>
                  <td className="px-6 py-4">
                    <div className="flex border border-gray-200 rounded-md overflow-hidden bg-gray-100 w-max opacity-60">
                      <button className="px-4 py-2 text-xs font-bold text-gray-700 bg-gray-100 border-r border-gray-200">Details</button>
                      <button className="px-4 py-2 text-xs font-bold text-gray-400 bg-gray-100" disabled>Dispatch</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="space-y-6">
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900 text-base">Cold-Chain Live</h3>
              <div className="w-6 h-6 rounded-full border-[3px] border-gray-200 flex items-center justify-center p-0.5">
                 <div className="w-full h-full bg-medtrack-dark rounded-full"></div>
              </div>
            </div>
            
            <div className="border border-gray-100 bg-gray-50/50 p-4 rounded-lg mb-4 shadow-inner">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Vaccine Batch #402</h4>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">4°C</div>
                  <div className="text-[10px] text-gray-500 font-medium">Stable</div>
                </div>
              </div>
              
              
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden mb-6">
                <div className="bg-medtrack-dark w-1/3 h-full rounded-full"></div>
              </div>
              
              
              <div className="flex items-end space-x-1 h-8 opacity-60">
                <div className="w-full bg-gray-400 h-[40%] rounded-sm"></div>
                <div className="w-full bg-gray-400 h-[45%] rounded-sm"></div>
                <div className="w-full bg-gray-400 h-[35%] rounded-sm"></div>
                <div className="w-full bg-gray-400 h-[50%] rounded-sm"></div>
                <div className="w-full bg-medtrack-dark h-[60%] rounded-sm opacity-100"></div>
                <div className="w-full bg-gray-400 h-[45%] rounded-sm"></div>
                <div className="w-full bg-gray-400 h-[40%] rounded-sm"></div>
                <div className="w-full bg-medtrack-dark h-[70%] rounded-sm opacity-100"></div>
                <div className="w-full bg-medtrack-dark h-[100%] rounded-sm opacity-100"></div>
                <div className="w-full bg-gray-400 h-[55%] rounded-sm"></div>
              </div>
            </div>
          </div>
          
          
          <div className="space-y-2">
            <button className="w-full flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-gray-300 transition-colors group">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">View Carrier Network</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            </button>
            <button className="w-full flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-gray-300 transition-colors group">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Generate Manifests</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorOrders;
