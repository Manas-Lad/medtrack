import React from 'react';
import { 
  Box, 
  AlertTriangle, 
  Snowflake,
  Filter,
  Download,
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const VendorInventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Warehouse Inventory</h2>
          <p className="text-sm text-gray-500 mt-1">Manage global medical supply levels and track critical stock.</p>
        </div>
        <button className="bg-medtrack-dark text-white rounded-md py-2 px-4 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          Manual Stock Update
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total SKU Count</h3>
            <Box className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">12,450</h4>
            <span className="text-xs font-semibold text-green-500 flex items-center">
              +1.2%
            </span>
          </div>
          <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
             <div className="bg-green-500 h-full rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Expiring Batches (30D)</h3>
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-red-500 tracking-tight">42</h4>
            <span className="text-xs font-semibold text-red-500 flex items-center">
              Critical
            </span>
          </div>
          <div className="flex space-x-1 mt-4">
            <div className="w-1/3 bg-red-500 h-1.5 rounded-full"></div>
            <div className="w-1/4 bg-red-300 h-1.5 rounded-full"></div>
            <div className="w-1/4 bg-gray-200 h-1.5 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Cold-Chain Storage</h3>
            <Snowflake className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">88<span className="text-2xl text-gray-400">%</span></h4>
            <span className="text-xs font-semibold text-gray-500 flex items-center">
              Utilized
            </span>
          </div>
          <div className="w-full bg-gray-100 h-1.5 rounded-full mt-4 overflow-hidden">
             <div className="bg-gray-700 h-full rounded-full" style={{ width: '88%' }}></div>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="font-bold text-gray-900 text-lg">Active Inventory Manifest</h3>
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
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-100 font-bold">
              <tr>
                <th className="px-6 py-4">SKU</th>
                <th className="px-6 py-4">Item Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Current Stock</th>
                <th className="px-6 py-4">Unit</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-500">#VAC-MRNA-001</td>
                <td className="px-6 py-4 font-bold text-gray-900">mRNA Vaccine<br/><span className="text-xs text-gray-500 font-medium">(Bivalent)</span></td>
                <td className="px-6 py-4 text-gray-500">Biologics</td>
                <td className="px-6 py-4 font-bold text-gray-900">14,200</td>
                <td className="px-6 py-4 text-gray-500">Vials</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-[11px] font-bold tracking-wide text-green-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>In Stock
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-5 h-5 mx-auto"/></button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-500">#SUR-KIT-112</td>
                <td className="px-6 py-4 font-bold text-gray-900">Advanced Surgical Kit</td>
                <td className="px-6 py-4 text-gray-500">Equipment</td>
                <td className="px-6 py-4 font-bold text-red-500">12</td>
                <td className="px-6 py-4 text-gray-500">Kits</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-[11px] font-bold tracking-wide text-red-500">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>Critical
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-5 h-5 mx-auto"/></button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-500">#FL-SAL-500</td>
                <td className="px-6 py-4 font-bold text-gray-900">Saline Solution (0.9%)</td>
                <td className="px-6 py-4 text-gray-500">Fluids</td>
                <td className="px-6 py-4 font-bold text-gray-900">450</td>
                <td className="px-6 py-4 text-gray-500">Bags<br/><span className="text-xs font-medium">(500ml)</span></td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[11px] font-bold tracking-wide bg-gray-100 text-gray-500">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>Low Stock
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-5 h-5 mx-auto"/></button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-500">#PPE-N95-STD</td>
                <td className="px-6 py-4 font-bold text-gray-900">N95 Respirator Masks</td>
                <td className="px-6 py-4 text-gray-500">PPE</td>
                <td className="px-6 py-4 font-bold text-gray-900">8,500</td>
                <td className="px-6 py-4 text-gray-500">Boxes (50)</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center text-[11px] font-bold tracking-wide text-green-600">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>In Stock
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-5 h-5 mx-auto"/></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        
        <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/30">
           <span className="text-xs text-gray-500 font-medium">Showing 1-4 of 12,450 entries</span>
           <div className="flex space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50">
                 <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                 <ChevronRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default VendorInventory;
