import { useParams, Link } from "react-router-dom";
import { events } from "@/data/mockData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calendar, MapPin, Users, Clock, Tag, Building, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === Number(id));
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", year: "" });

  if (!event) {
    return (
      <div className="p-6 text-center">
        <p className="text-muted-foreground">Event not found</p>
        <Link to="/events"><Button variant="ghost" className="mt-4"><ArrowLeft className="mr-2 h-4 w-4" />Back to Events</Button></Link>
      </div>
    );
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in name and email");
      return;
    }
    setRegistered(true);
    toast.success("Successfully registered for " + event.title);
  };

  const importantDates = [
    { label: "Registration Opens", date: "2 weeks before event", icon: Clock },
    { label: "Registration Deadline", date: "3 days before event", icon: Clock },
    { label: "Event Date", date: event.date, icon: Calendar },
    { label: "Results Announcement", date: "1 day after event", icon: Tag },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <Link to="/events">
        <Button variant="ghost" size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to Events</Button>
      </Link>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="gradient-primary p-8 text-primary-foreground">
            <Badge variant="secondary" className="mb-3">{event.type}</Badge>
            <h1 className="font-display text-4xl font-bold mb-2">{event.title}</h1>
            <p className="opacity-90">Organized by {event.club}</p>
          </div>
          <div className="p-6 grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2.5"><Calendar className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Date</p>
                <p className="text-sm font-medium text-foreground">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2.5"><MapPin className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">{event.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2.5"><Users className="h-5 w-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Expected Attendees</p>
                <p className="text-sm font-medium text-foreground">{event.attendees}+</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2"><Clock className="h-5 w-5 text-primary" />Important Dates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative space-y-0">
              {importantDates.map((d, i) => (
                <div key={d.label} className="flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full gradient-primary p-1.5">
                      <d.icon className="h-3.5 w-3.5 text-primary-foreground" />
                    </div>
                    {i < importantDates.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{d.label}</p>
                    <p className="text-xs text-muted-foreground">{d.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2"><Tag className="h-5 w-5 text-primary" />Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Event Type</p>
              <p className="text-sm font-medium text-foreground">{event.type}</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Organizing Club</p>
              <p className="text-sm font-medium text-foreground">{event.club}</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Status</p>
              <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>{event.status}</Badge>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <p className="text-xs text-muted-foreground mb-1">Venue</p>
              <div className="flex items-center gap-1.5">
                <Building className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">{event.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Registration Form */}
      {event.status === "upcoming" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle className="font-display flex items-center gap-2">
                {registered ? <CheckCircle className="h-5 w-5 text-success" /> : <Users className="h-5 w-5 text-primary" />}
                {registered ? "Registration Confirmed!" : "Register for this Event"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {registered ? (
                <div className="text-center py-6 space-y-3">
                  <div className="rounded-full bg-success/10 p-4 w-fit mx-auto">
                    <CheckCircle className="h-10 w-10 text-success" />
                  </div>
                  <p className="text-foreground font-medium">You're registered for {event.title}!</p>
                  <p className="text-sm text-muted-foreground">We'll send you a confirmation email with event details.</p>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Enter your name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Phone number" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input id="year" placeholder="e.g. 2nd Year" value={formData.year} onChange={e => setFormData(p => ({ ...p, year: e.target.value }))} />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="w-full">Register Now</Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default EventDetail;
