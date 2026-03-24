import NoteCard from "@/components/NoteCard";
import { notes } from "@/data/mockData";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const NotesPage = () => {
  const [search, setSearch] = useState("");
  const filtered = notes.filter(n => n.title.toLowerCase().includes(search.toLowerCase()) || n.subject.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Notes & Resources</h1>
        <p className="text-muted-foreground mb-6">Share and access study materials from your peers</p>
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search notes..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
        </div>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((note, i) => <NoteCard key={note.id} {...note} index={i} />)}
      </div>
      {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No notes found</p>}
    </div>
  );
};

export default NotesPage;
