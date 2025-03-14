
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            {/* Add nested routes for dashboard sections */}
            <Route path="atletas" element={<div className="p-8"><h1 className="text-2xl font-bold">Atletas</h1></div>} />
            <Route path="categorias" element={<div className="p-8"><h1 className="text-2xl font-bold">Categorias</h1></div>} />
            <Route path="torneios" element={<div className="p-8"><h1 className="text-2xl font-bold">Torneios</h1></div>} />
            <Route path="pontuacao" element={<div className="p-8"><h1 className="text-2xl font-bold">Pontuação</h1></div>} />
            <Route path="resultados" element={<div className="p-8"><h1 className="text-2xl font-bold">Resultados</h1></div>} />
            <Route path="configuracoes" element={<div className="p-8"><h1 className="text-2xl font-bold">Configurações</h1></div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
