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
    <header className="fixed top-0 left-0 right-0 bg-white z-50 backdrop-blur-sm bg-white/90 border-b border-gray-100 shadow-sm">
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
                <Button variant="ghost" className="flex items-center gap-1 py-2 font-medium text-dark-gray hover:text-blue">
                  Products
                  <ChevronDown size={16} className="text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                <div className="px-4 py-2 border-b border-neutral-200">
                  <span className="text-sm font-semibold text-blue">Privacy Solutions</span>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium">Data Classification</div>
                    <div className="text-xs text-muted-foreground">Secure your PII across tech stack through smart data discovery</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium">Consent Management</div>
                    <div className="text-xs text-muted-foreground">Smart, automated consent management for seamless privacy compliance</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium">Privacy Automation</div>
                    <div className="text-xs text-muted-foreground">Enable privacy workflow automation while complying with regulations</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium">Breach Management & Reporting</div>
                    <div className="text-xs text-muted-foreground">Identify and mitigate threats with AI-driven monitoring and reporting</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Solutions Dropdown */}
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 py-2 font-medium text-dark-gray hover:text-blue">
                  Solutions
                  <ChevronDown size={16} className="text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <div className="px-4 py-2 border-b border-neutral-200">
                  <span className="text-sm font-semibold text-primary">By Industry</span>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium">Healthcare</div>
                    <div className="text-xs text-muted-foreground">HIPAA-compliant solutions</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium">Finance</div>
                    <div className="text-xs text-muted-foreground">Secure financial data handling</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#" className="flex flex-col gap-1 cursor-pointer">
                    <div className="font-medium">Technology</div>
                    <div className="text-xs text-muted-foreground">AI-driven tech solutions</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Link href="/about">
            <Button 
              variant="ghost" 
              className={`font-medium text-dark-gray hover:text-blue ${isActive("/about") ? "text-blue" : ""}`}
            >
              About
            </Button>
          </Link>

          <Link href="/careers">
            <Button 
              variant="ghost" 
              className={`font-medium text-dark-gray hover:text-blue ${isActive("/careers") ? "text-blue" : ""}`}
            >
              Careers
            </Button>
          </Link>
        </nav>
        
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contact">
            <Button 
              variant="outline" 
              className="border-dark-blue border-2 text-dark-blue hover:bg-dark-blue/10 hover:text-dark-blue rounded-md font-medium transition-all"
            >
              Request Demo
            </Button>
          </Link>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="default" 
                  className="bg-blue hover:bg-dark-blue text-white font-medium rounded-md transition-colors"
                >
                  Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
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
                className="bg-blue hover:bg-dark-blue text-white font-medium rounded-md transition-colors"
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
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Data Classification</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Consent Management</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Privacy Automation</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Breach Management & Reporting</div>
                </Link>
              </div>

              <div className="space-y-3">
                <div className="font-bold text-lg mb-2">Solutions</div>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Healthcare</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Finance</div>
                </Link>
                <Link href="#" onClick={() => setMenuOpen(false)}>
                  <div className="py-2">Technology</div>
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
                    className="w-full border-dark-blue border-2 text-dark-blue hover:bg-dark-blue/10 hover:text-dark-blue rounded-md font-medium transition-all"
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
                          className="w-full bg-blue hover:bg-dark-blue text-white font-medium rounded-md transition-colors"
                        >
                          Admin Dashboard
                        </Button>
                      </Link>
                    )}
                    <Button 
                      variant="default" 
                      className="w-full bg-blue hover:bg-dark-blue text-white font-medium rounded-md transition-colors"
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
                      className="w-full bg-blue hover:bg-dark-blue text-white font-medium rounded-md transition-colors"
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
