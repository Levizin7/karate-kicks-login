
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function StatCard({ title, value, icon: Icon, iconColor, className, style }: StatCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-lg p-3 sm:p-5 animate-scale-in hover-scale hover-glow transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs sm:text-sm font-medium text-muted-foreground">{title}</p>
        <div className={cn(
          "rounded-full p-1.5 sm:p-2", 
          iconColor || "bg-primary/10 text-primary"
        )}>
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      </div>
      <p className="mt-2 sm:mt-3 text-2xl sm:text-4xl font-bold leading-tight">{value}</p>
    </div>
  );
}
