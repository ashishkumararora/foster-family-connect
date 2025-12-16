import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  User,
  MapPin,
  Heart,
  Users,
  Save,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface HouseholdMember {
  id: number;
  name: string;
  dob: string;
  relationship: string;
}

export default function ApplicationPage() {
  const { toast } = useToast();
  const [householdMembers, setHouseholdMembers] = useState<HouseholdMember[]>([]);

  const addHouseholdMember = () => {
    setHouseholdMembers([
      ...householdMembers,
      { id: Date.now(), name: "", dob: "", relationship: "" },
    ]);
  };

  const removeHouseholdMember = (id: number) => {
    setHouseholdMembers(householdMembers.filter((m) => m.id !== id));
  };

  const handleSave = () => {
    toast({
      title: "Application Saved",
      description: "Your application has been saved successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Application for Foster Family Home License
          </h1>
          <p className="text-muted-foreground">
            Thank you for your continued interest in becoming a licensed foster home. Please review and verify that the information you have provided is accurate.
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <p className="text-sm text-foreground">
            <strong>Instructions:</strong> To ensure that your information is saved, please click the "Save" button on each section. Please review and verify that the information is accurate.
          </p>
        </div>

        {/* Section 1: Demographics */}
        <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Section 1 - Demographics
          </h2>

          {/* Applicant A */}
          <div className="mb-8">
            <h3 className="font-medium text-foreground mb-4">Applicant A</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>First Name *</Label>
                <Input defaultValue="John" />
              </div>
              <div>
                <Label>Last Name *</Label>
                <Input defaultValue="Doe" />
              </div>
              <div>
                <Label>Date of Birth *</Label>
                <Input type="date" defaultValue="1985-06-15" />
              </div>
              <div>
                <Label>Social Security Number *</Label>
                <Input type="password" defaultValue="123-45-6789" />
              </div>
            </div>
          </div>

          {/* Applicant B */}
          <div className="mb-8">
            <h3 className="font-medium text-foreground mb-4">Applicant B</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>First Name *</Label>
                <Input defaultValue="Jane" />
              </div>
              <div>
                <Label>Last Name *</Label>
                <Input defaultValue="Doe" />
              </div>
              <div>
                <Label>Date of Birth *</Label>
                <Input type="date" defaultValue="1987-03-22" />
              </div>
              <div>
                <Label>Social Security Number *</Label>
                <Input type="password" placeholder="XXX-XX-XXXX" />
              </div>
            </div>
          </div>

          {/* Household Members */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-foreground">Additional Household Members</h3>
              <Button variant="outline" size="sm" onClick={addHouseholdMember}>
                <Plus className="w-4 h-4 mr-1" />
                Add Member
              </Button>
            </div>
            
            {householdMembers.length > 0 ? (
              <div className="space-y-4">
                {householdMembers.map((member) => (
                  <div key={member.id} className="grid sm:grid-cols-4 gap-3 p-4 bg-secondary/30 rounded-lg">
                    <Input placeholder="Name" />
                    <Input type="date" placeholder="DOB" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="child">Child</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeHouseholdMember(member.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No additional household members added.</p>
            )}
          </div>
        </div>

        {/* Section 2: Home Information */}
        <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Home Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Label>Street Address *</Label>
              <Input defaultValue="123 Main Street" />
            </div>
            <div>
              <Label>City</Label>
              <Input defaultValue="New York" />
            </div>
            <div>
              <Label>State</Label>
              <Input defaultValue="NY" />
            </div>
            <div>
              <Label>County</Label>
              <Input defaultValue="Manhattan" />
            </div>
            <div>
              <Label>Zip/Postal Code *</Label>
              <Input defaultValue="10001" />
            </div>
            <div>
              <Label>Primary Phone Number</Label>
              <Input defaultValue="(555) 123-4567" />
            </div>
            <div>
              <Label>Email Address *</Label>
              <Input defaultValue="john.doe@email.com" />
            </div>
          </div>
        </div>

        {/* Section 3: Foster Preferences */}
        <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Foster Children Preferences
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label>Number of children you want to provide care for</Label>
              <Select defaultValue="2">
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Marital Status</Label>
              <Select defaultValue="married">
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="married">Married</SelectItem>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="separated">Married but Separated</SelectItem>
                  <SelectItem value="living-together">Couple Living Together</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-3 block">Male Age Preferences</Label>
              <div className="flex flex-wrap gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={`male-${i}`} />
                    <Label htmlFor={`male-${i}`} className="text-sm font-normal">{i}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-3 block">Female Age Preferences</Label>
              <div className="flex flex-wrap gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={`female-${i}`} />
                    <Label htmlFor={`female-${i}`} className="text-sm font-normal">{i}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: References */}
        <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Section 2 - References
          </h2>

          <p className="text-muted-foreground text-sm mb-6">
            Please provide at least four (4) references (at least two of whom are not related by blood, marriage, or adoption) who know your family life.
          </p>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((ref) => (
              <div key={ref} className="grid sm:grid-cols-4 gap-3 p-4 bg-secondary/30 rounded-lg">
                <Input placeholder="Name" />
                <Input placeholder="Address" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Email" />
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save Application
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
