
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface ThemeToggleProps {
  className?: string;
  iconOnly?: boolean;
}

export function ThemeToggle({ className, iconOnly = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
