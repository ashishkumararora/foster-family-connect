import { Heart, FileText, Users, GraduationCap, ClipboardCheck, Shield, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Fill out an Inquiry Form",
    description: "Tell us about yourself and provide contact information to get started.",
  },
  {
    icon: Users,
    title: "Join us for an Orientation",
    description: "Learn about being part of the foster parent community and what to expect.",
  },
  {
    icon: Shield,
    title: "Sign on to the Portal",
    description: "Sign up with a valid email and set a secure password for your account.",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Your Application",
    description: "Provide personal details, questionnaire about your experience and readiness.",
  },
  {
    icon: GraduationCap,
    title: "Submit Required Documents",
    description: "Upload identification, proof of residence, and financial stability documents.",
  },
  {
    icon: Heart,
    title: "Review and Submit",
    description: "Double-check your details and submit your application for review.",
  },
];

const whatHappensNext = [
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
];

export function StepsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Steps to Become a Foster Parent
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow these simple steps to begin your journey as a foster parent and make a difference in a child's life.
          </p>
        </div>
        
        {/* Flow Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Flow - Connected Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            {/* Top Row (Steps 1-3) */}
            <div className="grid grid-cols-3 gap-8 mb-20">
              {steps.slice(0, 3).map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg mb-4">
                    {index + 1}
                  </div>
                  
                  {/* Card */}
                  <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 w-full">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow to next */}
                  {index < 2 && (
                    <div className="absolute top-6 -right-4 z-20">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Curved connector from row 1 to row 2 */}
            <div className="absolute top-[200px] right-[15%] w-px h-16 bg-gradient-to-b from-primary to-primary/50" />
            
            {/* Bottom Row (Steps 4-6) - Reversed for flow */}
            <div className="grid grid-cols-3 gap-8">
              {steps.slice(3, 6).reverse().map((step, reverseIndex) => {
                const actualIndex = 5 - reverseIndex;
                return (
                  <div
                    key={actualIndex}
                    className="relative flex flex-col items-center text-center animate-fade-in"
                    style={{ animationDelay: `${(actualIndex) * 150}ms` }}
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg mb-4">
                      {actualIndex + 1}
                    </div>
                    
                    {/* Card */}
                    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 w-full">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Arrow to next (reversed direction) */}
                    {reverseIndex < 2 && (
                      <div className="absolute top-6 -left-4 z-20 rotate-180">
                        <ArrowRight className="w-8 h-8 text-primary" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile/Tablet Flow - Vertical Timeline */}
          <div className="lg:hidden relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30" />
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Card */}
                  <div className="flex-1 bg-card rounded-xl p-5 shadow-card">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-11">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Happens Next Visual */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card-lg border border-border/50 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                What Happens Next?
              </h3>
              <p className="text-muted-foreground">
                After submitting your inquiry, here's what you can expect:
              </p>
            </div>
            
            {/* Visual Progress Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatHappensNext.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Connector Line (desktop) */}
                  {index < whatHappensNext.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] right-0 h-0.5 bg-gradient-to-r from-success/50 to-success/20" />
                  )}
                  
                  <div className="bg-secondary/50 rounded-xl p-5 h-full hover:bg-secondary/80 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
