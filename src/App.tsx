
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Author from "./pages/Author";
import Summary from "./pages/Summary";
import Characters from "./pages/Characters";
import Plot from "./pages/Plot";
import Themes from "./pages/Themes";
import ReadingJourney from "./pages/ReadingJourney";
import Reflections from "./pages/Reflections";
import Media from "./pages/Media";
import Recommendations from "./pages/Recommendations";
import WorksCited from "./pages/WorksCited";
import Analysis from "./pages/Analysis";
import Game from "./pages/Game";
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
          <Route path="/author" element={<Author />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/plot" element={<Plot />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/reading-journey" element={<ReadingJourney />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/media" element={<Media />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/works-cited" element={<WorksCited />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
