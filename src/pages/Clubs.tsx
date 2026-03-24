import ClubCard from "@/components/ClubCard";
import { clubs } from "@/data/mockData";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ClubsPage = () => {
  const [search, setSearch] = useState("");
  const filtered = clubs.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">College Clubs</h1>
        <p className="text-muted-foreground mb-6">Explore and join clubs that match your interests</p>
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search clubs..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
        </div>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((club, i) => <ClubCard key={club.id} {...club} index={i} />)}
      </div>
      {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No clubs found</p>}
    </div>
  );
};

export default ClubsPage;
