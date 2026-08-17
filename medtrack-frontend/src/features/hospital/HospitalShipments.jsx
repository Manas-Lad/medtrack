import React from 'react';
import { 
  Plus, 
  TrendingUp, 
  AlertTriangle,
  Filter,
  Download,
  Building2,
  Box,
  Truck,
  CheckCircle,
  Clock,
  ShieldAlert,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { shipmentsData } from '../../data/hospitalMockData';

const getStatusBadge = (status) => {
  switch (status) {
    case 'IN TRANSIT':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest border border-teal-200 bg-teal-50 text-[#0f766e]">
          <Truck className="w-3 h-3 mr-1" /> IN TRANSIT
        </span>
      );
    case 'IN PRODUCTION':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest border border-gray-200 bg-gray-100 text-gray-600">
          <Clock className="w-3 h-3 mr-1" /> IN PRODUCTION
        </span>
      );
    case 'RECEIVED':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest border border-gray-200 bg-white text-gray-500">
          <CheckCircle className="w-3 h-3 mr-1" /> RECEIVED
        </span>
      );
    case 'DELAYED':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest border border-red-200 bg-red-50 text-red-600">
          <AlertTriangle className="w-3 h-3 mr-1" /> DELAYED
        </span>
      );
    default:
      return null;
  }
};

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Building2': return <Building2 className="w-4 h-4 text-gray-500" />;
    case 'Box': return <Box className="w-4 h-4 text-gray-500" />;
    case 'CheckCircle': return <CheckCircle className="w-4 h-4 text-gray-500" />;
    case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 text-gray-500" />;
    default: return <Box className="w-4 h-4 text-gray-500" />;
  }
};

const HospitalShipments = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Procurement Orders</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and track active hospital supply shipments.</p>
        </div>
        <div>
           <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition-colors flex items-center shadow-sm">
              <Plus className="w-4 h-4 mr-1.5" />
              Initiate New Order
           </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex items-center justify-between relative overflow-hidden">
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-teal-50 rounded-l-full transform translate-x-10"></div>
           <div className="relative z-10">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Active Shipments</h3>
              <div className="flex items-center">
                 <h4 className="text-3xl font-bold text-gray-900 tracking-tight mr-3">24</h4>
                 <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#0f766e] text-white">
                    <TrendingUp className="w-3 h-3 mr-1" /> 12%
                 </span>
              </div>
           </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex items-center justify-between relative overflow-hidden">
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gray-50 rounded-l-full transform translate-x-10"></div>
           <div className="relative z-10">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Requires Attention</h3>
              <div className="flex items-center">
                 <h4 className="text-3xl font-bold text-gray-900 tracking-tight mr-3">3</h4>
                 <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-600 border border-red-200">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Critical
                 </span>
              </div>
           </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex items-center justify-between relative overflow-hidden">
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gray-50 rounded-l-full transform translate-x-10"></div>
           <div className="relative z-10">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">YTD Spend</h3>
              <h4 className="text-3xl font-bold text-gray-900 tracking-tight">$1.2M</h4>
           </div>
        </div>

      </div>

      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col">
         
         
         <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <div className="flex space-x-2">
               <button className="px-4 py-1.5 text-sm font-semibold rounded bg-teal-50 border border-teal-200 text-[#0f766e]">All Orders</button>
               <button className="px-4 py-1.5 text-sm font-semibold rounded bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">In Transit</button>
               <button className="px-4 py-1.5 text-sm font-semibold rounded bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">Completed</button>
            </div>
            <div className="flex space-x-2">
               <button className="p-2 bg-white border border-gray-200 rounded text-gray-400 hover:text-gray-600 transition-colors shadow-sm">
                  <Filter className="w-4 h-4" />
               </button>
               <button className="p-2 bg-white border border-gray-200 rounded text-gray-400 hover:text-gray-600 transition-colors shadow-sm">
                  <Download className="w-4 h-4" />
               </button>
            </div>
         </div>

         
         <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
               <thead className="text-[10px] text-gray-500 uppercase tracking-widest font-bold bg-gray-50">
                  <tr>
                     <th className="px-6 py-4">Order ID</th>
                     <th className="px-6 py-4">Date</th>
                     <th className="px-6 py-4">Vendor / Facility</th>
                     <th className="px-6 py-4">Total Value</th>
                     <th className="px-6 py-4">Fulfillment Status</th>
                     <th className="px-6 py-4">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                  {shipmentsData.map((shipment, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                       <td className="px-6 py-5 font-mono text-xs font-bold text-gray-900">{shipment.id}</td>
                       <td className="px-6 py-5 text-gray-500">{shipment.date}</td>
                       <td className="px-6 py-5">
                          <div className="flex items-start">
                             <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-3 shrink-0 border border-gray-200">
                                {getIcon(shipment.icon)}
                             </div>
                             <div>
                                <p className="font-bold text-gray-900">{shipment.vendor}</p>
                                <p className="text-xs text-gray-500 mt-0.5">Dest: {shipment.destination}</p>
                             </div>
                          </div>
                       </td>
                       <td className="px-6 py-5 font-mono font-bold text-gray-900">{shipment.value}</td>
                       <td className="px-6 py-5">
                          {getStatusBadge(shipment.status)}
                       </td>
                       <td className="px-6 py-5">
                          <button className={`font-bold transition-colors ${shipment.status === 'DELAYED' ? 'text-red-600 hover:text-red-800' : 'text-[#0f766e] hover:text-teal-800'}`}>
                             {shipment.action}
                          </button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>

         
         <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
            <div>
               Showing 1-4 of 124<br/>Orders
            </div>
            <div className="flex space-x-2">
               <button className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-400">
                  <ChevronLeft className="w-4 h-4" />
               </button>
               <button className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-400">
                  <ChevronRight className="w-4 h-4" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HospitalShipments;
