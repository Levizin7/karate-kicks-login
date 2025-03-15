
import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import { StatCard } from '@/components/StatCard';
import EventCard from '@/components/EventCard';
import QuickAction from '@/components/QuickAction';
import { Users, Calendar, ListChecks, Award, Trophy, ListFilter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardOverview = () => {
  return (
    <div className="p-8">
      <DashboardHeader 
        title="Visão Geral" 
        subtitle="Bem-vindo ao seu centro de gerenciamento de torneios de karatê" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Total Atletas" 
          value="124" 
          icon={Users} 
          iconColor="text-karate-red" 
        />
        <StatCard 
          title="Eventos Ativos" 
          value="3" 
          icon={Calendar} 
          iconColor="text-green-500" 
        />
        <StatCard 
          title="Categorias" 
          value="15" 
          icon={ListChecks} 
          iconColor="text-amber-500" 
        />
        <StatCard 
          title="Lutas Concluídas" 
          value="48" 
          icon={Award} 
          iconColor="text-purple-500" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">Lutas de hoje</h2>
              <p className="text-gray-400 text-sm">Próximas lutas e eventos</p>
            </div>
            <Button variant="outline" className="border-white/10 text-gray-400 hover:text-white hover:bg-white/5">
              Ver todas
            </Button>
          </div>
          
          <div>
            <EventCard 
              time="10:30 AM" 
              mat="Mat 1" 
              category="Male Kumite -75kg" 
              fighter1="John D." 
              fighter2="Mike S." 
            />
            <EventCard 
              time="11:15 AM" 
              mat="Mat 2" 
              category="Female Kata" 
              fighter1="Anna K." 
              fighter2="Sarah L." 
            />
            <EventCard 
              time="12:00 PM" 
              mat="Mat 3" 
              category="Junior Kumite" 
              fighter1="David R." 
              fighter2="Alex M." 
            />
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white">Ações Rápidas</h2>
            <p className="text-gray-400 text-sm">Funções mais usadas</p>
          </div>
          
          <div>
            <QuickAction 
              icon={<Trophy size={24} />}
              title="Iniciar Pontuação"
              description="Registrar pontos das lutas"
            />
            <QuickAction 
              icon={<ListFilter size={24} />}
              title="Gerenciar Categorias"
              description="Editar divisões de peso e idade"
            />
            <QuickAction 
              icon={<Award size={24} />}
              title="Visualizar Resultados"
              description="Ver classificação do torneio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
