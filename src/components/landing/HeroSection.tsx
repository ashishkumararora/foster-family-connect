import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export function HeroSection() {
  return <section className="relative min-h-[85vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Heart className="w-4 h-4" />
              <span>Department of Family & Children Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{
            animationDelay: "100ms"
          }}>
              Open Your Heart,<br />
              <span className="text-accent">Open Your Home</span>
            </h1>
            
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl animate-fade-in" style={{
            animationDelay: "200ms"
          }}>
              Thank you for your interest in becoming a foster parent. This portal will guide you through the application process, ensuring all required information is collected and verified for approval.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: "300ms"
          }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/inquiry">
                  Start Inquiry Form
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/login">
                  <Phone className="w-5 h-5" />
                  Need Help?
                </Link>
              </Button>
            </div>

            {/* Stats */}
            
          </div>

          {/* Hero Image/Illustration */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{
          animationDelay: "300ms"
        }}>
            <div className="relative">
              <div className="w-96 h-96 bg-accent/20 rounded-full flex items-center justify-center">
                <div className="w-80 h-80 bg-accent/30 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-primary-foreground/10 rounded-full flex items-center justify-center backdrop-blur">
                    <Heart className="w-32 h-32 text-accent animate-pulse-soft" />
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg animate-fade-in" style={{
              animationDelay: "500ms"
            }}>
                <div className="text-2xl font-bold text-primary">120</div>
                <div className="text-xs text-muted-foreground">Days to License</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent p-4 rounded-xl shadow-lg animate-fade-in" style={{
              animationDelay: "600ms"
            }}>
                <div className="text-2xl font-bold text-accent-foreground">24/7</div>
                <div className="text-xs text-accent-foreground/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}