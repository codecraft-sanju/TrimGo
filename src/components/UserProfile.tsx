"use client";
import React, { useState } from "react";
import {
  User, MapPin, Calendar, CreditCard, Settings, LogOut, Camera,
  Edit3, Star, Clock, ChevronRight, Shield, Bell, Smartphone,
  History, Wallet, Zap, Crown, Grid, CheckCircle, X
} from "lucide-react";

// --- TYPES ---
interface Booking {
  id: number;
  salon: string;
  service: string;
  date: string;
  price: number;
  status: "Completed" | "Cancelled" | "Upcoming";
  rating?: number;
}

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    phone: string;
    location: string;
    joinDate: string;
    avatar?: string;
  };
  onBack: () => void;
  onLogout: () => void;
}

// --- MOCK DATA ---
const MOCK_BOOKINGS: Booking[] = [
  { id: 1, salon: "Urban Cut Pro", service: "Haircut & Beard", date: "2 Dec, 2025", price: 350, status: "Completed", rating: 5 },
  { id: 2, salon: "The Royal Cut", service: "Head Massage", date: "28 Nov, 2025", price: 200, status: "Completed", rating: 4 },
  { id: 3, salon: "Fade & Blade", service: "Hair Spa", date: "15 Nov, 2025", price: 800, status: "Cancelled" },
];

const SAVED_CARDS = [
  { id: 1, type: "Visa", last4: "4242", expiry: "12/28", holder: "Sanjay Choudhary", color: "from-zinc-900 to-zinc-800" },
  { id: 2, type: "Mastercard", last4: "8899", expiry: "09/26", holder: "Sanjay Choudhary", color: "from-indigo-600 to-purple-600" },
];

// --- VISUAL ASSETS (Local for Profile) ---
const BackgroundAurora = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-50">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-300/30 rounded-full blur-[120px] animate-blob" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-300/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
  </div>
);

// --- SUB-COMPONENTS ---

const StatCard = ({ icon: Icon, label, value, color, bg }: any) => (
  <div className="bg-white/60 border border-white/40 shadow-sm p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition group backdrop-blur-sm">
    <div className={`w-12 h-12 rounded-xl ${bg} ${color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
      <Icon size={20} />
    </div>
    <div>
      <p className="text-zinc-400 text-xs uppercase font-bold tracking-wider">{label}</p>
      <p className="text-xl font-bold text-zinc-900">{value}</p>
    </div>
  </div>
);

const SectionTitle = ({ title, sub }: { title: string, sub: string }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
    <p className="text-zinc-500 text-sm">{sub}</p>
  </div>
);

// --- MAIN COMPONENT ---

export const UserProfile: React.FC<UserProfileProps> = ({ user, onBack, onLogout }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "bookings" | "wallet" | "settings">("overview");

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-12 relative overflow-x-hidden selection:bg-zinc-900 selection:text-white">
      <BackgroundAurora />

      {/* --- HEADER NAVIGATION --- */}
      <div className="relative z-10 px-6 py-6 flex items-center justify-between max-w-5xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition px-4 py-2 rounded-full bg-white/50 border border-zinc-200 hover:bg-white shadow-sm backdrop-blur-md">
          <ChevronRight size={18} className="rotate-180"/> Back
        </button>
        <div className="text-sm font-bold text-zinc-400 tracking-widest uppercase">Profile</div>
        <button onClick={onLogout} className="p-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 border border-red-200 transition">
          <LogOut size={18} />
        </button>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-4">
        
        {/* --- HERO PROFILE CARD --- */}
        <div className="relative rounded-[2.5rem] bg-white/80 border border-white/60 shadow-xl shadow-zinc-200/50 overflow-hidden backdrop-blur-xl">
          {/* Cover Photo Gradient */}
          <div className="h-48 w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 relative">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
             <button className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition backdrop-blur-md">
               <Camera size={18} />
             </button>
          </div>

          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 gap-6">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-[2rem] p-1.5 bg-white shadow-2xl">
                   <div className="w-full h-full rounded-[1.7rem] bg-zinc-100 flex items-center justify-center text-4xl font-bold text-zinc-900 relative overflow-hidden border border-zinc-200">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-zinc-400">{user.name.charAt(0)}</span>
                      )}
                   </div>
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg hover:scale-110 transition">
                  <Edit3 size={14} />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1 mb-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-black text-zinc-900 tracking-tight">{user.name}</h1>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 text-yellow-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Crown size={12} className="fill-yellow-700"/> Pro Member
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-zinc-500 font-medium">
                  <span className="flex items-center gap-1"><MapPin size={14}/> {user.location}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                  <span className="flex items-center gap-1"><Calendar size={14}/> Joined {user.joinDate}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                  <span className="flex items-center gap-1 text-emerald-600"><CheckCircle size={14}/> KYC Verified</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                <button className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-zinc-900 text-white font-bold text-sm hover:scale-105 transition shadow-lg shadow-zinc-900/20">
                  Edit Profile
                </button>
                <button className="px-4 py-3 rounded-xl bg-white text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition border border-zinc-200 shadow-sm">
                  <Settings size={20} />
                </button>
              </div>
            </div>

            {/* --- QUICK STATS ROW --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-zinc-100">
               <div className="text-center md:text-left">
                 <p className="text-2xl font-black text-zinc-900">12</p>
                 <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Bookings</p>
               </div>
               <div className="text-center md:text-left">
                 <p className="text-2xl font-black text-zinc-900">4.8</p>
                 <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider flex items-center justify-center md:justify-start gap-1"><Star size={12} className="text-yellow-400 fill-yellow-400"/> Avg Rating</p>
               </div>
               <div className="text-center md:text-left">
                 <p className="text-2xl font-black text-emerald-500">45m</p>
                 <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Time Saved</p>
               </div>
               <div className="text-center md:text-left">
                 <p className="text-2xl font-black text-zinc-900">₹4.2k</p>
                 <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Total Spent</p>
               </div>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          
          {/* LEFT: TABS NAVIGATION */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {[
                { id: "overview", icon: Grid, label: "Overview" },
                { id: "bookings", icon: History, label: "Booking History" },
                { id: "wallet", icon: Wallet, label: "Wallet & Cards" },
                { id: "settings", icon: Settings, label: "Settings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-zinc-900 text-white shadow-xl shadow-zinc-900/20 scale-105"
                      : "bg-white/50 text-zinc-500 hover:bg-white hover:text-zinc-900 hover:shadow-md"
                  }`}
                >
                  <tab.icon size={18} className={activeTab === tab.id ? "text-zinc-300" : "text-zinc-400"} />
                  {tab.label}
                </button>
              ))}
              
              <div className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white relative overflow-hidden group cursor-pointer shadow-xl shadow-indigo-500/20">
                 <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform"><Zap size={60}/></div>
                 <h4 className="font-bold text-lg mb-1">Upgrade to Pro</h4>
                 <p className="text-xs text-indigo-100 mb-4 opacity-90">Get priority queueing & 0% convenience fees.</p>
                 <button className="px-4 py-2 rounded-xl bg-white text-indigo-600 text-xs font-bold w-full hover:bg-indigo-50 transition">View Plans</button>
              </div>
            </div>
          </div>

          {/* RIGHT: DYNAMIC CONTENT */}
          <div className="lg:col-span-3 min-h-[500px]">
            
            {/* TAB: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <StatCard 
                    icon={Zap} 
                    label="Current Status" 
                    value="Active" 
                    bg="bg-emerald-100"
                    color="text-emerald-600" 
                  />
                  <StatCard 
                    icon={Wallet} 
                    label="Wallet Balance" 
                    value="₹450.00" 
                    bg="bg-blue-100"
                    color="text-blue-600" 
                  />
                </div>

                <div className="bg-white border border-zinc-200 shadow-xl shadow-zinc-200/40 rounded-3xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-zinc-900">Recent Activity</h3>
                    <button className="text-xs text-zinc-500 font-bold hover:text-zinc-900 hover:underline">View All</button>
                  </div>
                  <div className="space-y-4">
                    {MOCK_BOOKINGS.slice(0, 2).map((booking) => (
                      <div key={booking.id} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition border border-zinc-100 cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center font-bold text-zinc-600 shadow-sm">
                          {booking.salon.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-zinc-900">{booking.salon}</h4>
                          <p className="text-xs text-zinc-500 font-medium">{booking.service} • {booking.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-zinc-900">₹{booking.price}</p>
                          <span className="text-[10px] text-emerald-600 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">{booking.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: BOOKINGS */}
            {activeTab === "bookings" && (
              <div className="space-y-6">
                <SectionTitle title="Booking History" sub="Manage your past and upcoming appointments." />
                
                <div className="space-y-4">
                  {MOCK_BOOKINGS.map((booking) => (
                    <div key={booking.id} className="flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-3xl bg-white border border-zinc-200 shadow-lg shadow-zinc-200/30 hover:shadow-xl transition group">
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${booking.status === 'Cancelled' ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-zinc-100 text-zinc-900 border border-zinc-200'}`}>
                            {booking.status === 'Cancelled' ? <X size={24}/> : <CheckCircle size={24}/>}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-zinc-900 group-hover:text-indigo-600 transition-colors">{booking.salon}</h4>
                            <p className="text-sm text-zinc-500 font-medium">{booking.service}</p>
                            <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1 font-medium"><Clock size={12}/> {booking.date}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t md:border-t-0 border-zinc-100 pt-4 md:pt-0">
                           <div className="text-right">
                              <p className="text-xl font-bold text-zinc-900">₹{booking.price}</p>
                              {booking.rating && (
                                <div className="flex text-yellow-400 text-xs gap-0.5 justify-end">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill={i < booking.rating! ? "currentColor" : "none"} className={i >= booking.rating! ? "text-yellow-400" : "text-zinc-200"}/>
                                  ))}
                                </div>
                              )}
                           </div>
                           <button className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 transition border border-zinc-100">
                             <ChevronRight size={20} />
                           </button>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: WALLET */}
            {activeTab === "wallet" && (
              <div className="space-y-8">
                 <SectionTitle title="Wallet & Payment Methods" sub="Manage your saved cards and TrimGo wallet." />

                 <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
                    {/* Add Card Button */}
                    <button className="min-w-[280px] h-[180px] rounded-3xl border-2 border-dashed border-zinc-300 flex flex-col items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 transition group bg-white">
                       <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                         <CreditCard size={20} />
                       </div>
                       <span className="text-sm font-bold">Add New Card</span>
                    </button>

                    {/* Saved Cards */}
                    {SAVED_CARDS.map((card) => (
                      <div key={card.id} className={`min-w-[320px] h-[180px] rounded-3xl bg-gradient-to-br ${card.color} p-6 relative overflow-hidden shadow-xl shadow-zinc-300 flex flex-col justify-between transform transition hover:-translate-y-2 text-white`}>
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                         
                         <div className="flex justify-between items-start">
                            <span className="font-mono text-white/70 text-xs">CREDIT</span>
                            <span className="font-bold text-white italic text-lg">{card.type}</span>
                         </div>

                         <div className="space-y-4 relative z-10">
                            <p className="text-2xl font-mono text-white tracking-widest shadow-sm">•••• •••• •••• {card.last4}</p>
                            <div className="flex justify-between items-end">
                               <div>
                                  <p className="text-[10px] text-white/70 uppercase">Card Holder</p>
                                  <p className="text-sm font-bold text-white uppercase">{card.holder}</p>
                               </div>
                               <div>
                                  <p className="text-[10px] text-white/70 uppercase">Expires</p>
                                  <p className="text-sm font-bold text-white">{card.expiry}</p>
                               </div>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* Transaction History Placeholder */}
                 <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
                    <h4 className="font-bold text-zinc-900 mb-4">Transaction History</h4>
                    <div className="text-center py-12 text-zinc-400 text-sm">
                       <History size={32} className="mx-auto mb-2 opacity-50"/>
                       No recent wallet transactions.
                    </div>
                 </div>
              </div>
            )}

            {/* TAB: SETTINGS */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                 <SectionTitle title="Account Settings" sub="Control your profile configuration and preferences." />

                 <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden divide-y divide-zinc-100 shadow-sm">
                    {[
                      { icon: User, label: "Personal Information", sub: "Update your name and phone number" },
                      { icon: Shield, label: "Login & Security", sub: "Password, 2FA" },
                      { icon: Bell, label: "Notifications", sub: "Email, Push, SMS" },
                      { icon: Smartphone, label: "App Preferences", sub: "Dark mode, Language" },
                    ].map((item, i) => (
                      <div key={i} className="p-5 flex items-center gap-4 hover:bg-zinc-50 cursor-pointer transition group">
                         <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-900 transition">
                           <item.icon size={18} />
                         </div>
                         <div className="flex-1">
                           <h4 className="text-zinc-900 font-bold text-sm">{item.label}</h4>
                           <p className="text-zinc-500 text-xs">{item.sub}</p>
                         </div>
                         <ChevronRight size={16} className="text-zinc-400 group-hover:text-zinc-900" />
                      </div>
                    ))}
                 </div>

                 <div className="bg-red-50 border border-red-100 rounded-3xl p-6 mt-8">
                    <h4 className="text-red-600 font-bold mb-2">Danger Zone</h4>
                    <p className="text-red-400 text-xs mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="px-4 py-2 bg-white text-red-600 text-xs font-bold rounded-lg border border-red-200 hover:bg-red-600 hover:text-white transition shadow-sm">Delete Account</button>
                 </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};