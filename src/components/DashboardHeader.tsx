
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Bell, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="text-gray-400 mt-1">{subtitle}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Input 
              placeholder="Buscar..." 
              className="w-64 pl-10 bg-white/5 border-white/10 focus:bg-white/10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-karate-red rounded-full"></span>
          </Button>
          
          <Button className="bg-karate-red hover:bg-karate-red/90 text-white">
            <Plus size={18} />
            <span>Novo Atleta</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
