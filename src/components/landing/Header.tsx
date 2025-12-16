import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export function Header({ variant = "transparent" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTransparent = variant === "transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      isTransparent ? "bg-transparent" : "bg-card shadow-md"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className={`w-8 h-8 ${isTransparent ? "text-accent" : "text-primary"}`} />
            <span className={`font-display font-bold text-lg ${isTransparent ? "text-primary-foreground" : "text-foreground"}`}>
              Foster Parent Portal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isTransparent 
                  ? "text-primary-foreground/80 hover:text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/inquiry" 
              className={`text-sm font-medium transition-colors ${
                isTransparent 
                  ? "text-primary-foreground/80 hover:text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Inquiry
            </Link>
            <Link 
              to="/orientation" 
              className={`text-sm font-medium transition-colors ${
                isTransparent 
                  ? "text-primary-foreground/80 hover:text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Orientation
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant={isTransparent ? "outline-light" : "outline"} size="sm">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild variant="hero" size="sm">
              <Link to="/inquiry">Start Inquiry</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${isTransparent ? "text-primary-foreground" : "text-foreground"}`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card rounded-xl shadow-lg p-4 mb-4 animate-scale-in">
            <nav className="flex flex-col gap-2">
              <Link to="/" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/inquiry" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                Inquiry
              </Link>
              <Link to="/orientation" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                Orientation
              </Link>
              <hr className="my-2 border-border" />
              <Link to="/login" className="px-4 py-2 text-foreground hover:bg-muted rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                Log In
              </Link>
              <Button asChild variant="hero" className="mt-2">
                <Link to="/inquiry" onClick={() => setMobileMenuOpen(false)}>Start Inquiry</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
