"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MapPin, Scissors, Bell, Ticket, X, CheckCircle, Sparkles,
  BarChart3, Zap, ShieldCheck, ArrowRight
} from "lucide-react";

// EXISTING IMPORTS
import SalonRegistration, { Salon } from "../components/SalonRegistration";
import UserRegistration from "../components/UserRegistration";
import { UserProfile } from "../components/UserProfile";
import { AdminLogin, AdminDashboard, UserData } from "../components/AdminDashboard";

// NEW IMPORTS
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SalonDashboard from "../components/SalonDashboard";
import UserDashboard from "../components/UserDashboard";
import { BackgroundAurora, NoiseOverlay } from "../components/SharedUI";
import AdvancedDashboardSection from "../components/AdvancedDashboardSection"; // Imported newly created component!

/* ---------------------------------
   INTERFACES & TYPES
---------------------------------- */

interface TicketData {
  salonName: string;
  number: number;
  eta: number;
}

/* ---------------------------------
   INITIAL DATA 
---------------------------------- */

const INITIAL_SALON_DATA: Salon[] = [
  {
    id: 1,
    name: "Urban Cut Pro",
    area: "Shastri Nagar",
    city: "Jodhpur",
    distance: "1.2 km",
    waiting: 3,
    eta: 15, 
    rating: 4.8,
    reviews: 321,
    tag: "Fastest nearby",
    price: "₹₹",
    type: "Unisex",
    verified: true,
    revenue: 15400
  },
  {
    id: 2,
    name: "The Royal Cut Studio",
    area: "Ratanada",
    city: "Jodhpur",
    distance: "2.0 km",
    waiting: 9,
    eta: 45,
    rating: 4.5,
    reviews: 189,
    tag: "Most booked",
    price: "₹₹₹",
    type: "Men Only",
    verified: true,
    revenue: 8900
  },
  {
    id: 3,
    name: "Fade & Blade Men’s Salon",
    area: "Sardarpura",
    city: "Jodhpur",
    distance: "0.9 km",
    waiting: 1,
    eta: 5,
    rating: 4.9,
    reviews: 412,
    tag: "Low waiting now",
    price: "₹₹",
    type: "Men Only",
    verified: true,
    revenue: 21000
  },
  {
    id: 4,
    name: "Glow & Glam Unisex Salon",
    area: "Civil Lines",
    city: "Jodhpur",
    distance: "3.4 km",
    waiting: 6,
    eta: 30,
    rating: 4.3,
    reviews: 102,
    tag: "Family friendly",
    price: "₹₹",
    type: "Women Only",
    verified: false,
    revenue: 3200
  },
];

const INITIAL_USERS: UserData[] = [
  { id: 101, name: "Suresh Raina", email: "suresh@example.com", joined: "2025-10-12", status: "Active" },
  { id: 102, name: "Rohit Sharma", email: "rohit@example.com", joined: "2025-11-05", status: "Active" },
  { id: 103, name: "Virat Kohli", email: "virat@example.com", joined: "2025-11-28", status: "Active" },
];

/* ---------------------------------
   HOOKS
---------------------------------- */

// Kept here because FeatureCard uses it
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible] as const;
};

/* ---------------------------------
   GENERIC UI COMPONENTS
---------------------------------- */

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-6 z-[100] animate-[slideIn_0.3s_ease-out]">
      <div className="bg-white/90 backdrop-blur-xl border border-zinc-200 shadow-2xl rounded-2xl p-4 flex items-center gap-3 pr-8 min-w-[300px]">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${type === 'success' ? 'bg-green-100 text-green-600' : type === 'error' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
          {type === 'success' ? <CheckCircle size={20} /> : type === 'error' ? <X size={20} /> : <Bell size={20} />}
        </div>
        <div>
          <h4 className="font-bold text-sm text-zinc-900">
            {type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Notification'}
          </h4>
          <p className="text-xs text-zinc-500">{message}</p>
        </div>
        <button onClick={onClose} className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-900">
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

interface LiveTicketProps {
    ticket: TicketData | null;
    onCancel: () => void;
}

const LiveTicket: React.FC<LiveTicketProps> = ({ ticket, onCancel }) => {
  const [timeLeft, setTimeLeft] = useState(ticket ? ticket.eta : 0);
      
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  if (!ticket) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-md z-50">
      <div className="bg-zinc-900 text-white rounded-3xl p-5 shadow-2xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 animate-[shimmer_2s_infinite]"></div>
        
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center animate-pulse">
              <Ticket className="text-white" size={24} />
            </div>
            <div>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Current Ticket</p>
              <h3 className="font-bold text-lg">{ticket.salonName}</h3>
            </div>
          </div>
          <button onClick={onCancel} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition">
            <X size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white/5 rounded-2xl p-3 text-center border border-white/5">
            <div className="text-2xl font-black">{timeLeft}</div>
            <div className="text-[10px] text-zinc-400 uppercase">Mins Left</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-3 text-center border border-white/5">
            <div className="text-2xl font-black text-emerald-400">#{ticket.number}</div>
            <div className="text-[10px] text-zinc-400 uppercase">Your Position</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-500 bg-black/20 p-2 rounded-lg">
          <span className="flex items-center gap-1"><Sparkles size={12} className="text-yellow-400"/> AI calculating speed</span>
          <span>Updated live</span>
        </div>
      </div>
    </div>
  );
};

const InfiniteMarquee: React.FC = () => {
  const logos = ["Glamour Zone", "The Barber", "Hair Masters", "Trimmed", "Urban Cut"];

  return (
    <div className="w-full overflow-hidden bg-white/50 backdrop-blur-sm py-10 border-y border-zinc-200/50 relative">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10"></div>
      <div className="flex w-[200%] animate-scroll">
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-8 flex items-center gap-2 text-zinc-400 font-bold text-xl uppercase tracking-tighter hover:text-zinc-900 transition-colors cursor-default"
          >
            <Scissors size={18} className="opacity-50" /> {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
  colSpan?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc, delay, colSpan = "col-span-1" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`
        ${colSpan}group relative overflow-hidden p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50 
        transition-all duration-700 transform hover:shadow-2xl hover:shadow-zinc-200/80 hover:-translate-y-1
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
        
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zinc-100 to-transparent rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-zinc-900/20 group-hover:rotate-6 transition-transform duration-300">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        <div>
          <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
          <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
        </div>

        <div className="mt-8 flex items-center text-sm font-bold text-zinc-900 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Learn more <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
};

interface LandingPageProps {
  onNavigateUser: () => void;
  onNavigateSalon: () => void;
  onNavigateAdmin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateUser, onNavigateSalon, onNavigateAdmin }) => {
  return (
    <div className="min-h-screen w-full font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden bg-zinc-50">
      <BackgroundAurora />
      <NoiseOverlay />

      {/* --- NAVBAR COMPONENT --- */}
      <Navbar onNavigateUser={onNavigateUser} />

      {/* --- HERO SECTION COMPONENT --- */}
      <HeroSection 
        onNavigateUser={onNavigateUser} 
        onNavigateSalon={onNavigateSalon} 
      />

      <InfiniteMarquee />

      <div id="advanced">
        <AdvancedDashboardSection />
      </div>

      <section id="features" className="pt-8 pb-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
            Built for the Modern Era.
          </h2>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto">
            We didn't just digitize the queue. We reinvented the entire salon
            experience for both customers and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Zap}
            title="Real-time Tracking"
            desc="Watch the queue move in real-time. We calculate wait times using AI based on service type and barber speed."
            delay={0}
            colSpan="md:col-span-2"
          />
          <FeatureCard
            icon={MapPin}
            title="Geo-Discovery"
            desc="Find the best rated salons near you with filters for price, amenities, and wait times."
            delay={100}
          />
          <FeatureCard
            icon={BarChart3}
            title="Smart Analytics"
            desc="For business owners: Track peak hours, staff performance, and daily revenue at a glance."
            delay={200}
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Verified Reviews"
            desc="No fake reviews. Only customers who have completed a service can leave feedback."
            delay={300}
            colSpan="md:col-span-2"
          />
        </div>
      </section>

      {/* --- FOOTER COMPONENT --- */}
      <Footer onNavigateAdmin={onNavigateAdmin} />
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState("home");
      
  // SHARED STATE FOR ADMIN PANEL AND USER PANEL
  const [salons, setSalons] = useState<Salon[]>(INITIAL_SALON_DATA);
  const [users, setUsers] = useState<UserData[]>(INITIAL_USERS);

  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | "info" } | null>(null);
  const [activeTicket, setActiveTicket] = useState<TicketData | null>(null);
  const [registeredSalon, setRegisteredSalon] = useState<Salon | null>(null);

  const showToast = (msg: string, type: "success" | "error" | "info" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleRegisterSalon = (newSalon: Salon) => {
    setSalons(prev => [...prev, newSalon]);
      
    setRegisteredSalon(newSalon);
    showToast("Salon registered successfully!");
    setCurrentView("salon-dashboard"); 
  };

  const handleRegisterUser = (userData: { name: string; email: string }) => {
    const newUser: UserData = { 
        id: Date.now(), 
        name: userData.name, 
        email: userData.email, 
        joined: new Date().toISOString().split('T')[0],
        status: "Active"
    };
    setUsers(prev => [...prev, newUser]);
    showToast("Account created!");
    setCurrentView("user-dashboard");
  };

  const handleJoinQueue = (salon: Salon) => {
    if(activeTicket) {
      showToast("You are already in a queue!", "error");
      return;
    }
    showToast(`Joined queue for ${salon.name}`);
    setActiveTicket({
      salonName: salon.name,
      number: salon.waiting + 1,
      eta: salon.eta
    });
  };

  return (
    <>
      {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
      
      {activeTicket && !['salon-dashboard', 'admin-login', 'admin-dashboard'].includes(currentView) && (
        <LiveTicket ticket={activeTicket} onCancel={() => setActiveTicket(null)} />
      )}
      
      {currentView === "home" && (
        <LandingPage
          onNavigateUser={() => setCurrentView("user-register")}
          onNavigateSalon={() => setCurrentView("salon-register")}
          onNavigateAdmin={() => setCurrentView("admin-login")}
        />
      )}

      {currentView === "user-register" && (
        <UserRegistration
          onBack={() => setCurrentView("home")}
          onRegisterUser={handleRegisterUser}
        />
      )}

      {currentView === "salon-register" && (
        <SalonRegistration
          onBack={() => setCurrentView("home")}
          onRegister={handleRegisterSalon}
        />
      )}

      {currentView === "user-dashboard" && (
        <UserDashboard
          onLogout={() => setCurrentView("home")}
          salons={salons} 
          onJoinQueue={handleJoinQueue}
          onProfileClick={() => setCurrentView("user-profile")} 
        />
      )}

      {currentView === "user-profile" && (
        <UserProfile 
          user={{
            name: "Sanjay Choudhary",
            email: "sanjay@example.com",
            phone: "+91 7568045830",
            location: "Jodhpur, Rajasthan",
            joinDate: "August 2025",
            avatar: "" 
          }}
          onBack={() => setCurrentView("user-dashboard")} 
          onLogout={() => {
            showToast("Logged out successfully");
            setCurrentView("home");
          }}
        />
      )}

      {currentView === "salon-dashboard" && (
        <SalonDashboard
          salon={registeredSalon} 
          onLogout={() => setCurrentView("home")}
        />
      )}

      {currentView === "admin-login" && (
        <AdminLogin 
          onBack={() => setCurrentView("home")}
          onLogin={() => setCurrentView("admin-dashboard")}
        />
      )}

      {currentView === "admin-dashboard" && (
        <AdminDashboard 
          salons={salons}
          setSalons={setSalons} 
          users={users}
          onLogout={() => setCurrentView("home")}
        />
      )}
    </>
  );
}