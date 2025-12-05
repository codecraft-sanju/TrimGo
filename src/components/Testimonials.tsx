import React from 'react';
import { BadgeCheck, Quote } from 'lucide-react';

// 1. Data Structure (Wahi same data, bas structure ready hai)
const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "College Student",
    image: "https://i.pravatar.cc/150?u=12",
    quote: "I used to waste 45 minutes just sitting in the salon waiting for my turn. With TrimGo, I book from my hostel and walk in exactly when the barber is free. Game changer!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?u=23",
    quote: "Weekends are busy, and I hate waiting. The 'Live Queue' feature is accurate to the minute. I actually managed to get a haircut during my lunch break thanks to this app.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Freelancer",
    image: "https://i.pravatar.cc/150?u=31",
    quote: "Found the best salon in Jodhpur via TrimGo. The ratings are genuine, and I love that I can see the price list before booking. The interface is super clean.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/150?u=45",
    quote: "Booking for my kid used to be a hassle. Now I just join the digital queue from home and leave when it's our turn. Saves me so much stress!",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?u=58",
    quote: "As someone who values time, this app is essential. No more awkward waiting room silence. I get notified, I go, I get groomed, I leave. Perfect.",
    rating: 5,
  },
  {
    id: 6,
    name: "Anjali Mehta",
    role: "Influencer",
    image: "https://i.pravatar.cc/150?u=62",
    quote: "I recommend TrimGo to everyone. It's not just about booking; it's about discovering great stylists you didn't know existed near you.",
    rating: 5,
  },
   {
    id: 7,
    name: "Rohan Das",
    role: "Medical Student",
    image: "https://i.pravatar.cc/150?u=77",
    quote: "The ETA calculation is surprisingly accurate. I can study until the last minute and just run to the shop when my number is up. Highly recommended for students.",
    rating: 5,
  },
];

// --- Sub-Components ---

// Premium Star Icon
const StarIcon = () => (
  <svg className="w-3.5 h-3.5 text-yellow-500 fill-current drop-shadow-sm" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Individual Premium Card
const TestimonialCard = ({ data }: { data: typeof testimonials[0] }) => {
  return (
    // GLASS EFFECT + GRADIENT BORDER
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200 to-transparent hover:from-green-400/50 hover:to-blue-400/50 transition-all duration-500">
      
      {/* Inner Card Content */}
      <div className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl h-full flex flex-col gap-4 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1">
        
        {/* Top Row: User & Verification */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
             <div className="relative">
                <img 
                  src={data.image} 
                  alt={data.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
                   <BadgeCheck size={10} className="text-white" />
                </div>
             </div>
             <div>
                <h4 className="font-bold text-zinc-900 text-sm leading-tight">{data.name}</h4>
                <p className="text-xs text-zinc-500 font-medium">{data.role}</p>
             </div>
          </div>
          
          {/* Subtle Quote Icon */}
          <Quote className="text-zinc-200 fill-zinc-100 transform rotate-180" size={32} />
        </div>

        {/* The Quote */}
        <p className="text-zinc-600 text-[13px] leading-relaxed font-medium relative z-10">
          "{data.quote}"
        </p>

        {/* Rating & Footer */}
        <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
           <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                 i < data.rating ? <StarIcon key={i} /> : null
              ))}
           </div>
           <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 group-hover:text-green-600 transition-colors">Verified Visit</span>
        </div>

      </div>
    </div>
  );
};

// --- Main Component ---

export default function Testimonials() {
  return (
    <section className="relative py-24 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-50/50">
      
      {/* ADVANCED BACKGROUND PATTERN */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Radial Gradient for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#C9EBFF,transparent)] opacity-20"></div>

      {/* Header Section */}
      <div className="relative text-center mb-16 px-4 z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/50 border border-green-200 text-green-700 text-[10px] font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
           <BadgeCheck size={12} /> Trusted by Jodhpur
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-6 drop-shadow-sm">
          Loved by Locals. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Trusted by Salons.</span>
        </h2>
        
        <p className="text-zinc-500 text-lg leading-relaxed font-medium">
          Join thousands of users who have stopped waiting in lines. 
          Real stories from the <span className="font-bold text-zinc-800">TrimGo community</span>.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-[1400px] mx-auto h-[700px] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 z-10">
        
        {/* Superior Gradient Overlays (Masking) */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-zinc-50 via-zinc-50/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent z-20 pointer-events-none"></div>

        {/* Column 1 - Slow & Smooth */}
        <div className="marquee-column space-y-6">
          {[...testimonials, ...testimonials].slice(0, 6).map((item, idx) => (
            <TestimonialCard key={`col1-${idx}`} data={item} />
          ))}
        </div>

        {/* Column 2 - Reverse */}
        <div className="marquee-column space-y-6 hidden md:block" style={{ animationDuration: '60s', animationDirection: 'reverse' }}>
          {[...testimonials, ...testimonials].slice(2, 8).map((item, idx) => (
            <TestimonialCard key={`col2-${idx}`} data={item} />
          ))}
        </div>

        {/* Column 3 - Different Speed */}
        <div className="marquee-column space-y-6 hidden lg:block" style={{ animationDuration: '50s' }}>
           {[...testimonials, ...testimonials].slice(4, 10).map((item, idx) => (
            <TestimonialCard key={`col3-${idx}`} data={item} />
          ))}
        </div>

      </div>

      {/* CSS Animation Injection */}
      <style>{`
        .marquee-column {
          animation: scrollUp 45s linear infinite;
        }
        /* Pause on Hover for better UX */
        .marquee-column:hover {
          animation-play-state: paused;
        }
        
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
}