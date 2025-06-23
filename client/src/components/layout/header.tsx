import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Shield, Database, ClipboardCheck, FileSpreadsheet, BarChart, Key, Lock, Building, Briefcase, GraduationCap, ShieldAlert, Brain } from "lucide-react";
import Logo from "@/components/logo";

const Header = () => {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCornerLogo, setShowCornerLogo] = useState(true);

  // Check if we're on the homepage and control the corner logo visibility
  useEffect(() => {
    setShowCornerLogo(location === '/');
  }, [location]);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 backdrop-blur-sm bg-white/90 border-b border-primary/20 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Logo width={200} height={60} className="lg:w-[220px] lg:h-[65px] w-[200px] h-[55px]" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* Products Dropdown */}
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 py-2 font-medium">
                  Products
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 p-0 bg-white border border-primary/10 shadow-md rounded-md overflow-hidden">
                <div className="bg-[#789DBC] px-4 py-3 border-b border-primary/10">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">Privacy Platform</span>
                </div>

                <div className="grid p-2 gap-1">
                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Database size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Data Classification</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Secure sensitive data through smart discovery and classification</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <ClipboardCheck size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Consent Management</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Smart, automated consent handling for seamless compliance</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <BarChart size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Data & AI Governance</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Unified governance across data landscapes and AI models</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <ShieldAlert size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Breach Management & Reporting</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Identify, mitigate and report threats with AI-driven tools</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>

                <div className="bg-[#789DBC] px-4 py-3 border-b border-t border-primary/10">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">Advanced Privacy Technologies</span>
                </div>

                <div className="grid p-2 gap-1">
                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Key size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Adaptive Context Tokenization</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Context-aware sensitive data masking</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Lock size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Polymorphic Encryption</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Encrypted data verification without exposure</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Brain size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Federated Learning</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Decentralized model training without data</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 py-2 font-medium">
                  Solutions
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 p-0 bg-white border border-primary/10 shadow-md rounded-md overflow-hidden">
                <div className="bg-[#789DBC] px-4 py-3 border-b border-primary/10">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">By Industry</span>
                </div>

                <div className="grid p-2 gap-1">
                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Building size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Healthcare</div>
                        <div className="text-xs text-muted-foreground mt-0.5">HIPAA-compliant privacy solutions for patient data</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Building size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Financial Services</div>
                        <div className="text-xs text-muted-foreground mt-0.5">PCI-DSS compliant solutions for financial institutions</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Building size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Retail & eCommerce</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Protect customer data while enabling personalization</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Building size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Automobile</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Safeguard connected vehicle and customer information</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>

                <div className="bg-[#789DBC] px-4 py-3 border-b border-t border-primary/10">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">By Use Case</span>
                </div>

                <div className="grid p-2 gap-1">
                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Regulatory Compliance</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Comprehensive solutions for GDPR, DPDP Act 2023, HIPAA, and other regulations</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                    <Link href="#" className="flex items-start gap-3 cursor-pointer">
                      <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-primary">Cross-Border Data Flows</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Seamlessly transfer data across borders while maintaining compliance</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link href="/about">
            <Button
              variant="ghost"
              className={`font-medium ${isActive("/about") ? "text-primary" : ""}`}
            >
              About
            </Button>
          </Link>

          <Link href="/careers">
            <Button
              variant="ghost"
              className={`font-medium ${isActive("/careers") ? "text-primary" : ""}`}
            >
              Careers
            </Button>
          </Link>

          <Link href="/feedback">
            <Button
              variant="ghost"
              className={`font-medium ${isActive("/feedback") ? "text-primary" : ""}`}
            >
              Feedback
            </Button>
          </Link>

        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-primary border-2 text-primary hover:bg-primary/10 hover:text-primary rounded-md font-medium transition-all"
            >
              Request Demo
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/80 text-[#f8fafc] font-medium rounded-md transition-colors"
                >
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-0 bg-white border border-primary/10 shadow-md rounded-md overflow-hidden">
                <div className="bg-[#789DBC] px-4 py-3 border-b border-primary/10">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">Account</span>
                </div>

                <div className="grid p-2 gap-1">
                  {user.role === 'admin' && (
                    <DropdownMenuItem asChild className="rounded-md p-2 hover:bg-[#FEF9F2]">
                      <Link href="/admin" className="flex items-center gap-2 cursor-pointer">
                        <div className="text-primary">
                          <Briefcase size={16} />
                        </div>
                        <div className="font-medium">Admin Dashboard</div>
                      </Link>
                    </DropdownMenuItem>
                  )}

                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="rounded-md p-2 hover:bg-[#FEF9F2] flex items-center gap-2 cursor-pointer"
                  >
                    <div className="text-primary">
                      <Lock size={16} />
                    </div>
                    <div className="font-medium">Logout</div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/80 text-[#f8fafc] font-medium rounded-md transition-colors"
              >
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="overflow-y-auto">
            <div className="flex justify-center mb-6 mt-4">
              <Logo width={180} height={60} />
            </div>
            <div className="flex flex-col gap-6">
              {/* Products Section - Styled like desktop dropdown */}
              <div className="space-y-3 border rounded-md overflow-hidden">
                <div className="bg-[#789DBC] px-4 py-3 border-b border-primary/10">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">Products</span>
                </div>

                <div className="p-3">
                  <div className="px-1 py-1 text-sm font-medium text-primary">Privacy Platform</div>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <Database size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Data Classification</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Secure sensitive data through smart discovery</div>
                    </div>
                  </Link>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <ClipboardCheck size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Consent Management</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Smart, automated consent handling</div>
                    </div>
                  </Link>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <BarChart size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Data & AI Governance</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Unified governance across data landscapes</div>
                    </div>
                  </Link>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <ShieldAlert size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Breach Management</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Identify, mitigate and report threats</div>
                    </div>
                  </Link>

                  <div className="px-1 py-1 mt-3 text-sm font-medium text-primary">Advanced Privacy Technologies</div>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <Key size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Adaptive context Tokenization</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Context-aware sensitive data masking</div>
                    </div>
                  </Link>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <Lock size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Polymorphic Encryption</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Encrypted data verification without exposure</div>
                    </div>
                  </Link>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <Brain size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Federated Learning</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Decentralized model training without data</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Solutions Section - Styled like desktop dropdown */}
              <div className="space-y-3 border rounded-md overflow-hidden">
                <div className="bg-[#789DBC] px-4 py-3 border-b border-primary/10">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">Solutions</span>
                </div>

                <div className="p-3">
                  <div className="px-1 py-1 text-sm font-medium text-primary">By Industry</div>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <Building size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Healthcare</div>
                      <div className="text-xs text-muted-foreground mt-0.5">HIPAA-compliant privacy solutions</div>
                    </div>
                  </Link>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <Building size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Financial Services</div>
                      <div className="text-xs text-muted-foreground mt-0.5">PCI-DSS compliant solutions</div>
                    </div>
                  </Link>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <Building size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Retail & eCommerce</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Protect customer data</div>
                    </div>
                  </Link>

                  <div className="px-1 py-1 mt-3 text-sm font-medium text-primary">By Use Case</div>

                  <Link href="#" onClick={() => setMenuOpen(false)} className="flex items-start gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="mt-0.5 bg-primary/10 p-1.5 rounded-md text-primary">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <div className="font-medium text-primary">Regulatory Compliance</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Solutions for GDPR, DPDP Act, HIPAA</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Company Section - Styled like desktop dropdown */}
              <div className="space-y-3 border rounded-md overflow-hidden">
                <div className="bg-[#789DBC] px-4 py-3 border-b border-primary/10">
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">Company</span>
                </div>

                <div className="p-3">
                  <Link href="/about" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2]">
                    <div className="bg-primary/10 p-1.5 rounded-md text-primary">
                      <Building size={18} />
                    </div>
                    <div className="font-medium text-primary">About Us</div>
                  </Link>

                  <Link href="/careers" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-[#FEF9F2] mt-1">
                    <div className="bg-primary/10 p-1.5 rounded-md text-primary">
                      <Briefcase size={18} />
                    </div>
                    <div className="font-medium text-primary">Careers</div>
                  </Link>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-primary border-2 text-primary hover:bg-primary/10 hover:text-primary rounded-md font-medium transition-all"
                  >
                    Request Demo
                  </Button>
                </Link>

                {user ? (
                  <div className="space-y-3">
                    {user.role === 'admin' && (
                      <Link href="/admin" onClick={() => setMenuOpen(false)}>
                        <Button
                          variant="default"
                          className="w-full bg-primary hover:bg-primary/80 text-[#f8fafc] font-medium rounded-md transition-colors"
                        >
                          Admin Dashboard
                        </Button>
                      </Link>
                    )}
                    <Button
                      variant="default"
                      className="w-full bg-primary hover:bg-primary/80 text-[#f8fafc] font-medium rounded-md transition-colors"
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link href="/auth" onClick={() => setMenuOpen(false)}>
                    <Button
                      variant="default"
                      className="w-full bg-primary hover:bg-primary/80 text-[#f8fafc] font-medium rounded-md transition-colors"
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;