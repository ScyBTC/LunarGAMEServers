import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroLoader from "@/components/IntroLoader";
import Index from "./pages/Index";
import Servers from "./pages/Servers";
import Events from "./pages/Events";
import Rules from "./pages/Rules";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const hasSeenIntro = sessionStorage.getItem("lunar-intro-seen");

  const handleIntroComplete = () => {
    sessionStorage.setItem("lunar-intro-seen", "1");
    setIntroComplete(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!hasSeenIntro && !introComplete && (
          <IntroLoader onComplete={handleIntroComplete} />
        )}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
