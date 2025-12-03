"use client";
import React from "react";
import { Building2, Clock, TrendingUp, Star } from "lucide-react";

/* ---------------------------------
   HELPER COMPONENTS (Moved from page.tsx)
---------------------------------- */

interface ShimmerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  className?: string;
  disabled?: boolean;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false
}) => {
  const baseClass =
    "group relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-zinc-900 text-white shadow-xl shadow-zinc-900/20 hover:shadow-2xl hover:shadow-zinc-900/30",
    secondary:
      "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 shadow-sm",
    ghost: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50",
    danger: "bg-red-500 text-white shadow-lg hover:bg-red-600",
    success: "bg-emerald-500 text-white shadow-lg hover:bg-emerald-600"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      <span className="relative z-20 flex items-center justify-center gap-2 px-6 py-3.5">
        {children}
      </span>
    </button>
  );
};

const InteractivePhone: React.FC = () => {
  return (
    <div className="relative mx-auto w-[320px] h-[640px] bg-zinc-900 rounded-[3rem] p-4 shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] border-[8px] border-zinc-950 ring-1 ring-white/20 select-none transform transition hover:scale-[1.02] duration-500">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
        <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
        <div className="w-10 h-1 rounded-full bg-zinc-800"></div>
      </div>

      {/* Screen Content - NOW PLAYING VIDEO */}
      <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] overflow-hidden relative flex flex-col">
         {/* The video from public folder placed inside the phone screen */}
         <video 
           src="/TrimGo.mp4" 
           className="w-full h-full object-cover" 
           autoPlay 
           loop 
           muted 
           playsInline
         />
         {/* Optional: Overlay gradient at bottom for better integration */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

/* ---------------------------------
   MAIN HERO SECTION COMPONENT
---------------------------------- */

interface HeroSectionProps {
  onNavigateUser: () => void;
  onNavigateSalon: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateUser, onNavigateSalon }) => {
  return (
    <section className="relative pt-24 md:pt-28 pb-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
      <div className="flex flex-col items-start z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-zinc-200 backdrop-blur-sm text-zinc-600 text-xs font-bold mb-4 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          TrimGo • Live queue
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-[0.95] mb-8">
          Wait{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 font-serif italic pr-2">
            Less.
          </span>
          <br />
          Live{" "}
          <span className="relative inline-block">
            More.
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-green-400 opacity-50"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xl text-zinc-500 max-w-lg leading-relaxed mb-10 font-medium">
          Stop wasting hours in salon waiting rooms. Book your spot
          digitally, track live wait times, and walk in like a VIP.
        </p>

        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          <ShimmerButton onClick={onNavigateUser} className="w-full sm:w-auto">
            Join the Queue
          </ShimmerButton>
          <ShimmerButton
            variant="secondary"
            onClick={onNavigateSalon}
            className="w-full sm:w-auto"
          >
            Partner with Us <Building2 size={18} />
          </ShimmerButton>
        </div>

        <div className=" mt-12 flex items-center gap-4 pt-8 border-t border-zinc-200/60 w-full max-w-md">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 shadow-sm"
                style={{
                  backgroundImage: `url(https://i.pravatar.cc/150?img=${
                    i + 10
                  })`,
                  backgroundSize: "cover",
                }}
              />
            ))}
          </div>
          <div>
            <div className="flex text-yellow-500 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-xs font-bold text-zinc-600">
              Trusted by 12,000+ users
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center perspective-1000">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200 to-emerald-200 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
        {/* UPDATED INTERACTIVE PHONE COMPONENT */}
        <InteractivePhone />

        <div className="absolute top-[20%] -left-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce delay-700 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg text-green-600">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-bold uppercase">
                Time Saved
              </p>
              <p className="text-lg font-bold text-zinc-900">45 mins</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[20%] -right-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce delay-1000 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-bold uppercase">
                Salon Revenue
              </p>
              <p className="text-lg font-bold text-zinc-900">+30%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;