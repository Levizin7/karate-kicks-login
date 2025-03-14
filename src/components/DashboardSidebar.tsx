
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Award, 
  Calendar, 
  BarChart3, 
  Medal, 
  Settings,
  LogOut,
  Sun,
  Moon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active: boolean;
}

const SidebarItem = ({ icon, label, path, active }: SidebarItemProps) => (
  <Link to={path} className="w-full">
    <div className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
      active 
        ? "bg-karate-red text-white" 
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    )}>
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  </Link>
);

const DashboardSidebar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const currentPath = location.pathname;

  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: "Visão Geral", path: "/dashboard" },
    { icon: <Users size={20} />, label: "Atletas", path: "/dashboard/atletas" },
    { icon: <Award size={20} />, label: "Categorias", path: "/dashboard/categorias" },
    { icon: <Calendar size={20} />, label: "Torneios", path: "/dashboard/torneios" },
    { icon: <BarChart3 size={20} />, label: "Pontuação", path: "/dashboard/pontuacao" },
    { icon: <Medal size={20} />, label: "Resultados", path: "/dashboard/resultados" },
    { icon: <Settings size={20} />, label: "Configurações", path: "/dashboard/configuracoes" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('karate_username');
    localStorage.removeItem('karate_password');
    localStorage.removeItem('karate_remember');
    window.location.href = '/';
  };

  return (
    <div className="h-screen w-64 bg-karate-gray border-r border-white/10 flex flex-col">
      <div className="p-5 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 bg-karate-red rounded-md flex items-center justify-center">
          <span className="text-white font-bold">K</span>
        </div>
        <h1 className="text-xl font-bold text-white">Karate Manager</h1>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={currentPath === item.path}
          />
        ))}
      </div>

      <div className="p-4 border-t border-white/10 flex flex-col gap-3">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-8 h-8 bg-karate-paper rounded-full flex items-center justify-center text-karate-black font-semibold">
            A
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-gray-400">Administrador</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-gray-400 hover:text-white hover:bg-white/10"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="w-full flex items-center gap-2 border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
