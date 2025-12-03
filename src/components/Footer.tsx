"use client";
import React from "react";
import { Heart, Globe, Mail } from "lucide-react";

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

interface FooterProps {
  onNavigateAdmin: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateAdmin }) => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Logo />
          <p className="mt-6 text-zinc-500 max-w-sm leading-relaxed">
            Wolars Infosys Pvt Ltd. is dedicated to solving everyday
            inefficiencies with elegant software. TrimGo is our flagship product
            for the grooming industry.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition cursor-pointer">
              <Globe size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition cursor-pointer">
              <Mail size={18} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-zinc-900 mb-6">Product</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-medium">
            <li className="hover:text-zinc-900 cursor-pointer">For Users</li>
            <li className="hover:text-zinc-900 cursor-pointer">For Salons</li>
            <li className="hover:text-zinc-900 cursor-pointer">Pricing</li>
            <li className="hover:text-zinc-900 cursor-pointer">Download</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-zinc-900 mb-6">Company</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-medium">
            <li className="hover:text-zinc-900 cursor-pointer">About Wolars</li>
            <li className="hover:text-zinc-900 cursor-pointer">Careers</li>
            <li className="hover:text-zinc-900 cursor-pointer">Contact</li>
            <li className="hover:text-zinc-900 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
        <p>© 2025 Wolars Infosys Private Limited. All rights reserved.</p>
        <div className="flex flex-col items-end">
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400 fill-red-400" />{" "}
            in India
          </p>
          <button
            onClick={onNavigateAdmin}
            className="mt-2 text-[10px] uppercase font-bold text-zinc-300 hover:text-zinc-900 transition"
          >
            Founder Login
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;