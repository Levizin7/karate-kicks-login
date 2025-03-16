
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ActionCard({ icon: Icon, title, description, to, className, style }: ActionCardProps) {
  return (
    <Link 
      to={to} 
      className={cn(
        "glass-card rounded-lg p-4 mb-4 flex items-center gap-4 hover-scale hover-glow transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-sm sm:text-base truncate">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
