import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  location: string;
  club: string;
  attendees: number;
  type: string;
  status: "upcoming" | "past";
  index: number;
}

const EventCard = ({ id, title, date, location, club, attendees, type, status, index }: EventCardProps) => (
  <Link to={`/events/${id}`}>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group flex gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-lg transition-all"
    >
      <div className="flex flex-col items-center justify-center rounded-lg gradient-primary px-3 py-2 min-w-[60px]">
        <span className="text-xs font-medium text-primary-foreground opacity-80">
          {date.split(" ")[0]}
        </span>
        <span className="text-lg font-bold font-display text-primary-foreground">
          {date.split(" ")[1]?.replace(",", "")}
        </span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Badge variant={status === "upcoming" ? "default" : "secondary"} className="text-xs">
            {status}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground mb-2">{club} · {type}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{date}</span>
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{location}</span>
          <span className="flex items-center gap-1"><Users className="h-3 w-3" />{attendees}</span>
        </div>
      </div>
    </motion.div>
  </Link>
);

export default EventCard;
