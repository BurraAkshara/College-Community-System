import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  gradient?: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, label, value, gradient = "gradient-primary", delay = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="rounded-lg border border-border bg-card p-5 hover:shadow-lg transition-shadow"
  >
    <div className={`inline-flex rounded-lg p-2.5 ${gradient} mb-3`}>
      <Icon className="h-5 w-5 text-primary-foreground" />
    </div>
    <p className="text-2xl font-bold font-display text-foreground">{value}</p>
    <p className="text-sm text-muted-foreground">{label}</p>
  </motion.div>
);

export default StatCard;
