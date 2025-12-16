import { Link } from "react-router-dom";
import { Heart, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-accent" />
              <span className="font-display font-bold text-xl">Foster Parent Portal</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              Department of Family & Children Services. Empowering families to provide safe, loving homes for children in need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/inquiry" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Start Inquiry
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/orientation" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Orientation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1">
                  DFCS Home <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Public Information Act
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Department of Family & Children Services. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Contact</a>
              <span>|</span>
              <a href="#" className="hover:text-accent transition-colors">Link Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-accent transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
