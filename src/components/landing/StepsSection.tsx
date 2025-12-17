import { Heart, FileText, Users, GraduationCap, ClipboardCheck, Shield } from "lucide-react";
const steps = [{
  icon: FileText,
  title: "Fill out an Inquiry Form",
  description: "Tell us about yourself and provide contact information to get started."
}, {
  icon: Users,
  title: "Join us for an Orientation",
  description: "Learn about being part of the foster parent community and what to expect."
}, {
  icon: Shield,
  title: "Sign on to the Portal",
  description: "Sign up with a valid email and set a secure password for your account."
}, {
  icon: ClipboardCheck,
  title: "Complete Your Application",
  description: "Provide personal details, questionnaire about your experience and readiness."
}, {
  icon: GraduationCap,
  title: "Submit Required Documents",
  description: "Upload identification, proof of residence, and financial stability documents."
}, {
  icon: Heart,
  title: "Review and Submit",
  description: "Double-check your details and submit your application for review."
}];
export function StepsSection() {
  return <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Steps to Become a Foster Parent
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow these simple steps to begin your journey as a foster parent and make a difference in a child's life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-4xl">
          {steps.map((step, index) => <div key={index} className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}