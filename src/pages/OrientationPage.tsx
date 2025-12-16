import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const orientationEvents = [
  {
    id: 1,
    date: "December 22, 2025",
    time: "10:30 AM",
    address: "111 Broadway, New York, NY, 10006",
    spotsLeft: 15,
  },
  {
    id: 2,
    date: "January 5, 2026",
    time: "2:00 PM",
    address: "456 Main Street, Albany, NY, 12207",
    spotsLeft: 8,
  },
  {
    id: 3,
    date: "January 12, 2026",
    time: "9:00 AM",
    address: "789 Court Square, Brooklyn, NY, 11201",
    spotsLeft: 20,
  },
];

export default function OrientationPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = () => {
    if (!selectedEvent) return;
    
    toast({
      title: "Registration Confirmed!",
      description: "You have successfully registered for the orientation. Check your email for details.",
    });
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Foster Parent Orientation Registration
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Please register for a Foster Parent Orientation at a time and location that is convenient for you.
            </p>
          </div>

          {/* Events List */}
          <div className="space-y-4 mb-8">
            {orientationEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event.id)}
                className={`bg-card rounded-xl p-6 shadow-card cursor-pointer transition-all duration-200 hover:shadow-card-hover border-2 ${
                  selectedEvent === event.id
                    ? "border-primary bg-primary/5"
                    : "border-transparent hover:border-primary/30"
                } animate-fade-in`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <div className="flex items-center gap-2 text-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-5 h-5" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{event.address}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {event.spotsLeft} spots left
                    </span>
                    {selectedEvent === event.id && (
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={handleRegister}
              disabled={!selectedEvent}
            >
              Register for Orientation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/inquiry">Fill Inquiry Form First</a>
            </Button>
          </div>

          {/* Help Guide */}
          <div className="mt-12 bg-secondary/50 rounded-xl p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="font-semibold text-foreground mb-4">What Happens Next?</h3>
            <ul className="space-y-3">
              {[
                "Join us for an Orientation - Learn about being a part of the foster parent community.",
                "Sign on to the Portal - Sign up with a valid email and secure your account.",
                "Complete Your Application - Provide personal details, financial information, and references.",
                "Submit Required Documents - Upload identification and other necessary documents.",
                "Review and Submit - Double-check your details before submission.",
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
