
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onClick?: () => void;
}

const QuickAction: React.FC<QuickActionProps> = ({
  icon,
  title,
  description,
  actionText = "Acessar",
  onClick
}) => {
  return (
    <div className="bg-karate-gray border border-white/10 rounded-xl p-5 mb-4">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-white/5 rounded-lg text-karate-red">
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-white font-medium mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-3">{description}</p>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClick}
            className="text-gray-400 hover:text-white p-0 h-auto"
          >
            <span>{actionText}</span>
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickAction;
