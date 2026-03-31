import { useParams, Link } from "react-router-dom";
import { notes } from "@/data/mockData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, Star, User, Calendar, BookOpen, Hash } from "lucide-react";
import { toast } from "sonner";

const NoteDetail = () => {
  const { id } = useParams();
  const note = notes.find(n => n.id === Number(id));

  if (!note) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-foreground">Note not found</p>
        <Link to="/notes"><Button variant="ghost" className="mt-4"><ArrowLeft className="mr-2 h-4 w-4" />Back to Notes</Button></Link>
      </div>
    );
  }

  const chapters = [
    "Introduction & Overview",
    "Core Concepts",
    "Detailed Analysis",
    "Practice Problems",
    "Summary & Key Takeaways",
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <Link to="/notes">
        <Button variant="ghost" size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to Notes</Button>
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="gradient-primary p-8 text-primary-foreground">
            <Badge variant="secondary" className="mb-3">{note.subject}</Badge>
            <h1 className="font-display text-4xl font-bold mb-2">{note.title}</h1>
            <p className="opacity-90">by {note.author}</p>
          </div>
          <div className="p-6 grid sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2.5"><BookOpen className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Pages</p>
                <p className="text-sm font-medium text-foreground">{note.pages}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2.5"><Download className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Downloads</p>
                <p className="text-sm font-medium text-foreground">{note.downloads}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2.5"><Star className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Rating</p>
                <p className="text-sm font-medium text-foreground">{note.rating}/5.0</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2.5"><Calendar className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Uploaded</p>
                <p className="text-sm font-medium text-foreground">{note.date}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Table of Contents */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2"><Hash className="h-5 w-5 text-primary" />Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {chapters.map((ch, i) => (
                <div key={ch} className="flex gap-4 pb-4 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-muted h-7 w-7 flex items-center justify-center text-xs font-bold text-foreground">{i + 1}</div>
                    {i < chapters.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pt-1 flex-1 flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">{ch}</p>
                    <Button size="sm" variant="outline" className="h-7 text-xs gap-1" onClick={() => toast.success(`Downloading "${ch}"`, { description: `${note.title} · Chapter ${i + 1}` })}>
                      <Download className="h-3 w-3" /> Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Details */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2"><FileText className="h-5 w-5 text-primary" />Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Subject</p>
              <p className="text-sm font-medium text-foreground">{note.subject}</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Author</p>
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">{note.author}</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Rating</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(note.rating) ? "text-accent fill-current" : "text-muted-foreground"}`} />
                ))}
                <span className="ml-1 text-sm font-medium text-foreground">{note.rating}</span>
              </div>
            </div>
            <Button className="w-full" onClick={() => toast.success("Download started!")}>
              <Download className="mr-2 h-4 w-4" />Download Notes
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NoteDetail;
