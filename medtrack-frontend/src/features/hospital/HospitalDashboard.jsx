import React, { useState } from 'react';
import { 
  LayoutDashboard,
  BarChart2,
  Package,
  Truck,
  Settings,
  Bell,
  HelpCircle,
  Search,
  PlusSquare
} from 'lucide-react';
import HospitalOverview from './HospitalOverview';
import HospitalAnalytics from './HospitalAnalytics';
import HospitalInventory from './HospitalInventory';
import HospitalShipments from './HospitalShipments';
import HospitalSettings from './HospitalSettings';

const HospitalDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', name: 'Analytics', icon: BarChart2 },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'shipments', name: 'Shipments', icon: Truck },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-white flex font-sans">
      
      <aside className="w-56 bg-gray-50 border-r border-gray-200 flex flex-col z-10 hidden md:flex">
        
        <div className="h-20 flex flex-col justify-center px-6">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-medtrack-dark rounded flex items-center justify-center mr-2">
              <PlusSquare className="w-4 h-4 text-white" />
            </div>
            <h1 className="font-bold text-gray-900 tracking-tight text-lg">MedTrack</h1>
          </div>
          <p className="text-[10px] text-gray-500 mt-0.5 ml-8">Command Center</p>
        </div>

        
        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-gray-900 bg-teal-200/50' 
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mr-3 ${isActive ? 'text-gray-900' : 'text-gray-400'}`} />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        
        <div className="p-6">
          {activeTab === 'analytics' || activeTab === 'settings' ? (
            <button className="w-full bg-black text-white rounded-md py-2.5 px-4 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm">
              <span className="mr-2">+</span> New Order
            </button>
          ) : (
            <button className="w-full bg-[#d32f2f] text-white rounded-md py-2.5 px-4 flex items-center justify-center text-sm font-semibold hover:bg-red-800 transition-colors shadow-sm">
              <AlertTriangleIcon className="w-4 h-4 mr-2" /> Report Emergency
            </button>
          )}
        </div>
      </aside>

      
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#fafafa]">
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 shrink-0">
          <div className="flex-1">
             <h2 className="text-xl font-bold text-gray-900">
               {activeTab === 'dashboard' || activeTab === 'inventory' || activeTab === 'shipments' ? 'MedTrack Logistics' : 'MedLogistics'}
             </h2>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search..."
                className="pl-9 pr-4 py-1.5 w-80 bg-white border border-gray-200 rounded-md text-sm focus:border-medtrack-teal focus:ring-0 transition-colors placeholder-gray-400"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <HelpCircle className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                 <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" alt="Doctor profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        
        <div className="flex-1 overflow-auto bg-gray-50/50">
          <div className="p-8 max-w-[1400px] mx-auto">
            {activeTab === 'dashboard' && <HospitalOverview />}
            {activeTab === 'analytics' && <HospitalAnalytics />}
            {activeTab === 'inventory' && <HospitalInventory />}
            {activeTab === 'shipments' && <HospitalShipments />}
            {activeTab === 'settings' && <HospitalSettings />}
          </div>
        </div>
      </main>
    </div>
  );
};

const AlertTriangleIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

export default HospitalDashboard;
