import { useParams, Link } from "react-router-dom";
import { clubs, members, events, projects } from "@/data/mockData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Calendar, FolderKanban, Star } from "lucide-react";

const ClubDetail = () => {
  const { id } = useParams();
  const club = clubs.find(c => c.id === Number(id));

  if (!club) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-foreground">Club not found</p>
        <Link to="/clubs"><Button variant="ghost" className="mt-4"><ArrowLeft className="mr-2 h-4 w-4" />Back to Clubs</Button></Link>
      </div>
    );
  }

  const clubMembers = members.filter(m => m.club === club.name);
  const clubEvents = events.filter(e => e.club === club.name);
  const clubProjects = projects.filter(p => p.club === club.name);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <Link to="/clubs">
        <Button variant="ghost" size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to Clubs</Button>
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border bg-card p-8">
        <div className="flex items-start gap-6">
          <span className="text-5xl">{club.icon}</span>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-display text-3xl font-bold text-foreground">{club.name}</h1>
              <Badge>{club.category}</Badge>
            </div>
            <p className="text-muted-foreground mb-4">{club.description}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Users className="h-4 w-4" />{club.members} members</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{clubEvents.length} events</span>
              <span className="flex items-center gap-1.5"><FolderKanban className="h-4 w-4" />{clubProjects.length} projects</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Members */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2"><Users className="h-5 w-5 text-primary" />Members</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {clubMembers.length === 0 && <p className="text-sm text-muted-foreground">No members listed</p>}
            {clubMembers.map(m => (
              <div key={m.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="gradient-primary text-primary-foreground text-xs">{m.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role} · {m.year}</p>
                </div>
                {m.active && <Badge variant="secondary" className="ml-auto text-xs">Active</Badge>}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2"><Calendar className="h-5 w-5 text-primary" />Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {clubEvents.length === 0 && <p className="text-sm text-muted-foreground">No events scheduled</p>}
            {clubEvents.map(e => (
              <Link key={e.id} to={`/events/${e.id}`} className="block p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-foreground">{e.title}</p>
                  <Badge variant={e.status === "upcoming" ? "default" : "secondary"} className="text-xs">{e.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{e.date} · {e.location}</p>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Projects */}
        {clubProjects.length > 0 && (
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2"><FolderKanban className="h-5 w-5 text-primary" />Projects</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3">
              {clubProjects.map(p => (
                <div key={p.id} className="p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground text-sm">{p.title}</p>
                    <Badge variant={p.status === "Completed" ? "default" : "secondary"} className="text-xs">{p.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{p.description}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {p.tech.map(t => <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{t}</span>)}
                  </div>
                  <div className="mt-3 w-full bg-muted rounded-full h-1.5">
                    <div className="gradient-primary h-1.5 rounded-full" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ClubDetail;
