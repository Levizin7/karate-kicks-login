
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Moon, Sun } from "lucide-react";
import { SidebarLink } from "@/components/SidebarLink";
import { Home, Users, Shield, Calendar, BarChart2, Settings, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export function MobileMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('karate_username');
    localStorage.removeItem('karate_password');
    localStorage.removeItem('karate_remember');
    navigate('/');
  };

  return (
    <div className="md:hidden fixed top-4 right-4 z-50 animate-fade-in">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-background/80 backdrop-blur-sm border border-border/40 shadow-md hover:shadow-lg transition-all"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="left" 
          className="p-0 w-[280px] border-r bg-sidebar"
          showCloseButton={false}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-6 py-5 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center transition-colors duration-300">
                  <span className="text-white font-bold">K</span>
                </div>
                <h1 className="text-xl font-bold transition-colors duration-300">Karate Manager</h1>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-muted transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex flex-1 flex-col px-3 py-3 gap-1 overflow-auto">
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

            <div className="border-t border-border p-4">
              <div className="flex items-center justify-between mb-4">
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
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted transition-all duration-300"
              >
                <LogOut className="h-4 w-4 text-foreground/70" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
