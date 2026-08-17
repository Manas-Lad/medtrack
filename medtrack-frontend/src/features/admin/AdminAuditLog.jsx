import React from 'react';
import { 
  Filter,
  Download,
  AlertTriangle,
  Snowflake,
  Settings,
  Package,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const AdminAuditLog = () => {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-start">
        
        <p className="text-sm text-gray-500 mt-1">Comprehensive compliance and traceability ledger.</p>
        <div className="ml-auto flex space-x-3">
          <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white shadow-sm">
             <Filter className="w-4 h-4" />
             <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white shadow-sm">
             <Download className="w-4 h-4" />
             <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-100 font-bold bg-gray-50/50">
              <tr>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Event Type</th>
                <th className="px-6 py-4">User/System ID</th>
                <th className="px-6 py-4">Details</th>
                <th className="px-6 py-4">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5 font-mono text-xs text-gray-600 font-medium">
                  2023-10-27 14:32:01
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center text-gray-900 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2 shrink-0" />
                    Emergency Request
                  </div>
                </td>
                <td className="px-6 py-5 font-mono text-xs text-gray-600">
                  USR-8829-MED
                </td>
                <td className="px-6 py-5 text-gray-600 text-sm truncate max-w-xs">
                  Requested immediate airlift for critical s...
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-red-100 text-red-600 uppercase">
                    HIGH
                  </span>
                </td>
              </tr>

              
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5 font-mono text-xs text-gray-600 font-medium">
                  2023-10-27 13:15:44
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center text-gray-900 font-bold text-sm">
                    <Snowflake className="w-4 h-4 text-medtrack-teal mr-2 shrink-0" />
                    Cold-Chain Alert
                  </div>
                </td>
                <td className="px-6 py-5 font-mono text-xs text-gray-600">
                  SYS-SENS-042
                </td>
                <td className="px-6 py-5 text-gray-600 text-sm truncate max-w-xs">
                  Temperature deviation detected in tran...
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-red-100 text-red-600 uppercase">
                    HIGH
                  </span>
                </td>
              </tr>

              
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5 font-mono text-xs text-gray-600 font-medium">
                  2023-10-27 11:05:12
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center text-gray-900 font-bold text-sm">
                    <Settings className="w-4 h-4 text-gray-500 mr-2 shrink-0" />
                    Admin Config
                  </div>
                </td>
                <td className="px-6 py-5 font-mono text-xs text-gray-600">
                  ADM-MASTER-01
                </td>
                <td className="px-6 py-5 text-gray-600 text-sm truncate max-w-xs">
                  Updated routing algorithm parameters ...
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-gray-200 text-gray-600 uppercase">
                    MEDIUM
                  </span>
                </td>
              </tr>

              
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-5 font-mono text-xs text-gray-600 font-medium">
                  2023-10-27 09:30:00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center text-gray-900 font-bold text-sm">
                    <Package className="w-4 h-4 text-gray-500 mr-2 shrink-0" />
                    Batch Dispatch
                  </div>
                </td>
                <td className="px-6 py-5 font-mono text-xs text-gray-600">
                  SYS-AUTO-DISP
                </td>
                <td className="px-6 py-5 text-gray-600 text-sm truncate max-w-xs">
                  Automated daily dispatch of standard ...
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-widest bg-gray-100 text-gray-500 uppercase">
                    LOW
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        
        <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center mt-auto bg-gray-50/30">
           <span className="text-xs text-gray-500 font-medium">Showing <strong className="text-gray-900">1-4</strong> of <strong className="text-gray-900">1,024</strong> entries</span>
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

export default AdminAuditLog;
