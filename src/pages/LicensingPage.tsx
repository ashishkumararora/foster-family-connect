import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Info,
  Target,
  Building2,
  Calendar,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

interface LicensingStandard {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  status: string;
  owner: "applicant" | "agency";
  ownerName: string;
  progress: number;
  icon: React.ElementType;
  dueDate?: string;
  nextAction?: string;
  whyItMatters?: string;
}

const licensingStandards: LicensingStandard[] = [
  {
    id: 1,
    name: "Have a Home Free of Hazards",
    description: "Ensure your home meets safety requirements",
    detailedDescription: "Foster homes must be free of health, lead, and fire hazards to ensure a safe environment for children.",
    status: "Pending Inspection",
    owner: "agency",
    ownerName: "Licensing Team",
    progress: 0,
    icon: Home,
    nextAction: "Agency will schedule home inspection after documents are reviewed",
    whyItMatters: "A safe home environment is essential for the well-being of foster children.",
  },
  {
    id: 2,
    name: "Provide Social History",
    description: "Complete your family background information",
    detailedDescription: "Complete social history documentation for all household members over 18 years of age.",
    status: "Interview Scheduled",
    owner: "agency",
    ownerName: "Elizabeth Campbell",
    progress: 50,
    icon: BookOpen,
    dueDate: "Feb 20, 2026",
    nextAction: "Your interview is scheduled. Please be prepared to discuss your family history.",
    whyItMatters: "Understanding your background helps us ensure the best possible placement matches.",
  },
  {
    id: 3,
    name: "Meet Age and Residency Requirement",
    description: "Verify you meet the basic eligibility criteria",
    detailedDescription: "Verify that you are at least 21 years old and a legal resident of the state.",
    status: "Completed",
    owner: "applicant",
    ownerName: "You",
    progress: 100,
    icon: UserCheck,
    whyItMatters: "These are state requirements for all foster parents.",
  },
  {
    id: 4,
    name: "Pass Background Check",
    description: "Complete criminal and child abuse registry checks",
    detailedDescription: "All adults in the household must pass criminal background checks and child abuse registry checks.",
    status: "In Review",
    owner: "agency",
    ownerName: "Licensing Team",
    progress: 75,
    icon: Shield,
    nextAction: "Background check submitted and under review. Results typically take 2-3 weeks.",
    whyItMatters: "Background checks ensure the safety of children placed in foster care.",
  },
  {
    id: 5,
    name: "Agree to Foster Parent Roles",
    description: "Review and accept your responsibilities",
    detailedDescription: "Review and sign the foster parent agreement outlining your roles and responsibilities.",
    status: "Completed",
    owner: "applicant",
    ownerName: "You",
    progress: 100,
    icon: FileText,
    whyItMatters: "Clear expectations help create successful placements.",
  },
  {
    id: 6,
    name: "Be Financially Stable",
    description: "Demonstrate ability to meet household expenses",
    detailedDescription: "Provide documentation showing your household can meet basic financial needs.",
    status: "Documents Needed",
    owner: "applicant",
    ownerName: "You",
    progress: 0,
    icon: Wallet,
    dueDate: "Feb 10, 2026",
    nextAction: "Upload recent pay stubs, tax returns, or other proof of income.",
    whyItMatters: "Financial stability ensures you can provide for the basic needs of a foster child.",
  },
  {
    id: 7,
    name: "Provide Tour of Home",
    description: "Schedule your home walkthrough",
    detailedDescription: "Schedule and complete a home inspection with your licensing worker.",
    status: "Pending Documents",
    owner: "agency",
    ownerName: "Elizabeth Campbell",
    progress: 0,
    icon: Eye,
    nextAction: "Home tour will be scheduled after your documents are submitted.",
    whyItMatters: "The home tour helps assess the living environment and address any concerns.",
  },
  {
    id: 8,
    name: "Complete Required Trainings",
    description: "Finish all foster parent education modules",
    detailedDescription: "Complete all required foster parent training modules covering child development, trauma-informed care, and more.",
    status: "In Progress",
    owner: "applicant",
    ownerName: "You",
    progress: 30,
    icon: GraduationCap,
    dueDate: "Feb 28, 2026",
    nextAction: "Continue with Module 2: Trauma-Informed Care (2 hours remaining)",
    whyItMatters: "Training prepares you to support children who have experienced trauma.",
  },
  {
    id: 9,
    name: "Pass Medical Clearance",
    description: "Submit health documentation for household",
    detailedDescription: "Submit medical clearance documentation for all household members.",
    status: "Documents Needed",
    owner: "applicant",
    ownerName: "You",
    progress: 0,
    icon: Stethoscope,
    dueDate: "Feb 15, 2026",
    nextAction: "Schedule a physical exam and upload the completed medical form.",
    whyItMatters: "Medical clearances ensure household members are healthy and able to care for a child.",
  },
  {
    id: 10,
    name: "Provide References",
    description: "Submit character references",
    detailedDescription: "Submit at least 4 references, including 2 non-family members who can speak to your character.",
    status: "Partially Complete",
    owner: "applicant",
    ownerName: "You",
    progress: 75,
    icon: Users,
    nextAction: "1 more non-family reference needed. Send them the reference form link.",
    whyItMatters: "References help us understand your character and suitability as a foster parent.",
  },
];

export default function LicensingPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("my-tasks");

  const myTasks = licensingStandards.filter(s => s.owner === "applicant");
  const agencyTasks = licensingStandards.filter(s => s.owner === "agency");
  
  const completedCount = licensingStandards.filter((s) => s.progress === 100).length;
  const overallProgress = (completedCount / licensingStandards.length) * 100;
  const myTasksCompleted = myTasks.filter(s => s.progress === 100).length;
  const myTasksPending = myTasks.length - myTasksCompleted;

  const getStatusColor = (progress: number) => {
    if (progress === 100) return "text-success bg-success/10";
    if (progress > 0) return "text-accent bg-accent/10";
    return "text-muted-foreground bg-muted";
  };

  const getStatusIcon = (progress: number) => {
    if (progress === 100) return <CheckCircle2 className="w-5 h-5" />;
    if (progress > 0) return <Clock className="w-5 h-5" />;
    return <AlertCircle className="w-5 h-5" />;
  };

  const renderStandardCard = (standard: LicensingStandard) => (
    <div
      key={standard.id}
      className="bg-card rounded-xl shadow-card overflow-hidden transition-all duration-200 hover:shadow-card-hover border border-transparent hover:border-primary/20"
    >
      <button
        onClick={() => setExpandedId(expandedId === standard.id ? null : standard.id)}
        className="w-full p-5 flex items-start gap-4 text-left"
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getStatusColor(standard.progress)}`}>
          <standard.icon className="w-6 h-6" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="font-semibold text-foreground text-lg">{standard.name}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{standard.description}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {getStatusIcon(standard.progress)}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              standard.progress === 100 
                ? 'bg-success/10 text-success' 
                : standard.progress > 0 
                  ? 'bg-accent/10 text-accent' 
                  : 'bg-muted text-muted-foreground'
            }`}>
              {standard.status}
            </span>
            
            {standard.dueDate && standard.progress < 100 && (
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Due: {standard.dueDate}
              </span>
            )}
          </div>

          {standard.progress > 0 && standard.progress < 100 && (
            <div className="mt-3 flex items-center gap-3">
              <Progress value={standard.progress} className="h-2 flex-1" />
              <span className="text-sm font-medium text-muted-foreground w-10">
                {standard.progress}%
              </span>
            </div>
          )}
        </div>

        <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 mt-1 ${expandedId === standard.id ? "rotate-90" : ""}`} />
      </button>

      {expandedId === standard.id && (
        <div className="px-5 pb-5 border-t border-border animate-fade-in">
          <div className="pt-5 space-y-4">
            <p className="text-muted-foreground">{standard.detailedDescription}</p>
            
            {standard.whyItMatters && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20">
                <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Why this matters</p>
                  <p className="text-sm text-muted-foreground">{standard.whyItMatters}</p>
                </div>
              </div>
            )}

            {standard.nextAction && standard.progress < 100 && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Next Step</p>
                  <p className="text-sm text-muted-foreground">{standard.nextAction}</p>
                </div>
              </div>
            )}
            
            {standard.owner === "applicant" && standard.progress < 100 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {standard.status.includes("Documents") || standard.status.includes("Upload") ? (
                  <Button size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Documentation
                  </Button>
                ) : standard.status.includes("Training") || standard.name.includes("Training") ? (
                  <Button size="sm">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Continue Training
                  </Button>
                ) : (
                  <Button size="sm">
                    Start Task
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  View Instructions
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header with Context */}
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Licensing Standards
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete all licensing standards to obtain your foster parent license. 
            We'll guide you through each step of the process.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-card rounded-2xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-semibold text-foreground text-lg">Overall Progress</h2>
              <p className="text-muted-foreground">
                {completedCount} of {licensingStandards.length} standards completed
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{Math.round(overallProgress)}%</p>
                <p className="text-xs text-muted-foreground">Complete</p>
              </div>
            </div>
          </div>
          <Progress value={overallProgress} className="h-3" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-success">{completedCount}</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">{myTasksPending}</p>
              <p className="text-sm text-muted-foreground">Your Tasks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{agencyTasks.filter(s => s.progress < 100).length}</p>
              <p className="text-sm text-muted-foreground">With Agency</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{licensingStandards.length - completedCount}</p>
              <p className="text-sm text-muted-foreground">Remaining</p>
            </div>
          </div>
        </div>

        {/* Tabs for Task Views */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <TabsList className="w-full grid grid-cols-3 h-auto p-1">
            <TabsTrigger value="my-tasks" className="py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              <Target className="w-4 h-4 mr-2" />
              My Tasks ({myTasks.filter(s => s.progress < 100).length})
            </TabsTrigger>
            <TabsTrigger value="agency-tasks" className="py-3">
              <Building2 className="w-4 h-4 mr-2" />
              Agency Tasks ({agencyTasks.filter(s => s.progress < 100).length})
            </TabsTrigger>
            <TabsTrigger value="all" className="py-3">
              <FileText className="w-4 h-4 mr-2" />
              All Standards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="my-tasks" className="mt-6 space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 mb-6">
              <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Your Action Required</p>
                <p className="text-sm text-muted-foreground">
                  These tasks need your attention. Complete them to move forward in your licensing journey.
                </p>
              </div>
            </div>
            
            {myTasks.filter(s => s.progress < 100).length === 0 ? (
              <div className="text-center py-12 bg-card rounded-xl shadow-card">
                <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">All Your Tasks Complete!</h3>
                <p className="text-muted-foreground">Great work! The agency is now processing the remaining items.</p>
              </div>
            ) : (
              myTasks.filter(s => s.progress < 100).map(renderStandardCard)
            )}
            
            {myTasks.filter(s => s.progress === 100).length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Completed Tasks</h3>
                <div className="space-y-3 opacity-75">
                  {myTasks.filter(s => s.progress === 100).map(renderStandardCard)}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="agency-tasks" className="mt-6 space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
              <Building2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Being Processed by Your Licensing Team</p>
                <p className="text-sm text-muted-foreground">
                  These tasks are being handled by agency staff. You'll be notified if any action is needed from you.
                </p>
              </div>
            </div>
            
            {agencyTasks.map(renderStandardCard)}
          </TabsContent>

          <TabsContent value="all" className="mt-6 space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border mb-6">
              <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                This view shows all licensing standards. Items are marked as either <strong>"You"</strong> (your responsibility) 
                or with the agency staff member handling them.
              </p>
            </div>
            
            {licensingStandards.map(standard => (
              <div key={standard.id} className="relative">
                <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-full ${
                  standard.owner === 'applicant' ? 'bg-accent' : 'bg-primary'
                }`} />
                <div className="pl-4">
                  {renderStandardCard(standard)}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
