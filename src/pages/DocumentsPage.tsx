import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Upload,
  FileText,
  Image,
  File,
  Trash2,
  Download,
  Search,
  Plus,
  FolderOpen,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: number;
  name: string;
  type: string;
  category: string;
  uploadDate: string;
  size: string;
}

const existingDocuments: Document[] = [
  { id: 1, name: "Background_Check_Form.pdf", type: "pdf", category: "Background Check", uploadDate: "Dec 10, 2025", size: "2.4 MB" },
  { id: 2, name: "ID_Front.jpg", type: "image", category: "Identification", uploadDate: "Dec 8, 2025", size: "1.1 MB" },
  { id: 3, name: "ID_Back.jpg", type: "image", category: "Identification", uploadDate: "Dec 8, 2025", size: "0.9 MB" },
  { id: 4, name: "Proof_of_Residence.pdf", type: "pdf", category: "Residence", uploadDate: "Dec 5, 2025", size: "3.2 MB" },
];

const categories = [
  "All Documents",
  "Background Check",
  "Identification",
  "Residence",
  "Financial",
  "Medical",
  "Training",
];

export default function DocumentsPage() {
  const { toast } = useToast();
  const [documents, setDocuments] = useState(existingDocuments);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Documents");
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const newDocs: Document[] = Array.from(files).map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      type: file.type.includes("image") ? "image" : "pdf",
      category: "Uncategorized",
      uploadDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
    }));

    setDocuments([...newDocs, ...documents]);
    toast({
      title: "Files Uploaded",
      description: `${files.length} file(s) uploaded successfully.`,
    });
  };

  const handleDelete = (id: number) => {
    setDocuments(documents.filter((d) => d.id !== id));
    toast({
      title: "Document Deleted",
      description: "The document has been removed.",
    });
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Documents" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <Image className="w-5 h-5 text-accent" />;
      case "pdf":
        return <FileText className="w-5 h-5 text-destructive" />;
      default:
        return <File className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Documents
          </h1>
          <p className="text-muted-foreground">
            Upload and manage your required documents for the licensing process.
          </p>
        </div>

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors animate-fade-in ${
            dragActive
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          style={{ animationDelay: "100ms" }}
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Upload Files</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Drag and drop files here, or click to browse
          </p>
          <label>
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(e) => e.target.files && handleFiles(e.target.files)}
            />
            <Button variant="outline" className="cursor-pointer" asChild>
              <span>
                <Plus className="w-4 h-4 mr-2" />
                Choose Files
              </span>
            </Button>
          </label>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.slice(0, 4).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Documents List */}
        <div className="bg-card rounded-xl shadow-card overflow-hidden animate-fade-in" style={{ animationDelay: "300ms" }}>
          {filteredDocuments.length > 0 ? (
            <div className="divide-y divide-border">
              {filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 flex items-center gap-4 hover:bg-secondary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    {getFileIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">{doc.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{doc.category}</span>
                      <span>•</span>
                      <span>{doc.uploadDate}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(doc.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">No documents found</h3>
              <p className="text-muted-foreground text-sm">
                {searchQuery || selectedCategory !== "All Documents"
                  ? "Try adjusting your search or filter."
                  : "Upload your first document to get started."}
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
