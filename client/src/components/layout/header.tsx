import { useState } from "react";
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
import { Menu, ChevronDown } from "lucide-react";
import Logo from "@/components/logo";

const Header = () => {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Logo width={160} height={50} className="lg:w-[180px] lg:h-[50px] w-[160px] h-[40px]" />
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
              <DropdownMenuContent align="start" className="w-72 bg-white/95 backdrop-blur-sm border border-primary/10 shadow-sm">
                <div className="px-4 py-2 border-b border-primary/10">
                  <span className="text-sm font-semibold text-primary">Privacy Platform</span>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Data Classification</div>
                    <div className="text-xs text-muted-foreground">Secure sensitive data through smart discovery and classification</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Consent Management</div>
                    <div className="text-xs text-muted-foreground">Smart, automated consent handling for seamless compliance</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Data & AI Governance</div>
                    <div className="text-xs text-muted-foreground">Unified governance across data landscapes and AI models</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Breach Management & Compliance</div>
                    <div className="text-xs text-muted-foreground">Identify, mitigate and report threats with AI-driven tools</div>
                  </Link>
                </DropdownMenuItem>
                <div className="px-4 py-2 border-b border-t border-primary/10 mt-2">
                  <span className="text-sm font-semibold text-primary">Advanced Privacy Technologies</span>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Tokenization</div>
                    <div className="text-xs text-muted-foreground">Replace sensitive data with non-sensitive equivalents</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Zero-Knowledge Proofs</div>
                    <div className="text-xs text-muted-foreground">Verify data without revealing underlying information</div>
                  </Link>
                </DropdownMenuItem>
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
              <DropdownMenuContent align="start" className="w-72 bg-white/95 backdrop-blur-sm border border-primary/10 shadow-sm">
                <div className="px-4 py-2 border-b border-primary/10">
                  <span className="text-sm font-semibold text-primary">By Industry</span>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Healthcare</div>
                    <div className="text-xs text-muted-foreground">HIPAA-compliant privacy solutions for patient data</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Financial Services</div>
                    <div className="text-xs text-muted-foreground">PCI-DSS compliant solutions for financial institutions</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Retail & eCommerce</div>
                    <div className="text-xs text-muted-foreground">Protect customer data while enabling personalization</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Automobile</div>
                    <div className="text-xs text-muted-foreground">Safeguard connected vehicle and customer information</div>
                  </Link>
                </DropdownMenuItem>
                <div className="px-4 py-2 border-b border-t border-primary/10 mt-2">
                  <span className="text-sm font-semibold text-primary">By Use Case</span>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">GDPR Compliance</div>
                    <div className="text-xs text-muted-foreground">Meet European data protection requirements</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium text-primary">Cross-Border Data Flows</div>
                    <div className="text-xs text-muted-foreground">Enable compliant global data movement with advanced encryption and privacy controls</div>
                  </Link>
                </DropdownMenuItem>
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
                  className="bg-primary hover:bg-primary/80 text-white font-medium rounded-md transition-colors"
                >
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-sm border border-primary/10 shadow-sm">
                {user.role === 'admin' && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin" className="cursor-pointer">Admin Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth">
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/80 text-white font-medium rounded-md transition-colors"
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
          <SheetContent side="right">
            <div className="flex justify-center mb-6 mt-4">
              <Logo width={140} height={50} />
            </div>
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <div className="font-bold text-lg mb-2">Products</div>
                <div className="px-1 py-1 text-sm font-medium text-primary">Privacy Platform</div>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Data Classification</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Consent Management</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Data & AI Governance</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Breach Management & Compliance</div>
                </Link>
                <div className="px-1 py-1 mt-2 text-sm font-medium text-primary">Advanced Privacy Technologies</div>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Tokenization</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Zero-Knowledge Proofs</div>
                </Link>
              </div>

              <div className="space-y-3">
                <div className="font-bold text-lg mb-2">Solutions</div>
                <div className="px-1 py-1 text-sm font-medium text-primary">By Industry</div>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Healthcare</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Financial Services</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Retail & eCommerce</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Automobile</div>
                </Link>
                <div className="px-1 py-1 mt-2 text-sm font-medium text-primary">By Use Case</div>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">GDPR Compliance</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Cross-Border Data Flows</div>
                </Link>
              </div>

              <Link href="/about" onClick={() => setMenuOpen(false)}>
                <div className="py-2 font-medium">About</div>
              </Link>
              <Link href="/careers" onClick={() => setMenuOpen(false)}>
                <div className="py-2 font-medium">Careers</div>
              </Link>

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
                          className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-md transition-colors"
                        >
                          Admin Dashboard
                        </Button>
                      </Link>
                    )}
                    <Button 
                      variant="default" 
                      className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-md transition-colors"
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
                      className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-md transition-colors"
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
