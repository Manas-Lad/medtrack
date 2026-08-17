import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  Package,
  Snowflake,
  Truck,
  Plane,
  Filter,
  Download
} from 'lucide-react';

const VendorOverview = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Overview</h2>
          <p className="text-sm text-gray-500">Real-time telemetry and network status.</p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total SKU Volume</h3>
            <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-md text-xs font-medium border border-green-100">
              <TrendingUp className="w-3 h-3" />
              <span>+12.4%</span>
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">84,291</h4>
          </div>
          <p className="text-sm text-gray-500 mt-1">Units currently in network</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Fleet Util.</h3>
            <div className="flex items-center space-x-1 text-gray-600 bg-gray-50 px-2 py-1 rounded-md text-xs font-medium border border-gray-200">
              <Truck className="w-3 h-3" />
              <span>Steady</span>
            </div>
          </div>
          <div className="flex items-baseline space-x-1">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">92.8</h4>
            <span className="text-2xl font-bold text-gray-400">%</span>
          </div>
          <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
             <div className="bg-medtrack-teal h-full rounded-full" style={{ width: '92.8%' }}></div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Mo. Fulfillment</h3>
            <div className="flex items-center space-x-1 text-red-600 bg-red-50 px-2 py-1 rounded-md text-xs font-medium border border-red-100">
              <TrendingDown className="w-3 h-3" />
              <span>-1.2%</span>
            </div>
          </div>
          <div className="flex items-baseline space-x-1">
            <h4 className="text-4xl font-bold text-gray-900 tracking-tight">98.9</h4>
            <span className="text-2xl font-bold text-gray-400">%</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Target: {'>'}99.5%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="space-y-6">
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <h3 className="font-bold text-gray-900 text-sm">Action Required</h3>
              </div>
              <button className="text-xs font-semibold text-gray-500 hover:text-gray-900 uppercase tracking-wider">View All</button>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-5 flex space-x-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                  <Package className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-semibold text-gray-900">Low Stock: EpiPen Auto-Inj.</h4>
                    <span className="text-xs text-gray-400 font-medium">10m ago</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Node ALPHA-04 reporting critically low inventory (12 units remaining)...</p>
                </div>
              </div>
              <div className="p-5 flex space-x-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <Snowflake className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-semibold text-gray-900">Temp Variance Detected</h4>
                    <span className="text-xs text-gray-400 font-medium">1h ago</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Transport unit TR-499 showing +2.1C drift in payload zone B. Insulin...</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-[320px]">
             <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-gray-900 text-sm">Live Pulse</h3>
                <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-green-100">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
             </div>
             <div className="flex-1 relative bg-gray-50 overflow-hidden flex flex-col justify-end p-4">
                
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-0"></div>
                
                
                <div className="relative z-10 space-y-2">
                   <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                      <div className="flex items-center space-x-3">
                         <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                            <Truck className="w-4 h-4 text-gray-700" />
                         </div>
                         <div>
                            <h4 className="text-xs font-bold text-gray-900">SHP-992-DELTA</h4>
                            <p className="text-[10px] text-gray-500 font-medium">In Transit - ETA 14:00</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <h4 className="text-xs font-bold text-gray-900">Priority 1</h4>
                         <p className="text-[10px] text-gray-500 font-medium">Organs</p>
                      </div>
                   </div>
                   
                   <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 flex justify-between items-center shadow-sm">
                      <div className="flex items-center space-x-3">
                         <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                            <Plane className="w-4 h-4 text-gray-700" />
                         </div>
                         <div>
                            <h4 className="text-xs font-bold text-gray-900">FLT-VX-40</h4>
                            <p className="text-[10px] text-gray-500 font-medium">Departed - ETA 22:30</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <h4 className="text-xs font-bold text-gray-900">Standard</h4>
                         <p className="text-[10px] text-gray-500 font-medium">Supplies</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        
        <div className="lg:col-span-2 space-y-6">
           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-4 bg-medtrack-dark rounded-full"></div>
                    <h3 className="font-bold text-gray-900 text-sm">Performance Trends</h3>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-3">Order Volume vs. Fulfillment Rate (30 Days)</p>
                </div>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                   <button className="px-3 py-1 text-xs font-semibold text-gray-500 hover:text-gray-900 rounded-md">7D</button>
                   <button className="px-3 py-1 text-xs font-semibold text-white bg-medtrack-dark rounded-md shadow-sm">30D</button>
                   <button className="px-3 py-1 text-xs font-semibold text-gray-500 hover:text-gray-900 rounded-md">YTD</button>
                </div>
              </div>
              
              
              <div className="h-64 relative w-full flex items-end justify-between px-4 pb-8 pt-4 border-b border-l border-gray-100">
                 
                 <div className="absolute left-[-20px] top-0 bottom-8 flex flex-col justify-between text-[10px] text-gray-400 font-medium h-full">
                    <span>10k</span>
                    <span>7.5k</span>
                    <span>5k</span>
                    <span>2.5k</span>
                 </div>
                 
                 
                 <div className="absolute inset-x-0 top-0 bottom-8 flex flex-col justify-between z-0">
                    <div className="border-b border-gray-50 w-full h-0"></div>
                    <div className="border-b border-gray-50 w-full h-0"></div>
                    <div className="border-b border-gray-50 w-full h-0"></div>
                    <div className="border-b border-gray-50 w-full h-0"></div>
                 </div>

                 
                 <div className="w-1/5 bg-gray-200 rounded-t-sm h-[60%] z-10 relative group hover:bg-gray-300 transition-colors"></div>
                 <div className="w-1/5 bg-gray-200 rounded-t-sm h-[75%] z-10 relative group hover:bg-gray-300 transition-colors"></div>
                 <div className="w-1/5 bg-gray-200 rounded-t-sm h-[65%] z-10 relative group hover:bg-gray-300 transition-colors"></div>
                 <div className="w-1/5 bg-gray-200 rounded-t-sm h-[90%] z-10 relative group hover:bg-gray-300 transition-colors"></div>
                 
                 
                 <svg className="absolute inset-0 w-full h-[calc(100%-2rem)] z-20 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M 10,70 Q 25,60 50,55 T 90,20" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="10" cy="70" r="2.5" fill="#111827" stroke="white" strokeWidth="1.5" />
                    <circle cx="50" cy="55" r="2.5" fill="#111827" stroke="white" strokeWidth="1.5" />
                    <circle cx="90" cy="20" r="2.5" fill="#111827" stroke="white" strokeWidth="1.5" />
                 </svg>

                 
                 <div className="absolute bottom-1 w-full flex justify-between px-10 text-[10px] text-gray-500 font-semibold uppercase">
                    <span>W1</span>
                    <span>W2</span>
                    <span>W3</span>
                    <span>W4</span>
                 </div>
              </div>
           </div>

           
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                 <div className="flex items-center space-x-2">
                    <div className="w-1 h-4 bg-medtrack-dark rounded-full"></div>
                    <h3 className="font-bold text-gray-900 text-sm">Recent Batch Processing</h3>
                 </div>
                 <div className="flex space-x-2">
                    <button className="p-1.5 border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50 transition-colors">
                       <Filter className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50 transition-colors">
                       <Download className="w-4 h-4" />
                    </button>
                 </div>
              </div>
              
              <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left">
                    <thead className="text-[10px] text-gray-500 uppercase tracking-wider bg-gray-50/50">
                       <tr>
                          <th className="px-6 py-3 font-semibold">Batch ID</th>
                          <th className="px-6 py-3 font-semibold">Type</th>
                          <th className="px-6 py-3 font-semibold">Origin</th>
                          <th className="px-6 py-3 font-semibold">Status</th>
                          <th className="px-6 py-3 font-semibold">Scanned</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-900">BTH-2938-A</td>
                          <td className="px-6 py-4 text-gray-600 font-medium">Vaccines (Cold)</td>
                          <td className="px-6 py-4 text-gray-500">Hub CHI-01</td>
                          <td className="px-6 py-4">
                             <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wide border border-green-200 bg-green-50 text-green-700">CLEARED</span>
                          </td>
                          <td className="px-6 py-4 text-gray-500 font-medium">10:42 AM</td>
                       </tr>
                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-900">BTH-2939-B</td>
                          <td className="px-6 py-4 text-gray-600 font-medium">Surgical Kits</td>
                          <td className="px-6 py-4 text-gray-500">Hub NY-04</td>
                          <td className="px-6 py-4">
                             <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wide border border-gray-200 bg-gray-100 text-gray-600">PROCESSING</span>
                          </td>
                          <td className="px-6 py-4 text-gray-500 font-medium">10:38 AM</td>
                       </tr>
                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-900">BTH-2940-C</td>
                          <td className="px-6 py-4 text-gray-600 font-medium">Diagnostic Eq.</td>
                          <td className="px-6 py-4 text-gray-500">Hub LA-02</td>
                          <td className="px-6 py-4">
                             <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wide border border-yellow-200 bg-yellow-50 text-yellow-700">HOLD</span>
                          </td>
                          <td className="px-6 py-4 text-gray-500 font-medium">10:15 AM</td>
                       </tr>
                       <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-gray-900">BTH-2941-A</td>
                          <td className="px-6 py-4 text-gray-600 font-medium">PPE Supply</td>
                          <td className="px-6 py-4 text-gray-500">Hub CHI-01</td>
                          <td className="px-6 py-4">
                             <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold tracking-wide border border-green-200 bg-green-50 text-green-700">CLEARED</span>
                          </td>
                          <td className="px-6 py-4 text-gray-500 font-medium">09:55 AM</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              <div className="p-3 border-t border-gray-100 bg-gray-50 text-center">
                 <button className="text-[11px] font-bold text-gray-900 hover:text-medtrack-teal tracking-widest uppercase">View Full History</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default VendorOverview;
