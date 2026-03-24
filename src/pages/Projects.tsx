import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/mockData";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsPage = () => (
  <div className="p-6 max-w-7xl mx-auto space-y-6">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="font-display text-3xl font-bold text-foreground mb-2">Projects</h1>
      <p className="text-muted-foreground mb-6">Collaborative projects built by students</p>
    </motion.div>
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="progress">In Progress</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="planning">Planning</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-4 grid sm:grid-cols-2 gap-4">
        {projects.map((p, i) => <ProjectCard key={p.id} {...p} index={i} />)}
      </TabsContent>
      <TabsContent value="progress" className="mt-4 grid sm:grid-cols-2 gap-4">
        {projects.filter(p => p.status === "In Progress").map((p, i) => <ProjectCard key={p.id} {...p} index={i} />)}
      </TabsContent>
      <TabsContent value="completed" className="mt-4 grid sm:grid-cols-2 gap-4">
        {projects.filter(p => p.status === "Completed").map((p, i) => <ProjectCard key={p.id} {...p} index={i} />)}
      </TabsContent>
      <TabsContent value="planning" className="mt-4 grid sm:grid-cols-2 gap-4">
        {projects.filter(p => p.status === "Planning").map((p, i) => <ProjectCard key={p.id} {...p} index={i} />)}
      </TabsContent>
    </Tabs>
  </div>
);

export default ProjectsPage;
