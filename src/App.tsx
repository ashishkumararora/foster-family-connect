import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import InquiryPage from "./pages/InquiryPage";
import OrientationPage from "./pages/OrientationPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import LoginPage from "./pages/LoginPage";

// Dashboard Pages
import DashboardPage from "./pages/DashboardPage";
import ApplicationPage from "./pages/ApplicationPage";
import LicensingPage from "./pages/LicensingPage";
import DocumentsPage from "./pages/DocumentsPage";
import AccountPage from "./pages/AccountPage";

import NotFound from "./pages/NotFound";
import FloatingChatAgent from "./components/chat/FloatingChatAgent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/inquiry" element={<InquiryPage />} />
          <Route path="/orientation" element={<OrientationPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/application" element={<ApplicationPage />} />
          <Route path="/dashboard/licensing" element={<LicensingPage />} />
          <Route path="/dashboard/documents" element={<DocumentsPage />} />
          <Route path="/dashboard/account" element={<AccountPage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingChatAgent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
