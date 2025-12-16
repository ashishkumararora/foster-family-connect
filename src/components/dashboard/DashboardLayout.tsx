import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Home,
  FileText,
  ClipboardList,
  Upload,
  User,
  Settings,
  LogOut,
  Heart,
  Bell,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const menuItems = [
  { title: "Home", url: "/dashboard", icon: Home, description: "Your dashboard" },
  { title: "Application", url: "/dashboard/application", icon: FileText, description: "View your application" },
  { title: "Licensing Progress", url: "/dashboard/licensing", icon: ClipboardList, description: "Track your standards" },
  { title: "Documents", url: "/dashboard/documents", icon: Upload, description: "Upload & manage files" },
  { title: "Account", url: "/dashboard/account", icon: User, description: "Your profile settings" },
];

const supportItems = [
  { title: "Help Center", url: "/dashboard/help", icon: HelpCircle },
  { title: "Contact Support", url: "/dashboard/support", icon: MessageCircle },
];

interface DashboardLayoutProps {
  children: ReactNode;
}

// Mock user data - would come from auth context in real app
const currentUser = {
  firstName: "John",
  lastName: "Doe",
  initials: "JD",
  role: "Foster Parent Applicant",
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r border-sidebar-border">
          <div className="p-5 border-b border-sidebar-border">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sidebar-primary rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-sidebar-foreground text-lg">Foster Portal</span>
                <p className="text-xs text-sidebar-foreground/60">DFCS Georgia</p>
              </div>
            </Link>
          </div>

          <SidebarContent className="px-3">
            <SidebarGroup className="mt-4">
              <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider px-3 mb-2">
                Main Menu
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.url || 
                      (item.url !== '/dashboard' && location.pathname.startsWith(item.url));
                    
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className="h-12 px-3 rounded-xl"
                        >
                          <Link to={item.url} className="flex items-center gap-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider px-3 mb-2">
                Support
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {supportItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="h-10 px-3 rounded-xl">
                        <Link to={item.url} className="flex items-center gap-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-auto pb-4">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 rounded-xl">
                      <Link to="/dashboard/settings" className="flex items-center gap-3">
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild className="h-10 px-3 rounded-xl">
                      <Link to="/" className="flex items-center gap-3 text-destructive hover:text-destructive">
                        <LogOut className="w-5 h-5" />
                        <span>Log Out</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 md:px-6 shrink-0">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <div className="hidden sm:block">
                <p className="text-sm text-muted-foreground">
                  {getGreeting()}, <span className="font-medium text-foreground">{currentUser.firstName}</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center font-medium">
                  3
                </span>
              </Button>
              
              <div className="h-8 w-px bg-border mx-1 hidden sm:block" />
              
              <Link to="/dashboard/account" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {currentUser.initials}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-foreground">
                    {currentUser.firstName} {currentUser.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground">{currentUser.role}</p>
                </div>
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-background p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
