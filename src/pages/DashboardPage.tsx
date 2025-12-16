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
} from "lucide-react";
import { Link } from "react-router-dom";

const assessmentData = {
  id: "PRA-00012672",
  status: "In Progress",
  licensingWorker: "Elizabeth Campbell",
  dueDate: "March 18, 2026",
  completedStandards: 3,
  totalStandards: 10,
};

const recentTasks = [
  { title: "Pass Background Check", status: "pending", dueIn: "5 days" },
  { title: "Upload Financial Documents", status: "pending", dueIn: "7 days" },
  { title: "Complete Training Module 1", status: "completed", dueIn: null },
];

export default function DashboardPage() {
  const progressPercent = (assessmentData.completedStandards / assessmentData.totalStandards) * 100;

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Welcome Section */}
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Welcome back, John!
          </h1>
          <p className="text-muted-foreground">
            Track your progress and complete your licensing requirements.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium bg-accent/20 text-accent-foreground px-2 py-1 rounded-full">
                {assessmentData.status}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Assessment</h3>
            <p className="text-sm text-muted-foreground">{assessmentData.id}</p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-success" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                {assessmentData.completedStandards}/{assessmentData.totalStandards}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Standards Completed</h3>
            <Progress value={progressPercent} className="h-2 mt-2" />
          </div>

          <div className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-warning" />
              </div>
            </div>
            <h3 className="font-semibold text-foreground mb-1">Due Date</h3>
            <p className="text-sm text-muted-foreground">{assessmentData.dueDate}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Assessment Overview */}
          <div className="lg:col-span-2 bg-card rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Placement Resource Assessment</h2>
              <Button asChild variant="outline" size="sm">
                <Link to="/dashboard/licensing">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Licensing Worker</p>
                  <p className="font-medium text-foreground">{assessmentData.licensingWorker}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="font-medium text-foreground mb-3">Recent Tasks</h3>
                <div className="space-y-3">
                  {recentTasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {task.status === "completed" ? (
                          <CheckCircle2 className="w-5 h-5 text-success" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-warning" />
                        )}
                        <span className={task.status === "completed" ? "text-muted-foreground line-through" : "text-foreground"}>
                          {task.title}
                        </span>
                      </div>
                      {task.dueIn && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.dueIn}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="bg-card rounded-xl shadow-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/dashboard/documents">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Documents
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/dashboard/application">
                    <FileText className="w-4 h-4 mr-2" />
                    View Application
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/dashboard/licensing">
                    <ClipboardList className="w-4 h-4 mr-2" />
                    Licensing Standards
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="font-semibold mb-3">Need Help?</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Your licensing worker is here to assist you through the process.
              </p>
              <div className="text-sm">
                <p className="font-medium">{assessmentData.licensingWorker}</p>
                <p className="text-primary-foreground/70">elizabeth.campbell@dfcs.gov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
