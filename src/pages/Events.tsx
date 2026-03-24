import EventCard from "@/components/EventCard";
import { events } from "@/data/mockData";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EventsPage = () => (
  <div className="p-6 max-w-7xl mx-auto space-y-6">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="font-display text-3xl font-bold text-foreground mb-2">Events</h1>
      <p className="text-muted-foreground mb-6">Stay updated with all campus happenings</p>
    </motion.div>
    <Tabs defaultValue="upcoming">
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming" className="mt-4 grid gap-3">
        {events.filter(e => e.status === "upcoming").map((e, i) => <EventCard key={e.id} {...e} index={i} />)}
      </TabsContent>
      <TabsContent value="past" className="mt-4 grid gap-3">
        {events.filter(e => e.status === "past").map((e, i) => <EventCard key={e.id} {...e} index={i} />)}
      </TabsContent>
      <TabsContent value="all" className="mt-4 grid gap-3">
        {events.map((e, i) => <EventCard key={e.id} {...e} index={i} />)}
      </TabsContent>
    </Tabs>
  </div>
);

export default EventsPage;
