
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconColor?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  iconColor = "text-karate-red",
  className
}) => {
  return (
    <div className={cn(
      "bg-karate-gray border border-white/10 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-white/20",
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-400 font-medium mb-2">{title}</h3>
          <p className="text-4xl font-bold text-white">{value}</p>
        </div>
        <div className={cn("p-2.5 rounded-lg bg-white/5", iconColor)}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
