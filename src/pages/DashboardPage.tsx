import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  ClipboardList,
  Upload,
  Calendar,
  User,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Heart,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Info,
  Target,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

const userData = {
  firstName: "John",
  lastName: "Doe",
  applicationDate: "January 15, 2026",
  estimatedCompletion: "March 2026",
};

const journeySteps = [
  { id: 1, name: "Inquiry Submitted", status: "completed", date: "Jan 5, 2026" },
  { id: 2, name: "Orientation Attended", status: "completed", date: "Jan 12, 2026" },
  { id: 3, name: "Application Submitted", status: "completed", date: "Jan 15, 2026" },
  { id: 4, name: "Licensing Assessment", status: "in-progress", date: "In Progress" },
  { id: 5, name: "License Approved", status: "upcoming", date: "Est. March 2026" },
];

const myTasks = [
  { 
    title: "Upload Financial Documents", 
    description: "Submit proof of income and financial stability",
    dueDate: "Feb 10, 2026",
    priority: "high",
    category: "documents"
  },
  { 
    title: "Complete Background Check Form", 
    description: "Fill out the criminal background check authorization",
    dueDate: "Feb 8, 2026",
    priority: "high",
    category: "forms"
  },
  { 
    title: "Complete Training Module 2", 
    description: "Trauma-Informed Care training (2 hours)",
    dueDate: "Feb 15, 2026",
    priority: "medium",
    category: "training"
  },
];

const agencyTasks = [
  { 
    title: "Review Background Check Results", 
    assignedTo: "Elizabeth Campbell",
    status: "In Review",
  },
  { 
    title: "Schedule Home Inspection", 
    assignedTo: "Your Licensing Worker",
    status: "Pending Your Documents",
  },
];

const assessmentData = {
  id: "PRA-00012672",
  status: "In Progress",
  licensingWorker: {
    name: "Elizabeth Campbell",
    title: "Licensing Specialist",
    email: "elizabeth.campbell@dfcs.gov",
    phone: "(555) 234-5678",
  },
  dueDate: "March 18, 2026",
  completedStandards: 3,
  totalStandards: 10,
};

export default function DashboardPage() {
  const progressPercent = (assessmentData.completedStandards / assessmentData.totalStandards) * 100;
  const currentStep = journeySteps.findIndex(s => s.status === "in-progress") + 1;

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Hero Section */}
        <div className="relative bg-gradient-to-br from-primary via-primary to-primary-light rounded-2xl p-8 text-primary-foreground overflow-hidden animate-fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/80">Your Journey to Fostering</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
              Welcome back, {userData.firstName}!
            </h1>
            
            <p className="text-lg text-primary-foreground/90 max-w-2xl mb-6">
              You're making wonderful progress on your path to becoming a foster parent. 
              Every step you complete brings you closer to providing a loving home to a child in need.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3">
                <p className="text-xs text-primary-foreground/70 mb-1">Application Started</p>
                <p className="font-semibold">{userData.applicationDate}</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3">
                <p className="text-xs text-primary-foreground/70 mb-1">Estimated Completion</p>
                <p className="font-semibold">{userData.estimatedCompletion}</p>
              </div>
              <div className="bg-accent/20 backdrop-blur-sm rounded-xl px-4 py-3">
                <p className="text-xs text-primary-foreground/70 mb-1">Current Step</p>
                <p className="font-semibold">Step {currentStep} of {journeySteps.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Progress Timeline */}
        <div className="bg-card rounded-2xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-display font-semibold text-foreground">Your Licensing Journey</h2>
              <p className="text-muted-foreground mt-1">Track your progress through each milestone</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-muted-foreground">Completed</span>
              </div>
              <div className="flex items-center gap-1.5 ml-3">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground">In Progress</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-muted hidden md:block" />
            <div 
              className="absolute top-5 left-5 h-0.5 bg-success hidden md:block transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (journeySteps.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {journeySteps.map((step, index) => (
                <div key={step.id} className="relative flex flex-col items-center text-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all
                    ${step.status === 'completed' ? 'bg-success text-success-foreground' : ''}
                    ${step.status === 'in-progress' ? 'bg-accent text-accent-foreground ring-4 ring-accent/20' : ''}
                    ${step.status === 'upcoming' ? 'bg-muted text-muted-foreground' : ''}
                  `}>
                    {step.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="font-semibold">{step.id}</span>
                    )}
                  </div>
                  <h3 className={`mt-3 font-medium text-sm ${step.status === 'upcoming' ? 'text-muted-foreground' : 'text-foreground'}`}>
                    {step.name}
                  </h3>
                  <p className={`text-xs mt-1 ${step.status === 'in-progress' ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
                    {step.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* My Tasks - Primary Focus */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Tasks Section */}
            <div className="bg-card rounded-2xl shadow-card overflow-hidden animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">My Tasks</h2>
                      <p className="text-sm text-muted-foreground">Actions you need to complete</p>
                    </div>
                  </div>
                  <span className="bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full">
                    {myTasks.length} pending
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {myTasks.map((task, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {task.priority === 'high' && (
                            <span className="text-xs font-medium bg-destructive/10 text-destructive px-2 py-0.5 rounded">
                              High Priority
                            </span>
                          )}
                        </div>
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {task.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                        <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {task.dueDate}</span>
                        </div>
                      </div>
                      <Button size="sm" className="shrink-0">
                        Start
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}

                <Button asChild variant="outline" className="w-full mt-2">
                  <Link to="/dashboard/licensing">
                    View All Tasks
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Agency Progress Section */}
            <div className="bg-card rounded-2xl shadow-card overflow-hidden animate-fade-in" style={{ animationDelay: "250ms" }}>
              <div className="bg-muted/50 px-6 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Agency Progress</h2>
                    <p className="text-sm text-muted-foreground">Tasks being handled by your licensing team</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3">
                {agencyTasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/50"
                  >
                    <div>
                      <h3 className="font-medium text-foreground">{task.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Assigned to: {task.assignedTo}
                      </p>
                    </div>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                      {task.status}
                    </span>
                  </div>
                ))}

                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 mt-4">
                  <Info className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    These tasks are being processed by your licensing team. You'll be notified when action is needed from you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
            {/* Licensing Progress Card */}
            <div className="bg-card rounded-2xl shadow-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Licensing Progress
              </h3>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Standards Completed</span>
                  <span className="font-semibold text-foreground">
                    {assessmentData.completedStandards}/{assessmentData.totalStandards}
                  </span>
                </div>
                <Progress value={progressPercent} className="h-3" />
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Assessment ID</span>
                  <span className="font-medium text-foreground">{assessmentData.id}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Target Date</span>
                  <span className="font-medium text-foreground">{assessmentData.dueDate}</span>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full mt-4">
                <Link to="/dashboard/licensing">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Your Licensing Worker Card */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-lg font-semibold">
                  EC
                </div>
                <div>
                  <h3 className="font-semibold">{assessmentData.licensingWorker.name}</h3>
                  <p className="text-sm text-primary-foreground/80">{assessmentData.licensingWorker.title}</p>
                </div>
              </div>

              <p className="text-sm text-primary-foreground/80 mb-4">
                I'm here to guide you through the licensing process. Don't hesitate to reach out with any questions!
              </p>

              <div className="space-y-2 text-sm">
                <a 
                  href={`mailto:${assessmentData.licensingWorker.email}`}
                  className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {assessmentData.licensingWorker.email}
                </a>
                <a 
                  href={`tel:${assessmentData.licensingWorker.phone}`}
                  className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {assessmentData.licensingWorker.phone}
                </a>
              </div>
            </div>

            {/* Tips & Resources */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Helpful Tip</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Gathering documents early can speed up your licensing process. Start collecting financial records, 
                medical clearances, and references now to avoid delays.
              </p>
              <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                View Resource Guide
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl shadow-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/dashboard/documents">
                    <Upload className="w-4 h-4 mr-3" />
                    Upload Documents
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/dashboard/application">
                    <FileText className="w-4 h-4 mr-3" />
                    View Application
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
