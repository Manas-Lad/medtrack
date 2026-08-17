import React from 'react';
import { 
  Plus, 
  Car, 
  Clock, 
  Fuel,
  Settings,
  Snowflake
} from 'lucide-react';

const VendorLogistics = () => {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Logistics Command</h2>
          <p className="text-sm text-gray-500 mt-1">Fleet & Route Management</p>
        </div>
        <button className="bg-medtrack-dark text-white rounded-md py-2 px-4 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          Schedule New Shipment
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4 text-gray-500">
            <Car className="w-4 h-4" />
            <h3 className="text-xs font-semibold uppercase tracking-wider">Active Vehicles</h3>
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">24</h4>
            <span className="text-sm font-semibold text-gray-500">/ 28 Total</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4 text-gray-500">
            <Clock className="w-4 h-4" />
            <h3 className="text-xs font-semibold uppercase tracking-wider">Average Delivery Time</h3>
          </div>
          <div className="flex items-baseline space-x-3">
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">1.4h</h4>
            <span className="text-xs font-bold text-gray-900 flex items-center">
              -12m vs last week
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4 text-gray-500">
            <Fuel className="w-4 h-4" />
            <h3 className="text-xs font-semibold uppercase tracking-wider">Fuel Efficiency</h3>
          </div>
          <div className="flex items-baseline space-x-3">
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight">94%</h4>
            <span className="text-xs font-bold text-gray-900 flex items-center">
              +2% optimization
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-1 min-h-0">
        
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden h-[600px]">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
             <h3 className="font-bold text-gray-900 text-sm">Active Delivery Routes</h3>
          </div>
          <div className="flex-1 relative bg-[#e5e9ea] flex items-center justify-center p-8">
             
             <div className="w-full h-full relative overflow-hidden rounded-lg bg-white border border-gray-200 shadow-inner">
                
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                   
                   <path d="M 100,150 L 300,250 L 450,150 L 600,300" fill="none" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" className="opacity-60" />
                   
                   <path d="M 200,400 L 350,300 L 450,450" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" className="opacity-60" />
                   
                   
                   <circle cx="100" cy="150" r="8" fill="#111827" stroke="white" strokeWidth="3" />
                   <circle cx="300" cy="250" r="10" fill="#0ea5e9" stroke="white" strokeWidth="3" />
                   <circle cx="450" cy="150" r="10" fill="#ef4444" stroke="white" strokeWidth="3" />
                   <circle cx="600" cy="300" r="8" fill="#111827" stroke="white" strokeWidth="3" />
                   <circle cx="200" cy="400" r="10" fill="#f59e0b" stroke="white" strokeWidth="3" />
                   <circle cx="350" cy="300" r="8" fill="#111827" stroke="white" strokeWidth="3" />
                   <circle cx="450" cy="450" r="10" fill="#ef4444" stroke="white" strokeWidth="3" />
                </svg>
                
                
                <div className="absolute top-24 left-[110px] bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold shadow-sm border border-gray-100">
                   St. Jude Hospital<br/><span className="text-gray-500 font-medium">(Main Hub)</span>
                </div>
                
                <div className="absolute bottom-[20%] right-[30%] bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold shadow-sm border border-gray-100">
                   City General<br/><span className="text-gray-500 font-medium">10.4 km</span>
                </div>
                
                <div className="absolute bottom-[10%] left-[20%] bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold shadow-sm border border-gray-100">
                   Metro Medical Center<br/><span className="text-gray-500 font-medium">Hub 12</span>
                </div>
             </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[600px]">
          <div className="px-6 py-4 border-b border-gray-100">
             <h3 className="font-bold text-gray-900 text-sm">Fleet Status</h3>
          </div>
          <div className="flex px-6 py-3 border-b border-gray-100 bg-gray-50/50">
             <div className="flex-1 text-xs font-semibold text-gray-500">Vehicle & Driver</div>
             <div className="text-xs font-semibold text-gray-500 text-right">Status & Temp</div>
          </div>
          <div className="flex-1 overflow-auto divide-y divide-gray-100">
             
             
             <div className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div>
                   <h4 className="font-bold text-gray-900">V-104</h4>
                   <p className="text-xs text-gray-600 mt-1">J. Smith</p>
                   <p className="text-[10px] text-gray-400 mt-0.5">Downtown Hosp.</p>
                </div>
                <div className="text-right">
                   <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wide border border-gray-300 bg-gray-200 text-gray-700 shadow-inner">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>On Route
                   </span>
                   <div className="text-xs font-bold text-gray-900 mt-2 flex items-center justify-end">
                      <Snowflake className="w-3 h-3 text-gray-400 mr-1" />
                      2.4°C
                   </div>
                </div>
             </div>

             
             <div className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div>
                   <h4 className="font-bold text-gray-900">V-089</h4>
                   <p className="text-xs text-gray-600 mt-1">A. Davis</p>
                   <p className="text-[10px] text-gray-400 mt-0.5">Hub Depot</p>
                </div>
                <div className="text-right">
                   <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wide text-gray-500">
                      Idle
                   </span>
                   <div className="text-xs font-bold text-gray-900 mt-2 flex items-center justify-end">
                      <Snowflake className="w-3 h-3 text-gray-400 mr-1" />
                      4.1°C
                   </div>
                </div>
             </div>

             
             <div className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div>
                   <h4 className="font-bold text-gray-900">V-212</h4>
                   <p className="text-xs text-gray-600 mt-1">M. Chen</p>
                   <p className="text-[10px] text-gray-400 mt-0.5">North Clinic</p>
                </div>
                <div className="text-right">
                   <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wide border border-gray-300 bg-gray-200 text-gray-700 shadow-inner">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>On Route
                   </span>
                   <div className="text-xs font-bold text-gray-900 mt-2 flex items-center justify-end">
                      <Snowflake className="w-3 h-3 text-gray-400 mr-1" />
                      2.8°C
                   </div>
                </div>
             </div>

             
             <div className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div>
                   <h4 className="font-bold text-gray-900">V-055</h4>
                   <p className="text-xs text-gray-600 mt-1">-</p>
                   <p className="text-[10px] text-gray-400 mt-0.5">Garage B</p>
                </div>
                <div className="text-right">
                   <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wide border border-red-200 bg-red-50 text-red-600">
                      <Settings className="w-3 h-3 mr-1" />
                      Maintenance
                   </span>
                   <div className="text-xs font-medium text-gray-400 mt-2 flex items-center justify-end">
                      <Snowflake className="w-3 h-3 mr-1" />
                      Off
                   </div>
                </div>
             </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogistics;
