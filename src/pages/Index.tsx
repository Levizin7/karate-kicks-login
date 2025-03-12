
import React, { useEffect, useState } from 'react';
import BackgroundImage from '@/components/BackgroundImage';
import LoginForm from '@/components/LoginForm';
import Logo from '@/components/Logo';

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <BackgroundImage />
      
      <header className="container mx-auto py-6 px-4">
        <Logo className={`opacity-0 ${mounted ? 'animate-fade-in' : ''}`} />
      </header>
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div 
            className={`text-center mb-8 opacity-0 ${mounted ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '600ms' }}
          >
            <h1 className="text-4xl font-bold text-karate-white mb-3 tracking-tight leading-tight">
              Karate Shotokan
            </h1>
            <p className="text-karate-white/70 max-w-sm mx-auto leading-relaxed">
              O caminho para a excelência começa com o primeiro passo. Entre e continue sua jornada.
            </p>
          </div>
          
          <LoginForm 
            className={`opacity-0 ${mounted ? 'animate-fade-in' : ''}`}
          />
        </div>
      </main>
      
      <footer className="container mx-auto py-6 px-4">
        <div 
          className={`text-center text-sm text-karate-white/40 opacity-0 ${mounted ? 'animate-fade-in' : ''}`}
          style={{ animationDelay: '1200ms' }}
        >
          &copy; {new Date().getFullYear()} Associação de Karate Shotokan. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
