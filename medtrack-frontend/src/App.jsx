import React, { useState } from 'react';
import Layout from './components/common/Layout';
import RoleSelector from './features/auth/RoleSelector';
import NationalAdminLogin from './features/auth/NationalAdminLogin';
import HospitalLogin from './features/auth/HospitalLogin';
import VendorLogin from './features/auth/VendorLogin';
import VendorDashboard from './features/vendor/VendorDashboard';
import NationalAdminDashboard from './features/admin/NationalAdminDashboard';
import HospitalDashboard from './features/hospital/HospitalDashboard';

function App() {
  const [currentView, setCurrentView] = useState('selector');

  const handleBack = () => {
    setCurrentView('selector');
  };

  const renderView = () => {
    switch (currentView) {
      case 'national_admin':
        return <NationalAdminLogin onBack={handleBack} onLogin={setCurrentView} />;
      case 'national_admin_dashboard':
        return <NationalAdminDashboard onLogout={handleBack} />;
      case 'hospital':
        return <HospitalLogin onBack={handleBack} onLogin={setCurrentView} />;
      case 'hospital_dashboard':
        return <HospitalDashboard onLogout={handleBack} />;
      case 'vendor':
        return <VendorLogin onBack={handleBack} onLogin={setCurrentView} />;
      case 'vendor_dashboard':
        return <VendorDashboard onLogout={handleBack} />;
      case 'selector':
      default:
        return <RoleSelector onSelectRole={setCurrentView} />;
    }
  };


  if (currentView === 'vendor_dashboard' || currentView === 'national_admin_dashboard' || currentView === 'hospital_dashboard') {
    return renderView();
  }

  return (
    <Layout>
      {renderView()}
    </Layout>
  );
}

export default App;
