import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConfirmationPage() {
  const orientationDetails = {
    date: "December 22, 2025",
    time: "10:30 AM",
    address: "111 Broadway, New York, NY, 10006",
    contact: "elizabeth.campbell@dfcs.gov",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Success Message */}
          <div className="text-center mb-10 animate-fade-in">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Inquiry Submitted Successfully!
            </h1>
            <p className="text-muted-foreground">
              Thank you for your interest in becoming a foster parent. Your inquiry has been received and is being processed.
            </p>
          </div>

          {/* Orientation Details Card */}
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Your Orientation Details
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-semibold text-foreground">{orientationDetails.date}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Time</div>
                  <div className="font-semibold text-foreground">{orientationDetails.time}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <div className="font-semibold text-foreground">{orientationDetails.address}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/30">
              <p className="text-sm text-muted-foreground">
                If you have additional questions, please contact{" "}
                <a href={`mailto:${orientationDetails.contact}`} className="text-primary font-medium hover:underline">
                  {orientationDetails.contact}
                </a>
              </p>
            </div>
          </div>

          {/* Portal Access Info */}
          <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold">Portal Account Access</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              After your inquiry is reviewed and approved by a Licensing Worker, you will receive login credentials via email. Using these credentials, you can sign in to the portal to continue your foster parent application.
            </p>
            <Button asChild variant="hero">
              <Link to="/login">
                Go to Login
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* What Happens Next */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="font-semibold text-foreground mb-4">What Happens Next?</h3>
            <ul className="space-y-3">
              {[
                "Your inquiry will be reviewed by our licensing team",
                "Attend the orientation session at the scheduled date and time",
                "Receive your portal login credentials via email",
                "Complete your full application through the portal",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
