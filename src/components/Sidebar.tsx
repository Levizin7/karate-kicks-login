
import { BarChart2, Calendar, Home, LogOut, Shield, Users, Settings, Sun, Moon } from "lucide-react";
import { SidebarLink } from "@/components/SidebarLink";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function Sidebar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('karate_username');
    localStorage.removeItem('karate_password');
    localStorage.removeItem('karate_remember');
    navigate('/');
  };

  return (
    <div className="hidden md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:w-64 md:flex-col border-r bg-sidebar border-border transition-colors duration-300">
      <div className="flex shrink-0 items-center gap-2 px-6 py-5 animate-fade-in">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center transition-colors duration-300">
          <span className="text-white font-bold">K</span>
        </div>
        <h1 className="text-xl font-bold transition-colors duration-300">Karate Manager</h1>
      </div>
      
      <div className="flex flex-1 flex-col px-4 py-4 gap-1 overflow-auto">
        <SidebarLink 
          icon={Home} 
          label="Visão Geral" 
          to="/dashboard" 
          className="animate-fade-in" 
          style={{ animationDelay: '100ms' }} 
        />
        <SidebarLink 
          icon={Users} 
          label="Atletas" 
          to="/dashboard/atletas" 
          className="animate-fade-in" 
          style={{ animationDelay: '150ms' }} 
        />
        <SidebarLink 
          icon={Shield} 
          label="Categorias" 
          to="/dashboard/categorias" 
          className="animate-fade-in" 
          style={{ animationDelay: '200ms' }} 
        />
        <SidebarLink 
          icon={Calendar} 
          label="Torneios" 
          to="/dashboard/torneios" 
          className="animate-fade-in" 
          style={{ animationDelay: '250ms' }} 
        />
        <SidebarLink 
          icon={BarChart2} 
          label="Pontuação" 
          to="/dashboard/pontuacao" 
          className="animate-fade-in" 
          style={{ animationDelay: '300ms' }} 
        />
        <SidebarLink 
          icon={BarChart2} 
          label="Resultados" 
          to="/dashboard/resultados" 
          className="animate-fade-in" 
          style={{ animationDelay: '350ms' }} 
        />
        <SidebarLink 
          icon={Settings} 
          label="Configurações" 
          to="/dashboard/configuracoes" 
          className="animate-fade-in" 
          style={{ animationDelay: '400ms' }} 
        />
      </div>

      <div className="border-t border-border p-4 animate-fade-in" style={{ animationDelay: '450ms' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 shrink-0 transition-all duration-300">
              <AvatarFallback className="bg-primary/10 transition-colors duration-300">A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium transition-colors duration-300">Admin</span>
              <span className="text-xs text-muted-foreground transition-colors duration-300">Administrador</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        
        <Separator className="my-4 transition-colors duration-300" />
        
        <button 
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-muted"
        >
          <LogOut className="h-4 w-4 text-foreground/70 transition-colors duration-300" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
