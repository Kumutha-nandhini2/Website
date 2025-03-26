import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import ContactPage from "@/pages/contact-page";
import CareersPage from "@/pages/careers-page";
import ApplyJobPage from "@/pages/apply-job";
import ApplyInternshipPage from "@/pages/apply-internship";
import AboutPage from "@/pages/about-page";
import AdminDashboard from "@/pages/admin-dashboard";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { ChatInterface } from "./components/chat/chat-interface";
import CornerLogo from "./components/corner-logo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/careers/apply/:id" component={ApplyJobPage} />
      <Route path="/careers/apply-internship" component={ApplyInternshipPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/auth" component={AuthPage} />
      <ProtectedRoute path="/admin" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <CornerLogo />
          <main className="flex-grow pt-20">
            <Router />
          </main>
          <Footer />
          <ChatInterface />
        </div>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
