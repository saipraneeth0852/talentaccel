import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingNav } from "@/components/FloatingNav";
import Index from "./pages/Index.tsx";
import OffshoreTeams from "./pages/OffshoreTeams.tsx";
import About from "./pages/About.tsx";
import Careers from "./pages/Careers.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import CaseStudiesPage from "./pages/CaseStudiesPage.tsx";
import Industries from "./pages/Industries.tsx";
import TalentAcquisition from "./pages/services/TalentAcquisition.tsx";
import DedicatedTeams from "./pages/services/DedicatedTeams.tsx";
import PayrollCompliance from "./pages/services/PayrollCompliance.tsx";
import HrAdvisory from "./pages/services/HrAdvisory.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/offshore-teams" element={<OffshoreTeams />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services/talent-acquisition" element={<TalentAcquisition />} />
          <Route path="/services/dedicated-teams" element={<DedicatedTeams />} />
          <Route path="/services/payroll-compliance" element={<PayrollCompliance />} />
          <Route path="/services/hr-advisory" element={<HrAdvisory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
