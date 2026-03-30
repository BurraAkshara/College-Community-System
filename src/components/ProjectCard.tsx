import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  team: string[];
  status: "In Progress" | "Completed" | "Planning";
  tech: string[];
  club: string;
  progress: number;
  index: number;
}

const statusColors: Record<string, string> = {
  "In Progress": "bg-info/10 text-info border-info/20",
  "Completed": "bg-success/10 text-success border-success/20",
  "Planning": "bg-warning/10 text-warning border-warning/20",
};

const ProjectCard = ({ id, title, description, team, status, tech, club, progress, index }: ProjectCardProps) => (
  <Link to={`/projects/${id}`}>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    className="group rounded-xl border border-border bg-card p-6 hover:shadow-xl transition-all"
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium border ${statusColors[status]}`}>
        {status}
      </span>
    </div>
    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
    <div className="mb-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
    <div className="flex flex-wrap gap-1.5 mb-3">
      {tech.map((t) => (
        <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
      ))}
    </div>
    <div className="flex items-center justify-between text-xs text-muted-foreground">
      <span>{club}</span>
      <span>{team.length} team members</span>
    </div>
  </motion.div>
);

export default ProjectCard;
