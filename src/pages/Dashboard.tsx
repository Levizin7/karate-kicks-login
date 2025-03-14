
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
    // Check if the user is authenticated
    const savedUsername = localStorage.getItem('karate_username');
    const savedPassword = localStorage.getItem('karate_password');
    
    // If not authenticated, redirect to the login page
    if (!savedUsername && !savedPassword) {
      navigate('/');
    }
  }, [navigate]);

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
