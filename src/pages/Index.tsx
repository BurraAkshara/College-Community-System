import { motion } from "framer-motion";
import { Users, Calendar, FileText, FolderKanban, Award, TrendingUp, Activity } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import StatCard from "@/components/StatCard";
import ClubCard from "@/components/ClubCard";
import EventCard from "@/components/EventCard";
import MemberCard from "@/components/MemberCard";
import { clubs, events, members, stats } from "@/data/mockData";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const activeMembers = members.filter((m) => m.active);

  return (
    <div className="p-6 space-y-8 max-w-7xl mx-auto">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden h-56 md:h-72"
      >
        <img src={heroCampus} alt="Campus" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 gradient-dark opacity-70" />
        <div className="relative z-10 flex flex-col justify-end h-full p-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Welcome to <span className="text-gradient-primary">CampusHub</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-lg">
            Your college community — clubs, events, notes, projects, and more. All in one place.
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard icon={Users} label="Total Members" value={stats.totalMembers.toLocaleString()} delay={0} />
        <StatCard icon={Award} label="Active Clubs" value={stats.activeClubs} gradient="gradient-cool" delay={0.1} />
        <StatCard icon={Calendar} label="Events This Month" value={stats.eventsThisMonth} gradient="gradient-warm" delay={0.2} />
        <StatCard icon={FolderKanban} label="Active Projects" value={stats.projectsActive} delay={0.3} />
        <StatCard icon={FileText} label="Notes Shared" value={stats.notesShared.toLocaleString()} gradient="gradient-cool" delay={0.4} />
      </div>

      {/* Quick sections */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Popular Clubs */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> Popular Clubs
            </h2>
            <Link to="/clubs" className="text-sm text-primary hover:underline">View all</Link>
          </div>
          <div className="grid gap-3">
            {clubs.slice(0, 3).map((club, i) => (
              <ClubCard key={club.id} {...club} index={i} />
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" /> Upcoming Events
            </h2>
            <Link to="/events" className="text-sm text-primary hover:underline">View all</Link>
          </div>
          <div className="grid gap-3">
            {events.filter(e => e.status === "upcoming").slice(0, 3).map((event, i) => (
              <EventCard key={event.id} {...event} index={i} />
            ))}
          </div>
        </section>
      </div>

      {/* Active Members */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
            <Activity className="h-5 w-5 text-success" /> Active Members
          </h2>
          <Link to="/members" className="text-sm text-primary hover:underline">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {activeMembers.slice(0, 4).map((member, i) => (
            <MemberCard key={member.id} {...member} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
