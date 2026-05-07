import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import MessagesPage from "@/pages/MessagesPage";
import MemoriesPage from "@/pages/MemoriesPage";
import GalleryPage from "@/pages/GalleryPage";
import QuotesPage from "@/pages/QuotesPage";
import LegacyPage from "@/pages/LegacyPage";
import ClubsPage from "@/pages/ClubsPage";
import GraduatesPage from "@/pages/GraduatesPage";
import TimelinePage from "@/pages/TimelinePage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/messages" component={MessagesPage} />
      <Route path="/memories" component={MemoriesPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/quotes" component={QuotesPage} />
      <Route path="/legacy" component={LegacyPage} />
      <Route path="/clubs" component={ClubsPage} />
      <Route path="/graduates" component={GraduatesPage} />
      <Route path="/timeline" component={TimelinePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
