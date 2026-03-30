import { useParams, Link } from "react-router-dom";
import { projects, members } from "@/data/mockData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Users, Code, Building, Target, CheckCircle, Clock, Zap } from "lucide-react";

const statusConfig: Record<string, { icon: typeof CheckCircle; color: string }> = {
  "In Progress": { icon: Clock, color: "text-info" },
  "Completed": { icon: CheckCircle, color: "text-success" },
  "Planning": { icon: Target, color: "text-warning" },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-foreground">Project not found</p>
        <Link to="/projects"><Button variant="ghost" className="mt-4"><ArrowLeft className="mr-2 h-4 w-4" />Back to Projects</Button></Link>
      </div>
    );
  }

  const { icon: StatusIcon, color: statusColor } = statusConfig[project.status];
  const teamMembers = members.filter(m => project.team.includes(m.name));

  const milestones = [
    { label: "Project Kickoff", done: project.progress >= 10 },
    { label: "Research & Planning", done: project.progress >= 25 },
    { label: "Development Phase", done: project.progress >= 50 },
    { label: "Testing & QA", done: project.progress >= 80 },
    { label: "Deployment", done: project.progress >= 100 },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <Link to="/projects">
        <Button variant="ghost" size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to Projects</Button>
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="gradient-primary p-8 text-primary-foreground">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary">{project.status}</Badge>
              <Badge variant="secondary">{project.club}</Badge>
            </div>
            <h1 className="font-display text-4xl font-bold mb-2">{project.title}</h1>
            <p className="opacity-90 text-lg">{project.description}</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" />Overall Progress</span>
              <span className="font-semibold text-foreground">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-3" />
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2"><Target className="h-5 w-5 text-primary" />Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.label} className="flex gap-4 pb-5 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`rounded-full p-1.5 ${m.done ? "bg-success/20" : "bg-muted"}`}>
                      <CheckCircle className={`h-3.5 w-3.5 ${m.done ? "text-success" : "text-muted-foreground"}`} />
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${m.done ? "text-foreground" : "text-muted-foreground"}`}>{m.label}</p>
                    <p className="text-xs text-muted-foreground">{m.done ? "Completed" : "Pending"}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Info */}
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2"><Code className="h-5 w-5 text-primary" />Project Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <div className="flex items-center gap-1.5">
                <StatusIcon className={`h-4 w-4 ${statusColor}`} />
                <p className="text-sm font-medium text-foreground">{project.status}</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Club</p>
              <div className="flex items-center gap-1.5">
                <Building className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">{project.club}</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display flex items-center gap-2"><Users className="h-5 w-5 text-primary" />Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-3">
            {teamMembers.length > 0 ? teamMembers.map(m => (
              <div key={m.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">{m.avatar}</div>
                <div>
                  <p className="text-sm font-medium text-foreground">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role} · {m.year}</p>
                </div>
              </div>
            )) : project.team.map(name => (
              <div key={name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">{name.split(" ").map(n => n[0]).join("")}</div>
                <div>
                  <p className="text-sm font-medium text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">Team Member</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectDetail;
