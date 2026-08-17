import React from 'react';
import { 
  Wallet,
  AlertTriangle,
  Truck,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Filter,
  Plus
} from 'lucide-react';
import { useState, useEffect } from 'react';

const HospitalOverview = () => {
  const [kpiData, setKpiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKpis = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/hospital/overview/kpis');
        if (response.ok) {
          const data = await response.json();
          setKpiData(data);
        }
      } catch (error) {
        console.error("Failed to fetch KPIs:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchKpis();
  }, []);
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Overview</h2>
          <p className="text-sm text-gray-500 mt-1">Real-time status of central hospital inventory.</p>
        </div>
        <div className="flex space-x-3">
           <button className="px-4 py-2 bg-white border border-[#0f766e] text-[#0f766e] text-sm font-semibold rounded-md hover:bg-teal-50 transition-colors">
              Export Report
           </button>
           <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition-colors flex items-center shadow-sm">
              <Plus className="w-4 h-4 mr-1.5" />
              New Order
           </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Total Stock Value</h3>
            <Wallet className="w-5 h-5 text-[#0f766e]" />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              {loading ? '...' : (kpiData ? kpiData.totalStockValue : '$2.4M')}
            </h4>
            <span className="text-xs font-semibold text-[#0f766e] flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              {loading ? '...' : (kpiData ? `${kpiData.totalStockValueTrend} vs last month` : '+4.2% vs last month')}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-red-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Items Below Par</h3>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-red-600 tracking-tight mb-2">
              {loading ? '...' : (kpiData ? kpiData.itemsBelowPar : '42')}
            </h4>
            <span className="text-xs font-semibold text-red-500 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              {loading ? '...' : (kpiData ? `${kpiData.itemsBelowParTrend} since yesterday` : '+12 since yesterday')}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Orders</h3>
            <Truck className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              {loading ? '...' : (kpiData ? kpiData.activeOrders : '156')}
            </h4>
            <span className="text-xs font-semibold text-gray-500 flex items-center">
              <ClockIcon className="w-3 h-3 mr-1" />
              {loading ? '...' : (kpiData ? `${kpiData.activeOrdersArrivingToday} arriving today` : '24 arriving today')}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Recent Deliveries</h3>
            <CheckCircle className="w-5 h-5 text-[#0f766e]" />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              {loading ? '...' : (kpiData ? kpiData.recentDeliveries : '89')}
            </h4>
            <span className="text-xs font-semibold text-gray-500 flex items-center">
              <ClockIcon className="w-3 h-3 mr-1" />
              Last 24 hours
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        
        <div className="space-y-6">
           
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="font-bold text-gray-900">Urgent Replenishment</h3>
                 <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded">High Priority</span>
              </div>
              
              <div className="space-y-4">
                 
                 <div className="border border-red-200 bg-red-50/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                    <div className="flex justify-between items-start mb-1">
                       <div>
                          <h4 className="text-sm font-bold text-gray-900">Surgical Masks (N95)</h4>
                          <p className="text-xs text-gray-500 font-mono">SKU: SM-95-X</p>
                       </div>
                       <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded tracking-wide">15% STOCK</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3 mb-2">
                       <div className="bg-red-500 h-full rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                       <span className="text-gray-600 font-medium">Par: 5000 | Curr: 750</span>
                       <button className="text-[#0f766e] font-bold hover:text-teal-800 transition-colors">Reorder</button>
                    </div>
                 </div>

                 
                 <div className="border border-red-200 bg-red-50/20 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                    <div className="flex justify-between items-start mb-1">
                       <div>
                          <h4 className="text-sm font-bold text-gray-900">IV Fluids (Saline 500ml)</h4>
                          <p className="text-xs text-gray-500 font-mono">SKU: IVF-05-S</p>
                       </div>
                       <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded tracking-wide">22% STOCK</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3 mb-2">
                       <div className="bg-red-500 h-full rounded-full" style={{ width: '22%' }}></div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                       <span className="text-gray-600 font-medium">Par: 2000 | Curr: 440</span>
                       <button className="text-[#0f766e] font-bold hover:text-teal-800 transition-colors">Reorder</button>
                    </div>
                 </div>

                 
                 <div className="border border-gray-200 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0f766e]"></div>
                    <div className="flex justify-between items-start mb-1">
                       <div>
                          <h4 className="text-sm font-bold text-gray-900">Syringes (10ml)</h4>
                          <p className="text-xs text-gray-500 font-mono">SKU: SYR-10-M</p>
                       </div>
                       <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded tracking-wide">45% STOCK</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3 mb-2">
                       <div className="bg-[#0f766e] h-full rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                       <span className="text-gray-600 font-medium">Par: 10000 | Curr: 4500</span>
                       <button className="text-[#0f766e] font-bold hover:text-teal-800 transition-colors">Reorder</button>
                    </div>
                 </div>
              </div>
           </div>

           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-bold text-gray-900 mb-5">Vendor Performance</h3>
              <div className="space-y-4">
                 <div>
                    <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1.5">
                       <span>On-Time Delivery</span>
                       <span>94%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                       <div className="bg-[#0f766e] h-full rounded-full" style={{ width: '94%' }}></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-xs font-semibold text-gray-700 mb-1.5">
                       <span>Order Accuracy</span>
                       <span>98%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                       <div className="bg-[#0f766e] h-full rounded-full" style={{ width: '98%' }}></div>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
           <div className="px-6 py-5 flex justify-between items-center border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg">Recent Orders</h3>
              <button className="text-gray-400 hover:text-gray-600">
                 <Filter className="w-5 h-5" />
              </button>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                 <thead className="text-[10px] text-gray-500 uppercase tracking-widest font-bold bg-gray-50/50">
                    <tr>
                       <th className="px-6 py-4">Order ID</th>
                       <th className="px-6 py-4">Vendor</th>
                       <th className="px-6 py-4">Date</th>
                       <th className="px-6 py-4">Status</th>
                       <th className="px-6 py-4 text-right">Total</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                       <td className="px-6 py-5 font-bold text-[#0f766e] font-mono">#ORD-0922</td>
                       <td className="px-6 py-5 text-gray-600">MediCorp Supplies</td>
                       <td className="px-6 py-5 text-gray-500">Oct 12, 2023</td>
                       <td className="px-6 py-5">
                          <span className="inline-flex items-center px-2 py-1 rounded-sm text-[10px] font-bold tracking-widest border border-[#0f766e] text-[#0f766e] bg-teal-50 uppercase">
                             <Truck className="w-3 h-3 mr-1" /> Shipped
                          </span>
                       </td>
                       <td className="px-6 py-5 font-mono font-bold text-gray-900 text-right">$12,450.00</td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50/50 transition-colors">
                       <td className="px-6 py-5 font-bold text-[#0f766e] font-mono">#ORD-0921</td>
                       <td className="px-6 py-5 text-gray-600">PharmaNet Inc.</td>
                       <td className="px-6 py-5 text-gray-500">Oct 11, 2023</td>
                       <td className="px-6 py-5">
                          <span className="inline-flex items-center px-2 py-1 rounded-sm text-[10px] font-bold tracking-widest border border-gray-300 text-gray-500 bg-gray-50 uppercase">
                             <ClockIcon className="w-3 h-3 mr-1" /> Pending
                          </span>
                       </td>
                       <td className="px-6 py-5 font-mono font-bold text-gray-900 text-right">$8,200.50</td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                       <td className="px-6 py-5 font-bold text-[#0f766e] font-mono">#ORD-0920</td>
                       <td className="px-6 py-5 text-gray-600">Surgical Solutions</td>
                       <td className="px-6 py-5 text-gray-500">Oct 10, 2023</td>
                       <td className="px-6 py-5">
                          <span className="inline-flex items-center px-2 py-1 rounded-sm text-[10px] font-bold tracking-widest bg-[#0f766e] text-white uppercase">
                             <CheckCircle className="w-3 h-3 mr-1" /> Arrived
                          </span>
                       </td>
                       <td className="px-6 py-5 font-mono font-bold text-gray-900 text-right">$45,100.00</td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                       <td className="px-6 py-5 font-bold text-[#0f766e] font-mono">#ORD-0919</td>
                       <td className="px-6 py-5 text-gray-600">Global Health Tech</td>
                       <td className="px-6 py-5 text-gray-500">Oct 09, 2023</td>
                       <td className="px-6 py-5">
                          <span className="inline-flex items-center px-2 py-1 rounded-sm text-[10px] font-bold tracking-widest bg-[#0f766e] text-white uppercase">
                             <CheckCircle className="w-3 h-3 mr-1" /> Arrived
                          </span>
                       </td>
                       <td className="px-6 py-5 font-mono font-bold text-gray-900 text-right">$3,400.00</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

      </div>
    </div>
  );
};

const ClockIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default HospitalOverview;
