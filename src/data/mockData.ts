export const clubs = [
  { id: 1, name: "Coding Club", description: "Build, hack, and innovate together. Weekly coding challenges and hackathons.", members: 128, category: "Tech", color: "primary", icon: "💻" },
  { id: 2, name: "Photography Society", description: "Capture moments, tell stories. Workshops, photo walks, and exhibitions.", members: 85, category: "Arts", color: "accent", icon: "📸" },
  { id: 3, name: "Debate Club", description: "Sharpen your arguments and public speaking skills in competitive debates.", members: 64, category: "Academic", color: "secondary", icon: "🎤" },
  { id: 4, name: "Robotics Lab", description: "Design and build robots. Compete in national robotics competitions.", members: 52, category: "Tech", color: "info", icon: "🤖" },
  { id: 5, name: "Music Band", description: "Jam sessions, concerts, and music production. All instruments welcome.", members: 73, category: "Arts", color: "warning", icon: "🎵" },
  { id: 6, name: "Entrepreneurship Cell", description: "Turn ideas into startups. Pitch competitions and mentorship programs.", members: 96, category: "Business", color: "success", icon: "🚀" },
];

export const events = [
  { id: 1, title: "Hackathon 2026", date: "Apr 5-6, 2026", location: "Innovation Hub", club: "Coding Club", attendees: 200, type: "Competition", status: "upcoming" as const },
  { id: 2, title: "Photography Exhibition", date: "Mar 28, 2026", location: "Art Gallery", club: "Photography Society", attendees: 150, type: "Exhibition", status: "upcoming" as const },
  { id: 3, title: "Inter-College Debate", date: "Apr 12, 2026", location: "Main Auditorium", club: "Debate Club", attendees: 300, type: "Competition", status: "upcoming" as const },
  { id: 4, title: "Startup Weekend", date: "Mar 15, 2026", location: "Business Center", club: "E-Cell", attendees: 180, type: "Workshop", status: "past" as const },
  { id: 5, title: "Spring Concert", date: "Apr 20, 2026", location: "Open Air Theater", club: "Music Band", attendees: 500, type: "Performance", status: "upcoming" as const },
  { id: 6, title: "RoboWars", date: "May 1, 2026", location: "Sports Complex", club: "Robotics Lab", attendees: 250, type: "Competition", status: "upcoming" as const },
];

export const members = [
  { id: 1, name: "Arjun Mehta", role: "President", club: "Coding Club", avatar: "AM", year: "4th Year", active: true, contributions: 47 },
  { id: 2, name: "Priya Sharma", role: "Vice President", club: "Photography Society", avatar: "PS", year: "3rd Year", active: true, contributions: 35 },
  { id: 3, name: "Rahul Kumar", role: "Secretary", club: "Debate Club", avatar: "RK", year: "3rd Year", active: true, contributions: 28 },
  { id: 4, name: "Ananya Gupta", role: "Tech Lead", club: "Robotics Lab", avatar: "AG", year: "4th Year", active: true, contributions: 52 },
  { id: 5, name: "Vikram Singh", role: "Treasurer", club: "E-Cell", avatar: "VS", year: "2nd Year", active: false, contributions: 19 },
  { id: 6, name: "Neha Patel", role: "Event Head", club: "Music Band", avatar: "NP", year: "3rd Year", active: true, contributions: 31 },
  { id: 7, name: "Karan Joshi", role: "Member", club: "Coding Club", avatar: "KJ", year: "2nd Year", active: true, contributions: 15 },
  { id: 8, name: "Simran Kaur", role: "Designer", club: "Photography Society", avatar: "SK", year: "2nd Year", active: true, contributions: 22 },
];

export const notes = [
  { id: 1, title: "Data Structures & Algorithms", subject: "Computer Science", author: "Arjun Mehta", date: "Mar 20, 2026", downloads: 342, pages: 45, rating: 4.8 },
  { id: 2, title: "Digital Signal Processing", subject: "Electronics", author: "Ananya Gupta", date: "Mar 18, 2026", downloads: 218, pages: 32, rating: 4.5 },
  { id: 3, title: "Business Analytics", subject: "Management", author: "Vikram Singh", date: "Mar 15, 2026", downloads: 156, pages: 28, rating: 4.3 },
  { id: 4, title: "Thermodynamics", subject: "Mechanical", author: "Rahul Kumar", date: "Mar 12, 2026", downloads: 289, pages: 38, rating: 4.6 },
  { id: 5, title: "Machine Learning Basics", subject: "Computer Science", author: "Karan Joshi", date: "Mar 10, 2026", downloads: 412, pages: 52, rating: 4.9 },
  { id: 6, title: "Organic Chemistry", subject: "Chemistry", author: "Simran Kaur", date: "Mar 8, 2026", downloads: 198, pages: 35, rating: 4.4 },
];

export const projects = [
  { id: 1, title: "Campus Navigation App", description: "AR-based indoor navigation for new students to find classrooms and facilities.", team: ["Arjun Mehta", "Karan Joshi"], status: "In Progress" as const, tech: ["React Native", "AR Kit"], club: "Coding Club", progress: 65 },
  { id: 2, title: "Smart Attendance System", description: "Face recognition based attendance tracking for lectures and labs.", team: ["Ananya Gupta", "Rahul Kumar"], status: "Completed" as const, tech: ["Python", "OpenCV"], club: "Robotics Lab", progress: 100 },
  { id: 3, title: "College Event Portal", description: "Centralized platform for all college events with ticketing and notifications.", team: ["Vikram Singh", "Neha Patel"], status: "In Progress" as const, tech: ["React", "Node.js"], club: "E-Cell", progress: 40 },
  { id: 4, title: "Green Campus Initiative", description: "IoT-based monitoring of energy consumption across campus buildings.", team: ["Priya Sharma", "Simran Kaur"], status: "Planning" as const, tech: ["IoT", "Dashboard"], club: "Robotics Lab", progress: 15 },
];

export const stats = {
  totalMembers: 1240,
  activeClubs: 24,
  eventsThisMonth: 8,
  projectsActive: 15,
  notesShared: 2300,
};
