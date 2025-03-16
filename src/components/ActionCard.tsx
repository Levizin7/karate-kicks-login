
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
        "glass-card rounded-lg p-4 mb-4 flex items-center gap-4 hover-scale hover-glow",
        className
      )}
      style={style}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
