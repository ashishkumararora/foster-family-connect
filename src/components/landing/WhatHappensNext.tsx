import { CheckCircle2, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatHappensNext() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* What Happens Next */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              What Happens Next?
            </h2>
            <p className="text-muted-foreground mb-8">
              After submitting your inquiry, here's what you can expect:
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Review Process",
                  description: "Your inquiry will be reviewed by our licensing team within 2-3 business days.",
                },
                {
                  title: "Orientation Invitation",
                  description: "You'll receive an invitation to attend a foster parent orientation session.",
                },
                {
                  title: "Account Access",
                  description: "After approval, you'll receive login credentials to complete your full application.",
                },
                {
                  title: "Ongoing Support",
                  description: "A licensing worker will be assigned to guide you through the entire process.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Need Help Card */}
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-display font-bold">Need Help?</h3>
            </div>
            
            <p className="text-primary-foreground/80 mb-8">
              Our team is here to support you every step of the way. Don't hesitate to reach out with any questions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-4">
                <Phone className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-sm text-primary-foreground/70">Call Us</div>
                  <div className="font-semibold">1-800-FOSTER-CARE</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-4">
                <MessageCircle className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-sm text-primary-foreground/70">Email Support</div>
                  <div className="font-semibold">support@fostercare.gov</div>
                </div>
              </div>
            </div>

            <Button variant="hero" className="w-full mt-6">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
