
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { User, Lock, ChevronRight } from "lucide-react";

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    remember: false
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setCredentials(prev => ({
      ...prev,
      remember: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Login successful",
      description: "Welcome back to Karate Shotokan"
    });
    
    setLoading(false);
  };

  return (
    <div className={`glass-morphism p-8 rounded-xl max-w-md w-full mx-auto animate-scale-in ${className}`}>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-karate-white mb-2 tracking-wide">Bem-vindo</h2>
        <p className="text-karate-white/60 text-sm">Entre para acessar sua conta</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-karate-white/80">
            E-mail
          </Label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-karate-white/50">
              <User size={18} />
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={credentials.email}
              onChange={handleChange}
              className="bg-white/5 border-white/10 pl-10 h-12 text-karate-white placeholder:text-karate-white/30 focus:border-karate-red/70 transition-all duration-300"
              autoComplete="email"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium text-karate-white/80">
              Senha
            </Label>
            <a href="#" className="text-xs text-karate-white/60 hover:text-karate-red transition-colors duration-200">
              Esqueceu a senha?
            </a>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-karate-white/50">
              <Lock size={18} />
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={handleChange}
              className="bg-white/5 border-white/10 pl-10 h-12 text-karate-white placeholder:text-karate-white/30 focus:border-karate-red/70 transition-all duration-300"
              autoComplete="current-password"
              required
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remember" 
            checked={credentials.remember}
            onCheckedChange={handleCheckboxChange}
            className="data-[state=checked]:bg-karate-red data-[state=checked]:border-karate-red"
          />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none text-karate-white/70 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lembrar-me
          </label>
        </div>
        
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-karate-red hover:bg-karate-red/90 text-white h-12 font-medium transition-all duration-300 group relative overflow-hidden shimmer"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading ? 'Entrando...' : 'Entrar'}
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
        
        <div className="text-center text-sm text-karate-white/60 mt-6">
          Não tem uma conta?{" "}
          <a href="#" className="text-karate-white hover:text-karate-red font-medium transition-colors duration-200">
            Cadastre-se
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
