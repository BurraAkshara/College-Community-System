import { motion } from "framer-motion";
import { Users, Calendar, FileText, FolderKanban, Award, TrendingUp, Activity, Trophy, Medal } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import StatCard from "@/components/StatCard";
import ClubCard from "@/components/ClubCard";
import EventCard from "@/components/EventCard";
import MemberCard from "@/components/MemberCard";
import { clubs, events, members, stats } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const leaderboard = [...members].sort((a, b) => b.contributions - a.contributions);

const rankStyles = [
  "bg-accent/20 border-accent/40 text-accent",
  "bg-muted border-border text-muted-foreground",
  "bg-warning/15 border-warning/30 text-warning",
];

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
            Welcome to <span className="text-gradient-primary">College Community System</span>
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

      {/* Leaderboard & Active Members */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2">
              <Trophy className="h-5 w-5 text-accent" /> Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {leaderboard.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`flex items-center gap-3 p-3 rounded-lg border ${i < 3 ? rankStyles[i] : "bg-muted/30 border-border"}`}
              >
                <div className="flex items-center justify-center h-8 w-8 rounded-full font-bold text-sm shrink-0">
                  {i === 0 ? <Trophy className="h-5 w-5 text-accent" /> : i === 1 ? <Medal className="h-5 w-5 text-muted-foreground" /> : i === 2 ? <Medal className="h-5 w-5 text-warning" /> : <span className="text-muted-foreground">#{i + 1}</span>}
                </div>
                <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">
                  {m.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role} · {m.club}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-foreground">{m.contributions}</p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Active Members */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
              <Activity className="h-5 w-5 text-success" /> Active Members
            </h2>
            <Link to="/members" className="text-sm text-primary hover:underline">View all</Link>
          </div>
          <div className="grid gap-3">
            {activeMembers.slice(0, 4).map((member, i) => (
              <MemberCard key={member.id} {...member} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
