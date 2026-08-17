import React from 'react';
import { 
  Filter, 
  Download,
  AlertTriangle,
  Truck,
  CheckCircle,
  Thermometer,
  QrCode,
  Box,
  MapPin,
  Building2
} from 'lucide-react';

const AdminLogistics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        
        <div className="ml-auto flex space-x-3">
          <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white shadow-sm">
             <Filter className="w-4 h-4" />
             <span>Filter View</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white shadow-sm">
             <Download className="w-4 h-4" />
             <span>Export Manifest</span>
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-gray-50 rounded-full transform translate-x-1/3 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-xs font-bold text-gray-700 tracking-widest font-mono mb-6">Active Inbound</h3>
            <div className="flex items-baseline space-x-2">
              <h4 className="text-5xl font-bold text-gray-900 tracking-tight">24</h4>
              <span className="text-sm font-semibold text-gray-600">Shipments</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-50/50 rounded-full transform translate-x-1/3 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-xs font-bold text-gray-700 tracking-widest font-mono mb-6">Arriving Today</h3>
            <div className="flex items-baseline space-x-2">
              <h4 className="text-5xl font-bold text-gray-900 tracking-tight">08</h4>
              <span className="text-sm font-semibold text-gray-600">Batches</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-red-100 p-6 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-red-50 rounded-full transform translate-x-1/3 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-xs font-bold text-red-600 tracking-widest font-mono mb-6 flex items-center">
               <AlertTriangle className="w-4 h-4 mr-2" />
               Action Required
            </h3>
            <div className="flex items-baseline space-x-2">
              <h4 className="text-5xl font-bold text-red-600 tracking-tight">02</h4>
              <span className="text-sm font-semibold text-red-500">Cold-Chain Alerts</span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
           <div>
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <h3 className="text-xs font-mono text-gray-500 tracking-widest mb-1">PO-2023-8891A</h3>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Surgical Consumables</h2>
                 </div>
                 <div className="flex items-center px-2 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs font-bold text-gray-700">
                    <Truck className="w-3 h-3 mr-1.5" />
                    Out for Delivery
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Supplier</p>
                    <p className="text-sm font-medium text-gray-900">MedTech Global Inc.</p>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Estimated Arrival</p>
                    <p className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700 tracking-widest font-mono">TODAY 14:30</p>
                 </div>
              </div>
              
              <div className="mb-6">
                 <p className="text-xs text-gray-500 font-medium mb-1">Contents</p>
                 <p className="text-sm text-gray-700">Sterile Drapes (x500), Scalpel Blades #10 (x1000), Suture Kits (x250)</p>
              </div>
           </div>
           
           <div className="flex justify-between items-end mt-4">
              <div className="flex space-x-2">
                 <span className="inline-flex items-center px-2 py-1 bg-teal-50 border border-teal-100 rounded text-[10px] font-bold text-teal-700 uppercase tracking-widest">
                    <Thermometer className="w-3 h-3 mr-1" />
                    Cold-Chain OK
                 </span>
                 <span className="inline-flex items-center px-2 py-1 bg-gray-50 border border-gray-200 rounded text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                    <QrCode className="w-3 h-3 mr-1" />
                    Scan Req
                 </span>
              </div>
              <button className="px-4 py-2 border border-gray-200 text-gray-400 bg-gray-50 text-sm font-bold rounded-md" disabled>
                 Receive Batch
              </button>
           </div>
        </div>

        
        <div className="bg-white rounded-xl border-[2px] border-emerald-500 shadow-sm p-6 flex flex-col justify-between relative overflow-hidden">
           
           <div className="absolute inset-0 bg-emerald-50 opacity-10 pointer-events-none"></div>
           
           <div>
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <h3 className="text-xs font-mono text-gray-500 tracking-widest mb-1">PO-2023-8892B</h3>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">MRI Contrast Agents</h2>
                 </div>
                 <div className="flex items-center px-2 py-1 bg-emerald-100 border border-emerald-200 rounded-md text-xs font-bold text-emerald-800">
                    <CheckCircle className="w-3 h-3 mr-1.5" />
                    Arrived at Dock
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Supplier</p>
                    <p className="text-sm font-medium text-gray-900">Bayer Healthcare</p>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Arrival Time</p>
                    <p className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700 tracking-widest font-mono">TODAY 09:15</p>
                 </div>
              </div>
              
              <div className="mb-6">
                 <p className="text-xs text-gray-500 font-medium mb-1">Contents</p>
                 <p className="text-sm text-gray-700">Gadolinium-based contrast medium (x50 vials)</p>
              </div>
           </div>
           
           <div className="flex justify-between items-end mt-4">
              <div className="flex space-x-2">
                 <span className="inline-flex items-center px-2 py-1 bg-emerald-50 border border-emerald-100 rounded text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
                    <Thermometer className="w-3 h-3 mr-1" />
                    Temp: 4°C OK
                 </span>
              </div>
              <button className="px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-md hover:bg-gray-800 transition-colors flex items-center shadow-md">
                 <Box className="w-4 h-4 mr-2" />
                 Receive Batch
              </button>
           </div>
        </div>

        
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
           <div>
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <h3 className="text-xs font-mono text-gray-500 tracking-widest mb-1">PO-2023-8895C</h3>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Cardiac Stents & Valves</h2>
                 </div>
                 <div className="flex items-center px-2 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs font-bold text-gray-700">
                    <MapPin className="w-3 h-3 mr-1.5" />
                    In Transit
                 </div>
              </div>
              
              <div className="flex mb-2">
                 <div className="flex-1">
                    <div className="mb-6">
                       <p className="text-xs text-gray-500 font-medium mb-1">Supplier</p>
                       <p className="text-sm font-medium text-gray-900">Edwards Lifesciences</p>
                    </div>
                    <div>
                       <p className="text-xs text-gray-500 font-medium mb-1">Estimated Arrival</p>
                       <p className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700 tracking-widest font-mono">TOMORROW 10:00</p>
                    </div>
                 </div>
                 
                 
                 <div className="w-40 h-32 bg-[#e5e9ea] rounded-lg border border-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                       <path d="M 20,100 L 80,60 L 140,20" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="4 4" />
                       <circle cx="80" cy="60" r="4" fill="#0ea5e9" stroke="white" strokeWidth="2" />
                       <circle cx="140" cy="20" r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
                    </svg>
                 </div>
              </div>
           </div>
        </div>

        
        <div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 flex flex-col justify-between relative">
           <div className="absolute top-0 left-0 w-full h-1 bg-red-500 rounded-t-xl"></div>
           <div>
              <div className="flex justify-between items-start mb-4">
                 <div>
                    <h3 className="text-xs font-mono text-gray-500 tracking-widest mb-1">PO-2023-8898D</h3>
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Immunotherapy Vials</h2>
                 </div>
                 <div className="flex items-center px-2 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs font-bold text-gray-700">
                    <Building2 className="w-3 h-3 mr-1.5" />
                    At Customs
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Supplier</p>
                    <p className="text-sm font-medium text-gray-900">BioPharma EU</p>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Estimated Arrival</p>
                    <p className="inline-block px-2 py-1 bg-red-50 text-red-600 rounded text-xs font-bold tracking-widest font-mono uppercase border border-red-100">DELAYED</p>
                 </div>
              </div>
              
              <div className="mb-6">
                 <p className="text-xs text-gray-500 font-medium mb-1">Contents</p>
                 <p className="text-sm text-gray-700">Keytruda 100mg/4mL (x20)</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AdminLogistics;
