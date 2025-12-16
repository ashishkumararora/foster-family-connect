import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, ChevronLeft, CheckCircle2, User, MapPin, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Applicant Info", icon: User },
  { id: 2, title: "Address", icon: MapPin },
  { id: 3, title: "Additional Info", icon: Info },
];

export default function InquiryPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    // Applicant A
    firstNameA: "",
    middleNameA: "",
    lastNameA: "",
    dobA: "",
    phoneA: "",
    emailA: "",
    // Applicant B
    firstNameB: "",
    middleNameB: "",
    lastNameB: "",
    dobB: "",
    phoneB: "",
    emailB: "",
    // Contact Preferences
    contactMethod: "email",
    canReceiveText: false,
    // Address
    address: "",
    city: "",
    state: "",
    postalCode: "",
    county: "",
    // Additional
    spokeToRecruiter: "",
    recruiterName: "",
    isRelative: "",
    howHeard: [] as string[],
    comments: "",
  });

  const updateForm = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleHowHeard = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      howHeard: prev.howHeard.includes(value)
        ? prev.howHeard.filter((v) => v !== value)
        : [...prev.howHeard, value],
    }));
  };

  const handleSubmit = () => {
    toast({
      title: "Inquiry Submitted!",
      description: "Your inquiry has been submitted successfully. You will receive a confirmation email shortly.",
    });
    navigate("/orientation");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header variant="solid" />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Foster Parent Inquiry Form
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thank you for your interest in becoming a foster parent. This process ensures all required information is collected for approval.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      currentStep === step.id
                        ? "bg-primary text-primary-foreground"
                        : currentStep > step.id
                        ? "bg-success text-success-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                    <span className="hidden sm:inline font-medium">{step.title}</span>
                    <span className="sm:hidden font-medium">{step.id}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-2 ${currentStep > step.id ? "bg-success" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-10 animate-fade-in">
            {/* Step 1: Applicant Info */}
            {currentStep === 1 && (
              <div className="space-y-8">
                {/* Applicant A */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Applicant A (Primary)
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="firstNameA">First Name *</Label>
                      <Input
                        id="firstNameA"
                        value={formData.firstNameA}
                        onChange={(e) => updateForm("firstNameA", e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="middleNameA">Middle Name</Label>
                      <Input
                        id="middleNameA"
                        value={formData.middleNameA}
                        onChange={(e) => updateForm("middleNameA", e.target.value)}
                        placeholder="Michael"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastNameA">Last Name *</Label>
                      <Input
                        id="lastNameA"
                        value={formData.lastNameA}
                        onChange={(e) => updateForm("lastNameA", e.target.value)}
                        placeholder="Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dobA">Date of Birth *</Label>
                      <Input
                        id="dobA"
                        type="date"
                        value={formData.dobA}
                        onChange={(e) => updateForm("dobA", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phoneA">Mobile Phone *</Label>
                      <Input
                        id="phoneA"
                        type="tel"
                        value={formData.phoneA}
                        onChange={(e) => updateForm("phoneA", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emailA">Email *</Label>
                      <Input
                        id="emailA"
                        type="email"
                        value={formData.emailA}
                        onChange={(e) => updateForm("emailA", e.target.value)}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Applicant B */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-muted-foreground" />
                    Applicant B (Optional)
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="firstNameB">First Name</Label>
                      <Input
                        id="firstNameB"
                        value={formData.firstNameB}
                        onChange={(e) => updateForm("firstNameB", e.target.value)}
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <Label htmlFor="middleNameB">Middle Name</Label>
                      <Input
                        id="middleNameB"
                        value={formData.middleNameB}
                        onChange={(e) => updateForm("middleNameB", e.target.value)}
                        placeholder="Marie"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastNameB">Last Name</Label>
                      <Input
                        id="lastNameB"
                        value={formData.lastNameB}
                        onChange={(e) => updateForm("lastNameB", e.target.value)}
                        placeholder="Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dobB">Date of Birth</Label>
                      <Input
                        id="dobB"
                        type="date"
                        value={formData.dobB}
                        onChange={(e) => updateForm("dobB", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phoneB">Mobile Phone</Label>
                      <Input
                        id="phoneB"
                        type="tel"
                        value={formData.phoneB}
                        onChange={(e) => updateForm("phoneB", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emailB">Email</Label>
                      <Input
                        id="emailB"
                        type="email"
                        value={formData.emailB}
                        onChange={(e) => updateForm("emailB", e.target.value)}
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Preferences */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Contact Preferences</h2>
                  <div className="space-y-4">
                    <div>
                      <Label>Preferred method of contact?</Label>
                      <RadioGroup
                        value={formData.contactMethod}
                        onValueChange={(v) => updateForm("contactMethod", v)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone" />
                          <Label htmlFor="phone" className="font-normal cursor-pointer">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email" />
                          <Label htmlFor="email" className="font-normal cursor-pointer">Email</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="canReceiveText"
                        checked={formData.canReceiveText}
                        onCheckedChange={(checked) => updateForm("canReceiveText", !!checked)}
                      />
                      <Label htmlFor="canReceiveText" className="font-normal cursor-pointer">
                        I can receive text messages
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Address */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Home Address
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Please type your address and select from the populated results.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => updateForm("address", e.target.value)}
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => updateForm("city", e.target.value)}
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Select value={formData.state} onValueChange={(v) => updateForm("state", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                        <SelectItem value="GA">Georgia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => updateForm("postalCode", e.target.value)}
                      placeholder="10001"
                    />
                  </div>
                  <div>
                    <Label htmlFor="county">County *</Label>
                    <Input
                      id="county"
                      value={formData.county}
                      onChange={(e) => updateForm("county", e.target.value)}
                      placeholder="Manhattan"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Additional Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label>1) Did you speak to a recruiter in advance of completing this form?</Label>
                    <RadioGroup
                      value={formData.spokeToRecruiter}
                      onValueChange={(v) => updateForm("spokeToRecruiter", v)}
                      className="flex gap-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="recruiterYes" />
                        <Label htmlFor="recruiterYes" className="font-normal cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="recruiterNo" />
                        <Label htmlFor="recruiterNo" className="font-normal cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                    {formData.spokeToRecruiter === "yes" && (
                      <div className="mt-4">
                        <Label htmlFor="recruiterName">Name of Recruiter</Label>
                        <Input
                          id="recruiterName"
                          value={formData.recruiterName}
                          onChange={(e) => updateForm("recruiterName", e.target.value)}
                          placeholder="Enter recruiter name"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label>2) Are you a relative of the child(ren)?</Label>
                    <Select value={formData.isRelative} onValueChange={(v) => updateForm("isRelative", v)}>
                      <SelectTrigger className="mt-2 w-48">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>3) How did you hear about us? Select all that apply:</Label>
                    <div className="grid sm:grid-cols-2 gap-3 mt-3">
                      {["Radio", "Newspaper", "Community Event", "Online", "Friend", "Social Media", "Other"].map(
                        (option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox
                              id={option}
                              checked={formData.howHeard.includes(option)}
                              onCheckedChange={() => toggleHowHeard(option)}
                            />
                            <Label htmlFor={option} className="font-normal cursor-pointer">
                              {option}
                            </Label>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="comments">Comments</Label>
                    <Textarea
                      id="comments"
                      value={formData.comments}
                      onChange={(e) => updateForm("comments", e.target.value)}
                      placeholder="Any additional information you'd like to share..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-10 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setCurrentStep((prev) => prev - 1)}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button onClick={() => setCurrentStep((prev) => prev + 1)}>
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button variant="hero" onClick={handleSubmit}>
                  Submit Inquiry
                  <CheckCircle2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
