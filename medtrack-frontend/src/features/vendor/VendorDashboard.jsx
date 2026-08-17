import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Truck, 
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Search,
  Plus
} from 'lucide-react';
import VendorOverview from './VendorOverview';
import VendorOrders from './VendorOrders';
import VendorInventory from './VendorInventory';
import VendorLogistics from './VendorLogistics';
import VendorAnalytics from './VendorAnalytics';

const VendorDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', name: 'Orders', icon: ShoppingCart },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'logistics', name: 'Logistics', icon: Truck },
    { id: 'analytics', name: 'Analytics', icon: BarChart2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-10 hidden md:flex">
        
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-medtrack-dark rounded-md flex items-center justify-center mr-3">
              <div className="w-3 h-3 bg-medtrack-teal rounded-sm"></div>
            </div>
            <div>
              <h1 className="font-bold text-gray-900 tracking-tight text-lg leading-tight">MEDTRACK</h1>
              <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Vendor Portal</p>
            </div>
          </div>
        </div>

        
        <div className="p-4 border-b border-gray-100">
          <button className="w-full bg-medtrack-dark text-white rounded-md py-2 px-4 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Dispatch
          </button>
        </div>

        
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-6 py-2.5 text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-gray-900 bg-gray-100/50 border-r-2 border-medtrack-dark' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-gray-900' : 'text-gray-400'}`} />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        
        <div className="p-4 border-t border-gray-200 space-y-1">
          <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <Settings className="w-5 h-5 mr-3 text-gray-400" />
            Settings
          </button>
          <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            <HelpCircle className="w-5 h-5 mr-3 text-gray-400" />
            Support
          </button>
          <button onClick={onLogout} className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mt-2">
            <LogOut className="w-5 h-5 mr-3 text-gray-400" />
            Sign Out
          </button>
        </div>
      </aside>

      
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10 shrink-0">
          <div className="flex-1 flex items-center">
            
            {activeTab === 'dashboard' && (
              <div className="flex items-center px-3 py-1 bg-green-50 border border-green-100 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs font-semibold text-green-700">System Status: Active</span>
              </div>
            )}
            
            
            {activeTab !== 'dashboard' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 capitalize">
                  {navigation.find(n => n.id === activeTab)?.name}
                </h2>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search orders, SKUs..." 
                className="pl-9 pr-4 py-1.5 w-64 bg-gray-100 border-transparent rounded-md text-sm focus:bg-white focus:border-gray-300 focus:ring-0 transition-colors"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-medtrack-dark rounded-full overflow-hidden border border-gray-200">
                 
                 <img src="https://ui-avatars.com/api/?name=Vendor+Admin&background=111827&color=fff" alt="User" />
              </div>
            </div>
          </div>
        </header>

        
        <div className="flex-1 overflow-auto bg-[#F8FAFC]">
          <div className="p-8 max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <VendorOverview />}
            {activeTab === 'orders' && <VendorOrders />}
            {activeTab === 'inventory' && <VendorInventory />}
            {activeTab === 'logistics' && <VendorLogistics />}
            {activeTab === 'analytics' && <VendorAnalytics />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;
