"use client";
import React, { useState, useEffect } from "react";
import {
  ShieldCheck, User, Lock, LayoutDashboard, Store, Users, CreditCard,
  LogOut, Globe2, Bell, DollarSign, Activity, Clock, Download, Zap,
  CheckCircle, AlertTriangle, Star, Ban, Settings, Search
} from "lucide-react";
import { Salon } from "./SalonRegistration"; 

// --- INTERFACES (Moved here) ---

export interface UserData {
  id: number;
  name: string;
  email: string;
  joined: string;
  status: "Active" | "Inactive";
}

interface AdminLoginProps {
  onBack: () => void;
  onLogin: () => void;
}

interface AdminDashboardProps {
  salons: Salon[];
  setSalons: React.Dispatch<React.SetStateAction<Salon[]>>;
  users: UserData[];
  onLogout: () => void;
}

// --- ADMIN LOGIN COMPONENT ---

export const AdminLogin: React.FC<AdminLoginProps> = ({ onBack, onLogin }) => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(creds.username === "admin" && creds.password === "admin123") {
      onLogin();
    } else {
      alert("Invalid Founder Credentials");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Matrix/Tech background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      <div className="relative z-10 w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-black text-white">Founder Access</h2>
          <p className="text-zinc-500 text-sm mt-1">Wolars Infosys Private Limited</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-black/40 border border-zinc-800 rounded-xl p-1 flex items-center">
            <User className="text-zinc-500 ml-3" size={18} />
            <input 
              type="text" 
              placeholder="Username" 
              className="bg-transparent w-full p-3 text-white outline-none placeholder:text-zinc-600"
              value={creds.username}
              onChange={(e) => setCreds({...creds, username: e.target.value})}
            />
          </div>
          <div className="bg-black/40 border border-zinc-800 rounded-xl p-1 flex items-center">
            <Lock className="text-zinc-500 ml-3" size={18} />
            <input 
              type="password" 
              placeholder="Password" 
              className="bg-transparent w-full p-3 text-white outline-none placeholder:text-zinc-600"
              value={creds.password}
              onChange={(e) => setCreds({...creds, password: e.target.value})}
            />
          </div>
          <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition mt-4">
            Enter God Mode
          </button>
        </form>
        
        <button onClick={onBack} className="w-full text-zinc-500 text-xs mt-6 hover:text-white transition">
          Return to Platform
        </button>
      </div>
    </div>
  );
};

// --- ADMIN DASHBOARD COMPONENT ---

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ salons, setSalons, users, onLogout }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "salons" | "users" | "financials">("overview");
  const [liveUsers, setLiveUsers] = useState(124); // Simulated Live Users
  const [searchQuery, setSearchQuery] = useState("");

  // Simulated Real-time Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Stats Calculations
  const totalRevenue = salons.reduce((acc, curr) => acc + (curr.revenue || 0), 0);
  const totalWaitTime = salons.reduce((acc, curr) => acc + curr.waiting, 0);
  const avgWaitTime = salons.length ? Math.round((totalWaitTime * 15) / salons.length) : 0;
  
  // Handlers
  const toggleVerify = (id: number) => {
    setSalons(prev => prev.map(s => s.id === id ? { ...s, verified: !s.verified } : s));
  };

  const deleteSalon = (id: number) => {
    if(window.confirm("CONFIRM BAN: This will remove the salon and all its data immediately.")) {
      setSalons(prev => prev.filter(s => s.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500 selection:text-white flex overflow-hidden">
      
      {/* 1. SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-900/30 flex flex-col backdrop-blur-xl z-20">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white mr-3 shadow-[0_0_15px_rgba(79,70,229,0.4)]">W</div>
          <span className="font-bold text-lg tracking-tight">Wolars<span className="text-zinc-500">OS</span></span>
        </div>

        <div className="p-4 space-y-1">
          <p className="px-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Main Menu</p>
          {[
            { id: "overview", icon: LayoutDashboard, label: "Command Center" },
            { id: "salons", icon: Store, label: "Partner Management" },
            { id: "users", icon: Users, label: "User Base" },
            { id: "financials", icon: CreditCard, label: "Financials" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === item.id 
                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-600/20" 
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-auto p-4 border-t border-zinc-800">
          <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold text-zinc-400">SYSTEM STATUS</span>
            </div>
            <div className="flex justify-between text-xs text-zinc-500 mb-1">
              <span>Database</span>
              <span className="text-green-400">Healthy</span>
            </div>
            <div className="flex justify-between text-xs text-zinc-500">
              <span>Latency</span>
              <span className="text-green-400">24ms</span>
            </div>
          </div>
          <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold hover:bg-red-500/20 transition">
            <LogOut size={16} /> Exit Founder Mode
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        
        {/* Header */}
        <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-zinc-900/30 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-xl font-bold flex items-center gap-2">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            {activeTab === 'overview' && <span className="text-xs font-normal text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-700">Live Updates</span>}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold">
              <Globe2 size={14} /> Global: Jodhpur
            </div>
            <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700 text-zinc-400 hover:text-white cursor-pointer">
              <Bell size={16} />
            </div>
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
          
          {/* ---------------- OVERVIEW VIEW ---------------- */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-[slideUp_0.4s_ease-out]">
              
              {/* Top Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: "Total Revenue", val: `₹${totalRevenue.toLocaleString()}`, change: "+12.5%", icon: DollarSign, color: "text-green-400" },
                  { label: "Active Salons", val: salons.length, change: "+2 this week", icon: Store, color: "text-purple-400" },
                  { label: "Live Traffic", val: liveUsers, change: "Current Users", icon: Activity, color: "text-indigo-400", live: true },
                  { label: "Avg Wait Time", val: `${avgWaitTime} min`, change: "-2.4% faster", icon: Clock, color: "text-blue-400" },
                ].map((stat, i) => (
                  <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group hover:border-zinc-700 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl bg-zinc-800/50 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon size={24} />
                      </div>
                      {stat.live && <span className="flex h-3 w-3 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span></span>}
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1 tracking-tight">{stat.val}</h3>
                    <p className="text-xs font-medium text-zinc-500">{stat.label}</p>
                    <span className="absolute bottom-6 right-6 text-xs font-bold text-zinc-600 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">{stat.change}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Main Graph (Simulated with CSS) */}
                <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="font-bold text-lg text-white">Revenue Growth</h3>
                      <p className="text-zinc-500 text-xs">Simulated data for demonstration</p>
                    </div>
                    <button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition"><Download size={18}/></button>
                  </div>
                  
                  <div className="h-64 flex items-end justify-between gap-2">
                    {[35, 45, 30, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                      <div key={i} className="w-full bg-zinc-800/50 rounded-t-lg relative group hover:bg-indigo-600/50 transition-all duration-300" style={{ height: `${h}%` }}>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black font-bold text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          ₹{h * 100}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Axis Label */}
                  <div className="flex justify-between mt-4 text-xs font-mono text-zinc-600 uppercase">
                    <span>01 Nov</span>
                    <span>15 Nov</span>
                    <span>30 Nov</span>
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 flex flex-col">
                  <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                    <Zap size={18} className="text-yellow-400" /> Live Activity
                  </h3>
                  <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {[
                      { user: "Suresh R.", action: "joined queue at", target: "Urban Cut Pro", time: "2s ago" },
                      { user: "New Salon", action: "registered", target: "Style Studio", time: "45s ago", type: "alert" },
                      { user: "Amit V.", action: "completed payment", target: "₹350.00", time: "2m ago", type: "success" },
                      { user: "Rahul S.", action: "left queue at", target: "Fade & Blade", time: "5m ago", type: "error" },
                      { user: "Admin", action: "verified", target: "Royal Cut", time: "12m ago" },
                    ].map((log, i) => (
                      <div key={i} className="flex gap-3 relative pl-4 border-l border-zinc-800">
                        <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${log.type === 'alert' ? 'bg-yellow-500' : log.type === 'success' ? 'bg-green-500' : log.type === 'error' ? 'bg-red-500' : 'bg-indigo-500'}`}></div>
                        <div>
                          <p className="text-sm text-zinc-300 leading-snug">
                            <span className="font-bold text-white">{log.user}</span> {log.action} <span className="text-zinc-100 font-medium">{log.target}</span>
                          </p>
                          <p className="text-[10px] text-zinc-600 font-mono mt-1">{log.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- SALONS VIEW (Advanced CRM) ---------------- */}
          {activeTab === "salons" && (
            <div className="animate-[slideUp_0.4s_ease-out]">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-black text-white">Partner Management</h2>
                  <p className="text-zinc-500 text-sm">Manage verification, bans, and payouts.</p>
                </div>
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16}/>
                    <input 
                      type="text" 
                      placeholder="Search salons..." 
                      className="bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:border-indigo-500 outline-none w-64"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-200 transition flex items-center gap-2">
                    <Download size={16}/> Export CSV
                  </button>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden">
                <table className="w-full text-left text-sm text-zinc-400">
                  <thead className="bg-zinc-900 text-zinc-500 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Salon Details</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Stats</th>
                      <th className="px-6 py-4">Revenue</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/50">
                    {salons.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase())).map(salon => (
                      <tr key={salon.id} className="hover:bg-white/[0.02] transition">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center font-bold text-white text-xs border border-zinc-700">
                              {salon.name.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-bold text-white text-sm">{salon.name}</p>
                              <p className="text-xs text-zinc-500">{salon.area}, {salon.city}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {salon.verified ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold">
                              <CheckCircle size={12}/> Verified
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-bold">
                              <AlertTriangle size={12}/> Pending
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-white font-medium flex items-center gap-1"><Star size={12} className="text-yellow-500 fill-yellow-500"/> {salon.rating}</span>
                            <span className="text-xs text-zinc-600">{salon.reviews} reviews</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-white font-mono">₹{salon.revenue?.toLocaleString() ?? 0}</p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => toggleVerify(salon.id)} className={`p-2 rounded-lg border transition ${salon.verified ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20' : 'bg-green-500/10 border-green-500/20 text-green-500 hover:bg-green-500/20'}`}>
                              {salon.verified ? "Revoke" : "Verify"}
                            </button>
                            <button onClick={() => deleteSalon(salon.id)} className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/20 border border-transparent transition">
                              <Ban size={16}/>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ---------------- USERS & FINANCIALS PLACEHOLDERS ---------------- */}
          {(activeTab === "users" || activeTab === "financials") && (
             <div className="flex flex-col items-center justify-center h-full text-zinc-500 animate-[slideUp_0.4s_ease-out]">
                <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
                   <Settings size={40} className="animate-spin-slow"/>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Module Under Construction</h3>
                <p className="max-w-md text-center">You are in Founder Mode. This module is being connected to the Supabase backend for real-time analytics.</p>
             </div>
          )}

        </div>
      </main>
    </div>
  );
};