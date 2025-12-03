"use client";
import React from "react";

// Local Logo Component for Navbar
const Logo: React.FC<{ dark?: boolean }> = ({ dark = false }) => (
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

interface NavbarProps {
  onNavigateUser: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateUser }) => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300 hover:bg-white/90">
      <Logo />
      <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
        <a href="#features" className="hover:text-zinc-900 transition">
          Features
        </a>
        <a href="#business" className="hover:text-zinc-900 transition">
          Business
        </a>
        <a href="#advanced" className="hover:text-zinc-900 transition">
          Dashboard
        </a>
        <a href="#testimonials" className="hover:text-zinc-900 transition">
          Stories
        </a>
      </div>
      <div className="flex gap-3">
        <button className="hidden sm:block px-5 py-2.5 rounded-full text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition">
          Log In
        </button>
        <button
          onClick={onNavigateUser}
          className="px-6 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-bold shadow-lg shadow-zinc-900/20 hover:scale-105 transition-transform"
        >
          Get App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;