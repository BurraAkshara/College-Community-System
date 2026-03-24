import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface MemberCardProps {
  name: string;
  role: string;
  club: string;
  avatar: string;
  year: string;
  active: boolean;
  contributions: number;
  index: number;
}

const MemberCard = ({ name, role, club, avatar, year, active, contributions, index }: MemberCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.08, duration: 0.4 }}
    whileHover={{ y: -2 }}
    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:shadow-md transition-all"
  >
    <div className="relative">
      <Avatar className="h-12 w-12">
        <AvatarFallback className="gradient-primary text-primary-foreground font-display font-semibold">
          {avatar}
        </AvatarFallback>
      </Avatar>
      {active && (
        <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-success border-2 border-card" />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-display font-semibold text-foreground truncate">{name}</h4>
      <p className="text-xs text-muted-foreground">{role} · {club}</p>
      <p className="text-xs text-muted-foreground">{year}</p>
    </div>
    <div className="text-right">
      <p className="text-lg font-bold font-display text-primary">{contributions}</p>
      <p className="text-xs text-muted-foreground">contributions</p>
    </div>
  </motion.div>
);

export default MemberCard;
