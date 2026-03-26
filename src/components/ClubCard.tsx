import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface ClubCardProps {
  id: number;
  name: string;
  description: string;
  members: number;
  category: string;
  icon: string;
  index: number;
}

const ClubCard = ({ id, name, description, members, category, icon, index }: ClubCardProps) => (
  <Link to={`/clubs/${id}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group rounded-xl border border-border bg-card p-6 hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {category}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Users className="h-4 w-4" />
        <span>{members} members</span>
      </div>
    </motion.div>
  </Link>
);

export default ClubCard;
