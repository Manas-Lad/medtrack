import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Building2,
  Package,
  ShoppingCart,
  Truck,
  Activity,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Search,
  Plus
} from 'lucide-react';
import AdminOverview from './AdminOverview';
import AdminHospitals from './AdminHospitals';
import AdminLogistics from './AdminLogistics';
import AdminAuditLog from './AdminAuditLog';
import AdminInventory from './AdminInventory';
import AdminOrders from './AdminOrders';

const NationalAdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'hospitals', name: 'Hospitals', icon: Building2 },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'orders', name: 'Orders', icon: ShoppingCart },
    { id: 'logistics', name: 'Logistics', icon: Truck },
    { id: 'audit_log', name: 'National Audit Log', icon: Activity },
    { id: 'analytics', name: 'Analytics', icon: BarChart2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-10 hidden md:flex">
        
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 border border-gray-200">
              <div className="w-3 h-3 bg-medtrack-dark rounded-sm"></div>
            </div>
            <div>
              <h1 className="font-bold text-gray-900 tracking-tight text-lg leading-tight">MEDTRACK</h1>
              <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Clinical Logistics</p>
            </div>
          </div>
        </div>

        
        <div className="p-4 border-b border-gray-100">
          <button className="w-full bg-medtrack-dark text-white rounded-md py-2 px-4 flex items-center justify-center text-sm font-semibold hover:bg-gray-800 transition-colors shadow-sm">
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
                        ? 'text-white bg-[#1a2332] shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white/90' : 'text-gray-400'}`} />
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
            {activeTab === 'dashboard' ? (
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-bold text-gray-900">National Admin View</h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 uppercase tracking-wider">Live Data</span>
              </div>
            ) : activeTab === 'logistics' ? (
              <div>
                <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider mb-0.5">Command Center / Logistics</p>
                <h2 className="text-xl font-bold text-gray-900">Inbound Shipments</h2>
              </div>
            ) : activeTab === 'audit_log' ? (
              <div>
                 <h2 className="text-xl font-bold text-gray-900">National Audit Log</h2>
              </div>
            ) : activeTab === 'hospitals' ? (
              <div>
                 <h2 className="text-xl font-bold text-gray-900">Facility Directory</h2>
              </div>
            ) : (
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
                placeholder={activeTab === 'hospitals' ? "Search facilities..." : activeTab === 'logistics' ? "Search PO, Supplier, or Item ID..." : activeTab === 'audit_log' ? "Search audit logs..." : "Search districts, facilities..."}
                className="pl-9 pr-4 py-1.5 w-72 bg-white border border-gray-200 rounded-md text-sm focus:border-medtrack-teal focus:ring-0 transition-colors placeholder-gray-400"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <HelpCircle className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center">
                 
                 <span className="text-xs font-bold text-gray-600">AD</span>
              </div>
            </div>
          </div>
        </header>

        
        <div className="flex-1 overflow-auto bg-[#F8FAFC]">
          <div className="p-8 max-w-[1400px] mx-auto">
            {activeTab === 'dashboard' && <AdminOverview />}
            {activeTab === 'hospitals' && <AdminHospitals />}
            {activeTab === 'inventory' && <AdminInventory />}
            {activeTab === 'orders' && <AdminOrders />}
            {activeTab === 'logistics' && <AdminLogistics />}
            {activeTab === 'audit_log' && <AdminAuditLog />}
            {activeTab === 'analytics' && <div>Analytics Placeholder</div>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NationalAdminDashboard;
