
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardOverview from '@/pages/DashboardOverview';
import { ThemeProvider } from '@/components/ThemeProvider';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isRootDashboard = location.pathname === '/dashboard';

  // This will help ensure we're on the proper route
  useEffect(() => {
    // Check if the user is authenticated - just need the username, not necessarily both
    const savedUsername = localStorage.getItem('karate_username');
    
    // If not authenticated, redirect to the login page
    if (!savedUsername) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-karate-black transition-colors duration-200 light-theme:bg-karate-paper">
        <div className="fixed h-screen">
          <DashboardSidebar />
        </div>
        <div className="flex-1 ml-64 overflow-y-auto">
          <div className="container mx-auto p-6 max-w-6xl">
            {isRootDashboard ? <DashboardOverview /> : <Outlet />}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
