
import React from 'react';
import { Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  time: string;
  mat: string;
  category: string;
  fighter1: string;
  fighter2: string;
}

const EventCard: React.FC<EventCardProps> = ({ 
  time, 
  mat, 
  category, 
  fighter1, 
  fighter2 
}) => {
  return (
    <div className="bg-karate-gray border border-white/10 rounded-xl p-5 mb-4">
      <div className="flex items-center gap-2 text-gray-400 mb-3">
        <Clock size={16} />
        <span className="text-sm">{time}</span>
        <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full">{mat}</span>
      </div>
      
      <div className="mb-4">
        <h3 className="text-white font-medium mb-1">{category}</h3>
        <div className="flex items-center">
          <span className="text-white">{fighter1}</span>
          <span className="text-karate-red mx-2">vs</span>
          <span className="text-white">{fighter2}</span>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-gray-400 hover:text-white border-white/10 hover:bg-white/5"
        >
          <Info size={16} />
          <span>Detalhes</span>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
