
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  iconOnly?: boolean;
}

export function ThemeToggle({ className, iconOnly = false }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size={iconOnly ? "icon" : "default"}
      onClick={toggleTheme}
      className={`rounded-full transition-all duration-300 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <>
          <Moon className="h-[1.15rem] w-[1.15rem] rotate-90 transition-all duration-300 dark:rotate-0" />
          {!iconOnly && <span className="ml-2 transition-opacity duration-300">Dark Mode</span>}
        </>
      ) : (
        <>
          <Sun className="h-[1.15rem] w-[1.15rem] rotate-0 transition-all duration-300 dark:-rotate-90" />
          {!iconOnly && <span className="ml-2 transition-opacity duration-300">Light Mode</span>}
        </>
      )}
    </Button>
  );
}
