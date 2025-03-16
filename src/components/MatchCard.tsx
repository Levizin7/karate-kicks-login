
import { cn } from "@/lib/utils";
import React from "react";

interface MatchCardProps {
  category: string;
  time: string;
  mat: string;
  player1: string;
  player2: string;
  className?: string;
  style?: React.CSSProperties;
}

export function MatchCard({ category, time, mat, player1, player2, className, style }: MatchCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-lg p-4 mb-4 hover-scale hover-glow",
        className
      )}
      style={style}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="bg-primary/10 text-primary text-xs font-medium rounded-full px-2 py-1">{category}</span>
        <div className="flex gap-3 text-sm">
          <span className="text-muted-foreground">{time}</span>
          <span className="bg-secondary text-secondary-foreground text-xs font-medium rounded-full px-2 py-1">{mat}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {player1.charAt(0)}
          </div>
          <span className="font-medium">{player1}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">VS</div>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="font-medium">{player2}</span>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {player2.charAt(0)}
          </div>
        </div>
      </div>
    </div>
  );
}
