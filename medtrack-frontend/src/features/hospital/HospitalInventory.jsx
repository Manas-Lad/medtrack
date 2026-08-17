import React from 'react';
import { 
  Package, 
  AlertTriangle, 
  AlertCircle,
  CheckCircle,
  ArrowRightLeft,
  ShoppingCart,
  CheckSquare,
  Square
} from 'lucide-react';
import { inventoryData } from '../../data/hospitalMockData';

const getStatusBadge = (status) => {
  switch (status) {
    case 'OPTIMAL':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-widest border border-teal-200 bg-teal-50 text-[#0f766e]">
          <CheckCircle className="w-3 h-3 mr-1" /> OPTIMAL
        </span>
      );
    case 'LOW':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-widest border border-yellow-200 bg-yellow-50 text-yellow-700">
          <ArrowDownIcon className="w-3 h-3 mr-1" /> LOW
        </span>
      );
    case 'CRITICAL':
      return (
        <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] font-bold tracking-widest border border-red-200 bg-red-50 text-red-600">
          <AlertTriangle className="w-3 h-3 mr-1" /> CRITICAL
        </span>
      );
    default:
      return null;
  }
};

const HospitalInventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Site Inventory</h2>
          <p className="text-sm text-gray-500 mt-1">Real-time status of on-site medical supplies and equipment.</p>
        </div>
        <div className="flex space-x-3">
           <button className="px-4 py-2 bg-white border border-[#0f766e] text-[#0f766e] text-sm font-semibold rounded-md hover:bg-teal-50 transition-colors flex items-center">
              <ArrowRightLeft className="w-4 h-4 mr-1.5" />
              Request Transfer
           </button>
           <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition-colors flex items-center shadow-sm">
              <ShoppingCart className="w-4 h-4 mr-1.5" />
              Order More
           </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
           <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Quick Filters</h3>
           <div className="space-y-2.5 text-sm font-medium text-gray-700">
              <label className="flex items-center cursor-pointer">
                 <CheckSquare className="w-4 h-4 text-[#0f766e] mr-2" /> All Categories
              </label>
              <label className="flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition-colors">
                 <Square className="w-4 h-4 text-gray-300 mr-2" /> Consumables
              </label>
              <label className="flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition-colors">
                 <Square className="w-4 h-4 text-gray-300 mr-2" /> Fluids
              </label>
              <label className="flex items-center cursor-pointer text-gray-500 hover:text-gray-700 transition-colors">
                 <Square className="w-4 h-4 text-gray-300 mr-2" /> Medications
              </label>
              <div className="h-px bg-gray-100 my-2"></div>
              <label className="flex items-center cursor-pointer text-red-600 hover:text-red-700 transition-colors">
                 <Square className="w-4 h-4 text-red-300 mr-2" /> Critical Stock Only
              </label>
           </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
             <Package className="w-5 h-5 text-[#0f766e]" />
             <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Total SKUs</h3>
          </div>
          <div className="mt-auto">
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">1,492</h4>
            <span className="text-xs font-semibold text-gray-500">Active tracking</span>
          </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
             <AlertTriangle className="w-5 h-5 text-yellow-500" />
             <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Low Stock</h3>
          </div>
          <div className="mt-auto">
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">47</h4>
            <span className="text-xs font-semibold text-yellow-600">Requires attention</span>
          </div>
        </div>

        
        <div className="bg-red-50 rounded-xl border border-red-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
             <AlertCircle className="w-5 h-5 text-red-600" />
             <h3 className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Critical</h3>
          </div>
          <div className="mt-auto">
            <h4 className="text-3xl font-bold text-red-600 tracking-tight mb-2">12</h4>
            <span className="text-xs font-semibold text-red-600">Immediate action needed</span>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
               <thead className="text-[10px] text-gray-500 uppercase tracking-widest font-bold bg-gray-50 border-b border-gray-100">
                  <tr>
                     <th className="px-6 py-4">SKU</th>
                     <th className="px-6 py-4">Item Name</th>
                     <th className="px-6 py-4">Category</th>
                     <th className="px-6 py-4 text-right">Current Stock</th>
                     <th className="px-6 py-4 text-right">Par Level</th>
                     <th className="px-6 py-4 text-center">Status</th>
                     <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                  {inventoryData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                       <td className="px-6 py-5 font-mono text-xs font-bold text-gray-600">{item.sku}</td>
                       <td className="px-6 py-5 font-bold text-gray-900">{item.name}</td>
                       <td className="px-6 py-5 text-gray-500">{item.category}</td>
                       <td className={`px-6 py-5 text-right font-mono font-bold ${item.status === 'CRITICAL' ? 'text-red-600' : 'text-gray-900'}`}>{item.currentStock}</td>
                       <td className="px-6 py-5 text-right font-mono text-gray-500">{item.parLevel}</td>
                       <td className="px-6 py-5 text-center">
                          {getStatusBadge(item.status)}
                       </td>
                       <td className="px-6 py-5"></td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

    </div>
  );
};

const ArrowDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export default HospitalInventory;
