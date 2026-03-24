import MemberCard from "@/components/MemberCard";
import { members } from "@/data/mockData";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MembersPage = () => {
  const [search, setSearch] = useState("");
  const filtered = members.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.club.toLowerCase().includes(search.toLowerCase()));
  const active = filtered.filter(m => m.active);
  const inactive = filtered.filter(m => !m.active);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Members</h1>
        <p className="text-muted-foreground mb-6">Connect with your campus community</p>
        <div className="relative max-w-md mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search members..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
        </div>
      </motion.div>
      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active ({active.length})</TabsTrigger>
          <TabsTrigger value="all">All ({filtered.length})</TabsTrigger>
          <TabsTrigger value="inactive">Inactive ({inactive.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4 grid sm:grid-cols-2 gap-3">
          {active.map((m, i) => <MemberCard key={m.id} {...m} index={i} />)}
        </TabsContent>
        <TabsContent value="all" className="mt-4 grid sm:grid-cols-2 gap-3">
          {filtered.map((m, i) => <MemberCard key={m.id} {...m} index={i} />)}
        </TabsContent>
        <TabsContent value="inactive" className="mt-4 grid sm:grid-cols-2 gap-3">
          {inactive.map((m, i) => <MemberCard key={m.id} {...m} index={i} />)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MembersPage;
