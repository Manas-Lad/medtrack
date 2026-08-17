import React from 'react';
import { 
  FileText, 
  Building2, 
  Clock, 
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Truck,
  Package,
  ShieldAlert,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';

const AdminOrders = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">System-wide Orders & Procurement</h2>
          <p className="text-sm text-gray-500 mt-1">Oversight of active supply chains, vendor fulfillment rates, and high-priority logistics pipelines across the national network.</p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
               <FileText className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-xs font-bold text-[#0f766e] flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              2.4%
            </span>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Active Purchase Orders</h3>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-3xl font-bold text-gray-900 tracking-tight">1,240</h4>
               <span className="text-sm font-semibold text-gray-500">POs</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
               <Building2 className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Total Procurement Value</h3>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-3xl font-bold text-gray-900 tracking-tight"><span className="text-xl">$</span>12.8M</h4>
               <span className="text-xs font-semibold text-gray-500 uppercase">This Month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
               <Clock className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-xs font-bold text-green-500 flex items-center">
              <TrendingDown className="w-3 h-3 mr-1" />
              0.3d
            </span>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Average Fulfillment Time</h3>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-3xl font-bold text-gray-900 tracking-tight">4.2</h4>
               <span className="text-sm font-semibold text-gray-500">Days</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
               <CheckCircle className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Vendor Fulfillment Rate</h3>
            <div className="flex items-baseline space-x-2">
               <h4 className="text-3xl font-bold text-gray-900 tracking-tight">94.8%</h4>
               <span className="text-sm font-semibold text-gray-500">Avg</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div className="px-6 py-5 flex justify-between items-start border-b border-gray-100">
             <div>
               <h3 className="font-bold text-gray-900 text-lg">Recent Large-Scale Procurement Batches</h3>
               <p className="text-xs text-gray-500 mt-1">Real-time status of critical inventory orders.</p>
             </div>
            <button className="text-sm font-bold text-[#0f766e] hover:text-teal-800 transition-colors flex items-center">
               View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="overflow-x-auto p-2">
            <table className="w-full text-sm text-left">
              <thead className="text-[10px] text-gray-500 uppercase tracking-widest font-bold border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Vendor Name</th>
                  <th className="px-6 py-4">Item Category</th>
                  <th className="px-6 py-4">Order Value</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-mono text-xs font-bold text-gray-600">PO-8829-X</td>
                  <td className="px-6 py-5 font-bold text-gray-900">MedTech Global Supplies</td>
                  <td className="px-6 py-5 text-gray-600">Surgical Kits</td>
                  <td className="px-6 py-5 font-bold text-gray-900 font-mono">$450,000</td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 border border-emerald-200 text-emerald-700">
                      <CheckCircle className="w-3 h-3 mr-1.5" /> Arrived
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-mono text-xs font-bold text-gray-600">PO-8834-Y</td>
                  <td className="px-6 py-5 font-bold text-gray-900">BioGen Logistics</td>
                  <td className="px-6 py-5 text-gray-600">Biologics / mRNA</td>
                  <td className="px-6 py-5 font-bold text-gray-900 font-mono">$1,200,500</td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-gray-100 border border-gray-300 text-gray-700">
                      <Truck className="w-3 h-3 mr-1.5" /> In Transit
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-mono text-xs font-bold text-gray-600">PO-8840-Z</td>
                  <td className="px-6 py-5 font-bold text-gray-900">Apex Medical Devices</td>
                  <td className="px-6 py-5 text-gray-600">Diagnostic Equipment</td>
                  <td className="px-6 py-5 font-bold text-gray-900 font-mono">$890,200</td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-gray-50 border border-gray-200 text-gray-500">
                      <Clock className="w-3 h-3 mr-1.5" /> Pending
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 font-mono text-xs font-bold text-gray-600">PO-8842-W</td>
                  <td className="px-6 py-5 font-bold text-gray-900">OmniCare Pharmaceuticals</td>
                  <td className="px-6 py-5 text-gray-600">Anesthetics</td>
                  <td className="px-6 py-5 font-bold text-gray-900 font-mono">$320,000</td>
                  <td className="px-6 py-5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-red-50 border border-red-200 text-red-600">
                      <AlertTriangle className="w-3 h-3 mr-1.5" /> Delayed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="space-y-6">
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-6">Fulfillment Pipeline</h3>
              
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between items-center mb-2 text-sm font-semibold text-gray-700">
                       <span className="flex items-center"><Building2 className="w-4 h-4 mr-2 text-gray-400" /> In Production</span>
                       <span className="text-gray-900">18%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                       <div className="bg-gray-500 h-full rounded-full" style={{ width: '18%' }}></div>
                    </div>
                 </div>

                 <div>
                    <div className="flex justify-between items-center mb-2 text-sm font-semibold text-gray-700">
                       <span className="flex items-center"><Truck className="w-4 h-4 mr-2 text-gray-400" /> In Transit</span>
                       <span className="text-gray-900">42%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                       <div className="bg-[#0f766e] h-full rounded-full" style={{ width: '42%' }}></div>
                    </div>
                 </div>

                 <div>
                    <div className="flex justify-between items-center mb-2 text-sm font-semibold text-gray-700">
                       <span className="flex items-center"><ShieldAlert className="w-4 h-4 mr-2 text-gray-400" /> Customs / QA</span>
                       <span className="text-gray-900">12%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                       <div className="bg-gray-500 h-full rounded-full" style={{ width: '12%' }}></div>
                    </div>
                 </div>

                 <div>
                    <div className="flex justify-between items-center mb-2 text-sm font-semibold text-gray-700">
                       <span className="flex items-center"><Package className="w-4 h-4 mr-2 text-gray-400" /> Delivered</span>
                       <span className="text-[#0f766e]">28%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                       <div className="bg-[#4ade80] h-full rounded-full" style={{ width: '28%' }}></div>
                    </div>
                 </div>
              </div>
           </div>

           
           <div className="bg-white rounded-xl border border-red-100 shadow-sm p-6 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-red-600 flex items-center text-lg">
                    <AlertTriangle className="w-5 h-5 mr-2" /> Action Required
                 </h3>
                 <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
              </div>
              
              <div className="space-y-3 relative z-10">
                 
                 <div className="border border-red-200 bg-red-50/50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-xs font-bold text-gray-900 font-mono tracking-widest">PO-8842-W</h4>
                       <span className="text-[10px] text-red-500 font-bold tracking-widest uppercase">48h Delay</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                       OmniCare Anesthetics shipment stalled at regional transit hub.
                    </p>
                    <button className="text-[11px] font-bold text-gray-900 flex items-center hover:text-gray-600 transition-colors">
                       Intervene <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                 </div>

                 
                 <div className="border border-gray-200 bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-xs font-bold text-gray-900 tracking-widest">Vendor Alert</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                       Apex Medical Devices compliance documentation expiring in 5 days.
                    </p>
                    <button className="text-[11px] font-bold text-gray-900 flex items-center hover:text-gray-600 transition-colors">
                       Request Docs <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
