"use client";
import React from "react";
import { Scissors } from "lucide-react";
// Make sure this path is correct based on your folder structure
import { Salon } from "./SalonRegistration"; 

interface MapSalonProps {
  salons: Salon[];
  onSelect: (salon: Salon) => void;
}

const MapSalon: React.FC<MapSalonProps> = ({ salons, onSelect }) => {
  return (
    <div className="w-full h-[400px] bg-zinc-900 rounded-3xl overflow-hidden relative border border-zinc-800 shadow-2xl group">
      {/* Map Grid Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Radar Scan Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 w-[200%] animate-[scan_4s_linear_infinite] pointer-events-none"></div>

      {/* User Location */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/30 rounded-full animate-ping"></div>
      </div>

      {/* Salon Pins - Simulated Positions */}
      {salons.map((salon, i) => {
        // Random positions for demo
        const top = 50 + (Math.cos(i) * 30); 
        const left = 50 + (Math.sin(i) * 35);
        
        return (
          <button
            key={salon.id}
            onClick={() => onSelect(salon)}
            className="absolute group/pin -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 z-20"
            style={{ top: `${top}%`, left: `${left}%` }}
          >
            <div className="relative">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg backdrop-blur-md border border-white/20 transition-colors ${salon.waiting < 3 ? 'bg-emerald-500' : 'bg-zinc-800'}`}>
                <Scissors size={18} />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-white text-zinc-900 rounded-full text-[10px] font-bold flex items-center justify-center border border-zinc-200">
                {salon.eta}
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-40 bg-white/90 backdrop-blur rounded-xl p-3 shadow-xl opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none">
                <h4 className="font-bold text-zinc-900 text-xs">{salon.name}</h4>
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                  <span>{salon.waiting} waiting</span>
                  <span className="text-emerald-600 font-bold">₹{salon.price}</span>
                </div>
              </div>
            </div>
          </button>
        );
      })}

      <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur px-3 py-1 rounded-full border border-white/10 text-[10px] text-zinc-400">
        Live Traffic Layer • Active
      </div>
    </div>
  );
};

export default MapSalon;