import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface NoteCardProps {
  id: number;
  title: string;
  subject: string;
  author: string;
  date: string;
  downloads: number;
  pages: number;
  rating: number;
  index: number;
}

const NoteCard = ({ id, title, subject, author, date, downloads, pages, rating, index }: NoteCardProps) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`Downloading "${title}"`, { description: `${pages} pages · ${subject}` });
  };

  return (
    <Link to={`/notes/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.4 }}
        whileHover={{ y: -3 }}
        className="group rounded-xl border border-border bg-card p-5 hover:shadow-lg transition-all cursor-pointer"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="rounded-lg bg-muted p-2.5">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex items-center gap-1 text-accent">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">{subject} · {pages} pages</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <span>by {author}</span>
          <span className="flex items-center gap-1">
            <Download className="h-3 w-3" /> {downloads}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{date}</p>
          <Button size="sm" variant="outline" className="h-7 text-xs gap-1" onClick={handleDownload}>
            <Download className="h-3 w-3" /> Download
          </Button>
        </div>
      </motion.div>
    </Link>
  );
};

export default NoteCard;
