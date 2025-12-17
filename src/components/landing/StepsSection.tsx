import { Heart, FileText, Users, GraduationCap, ClipboardCheck, Shield, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Inquiry Form",
    description: "Tell us about yourself",
  },
  {
    icon: Users,
    title: "Orientation",
    description: "Learn what to expect",
  },
  {
    icon: Shield,
    title: "Portal Sign-up",
    description: "Create your account",
  },
  {
    icon: ClipboardCheck,
    title: "Application",
    description: "Complete your details",
  },
  {
    icon: GraduationCap,
    title: "Documents",
    description: "Upload required files",
  },
  {
    icon: Heart,
    title: "Submit",
    description: "Review and submit",
  },
];

const whatHappensNext = [
  { title: "Review", description: "2-3 business days" },
  { title: "Orientation Invite", description: "Email confirmation" },
  { title: "Account Access", description: "Login credentials" },
  { title: "Worker Assigned", description: "Ongoing support" },
];

export function StepsSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Steps to Become a Foster Parent
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow these steps to begin your journey
          </p>
        </div>
        
        {/* Horizontal Flow */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Desktop Flow */}
          <div className="hidden md:block relative">
            {/* Connection Line */}
            <div className="absolute top-5 left-[8%] right-[8%] h-0.5 bg-primary/30" />
            
            <div className="flex justify-between relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center w-[16%]">
                  {/* Circle with number */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shadow-md mb-2">
                    {index + 1}
                  </div>
                  <h3 className="font-medium text-foreground text-sm mb-0.5">{step.title}</h3>
                  <p className="text-muted-foreground text-xs leading-tight">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Flow - 2 rows */}
          <div className="md:hidden">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {steps.slice(0, 3).map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs mb-1">
                    {index + 1}
                  </div>
                  <h3 className="font-medium text-foreground text-xs">{step.title}</h3>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {steps.slice(3, 6).map((step, index) => (
                <div key={index + 3} className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-xs mb-1">
                    {index + 4}
                  </div>
                  <h3 className="font-medium text-foreground text-xs">{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Happens Next - Compact */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
            <h3 className="text-lg font-display font-semibold text-foreground text-center mb-4">
              What Happens Next?
            </h3>
            
            {/* Horizontal compact flow */}
            <div className="hidden sm:block relative">
              <div className="absolute top-4 left-[12%] right-[12%] h-0.5 bg-success/30" />
              <div className="flex justify-between relative">
                {whatHappensNext.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-[24%]">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-success/20 flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    </div>
                    <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile - 2x2 grid */}
            <div className="sm:hidden grid grid-cols-2 gap-4">
              {whatHappensNext.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground text-xs">{item.title}</h4>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
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
