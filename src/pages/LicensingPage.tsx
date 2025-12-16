import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Clock,
  Upload,
  ChevronRight,
  AlertCircle,
  FileText,
  Home,
  UserCheck,
  Shield,
  Wallet,
  GraduationCap,
  Stethoscope,
  Users,
  Eye,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

const licensingStandards = [
  {
    id: 1,
    name: "Have a Home Free of Hazards",
    description: "Foster homes must be free of Health, Lead, and Fire Hazards",
    status: "Upload Documentation",
    owner: "ACIS Licensing Worker",
    progress: 0,
    icon: Home,
  },
  {
    id: 2,
    name: "Provide Social History",
    description: "Complete social history documentation for all household members",
    status: "Upload Documentation",
    owner: "ACIS Licensing Worker",
    progress: 0,
    icon: BookOpen,
  },
  {
    id: 3,
    name: "Meet Age and Residency Requirement",
    description: "Verify age and residency requirements are met",
    status: "Upload Documentation",
    owner: "John Doe",
    progress: 100,
    icon: UserCheck,
  },
  {
    id: 4,
    name: "Pass Background Check",
    description: "Complete criminal background check for all adults in household",
    status: "Upload Documentation",
    owner: "John Doe",
    progress: 50,
    icon: Shield,
  },
  {
    id: 5,
    name: "Agree to Foster Parent Roles and Responsibilities",
    description: "Review and sign the foster parent agreement",
    status: "Upload Documentation",
    owner: "John Doe",
    progress: 100,
    icon: FileText,
  },
  {
    id: 6,
    name: "Be Financially Stable",
    description: "Provide financial documentation demonstrating stability",
    status: "Upload Documentation",
    owner: "John Doe",
    progress: 0,
    icon: Wallet,
  },
  {
    id: 7,
    name: "Provide Tour of Home",
    description: "Schedule and complete home inspection with licensing worker",
    status: "Pending",
    owner: "ACIS Licensing Worker",
    progress: 0,
    icon: Eye,
  },
  {
    id: 8,
    name: "Complete Trainings",
    description: "Complete all required foster parent training modules",
    status: "Complete Training",
    owner: "John Doe",
    progress: 30,
    icon: GraduationCap,
  },
  {
    id: 9,
    name: "Pass Medical Clearance",
    description: "Submit medical clearance documentation for all household members",
    status: "Upload Documentation",
    owner: "John Doe",
    progress: 0,
    icon: Stethoscope,
  },
  {
    id: 10,
    name: "Provide References",
    description: "Submit at least 4 references (2 non-family members)",
    status: "Provide References",
    owner: "John Doe",
    progress: 75,
    icon: Users,
  },
];

export default function LicensingPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const completedCount = licensingStandards.filter((s) => s.progress === 100).length;
  const overallProgress = (completedCount / licensingStandards.length) * 100;

  const getStatusColor = (progress: number) => {
    if (progress === 100) return "text-success bg-success/10";
    if (progress > 0) return "text-warning bg-warning/10";
    return "text-muted-foreground bg-muted";
  };

  const getStatusIcon = (progress: number) => {
    if (progress === 100) return <CheckCircle2 className="w-5 h-5" />;
    if (progress > 0) return <Clock className="w-5 h-5" />;
    return <AlertCircle className="w-5 h-5" />;
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Licensing Standards
          </h1>
          <p className="text-muted-foreground">
            Complete all licensing standards to obtain your foster parent license.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-foreground">Overall Progress</h2>
              <p className="text-sm text-muted-foreground">
                {completedCount} of {licensingStandards.length} standards completed
              </p>
            </div>
            <div className="text-3xl font-bold text-primary">{Math.round(overallProgress)}%</div>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </div>

        {/* Standards List */}
        <div className="space-y-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
          {licensingStandards.map((standard) => (
            <div
              key={standard.id}
              className="bg-card rounded-xl shadow-card overflow-hidden transition-all duration-200 hover:shadow-card-hover"
            >
              <button
                onClick={() => setExpandedId(expandedId === standard.id ? null : standard.id)}
                className="w-full p-4 flex items-center gap-4 text-left"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getStatusColor(standard.progress)}`}>
                  <standard.icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground truncate">{standard.name}</h3>
                    {getStatusIcon(standard.progress)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{standard.status}</span>
                    <span>•</span>
                    <span>{standard.owner}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:block w-24">
                    <Progress value={standard.progress} className="h-2" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground w-10 text-right">
                    {standard.progress}%
                  </span>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${expandedId === standard.id ? "rotate-90" : ""}`} />
                </div>
              </button>

              {expandedId === standard.id && (
                <div className="px-4 pb-4 border-t border-border animate-fade-in">
                  <div className="pt-4 space-y-4">
                    <p className="text-muted-foreground">{standard.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button size="sm">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Documentation
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
