
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardOverview from '@/pages/DashboardOverview';
import { ThemeProvider } from '@/components/ThemeProvider';

const Dashboard = () => {
  const location = useLocation();
  const isRootDashboard = location.pathname === '/dashboard';

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-karate-black transition-colors duration-200 light-theme:bg-karate-paper">
        <DashboardSidebar />
        <div className="flex-1 overflow-y-auto">
          {isRootDashboard ? <DashboardOverview /> : <Outlet />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
