
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Award, Calendar, ChevronRight, List, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/StatCard";
import { MatchCard } from "@/components/MatchCard";
import { ActionCard } from "@/components/ActionCard";
import { Sidebar } from "@/components/Sidebar";
import { MobileMenu } from "@/components/MobileMenu";

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
    <div className="flex min-h-screen bg-background transition-colors duration-300">
      <Sidebar />
      <MobileMenu />
      
      <div className="flex-1 md:ml-64 pb-16 md:pb-0">
        {isRootDashboard ? (
          <>
            <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b bg-background/95 px-4 sm:px-6 md:px-8 py-4 backdrop-blur transition-all duration-300 animate-fade-in">
              <div className="ml-10 md:ml-0">
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Visão Geral</h1>
                <p className="text-sm text-muted-foreground">Bem-vindo ao seu centro de gerenciamento</p>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <Button variant="outline" size="sm" className="gap-2 animate-scale-in hidden sm:flex" style={{ animationDelay: '100ms' }}>
                  <Trophy className="h-4 w-4" />
                  <span>Torneio</span>
                </Button>
                <Button size="sm" className="gap-2 animate-scale-in" style={{ animationDelay: '200ms' }}>
                  <span className="hidden sm:inline">Novo Atleta</span>
                  <span className="sm:hidden">+</span>
                </Button>
              </div>
            </header>
            
            <main className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-10">
                <StatCard 
                  title="Total Atletas" 
                  value="124" 
                  icon={Users} 
                  iconColor="bg-primary/10 text-primary"
                  className="animate-fade-in"
                  style={{ animationDelay: '100ms' }}
                />
                <StatCard 
                  title="Eventos Ativos" 
                  value="3" 
                  icon={Calendar} 
                  iconColor="bg-green-500/10 text-green-500"
                  className="animate-fade-in"
                  style={{ animationDelay: '200ms' }}
                />
                <StatCard 
                  title="Categorias" 
                  value="15" 
                  icon={List} 
                  iconColor="bg-yellow-500/10 text-yellow-500"
                  className="animate-fade-in"
                  style={{ animationDelay: '300ms' }}
                />
                <StatCard 
                  title="Lutas Concluídas" 
                  value="48" 
                  icon={Award} 
                  iconColor="bg-purple-500/10 text-purple-500"
                  className="animate-fade-in"
                  style={{ animationDelay: '400ms' }}
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-8">
                <div className="lg:col-span-3">
                  <div className="flex items-center justify-between mb-3 sm:mb-5 animate-fade-in" style={{ animationDelay: '450ms' }}>
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold">Lutas de hoje</h2>
                      <p className="text-xs sm:text-sm text-muted-foreground">Próximas lutas e eventos</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      <span className="hidden sm:inline">Ver todas</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <MatchCard 
                      category="Male Kumite -75kg" 
                      time="10:30 AM" 
                      mat="Mat 1" 
                      player1="John D." 
                      player2="Mike S."
                      className="animate-slide-in-right"
                      style={{ animationDelay: '500ms' }}
                    />
                    <MatchCard 
                      category="Female Kata" 
                      time="11:15 AM" 
                      mat="Mat 2" 
                      player1="Anna K." 
                      player2="Sarah L."
                      className="animate-slide-in-right"
                      style={{ animationDelay: '600ms' }}
                    />
                    <MatchCard 
                      category="Junior Kumite" 
                      time="12:00 PM" 
                      mat="Mat 3" 
                      player1="David R." 
                      player2="Alex M."
                      className="animate-slide-in-right"
                      style={{ animationDelay: '700ms' }}
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="mb-3 sm:mb-5 animate-fade-in" style={{ animationDelay: '450ms' }}>
                    <h2 className="text-lg sm:text-xl font-semibold">Ações Rápidas</h2>
                    <p className="text-xs sm:text-sm text-muted-foreground">Funções mais usadas</p>
                  </div>
                  
                  <div>
                    <ActionCard 
                      icon={Award} 
                      title="Iniciar Pontuação" 
                      description="Registrar pontos das lutas" 
                      to="/dashboard/pontuacao"
                      className="animate-scale-in"
                      style={{ animationDelay: '500ms' }}
                    />
                    <ActionCard 
                      icon={List} 
                      title="Gerenciar Categorias" 
                      description="Editar divisões de peso e idade" 
                      to="/dashboard/categorias"
                      className="animate-scale-in"
                      style={{ animationDelay: '600ms' }}
                    />
                    <ActionCard 
                      icon={Trophy} 
                      title="Visualizar Resultados" 
                      description="Ver classificação do torneio" 
                      to="/dashboard/resultados"
                      className="animate-scale-in"
                      style={{ animationDelay: '700ms' }}
                    />
                  </div>
                </div>
              </div>
            </main>
          </>
        ) : (
          <div className="p-4 pt-16 md:pt-4 sm:p-6 md:p-8">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
