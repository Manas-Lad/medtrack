import React from 'react';
import { 
  CheckCircle, 
  DollarSign, 
  Box,
  TrendingUp,
  AlertTriangle,
  Clock,
  Download
} from 'lucide-react';

const VendorAnalytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Supply Chain Insights</h2>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Monthly Fulfillment Rate</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">94.2<span className="text-2xl text-gray-400">%</span></h4>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md flex items-center border border-green-100">
              <TrendingUp className="w-3 h-3 mr-1" />
              +1.4%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Revenue YTD</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight"><span className="text-2xl text-gray-400">$</span>1.2<span className="text-2xl text-gray-400">M</span></h4>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md flex items-center border border-green-100">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.5%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Most Requested SKU</h3>
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
              <Box className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="mt-2">
            <h4 className="text-lg font-bold text-gray-900 tracking-tight">Iso-Saline IV 500ml</h4>
            <p className="text-xs text-gray-500 mt-1">SKU: MED-IV-0942</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-[400px] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-4 bg-medtrack-dark rounded-full"></div>
                  <h3 className="font-bold text-gray-900 text-sm">Order Volume Trends</h3>
                </div>
                <div className="flex space-x-4 border-b border-gray-200 text-xs font-semibold">
                   <button className="pb-2 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition-colors">6M</button>
                   <button className="pb-2 border-b-2 border-gray-900 text-gray-900">1Y</button>
                </div>
              </div>
              <div className="flex-1 bg-gray-50/50 rounded-lg border border-gray-100 flex items-center justify-center text-gray-400 text-sm font-medium">
                 [Chart Placeholder: Order Volume over 1 Year]
              </div>
           </div>

           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-4 bg-medtrack-dark rounded-full"></div>
                  <h3 className="font-bold text-gray-900 text-sm">Fulfillment Performance by Region</h3>
                </div>
                <button className="text-xs font-bold text-gray-500 hover:text-gray-900 flex items-center transition-colors">
                   Export Data <Download className="w-3 h-3 ml-1" />
                </button>
              </div>
              <div className="h-64 bg-gray-50/50 rounded-lg border border-gray-100 flex items-center justify-center text-gray-400 text-sm font-medium">
                 [Chart Placeholder: Regional Heatmap/Bar Chart]
              </div>
           </div>
        </div>

        
        <div className="space-y-6">
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-[400px] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-4 bg-medtrack-dark rounded-full"></div>
                  <h3 className="font-bold text-gray-900 text-sm">Product Category</h3>
                </div>
              </div>
              <div className="flex-1 bg-gray-50/50 rounded-lg border border-gray-100 flex items-center justify-center text-gray-400 text-sm font-medium">
                 [Chart Placeholder: Category Donut Chart]
              </div>
           </div>
           
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Critical Alerts</h3>
              
              <div className="space-y-3">
                 <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                    <div className="flex space-x-3">
                       <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                       <div>
                          <h4 className="text-sm font-bold text-gray-900">Low stock: Syringes 10cc</h4>
                          <p className="text-xs text-gray-600 mt-1">Est. depletion: 48 hrs</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-gray-300 transition-colors">
                    <div className="flex space-x-3">
                       <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                       </div>
                       <div>
                          <h4 className="text-sm font-bold text-gray-900">Shipment #8892 Arrived</h4>
                          <p className="text-xs text-gray-500 mt-1">2 hrs ago, Boston East</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAnalytics;
