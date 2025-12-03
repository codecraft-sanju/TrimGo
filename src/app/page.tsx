"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MapPin, Clock, Users, ArrowRight, CheckCircle, Scissors, Star,
  TrendingUp, Bell, ShieldCheck, ChevronRight, Building2,
  Ticket, X, Play, CheckSquare, Settings, Grid,
  Activity, DollarSign, LogOut, Sparkles, Globe,
  Heart, Search, Filter, Mail, BarChart3, Zap
} from "lucide-react";

// EXISTING IMPORTS
import SalonRegistration, { Salon } from "../components/SalonRegistration";
import UserRegistration from "../components/UserRegistration";
import { UserProfile } from "../components/UserProfile";
import { AdminLogin, AdminDashboard, UserData } from "../components/AdminDashboard";
import MapSalon from "../components/MapSalon";

// NEW IMPORTS
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* ---------------------------------
   INTERFACES & TYPES
---------------------------------- */

interface SalonRequest {
  id: number;
  name: string;
  service: string;
  time: string;
  status: "pending" | "accepted" | "rejected";
  price: number;
}

interface QueueCustomer {
  id: number;
  name: string;
  service: string;
  status: "waiting" | "in-service";
  waitTime: number;
  price: number;
  startTime?: number;
}

interface TicketData {
  salonName: string;
  number: number;
  eta: number;
}

interface Stats {
  revenue: number;
  customers: number;
  waitTime: number;
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

const INITIAL_SALON_REQUESTS: SalonRequest[] = [
  { id: 101, name: "Rahul Sharma", service: "Haircut & Beard", time: "10 min ago", status: "pending", price: 350 },
  { id: 102, name: "Amit Verma", service: "Hair Spa", time: "2 min ago", status: "pending", price: 800 },
  { id: 103, name: "Vikram Singh", service: "Shaving", time: "Just now", status: "pending", price: 150 },
];

const INITIAL_ACTIVE_QUEUE: QueueCustomer[] = [
  { id: 201, name: "Suresh Raina", service: "Haircut", status: "waiting", waitTime: 15, price: 250 },
  { id: 202, name: "Mahendra S.", service: "Beard Trim", status: "waiting", waitTime: 30, price: 100 },
];

/* ---------------------------------
   HOOKS
---------------------------------- */

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

const useSpotlight = (divRef: React.RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return { position, opacity, handleMouseMove, handleMouseLeave };
};

/* ---------------------------------
   VISUAL ASSETS
---------------------------------- */

const BackgroundAurora: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-50">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-300/20 rounded-full blur-[120px] animate-blob" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-300/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
    <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-blue-300/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
  </div>
);

const NoiseOverlay: React.FC = () => (
  <div className="fixed inset-0 z-40 pointer-events-none opacity-[0.04] mix-blend-overlay">
    <svg className="w-full h-full">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

const GlowBlob: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`absolute rounded-full blur-[110px] opacity-40 pointer-events-none animate-pulse-slow ${className}`}
  />
);

/* ---------------------------------
   GENERIC UI COMPONENTS
---------------------------------- */

interface LogoProps {
  dark?: boolean;
}

// Logo kept here for UserDashboard Header usage
const Logo: React.FC<LogoProps> = ({ dark = false }) => (
  <div className="flex items-center gap-2 group cursor-pointer select-none">
    <div
      className={`w-9 h-9 ${
        dark ? "bg-white text-zinc-900" : "bg-zinc-900 text-white"
      } rounded-xl flex items-center justify-center font-bold text-sm shadow-lg group-hover:rotate-12 transition-transform duration-300`}
    >
      TG
    </div>
    <span
      className={`font-bold text-lg tracking-tight ${
        dark ? "text-white" : "text-zinc-900"
      }`}
    >
      TrimGo
    </span>
  </div>
);

const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setRotate({ x: yPct * -16, y: xPct * 16 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { position, opacity, handleMouseMove, handleMouseLeave } =
    useSpotlight(divRef);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/40 bg-zinc-900/80 backdrop-blur-xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.18), transparent 45%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

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

const AdvancedDashboardSection: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.15 });

  return (
    <section className="relative pt-24 pb-0 px-6 max-w-7xl mx-auto ">
      <div className="absolute inset-0 -z-10">
        <GlowBlob className="top-[-10%] left-[10%] w-[320px] h-[320px] bg-blue-300/40" />
        <GlowBlob className="bottom-[-10%] right-[5%] w-[380px] h-[380px] bg-purple-300/40" />
      </div>

      <div
        ref={ref}
        className={`
          grid grid-cols-1 lg:grid-cols-2 gap-12 items-center 
          transition-all duration-[900ms] 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-semibold mb-4">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live salon command center
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4 tracking-tight">
            See your queue, revenue and demand in one live dashboard.
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-xl mb-6">
            We brought the 3D analytics feel from premium SaaS tools right
            inside TrimGo. Owners get a real-time cockpit, while users enjoy
            smoother, smarter wait times.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <SpotlightCard className="p-4 bg-zinc-900 text-white border-zinc-800">
              <div className="text-xs text-zinc-400 mb-1 flex items-center gap-2">
                <Clock size={14} /> Avg wait today
              </div>
              <div className="text-2xl font-bold">
                11
                <span className="text-sm text-zinc-400 ml-1">min</span>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-4 bg-zinc-900 text-white border-zinc-800">
              <div className="text-xs text-zinc-400 mb-1 flex items-center gap-2">
                <TrendingUp size={14} /> Revenue uplift
              </div>
              <div className="text-2xl font-bold">+28%</div>
            </SpotlightCard>

            <SpotlightCard className="p-4 bg-zinc-900 text-white border-zinc-800">
              <div className="text-xs text-zinc-400 mb-1 flex items-center gap-2">
                <Users size={14} /> Returning users
              </div>
              <div className="text-2xl font-bold">73%</div>
            </SpotlightCard>
          </div>
        </div>

        <div className="perspective-[1600px]">
          <TiltCard className="w-full">
            <div className="relative rounded-3xl border border-zinc-200 bg-white shadow-2xl overflow-hidden">
              <div className="h-12 border-b border-zinc-200 flex items-center px-4 gap-2 bg-zinc-50/80 backdrop-blur">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/70 border border-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70 border border-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/70 border border-green-500/70"></div>
                </div>
                <div className="mx-auto w-64 h-6 rounded-md bg-white border border-zinc-200 flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                  dashboard.trimgo.app
                </div>
              </div>

              <div className="p-6 md:p-7 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                    <div className="text-zinc-500 text-[11px] uppercase font-bold tracking-wider mb-1.5">
                      Current wait
                    </div>
                    <div className="text-3xl font-bold text-zinc-900">
                      12{" "}
                      <span className="text-base font-normal text-zinc-500">
                        mins
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                    <div className="text-zinc-500 text-[11px] uppercase font-bold tracking-wider mb-1.5">
                      Queue depth
                    </div>
                    <div className="text-3xl font-bold text-zinc-900">
                      4{" "}
                      <span className="text-base font-normal text-zinc-500">
                        people
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                        AI
                      </div>
                      <span className="text-emerald-600 text-xs font-bold uppercase tracking-wide">
                        Insight
                      </span>
                    </div>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      Peak traffic expected at{" "}
                      <span className="font-semibold">5:00 PM</span> based on
                      the last 30 days.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-2 rounded-xl border border-zinc-200 bg-zinc-900 text-white overflow-hidden flex flex-col">
                  <div className="p-4 border-b border-white/10 flex justify-between items-center bg-zinc-950/60">
                    <span className="font-semibold text-sm">Live Queue</span>
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      LIVE SYNCED
                    </span>
                  </div>
                  <div className="p-2 space-y-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-zinc-300 text-xs font-bold">
                          #{i}
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-24 bg-zinc-800 rounded mb-1 group-hover:bg-zinc-700 transition"></div>
                          <div className="h-2 w-16 bg-zinc-900 rounded group-hover:bg-zinc-800 transition"></div>
                        </div>
                        <div className="text-[11px] font-mono text-zinc-500 group-hover:text-white transition">
                          1{i}:0{i % 2 === 0 ? "5" : "0"} PM
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto px-4 py-3 border-t border-white/10 text-[11px] text-zinc-400 flex items-center justify-between bg-zinc-950/80">
                    <span>Smart auto-assign is ON</span>
                    <span className="flex items-center gap-1">
                      <Sparkles size={12} /> <span>AI load balancing</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai'|'user', text: string}[]>([
    { role: 'ai', text: "Hi Sanjay! Looking for a haircut? I can find the shortest queue for you." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let response = "I can help with that.";
      if (userMsg.toLowerCase().includes("urgent") || userMsg.toLowerCase().includes("fast")) {
        response = "I found 'Fade & Blade' nearby with only 5 min waiting. Should I book it?";
      } else if (userMsg.toLowerCase().includes("cheap") || userMsg.toLowerCase().includes("price")) {
        response = "Urban Cut Pro offers the best rates starting at ₹150.";
      }
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
          <div className="bg-zinc-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <h3 className="text-white font-bold text-sm">TrimGo AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="text-zinc-400 hover:text-white" size={16}/></button>
          </div>
           
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-xs font-medium ${m.role === 'user' ? 'bg-zinc-900 text-white rounded-tr-none' : 'bg-white border border-zinc-200 text-zinc-600 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-zinc-400 ml-2 animate-pulse">AI is typing...</div>}
          </div>

          <div className="p-3 bg-white border-t border-zinc-100 flex gap-2">
            <input 
              className="flex-1 bg-zinc-100 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-zinc-900"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="p-2 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800"><ArrowRight size={14}/></button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-zinc-900 text-white shadow-xl shadow-zinc-900/30 flex items-center justify-center hover:scale-110 transition-transform group"
      >
        {isOpen ? <X size={24}/> : <Sparkles size={24} className="group-hover:rotate-12 transition-transform"/>}
      </button>
    </div>
  );
};

const AnalyticsChart: React.FC = () => {
  return (
    <div className="w-full h-32 mt-4 relative overflow-hidden rounded-xl bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20">
      <svg viewBox="0 0 100 40" className="w-full h-full absolute bottom-0 left-0" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 35 Q 10 30, 20 25 T 40 20 T 60 15 T 80 25 T 100 10 V 40 H 0 Z" fill="url(#chartGradient)" />
        <path d="M0 35 Q 10 30, 20 25 T 40 20 T 60 15 T 80 25 T 100 10" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="absolute top-2 left-4 text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
        <Activity size={10} /> Real-time Demand
      </div>
    </div>
  );
};

/* ---------------------------------
   SALON DASHBOARD
---------------------------------- */

interface SalonDashboardProps {
  salon: Salon | null;
  onLogout: () => void;
}

const SalonDashboard: React.FC<SalonDashboardProps> = ({ salon, onLogout }) => {
  const [requests, setRequests] = useState<SalonRequest[]>(INITIAL_SALON_REQUESTS);
  const [activeQueue, setActiveQueue] = useState<QueueCustomer[]>(INITIAL_ACTIVE_QUEUE);
  const [inChair, setInChair] = useState<QueueCustomer | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const [stats, setStats] = useState<Stats>({ revenue: 4500, customers: 12, waitTime: 25 });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleAccept = (req: SalonRequest) => {
    const newCustomer: QueueCustomer = { 
      id: Date.now(), 
      name: req.name,
      service: req.service,
      price: req.price,
      status: 'waiting', 
      waitTime: activeQueue.length * 15 + 15 
    };
    setActiveQueue([...activeQueue, newCustomer]);
    setRequests(requests.filter(r => r.id !== req.id));
  };

  const handleReject = (id: number) => {
    setRequests(requests.filter(r => r.id !== id));
  };

  const handleStartService = (customer: QueueCustomer) => {
    if(inChair) {
      alert("Chair is occupied! Please complete the current service first."); 
      return;
    }
    setInChair({ ...customer, startTime: Date.now() });
    setActiveQueue(activeQueue.filter(c => c.id !== customer.id));
  };

  const handleCompleteService = () => {
    if(inChair) {
      setStats(prev => ({
        ...prev,
        revenue: prev.revenue + inChair.price, 
        customers: prev.customers + 1
      }));
      setInChair(null);
    }
  };

  const getAvatarGradient = (name: string) => {
    const gradients = [
      "from-pink-500 to-rose-500",
      "from-indigo-500 to-blue-500",
      "from-emerald-500 to-teal-500",
      "from-orange-500 to-amber-500"
    ];
    return gradients[name.length % gradients.length];
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 font-sans text-white overflow-hidden flex selection:bg-emerald-500 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-white/5 bg-zinc-900/40 backdrop-blur-xl z-50">
        <div className="h-20 flex items-center px-6 border-b border-white/5 gap-3">
           <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">TG</div>
           <span className="font-bold text-lg">TrimGo</span>
        </div>

        <nav className="flex-1 py-8 flex flex-col gap-2 px-3">
           {[
             { icon: Grid, label: "Dashboard", active: true },
             { icon: Activity, label: "Analytics", active: false },
             { icon: Users, label: "Customers", active: false },
             { icon: Ticket, label: "Bookings", active: false },
             { icon: Settings, label: "Settings", active: false },
           ].map((item, idx) => (
             <div key={idx} className={`flex items-center p-3 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-white/10 text-white shadow-lg shadow-white/5 border border-white/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}>
               <item.icon size={20} strokeWidth={2} />
               <span className="ml-3 font-medium">{item.label}</span>
               {item.active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>}
             </div>
           ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button onClick={onLogout} className="flex items-center w-full p-3 rounded-xl text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut size={20} />
            <span className="ml-3 font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-zinc-900/30 backdrop-blur-md flex items-center justify-between px-6 lg:px-8">
           <div className="flex flex-col">
             <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                {salon?.name || "My Salon"}
                <ChevronRight size={16} className="text-zinc-600"/>
                <span className="text-zinc-400 font-normal text-sm">Dashboard</span>
             </h1>
             <p className="text-xs text-zinc-500 font-mono mt-0.5">{currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
           </div>

           <div className="flex items-center gap-4">
             {/* Online Toggle */}
             <div 
               onClick={() => setIsOnline(!isOnline)}
               className={`cursor-pointer px-4 py-2 rounded-full border flex items-center gap-2 transition-all ${isOnline ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20' : 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20'}`}
             >
                 <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></span>
                 <span className="text-xs font-bold uppercase tracking-wider">{isOnline ? 'Accepting' : 'Offline'}</span>
             </div>

             <div className="w-px h-8 bg-white/10 mx-2"></div>
             
             <div className="relative cursor-pointer">
                 <Bell size={20} className="text-zinc-400 hover:text-white transition" />
                 <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-zinc-900"></span>
             </div>
             <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 p-0.5 cursor-pointer hover:scale-105 transition">
               <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-xs font-bold text-white">SC</div>
             </div>
           </div>
        </header>

        {/* Dashboard Workspace */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 scrollbar-hide">
           
           {/* Stats Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
             
             {/* Analytics Chart */}
             <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-zinc-900/50 border border-white/5 rounded-3xl p-6">
               <div className="flex justify-between items-center mb-2">
                 <h3 className="font-bold text-zinc-300">Live Traffic Analytics</h3>
                 <select className="bg-zinc-950 text-xs text-zinc-400 border border-white/10 rounded-lg p-1">
                   <option>Last Hour</option>
                   <option>Today</option>
                 </select>
               </div>
               <AnalyticsChart />
             </div>

             {/* Revenue Card */}
             <div className="group relative bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all duration-300">
                 <div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500"><DollarSign size={40} className="text-emerald-500"/></div>
                 <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Total Revenue</p>
                 <div className="flex items-end gap-2">
                   <h3 className="text-3xl font-black text-white">₹{stats.revenue}</h3>
                   <span className="text-xs text-emerald-400 font-bold mb-1.5 bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-1"><TrendingUp size={10}/> +12%</span>
                 </div>
             </div>

             {/* Waiting Card */}
             <div className="group relative bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all duration-300">
                 <div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500"><Users size={40} className="text-blue-500"/></div>
                 <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">In Queue</p>
                 <div className="flex items-end gap-2">
                   <h3 className="text-3xl font-black text-white">{activeQueue.length}</h3>
                   <span className="text-xs text-zinc-400 font-medium mb-1.5">customers</span>
                 </div>
             </div>

             {/* Wait Time Card */}
             <div className="group relative bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all duration-300">
                 <div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500"><Clock size={40} className="text-amber-500"/></div>
                 <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Avg Wait</p>
                 <div className="flex items-end gap-2">
                   <h3 className="text-3xl font-black text-white">{stats.waitTime}<span className="text-lg font-medium text-zinc-500 ml-1">m</span></h3>
                   <span className="text-xs text-amber-400 font-bold mb-1.5 bg-amber-500/10 px-1.5 py-0.5 rounded">High Traffic</span>
                 </div>
             </div>

             {/* Completed Card */}
             <div className="group relative bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5 hover:border-white/10 rounded-3xl p-6 transition-all duration-300">
                 <div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-40 transition-opacity group-hover:scale-110 duration-500"><CheckCircle size={40} className="text-violet-500"/></div>
                 <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Completed</p>
                 <div className="flex items-end gap-2">
                   <h3 className="text-3xl font-black text-white">{stats.customers}</h3>
                   <span className="text-xs text-zinc-400 font-medium mb-1.5">services done</span>
                 </div>
             </div>
           </div>

           {/* MAIN KANBAN BOARD */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-340px)] min-h-[500px]">
             
             {/* COLUMN 1: NEW REQUESTS */}
             <div className="flex flex-col bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
                 <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                   <h3 className="font-bold text-sm text-zinc-100 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-yellow-500"></div> New Requests
                   </h3>
                   <span className="text-xs font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md">{requests.length}</span>
                 </div>
                 <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                   {requests.length === 0 ? (
                     <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-2">
                        <Bell size={32} className="opacity-20"/>
                        <p className="text-sm">No new requests</p>
                     </div>
                   ) : (
                     requests.map(req => (
                        <div key={req.id} className="group bg-zinc-900 border border-white/10 hover:border-yellow-500/50 p-4 rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] animate-[slideIn_0.3s_ease-out]">
                           <div className="flex justify-between items-start mb-3">
                             <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getAvatarGradient(req.name)} flex items-center justify-center text-sm font-bold shadow-lg`}>
                                   {req.name.charAt(0)}
                                </div>
                                <div>
                                  <h4 className="font-bold text-sm text-white">{req.name}</h4>
                                  <p className="text-xs text-zinc-400">{req.service}</p>
                                </div>
                             </div>
                             <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-2 py-1 rounded">{req.time}</span>
                           </div>
                           <div className="flex items-center justify-between mt-3 gap-2">
                             <div className="text-xs font-bold text-zinc-300 bg-zinc-800/50 px-2 py-1 rounded">₹{req.price}</div>
                             <div className="flex gap-2">
                                <button onClick={() => handleReject(req.id)} className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition"><X size={16}/></button>
                                <button onClick={() => handleAccept(req)} className="px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-emerald-400 hover:shadow-[0_0_15px_#34d399] transition-all">Accept</button>
                             </div>
                           </div>
                        </div>
                     ))
                   )}
                 </div>
             </div>

             {/* COLUMN 2: WAITING QUEUE */}
             <div className="flex flex-col bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
                 <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                   <h3 className="font-bold text-sm text-zinc-100 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-blue-500"></div> Waiting Queue
                   </h3>
                   <span className="text-xs font-bold bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md">{activeQueue.length}</span>
                 </div>
                 <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                   {activeQueue.length === 0 ? (
                     <div className="h-full flex flex-col items-center justify-center text-zinc-600 gap-2">
                        <Users size={32} className="opacity-20"/>
                        <p className="text-sm">Queue is empty</p>
                     </div>
                   ) : (
                     activeQueue.map((cust, idx) => (
                        <div key={cust.id} className="relative group bg-zinc-900 border border-white/10 hover:border-blue-500/50 p-4 rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <div className="flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                <span className="text-lg font-black text-zinc-700 w-6">#{idx+1}</span>
                                <div>
                                  <h4 className="font-bold text-sm text-white">{cust.name}</h4>
                                  <p className="text-xs text-zinc-400">{cust.service}</p>
                                </div>
                             </div>
                             <button onClick={() => handleStartService(cust)} className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition border border-white/5">
                                <Play size={14} fill="currentColor" />
                             </button>
                           </div>
                        </div>
                     ))
                   )}
                 </div>
             </div>

             {/* COLUMN 3: ACTIVE CHAIR (Featured) */}
             <div className="flex flex-col bg-gradient-to-b from-zinc-900/50 to-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm relative">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-[0_0_15px_#10b981]"></div>
                 <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                   <h3 className="font-bold text-sm text-zinc-100 flex items-center gap-2">
                     <Scissors size={14} className="text-emerald-400"/> In The Chair
                   </h3>
                   <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded animate-pulse">
                     LIVE
                   </div>
                 </div>
                 
                 <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative">
                   {inChair ? (
                     <>
                       {/* Glow effect behind avatar */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 rounded-full blur-[60px] animate-pulse-slow pointer-events-none"></div>
                       
                       <div className="relative mb-6">
                          <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-emerald-400 to-cyan-400 shadow-2xl shadow-emerald-500/20">
                             <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-4xl font-bold text-white relative overflow-hidden">
                                {inChair.name.charAt(0)}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                             </div>
                          </div>
                          <div className="absolute bottom-0 right-0 bg-zinc-900 rounded-full p-1 border border-zinc-700">
                             <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                <Activity size={12} className="text-black animate-spin-slow"/>
                             </div>
                          </div>
                       </div>

                       <h2 className="text-2xl font-black text-white mb-1 tracking-tight">{inChair.name}</h2>
                       <p className="text-emerald-400 font-medium text-sm mb-6">{inChair.service}</p>

                       {/* Timer / Progress Bar Simulation */}
                       <div className="w-full bg-zinc-800/50 rounded-full h-1.5 mb-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-[45%] rounded-full shadow-[0_0_10px_#10b981]"></div>
                       </div>
                       <div className="w-full flex justify-between text-[10px] text-zinc-500 font-mono mb-8">
                          <span>12:30 min</span>
                          <span>Est. 25:00</span>
                       </div>

                       <button 
                          onClick={handleCompleteService}
                          className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                       >
                          <CheckSquare size={18} className="text-emerald-600 group-hover:scale-110 transition-transform"/> 
                          Complete Service
                       </button>
                     </>
                   ) : (
                     <div className="text-zinc-600 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-zinc-800 flex items-center justify-center mb-4">
                           <Scissors size={24} />
                        </div>
                        <p className="font-medium text-sm">Chair Empty</p>
                        <p className="text-xs mt-1 max-w-[150px]">Select a customer from the queue to start.</p>
                     </div>
                   )}
                 </div>
             </div>

           </div>
        </div>
      </main>
    </div>
  );
};

/* ---------------------------------
   USER DASHBOARD
---------------------------------- */

interface UserDashboardProps {
  onLogout: () => void;
  salons: Salon[];
  onJoinQueue: (salon: Salon) => void;
  onProfileClick: () => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ onLogout, salons, onJoinQueue, onProfileClick }) => {
  const [selectedCity] = useState("Jodhpur");
  const [sortBy, setSortBy] = useState("waiting");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredSalons = salons.filter(salon => {
    // Check verification status too - only show verified salons to users!
    if(!salon.verified) return false;

    const matchesSearch = salon.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          salon.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || salon.type === filterType;
    return matchesSearch && matchesType;
  });

  const sortedSalons = [...filteredSalons].sort((a, b) => {
    if (sortBy === "waiting") return a.waiting - b.waiting;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "distance") {
      const da = parseFloat(a.distance);
      const db = parseFloat(b.distance);
      return da - db;
    }
    return 0;
  });

  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans overflow-x-hidden pb-32">
      <BackgroundAurora />
      <NoiseOverlay />

      <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4"> 
            <Logo />
            
            <div className="h-6 w-px bg-zinc-200 hidden sm:block"></div> 

            {/* Clickable Profile Area */}
            <div 
              onClick={onProfileClick}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay" 
                        alt="Sanjay"
                        className="w-full h-full object-cover"
                      />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-bold text-zinc-900 group-hover:text-indigo-600 transition-colors">Sanjay</span>
                <span className="text-[10px] font-medium text-zinc-500">Free Plan</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-xs text-zinc-600">
              <MapPin size={14} />
              <span>{selectedCity}</span>
            </div>
            <button
              onClick={onLogout}
              className="text-xs sm:text-sm font-bold px-4 py-2 rounded-full bg-zinc-900 text-white hover:scale-105 transition-transform"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="mb-10">
           
          {/* HEADER AREA WITH MAP INTEGRATION */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-6">
            <div>
              <p className="text-xs font-semibold text-zinc-500 mb-1 uppercase tracking-[0.16em]">
                Live Availability
              </p>
              <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">
                Find a salon near you.
              </h1>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {["All", "Unisex", "Men Only", "Women Only"].map(type => (
                <button 
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-3 rounded-2xl font-bold whitespace-nowrap border transition-all text-xs md:text-sm ${filterType === type ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <MapSalon salons={filteredSalons} onSelect={(s) => onJoinQueue(s)} />

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-x-0 -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by salon name or area..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-zinc-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
              
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider whitespace-nowrap">Sort by:</span>
              {["waiting", "rating", "distance"].map(criteria => (
                <button 
                 key={criteria}
                 onClick={() => setSortBy(criteria)}
                 className={`text-xs px-3 py-1 rounded-full border ${sortBy === criteria ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-transparent border-zinc-300 text-zinc-500'}`}
                >
                  {criteria.charAt(0).toUpperCase() + criteria.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedSalons.map((salon) => (
            <div
              key={salon.id}
              className="group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-transparent to-sky-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-5 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base md:text-lg font-bold text-zinc-900 flex items-center gap-2">
                      {salon.name}
                      <span className="px-2 py-0.5 rounded-full bg-zinc-900 text-[10px] font-semibold text-white uppercase tracking-wide">
                        LIVE
                      </span>
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
                      <MapPin size={14} />
                      <span>
                        {salon.area}, {salon.city} • {salon.distance}
                      </span>
                    </div>
                    <div className="mt-1 text-[10px] text-zinc-500 font-bold uppercase tracking-wider bg-zinc-100 inline-block px-2 py-0.5 rounded-md">
                      {salon.type}
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 text-sm font-semibold text-zinc-900">
                      <Star className="text-yellow-400 fill-yellow-400" size={14} />
                      {salon.rating.toFixed(1)}
                    </div>
                    <p className="text-[11px] text-zinc-500">
                      {salon.reviews}+ ratings
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase text-zinc-500 font-semibold tracking-[0.16em]">
                        Current waiting
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-zinc-900">
                          {salon.waiting}
                        </span>
                        <span className="text-xs text-zinc-500 font-medium">
                          people in line
                        </span>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col border-l border-dashed border-zinc-200 pl-4">
                      <span className="text-[11px] uppercase text-zinc-500 font-semibold tracking-[0.16em]">
                        Estimated time
                      </span>
                      <span className="text-sm font-semibold text-zinc-900">
                        {salon.eta} mins
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-end text-[11px] text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>Chairs free: {Math.max(0, 5 - salon.waiting)}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock size={14} />
                      <span>Updated just now</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-zinc-100">
                  <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                    <Sparkles size={14} />
                    <span>{salon.tag}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition">
                      View details
                    </button>
                    <button 
                      onClick={() => onJoinQueue(salon)}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:scale-105 transition-transform flex items-center justify-center gap-1.5"
                    >
                      Join queue
                      <Ticket size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedSalons.length === 0 && (
           <div className="text-center py-20 opacity-50">
             <Filter size={48} className="mx-auto mb-4" />
             <p className="text-xl font-bold">No verified salons found</p>
             <p>Try changing your filters.</p>
           </div>
        )}

        <p className="mt-8 text-[11px] text-zinc-400 text-center">
          This is demo data. In production, these numbers will come live from
          each partner salon’s TrimGo system in real time.
        </p>

        {/* AI CONCIERGE BUTTON */}
        <AIConcierge />
      </main>
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