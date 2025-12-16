import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  User,
  MapPin,
  Heart,
  Phone,
  Mail,
  Edit,
  FileText,
  Calendar,
  Users,
} from "lucide-react";

const accountData = {
  name: "John & Jane Doe Home",
  parent1: "John Doe",
  parent2: "Jane Doe",
  type: "Regular Foster",
  status: "In Progress",
  accountId: "A-00015040",
  phone: "(555) 123-4567",
  email: "john.doe@email.com",
  address: "123 Main Street, New York, NY 10001",
  county: "Manhattan",
  licensingWorker: "Elizabeth Campbell",
  createdDate: "November 18, 2025",
  maleAgePrefs: "0-7",
  femaleAgePrefs: "0-7",
  occupancy: 0,
  householdMembers: [
    { name: "John Doe", age: 39, id: "HM-00014379" },
    { name: "Jane Doe", age: 37, id: "HM-00014380" },
  ],
  assessments: [
    { id: "PRA-00012672", status: "In Progress" },
  ],
};

export default function AccountPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              {accountData.name}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                {accountData.type}
              </span>
              <span className="text-sm bg-accent/20 text-accent-foreground px-3 py-1 rounded-full">
                {accountData.status}
              </span>
            </div>
          </div>
          <Button>
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        {/* Main Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Details Card */}
          <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Account Details
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Parent 1</p>
                <p className="font-medium text-foreground">{accountData.parent1}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Parent 2</p>
                <p className="font-medium text-foreground">{accountData.parent2}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account ID</p>
                <p className="font-medium text-foreground">{accountData.accountId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Owner</p>
                <p className="font-medium text-foreground">{accountData.licensingWorker}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Created</p>
                <p className="font-medium text-foreground">{accountData.createdDate}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{accountData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{accountData.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium text-foreground">{accountData.address}</p>
                  <p className="text-sm text-muted-foreground">{accountData.county} County</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Foster Preferences
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Male Age Preferences</p>
              <p className="font-medium text-foreground">{accountData.maleAgePrefs}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Female Age Preferences</p>
              <p className="font-medium text-foreground">{accountData.femaleAgePrefs}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Occupancy</p>
              <p className="font-medium text-foreground">{accountData.occupancy} children</p>
            </div>
          </div>
        </div>

        {/* Household Members */}
        <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Household Members
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Age</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Member ID</th>
                </tr>
              </thead>
              <tbody>
                {accountData.householdMembers.map((member) => (
                  <tr key={member.id} className="border-b border-border last:border-0">
                    <td className="py-3 font-medium text-foreground">{member.name}</td>
                    <td className="py-3 text-muted-foreground">{member.age}</td>
                    <td className="py-3 text-muted-foreground">{member.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assessments */}
        <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Placement Resource Assessments
          </h2>
          <div className="space-y-3">
            {accountData.assessments.map((assessment) => (
              <div
                key={assessment.id}
                className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">{assessment.id}</span>
                </div>
                <span className="text-sm bg-accent/20 text-accent-foreground px-3 py-1 rounded-full">
                  {assessment.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
