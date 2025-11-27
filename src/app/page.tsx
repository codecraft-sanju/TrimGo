// // "use client"
// // import React, { useState } from 'react';
// // import { 
// //   MapPin, Clock, Users, Calendar, ArrowRight, CheckCircle, 
// //   Scissors, Star, TrendingUp, Bell, Smartphone, ShieldCheck, Menu,
// //   ChevronLeft, Building2, User, Phone, Mail, Lock, Store
// // } from 'lucide-react';



// // const BackgroundMesh = () => (
// //   <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
// //     <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[120px]" />
// //     <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-200/30 rounded-full blur-[120px]" />
// //   </div>
// // );

// // const Logo = () => (
// //   <div className="flex items-center gap-2">
// //     <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
// //       TG
// //     </div>
// //     <span className="font-bold text-zinc-900 tracking-tight">
// //      TrimGo
// //     </span>
// //   </div>
// // );



// // const UserRegistration = ({ onBack,  onLogin }) => {
// //   return (
// //     <div className="min-h-screen w-full bg-zinc-50 flex items-center justify-center p-4 relative font-sans">
// //       <BackgroundMesh />
      
// //       {/* Back Button */}
// //       <button 
// //         onClick={onBack}
// //         className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition z-20 font-medium"
// //       >
// //         <ChevronLeft size={20} /> Back to Home
// //       </button>

// //       <div className="w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 border border-zinc-100">
        
// //         {/* Left: Form */}
// //         <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
// //           <div className="mb-8">
// //             <h2 className="text-3xl font-bold text-zinc-900 mb-2">Create Account</h2>
// //             <p className="text-zinc-500">Join 10,000+ users skipping the queue today.</p>
// //           </div>

// //           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
// //             <div className="space-y-1">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Full Name</label>
// //               <div className="relative">
// //                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
// //                 <input 
// //                   type="text" 
// //                   placeholder="Sanjay Choudhary" 
// //                   className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition"
// //                 />
// //               </div>
// //             </div>

// //             <div className="space-y-1">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Mobile Number</label>
// //               <div className="relative">
// //                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
// //                 <input 
// //                   type="tel" 
// //                   placeholder="+91 98765 43210" 
// //                   className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition"
// //                 />
// //               </div>
// //             </div>

// //             <div className="space-y-1">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Password</label>
// //               <div className="relative">
// //                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
// //                 <input 
// //                   type="password" 
// //                   placeholder="••••••••" 
// //                   className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition"
// //                 />
// //               </div>
// //             </div>

// //             <button className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl mt-6 hover:bg-zinc-800 transition shadow-lg shadow-zinc-900/20">
// //               Sign Up Free
// //             </button>
// //           </form>

// //           <p className="mt-8 text-center text-sm text-zinc-500">
// //             Already have an account? <button onClick={onLogin} className="text-zinc-900 font-bold hover:underline">Log In</button>
// //           </p>
// //         </div>

// //         {/* Right: Visual */}
// //         <div className="w-full md:w-1/2 bg-zinc-900 relative p-12 flex flex-col justify-between overflow-hidden">
// //           <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20"></div>
// //           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
          
// //           <div className="relative z-10">
// //             <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
// //               <Clock className="text-white" />
// //             </div>
// //             <h3 className="text-3xl font-bold text-white mb-4">Your time is money. Stop wasting it.</h3>
// //             <p className="text-zinc-400">Book your slot, track your wait time live, and walk in exactly when the barber is ready.</p>
// //           </div>

// //           <div className="relative z-10 mt-12 bg-zinc-800/50 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
// //             <div className="flex items-center gap-3 mb-2">
// //               <div className="flex -space-x-2">
// //                  <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-800" />
// //                  <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-zinc-800" />
// //               </div>
// //               <span className="text-sm text-zinc-300">2 people ahead of you</span>
// //             </div>
// //             <div className="w-full bg-zinc-700 h-1.5 rounded-full overflow-hidden">
// //                <div className="bg-green-500 w-[60%] h-full"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- PAGE 2: SALON REGISTRATION (BUSINESS) ---

// // const SalonRegistration = ({ onBack }) => {
// //   return (
// //     <div className="min-h-screen w-full bg-zinc-50 flex items-center justify-center p-4 relative font-sans">
// //       <BackgroundMesh />
      
// //       {/* Back Button */}
// //       <button 
// //         onClick={onBack}
// //         className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition z-20 font-medium"
// //       >
// //         <ChevronLeft size={20} /> Back to Home
// //       </button>

// //       <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 border border-zinc-100">
        
// //         {/* Left: Value Prop (Dark Side) */}
// //         <div className="w-full md:w-5/12 bg-zinc-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
// //            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-center opacity-10"></div>
// //            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent"></div>

// //            <div className="relative z-10">
// //              <div className="flex items-center gap-2 mb-8">
// //                 <div className="w-8 h-8 bg-white text-zinc-900 rounded-lg flex items-center justify-center font-bold text-sm">SQ</div>
// //                 <span className="font-bold tracking-tight">For Business</span>
// //              </div>
// //              <h2 className="text-4xl font-bold mb-6">Partner with the future of grooming.</h2>
// //              <ul className="space-y-6">
// //                <li className="flex items-start gap-4">
// //                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
// //                    <TrendingUp size={16} />
// //                  </div>
// //                  <div>
// //                    <h4 className="font-bold">Increase Revenue</h4>
// //                    <p className="text-sm text-zinc-400 mt-1">Fill empty slots and reduce walk-away customers.</p>
// //                  </div>
// //                </li>
// //                <li className="flex items-start gap-4">
// //                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
// //                    <Users size={16} />
// //                  </div>
// //                  <div>
// //                    <h4 className="font-bold">Manage Staff</h4>
// //                    <p className="text-sm text-zinc-400 mt-1">Track barber performance and daily earnings.</p>
// //                  </div>
// //                </li>
// //              </ul>
// //            </div>

// //            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
// //              <p className="italic text-zinc-400 text-sm">"Since joining SalonQueue, our weekend chaos has turned into organized profit. Highly recommended."</p>
// //              <div className="mt-4 flex items-center gap-3">
// //                <div className="w-10 h-10 bg-zinc-700 rounded-full"></div>
// //                <div>
// //                  <p className="font-bold text-sm">Rajesh Kumar</p>
// //                  <p className="text-xs text-zinc-500">Owner, The Royal Cut</p>
// //                </div>
// //              </div>
// //            </div>
// //         </div>

// //         {/* Right: Registration Form */}
// //         <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
// //           <div className="mb-8">
// //             <h2 className="text-3xl font-bold text-zinc-900 mb-2">Register your Salon</h2>
// //             <p className="text-zinc-500">Get your business listed in less than 5 minutes.</p>
// //           </div>

// //           <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            
// //             <div className="space-y-1 md:col-span-2">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Salon Name</label>
// //               <div className="relative">
// //                 <Store className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
// //                 <input type="text" placeholder="e.g. Urban Cut Pro" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition" />
// //               </div>
// //             </div>

// //             <div className="space-y-1">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Owner Name</label>
// //               <div className="relative">
// //                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
// //                 <input type="text" placeholder="Your Name" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition" />
// //               </div>
// //             </div>

// //             <div className="space-y-1">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Mobile Number</label>
// //               <div className="relative">
// //                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
// //                 <input type="tel" placeholder="+91" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition" />
// //               </div>
// //             </div>

// //             <div className="space-y-1 md:col-span-2">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Salon Location (City/Area)</label>
// //               <div className="relative">
// //                 <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
// //                 <input type="text" placeholder="e.g. Koramangala, Bangalore" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 focus:border-zinc-900 transition" />
// //               </div>
// //             </div>

// //             <div className="space-y-1 md:col-span-2">
// //               <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 block">Salon Type</label>
// //               <div className="grid grid-cols-3 gap-3">
// //                 <button className="py-3 border border-zinc-200 rounded-xl text-sm font-medium hover:border-zinc-900 hover:bg-zinc-50 transition">Unisex</button>
// //                 <button className="py-3 border-2 border-zinc-900 bg-zinc-900 text-white rounded-xl text-sm font-bold shadow-lg">Men's Only</button>
// //                 <button className="py-3 border border-zinc-200 rounded-xl text-sm font-medium hover:border-zinc-900 hover:bg-zinc-50 transition">Women's Only</button>
// //               </div>
// //             </div>

// //             <div className="md:col-span-2 pt-4">
// //               <button className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl hover:bg-zinc-800 transition shadow-lg shadow-zinc-900/20 flex items-center justify-center gap-2">
// //                 Continue to Verification <ArrowRight size={18} />
// //               </button>
// //               <p className="text-center text-xs text-zinc-400 mt-4">By registering, you agree to our Partner Terms & Conditions.</p>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // // --- PAGE 3: LANDING PAGE (Your Original + Nav Logic) ---

// // const LandingPage = ({ onNavigateUser, onNavigateSalon }) => {
// //   return (
// //     <div className="min-h-screen w-full bg-zinc-50 flex flex-col font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden relative">
// //       <BackgroundMesh />

// //       {/* FLOATING NAVBAR */}
// //       <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-zinc-200/50 rounded-full px-6 py-3 flex justify-between items-center">
// //         <Logo />

// //         <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
// //           <a href="#features" className="hover:text-zinc-900 transition">Features</a>
// //           <a href="#business" className="hover:text-zinc-900 transition">For Business</a>
// //           <a href="#download" className="hover:text-zinc-900 transition">Download App</a>
// //         </div>

// //         <div className="flex gap-3">
// //           <button className="px-5 py-2 rounded-full text-zinc-600 text-sm font-medium hover:bg-zinc-100 transition">Login</button>
// //           <button className="px-5 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition shadow-lg shadow-zinc-900/20">Get Started</button>
// //         </div>
// //       </nav>

// //       {/* HERO SECTION */}
// //       <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
// //         {/* Left: Copy */}
// //         <div className="flex flex-col items-start text-left space-y-8">
// //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm text-zinc-600 text-xs font-bold">
// //             <span className="relative flex h-2 w-2">
// //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
// //               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
// //             </span>
// //             LIVE IN 500+ SALONS
// //           </div>

// //           <h1 className="text-6xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.05]">
// //             Wait Less. <br />
// //             <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-800 to-zinc-500">
// //               Live More.
// //             </span>
// //           </h1>

// //           <p className="text-xl text-zinc-500 max-w-lg leading-relaxed">
// //             The first intelligent queue management system for modern salons. Book spots, track wait times, and walk in like a VIP.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
// //             {/* USER / CUSTOMER REGISTRATION */}
// //             <button
// //               onClick={onNavigateUser}
// //               className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition hover:-translate-y-1 shadow-xl shadow-zinc-900/20"
// //             >
// //               Register as User <ArrowRight size={18} />
// //             </button>

// //             {/* SALON REGISTRATION */}
// //             <button
// //               onClick={onNavigateSalon}
// //               className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white border border-zinc-200 text-zinc-900 font-semibold hover:bg-zinc-50 transition hover:-translate-y-1"
// //             >
// //               Register Salon
// //             </button>
// //           </div>

// //           {/* Mini Trust Signal */}
// //           <div className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
// //             <div className="flex text-yellow-500">
// //               <Star size={16} fill="currentColor" />
// //               <Star size={16} fill="currentColor" />
// //               <Star size={16} fill="currentColor" />
// //               <Star size={16} fill="currentColor" />
// //               <Star size={16} fill="currentColor" />
// //             </div>
// //             <span>4.9/5 from 10k+ users</span>
// //           </div>
// //         </div>

// //         {/* Right: 3D-ish Interface */}
// //         <div className="relative group perspective-1000">
// //           <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-xl"></div>

// //           <div className="relative bg-white rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-white/50 p-6 overflow-hidden transform transition duration-700 hover:rotate-1 hover:scale-[1.01]">
// //             {/* Simulated Notch/Header */}
// //             <div className="flex justify-between items-center mb-8 px-2">
// //               <Menu size={20} className="text-zinc-400" />
// //               <span className="font-bold text-zinc-900">SalonQueue</span>
// //               <div className="w-8 h-8 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200">
// //                 <img
// //                   src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
// //                   alt="User"
// //                 />
// //               </div>
// //             </div>

// //             {/* The "Live Card" UI */}
// //             <div className="bg-zinc-900 rounded-3xl p-6 text-white shadow-2xl shadow-zinc-900/30 relative overflow-hidden mb-6">
// //               <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

// //               <div className="relative z-10">
// //                 <div className="flex justify-between items-start mb-4">
// //                   <div>
// //                     <h3 className="text-xl font-bold">Urban Cut Pro</h3>
// //                     <p className="text-zinc-400 text-sm">Booking ID: #SQ-8821</p>
// //                   </div>
// //                   <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-lg border border-green-500/30 animate-pulse">
// //                     LIVE
// //                   </div>
// //                 </div>

// //                 <div className="flex items-end gap-3 mb-4">
// //                   <span className="text-5xl font-bold tracking-tighter">
// //                     12
// //                     <span className="text-xl text-zinc-500 ml-1">min</span>
// //                   </span>
// //                   <span className="text-zinc-400 text-sm mb-2">
// //                     estimated wait
// //                   </span>
// //                 </div>

// //                 <div className="w-full bg-zinc-800 h-2 rounded-full mb-2 overflow-hidden">
// //                   <div className="bg-white h-full w-[70%] rounded-full relative">
// //                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
// //                   </div>
// //                 </div>
// //                 <p className="text-xs text-zinc-500 text-center">
// //                   Your turn is coming up next!
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="space-y-3">
// //               <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex justify-between items-center group/item hover:bg-zinc-100 transition cursor-pointer">
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-zinc-600">
// //                     <Scissors size={18} />
// //                   </div>
// //                   <div>
// //                     <h4 className="font-bold text-sm text-zinc-900">
// //                       Haircut & Beard
// //                     </h4>
// //                     <p className="text-xs text-zinc-500">
// //                       45 mins • Barber: Rahul
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <span className="font-bold text-zinc-900">₹350</span>
// //               </div>
// //             </div>

// //             <button className="w-full mt-6 py-4 bg-zinc-900 text-white rounded-2xl font-bold text-sm hover:scale-[1.02] transition shadow-lg">
// //               Check In Now
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* MARQUEE / SOCIAL PROOF */}
// //       <section className="py-10 border-y border-zinc-200 bg-white/50 backdrop-blur-sm overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-6 text-center mb-6">
// //           <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">
// //             Trusted by top salons in India
// //           </p>
// //         </div>
// //         <div className="flex gap-16 items-center justify-center opacity-40 grayscale animate-pulse">
// //           <span className="text-xl font-black">LAKMÉ</span>
// //           <span className="text-xl font-black">JAVED HABIB</span>
// //           <span className="text-xl font-black">URBAN COMPANY</span>
// //           <span className="text-xl font-black">NATURALS</span>
// //           <span className="text-xl font-black">TONI&GUY</span>
// //         </div>
// //       </section>

// //       {/* FOOTER */}
// //       <footer className="w-full py-12 px-6 bg-zinc-50 border-t border-zinc-200 mt-auto">
// //         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
// //           <div className="flex flex-col items-start gap-2">
// //             <Logo />
// //             <p className="text-xs text-zinc-500">The future of grooming.</p>
// //           </div>
// //           <p className="text-sm text-zinc-500">
// //             © {new Date().getFullYear()} Wolars Infosys Pvt Ltd.
// //           </p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };


// // // --- MAIN APP COMPONENT ---

// // export default function App() {
// //   const [currentView, setCurrentView] = useState('home'); // 'home', 'user-register', 'salon-register'

// //   return (
// //     <>
// //       {currentView === 'home' && (
// //         <LandingPage 
// //           onNavigateUser={() => setCurrentView('user-register')} 
// //           onNavigateSalon={() => setCurrentView('salon-register')} 
// //         />
// //       )}
      
// //       {currentView === 'user-register' && (
// //         <UserRegistration 
// //           onBack={() => setCurrentView('home')} 
// //           onLogin={() => alert('Login functionality coming soon!')}
// //         />
// //       )}

// //       {currentView === 'salon-register' && (
// //         <SalonRegistration 
// //           onBack={() => setCurrentView('home')} 
// //         />
// //       )}
// //     </>
// //   );
// // }






















"use client"
import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Clock, Users, Calendar, ArrowRight, CheckCircle, 
  Scissors, Star, TrendingUp, Bell, Smartphone, ShieldCheck, Menu,
  ChevronLeft, Building2, User, Phone, Mail, Lock, Store, Zap,
  BarChart3, Sparkles
} from 'lucide-react';

// --- UTILS & HOOKS ---

// Hook for scroll animations without external libraries
const useOnScreen = (options) => {
  const ref = useRef(null);
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

  return [ref, isVisible];
};

// --- VISUAL ASSETS & UI COMPONENTS ---

const BackgroundAurora = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-50">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-300/20 rounded-full blur-[120px] animate-blob" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-300/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
    <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-blue-300/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
  </div>
);

const Logo = ({ dark = false }) => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className={`w-9 h-9 ${dark ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white'} rounded-xl flex items-center justify-center font-bold text-sm shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
      TG
    </div>
    <span className={`font-bold text-lg tracking-tight ${dark ? 'text-white' : 'text-zinc-900'}`}>
      TrimGo
    </span>
  </div>
);

const ShimmerButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClass = "relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-zinc-900 text-white shadow-xl shadow-zinc-900/20 hover:shadow-2xl hover:shadow-zinc-900/30",
    secondary: "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 shadow-sm",
    ghost: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50"
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]} ${className}`}>
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      <span className="relative z-20 flex items-center justify-center gap-2 px-6 py-3.5">
        {children}
      </span>
    </button>
  );
};

// --- INTERACTIVE MOCKUP COMPONENT ---

const InteractivePhone = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[320px] h-[640px] bg-zinc-900 rounded-[3rem] p-4 shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] border-[8px] border-zinc-950 ring-1 ring-white/20 select-none transform transition hover:scale-[1.02] duration-500">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
        <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
        <div className="w-10 h-1 rounded-full bg-zinc-800"></div>
      </div>

      {/* Screen Content */}
      <div className="w-full h-full bg-zinc-950 rounded-[2.5rem] overflow-hidden relative flex flex-col">
        {/* Header */}
        <div className="pt-10 px-6 pb-4 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md">
          <div>
            <p className="text-xs text-zinc-400 font-medium">Welcome back,</p>
            <h3 className="text-white font-bold">Sanjay C.</h3>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full ring-2 ring-white/10"></div>
        </div>

        {/* Live Status Card */}
        <div className="px-4 mt-2">
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-5 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <Scissors size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Urban Cut Pro</h4>
                  <p className="text-zinc-400 text-xs">Haircut & Beard</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-lg border border-green-500/20 animate-pulse">
                LIVE
              </span>
            </div>

            <div className="flex items-end gap-2 mb-3">
              <span className="text-4xl font-bold text-white tracking-tighter">12<span className="text-sm text-zinc-500 font-normal ml-1">min</span></span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-300 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
              </div>
            </div>
            <p className="text-[10px] text-zinc-500 mt-2 text-center">2 people ahead of you</p>
          </div>
        </div>

        {/* List Items */}
        <div className="flex-1 overflow-hidden px-4 mt-6 space-y-3 relative">
           <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-zinc-950 to-transparent z-10"></div>
           {[1,2,3].map((_, i) => (
             <div key={i} className="bg-white/5 p-3 rounded-2xl flex items-center gap-3 border border-white/5 hover:bg-white/10 transition cursor-pointer">
               <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                 <Store size={18} className="text-zinc-400" />
               </div>
               <div className="flex-1">
                 <div className="h-2 w-24 bg-zinc-800 rounded mb-1"></div>
                 <div className="h-2 w-16 bg-zinc-900 rounded"></div>
               </div>
               <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center">
                 <ArrowRight size={14} className="text-zinc-600" />
               </div>
             </div>
           ))}
        </div>

        {/* Bottom Nav */}
        <div className="h-16 bg-zinc-900/80 backdrop-blur-xl border-t border-white/5 grid grid-cols-4 items-center px-2">
          {[MapPin, Calendar, Bell, User].map((Icon, i) => (
            <button key={i} onClick={() => setActiveTab(i)} className="flex flex-col items-center justify-center gap-1 h-full w-full">
              <Icon size={20} className={activeTab === i ? "text-white" : "text-zinc-600"} />
              {activeTab === i && <div className="w-1 h-1 rounded-full bg-white"></div>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SECTIONS ---

const FeatureCard = ({ icon: Icon, title, desc, delay, colSpan = "col-span-1" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`
        ${colSpan} group relative overflow-hidden p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50 
        transition-all duration-700 transform hover:shadow-2xl hover:shadow-zinc-200/80 hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
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

// --- PAGES ---

const LandingPage = ({ onNavigateUser, onNavigateSalon }) => {
  return (
    <div className="min-h-screen w-full font-sans selection:bg-zinc-900 selection:text-white overflow-x-hidden">
      <BackgroundAurora />

      {/* FLOATING NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300 hover:bg-white/80">
        <Logo />
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
          <a href="#features" className="hover:text-zinc-900 transition">Features</a>
          <a href="#business" className="hover:text-zinc-900 transition">Business</a>
          <a href="#testimonials" className="hover:text-zinc-900 transition">Stories</a>
        </div>
        <div className="flex gap-3">
          <button className="hidden sm:block px-5 py-2.5 rounded-full text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition">Log In</button>
          <button onClick={onNavigateUser} className="px-6 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-bold shadow-lg shadow-zinc-900/20 hover:scale-105 transition-transform">Get App</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
        <div className="flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-zinc-200 backdrop-blur-sm text-zinc-600 text-xs font-bold mb-8 shadow-sm animate-fade-in-up">
            <Sparkles size={14} className="text-yellow-500 fill-yellow-500" />
            <span>#1 QUEUE MANAGEMENT SYSTEM IN INDIA</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-[0.95] mb-8">
            Wait <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 font-serif italic pr-2">Less.</span><br />
            Live <span className="relative inline-block">
              More.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-zinc-500 max-w-lg leading-relaxed mb-10 font-medium">
            Stop wasting hours in salon waiting rooms. Book your spot digitally, track live wait times, and walk in like a VIP.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <ShimmerButton onClick={onNavigateUser} className="w-full sm:w-auto">
              Join the Queue
            </ShimmerButton>
            <ShimmerButton variant="secondary" onClick={onNavigateSalon} className="w-full sm:w-auto">
              Partner with Us <Building2 size={18} />
            </ShimmerButton>
          </div>

          <div className="mt-12 flex items-center gap-4 pt-8 border-t border-zinc-200/60 w-full max-w-md">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 shadow-sm" style={{backgroundImage: `url(https://i.pravatar.cc/150?img=${i+10})`, backgroundSize: 'cover'}}></div>
               ))}
            </div>
            <div>
              <div className="flex text-yellow-500 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold text-zinc-600">Trusted by 12,000+ users</p>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative z-10 flex justify-center perspective-1000">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200 to-emerald-200 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
           <InteractivePhone />
           
           {/* Floating Badge 1 */}
           <div className="absolute top-[20%] -left-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce delay-700 hidden md:block">
             <div className="flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-lg text-green-600"><Clock size={20} /></div>
               <div>
                 <p className="text-xs text-zinc-500 font-bold uppercase">Time Saved</p>
                 <p className="text-lg font-bold text-zinc-900">45 mins</p>
               </div>
             </div>
           </div>

           {/* Floating Badge 2 */}
           <div className="absolute bottom-[20%] -right-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce delay-1000 hidden md:block">
             <div className="flex items-center gap-3">
               <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><TrendingUp size={20} /></div>
               <div>
                 <p className="text-xs text-zinc-500 font-bold uppercase">Salon Revenue</p>
                 <p className="text-lg font-bold text-zinc-900">+30%</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* BENTO GRID FEATURES */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Built for the Modern Era.</h2>
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto">We didn't just digitize the queue. We reinvented the entire salon experience for both customers and businesses.</p>
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

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[3rem] relative overflow-hidden text-center p-12 md:p-24 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-purple-500/20 via-transparent to-green-500/20 animate-spin-slow"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to skip the line?</h2>
            <p className="text-zinc-400 text-xl mb-10 max-w-lg mx-auto">Join thousands of smart users saving time every single day.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={onNavigateUser} className="px-8 py-4 bg-white text-zinc-900 rounded-2xl font-bold hover:scale-105 transition-transform">Download for iOS</button>
              <button onClick={onNavigateUser} className="px-8 py-4 bg-zinc-800 text-white border border-zinc-700 rounded-2xl font-bold hover:scale-105 transition-transform">Download for Android</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-start gap-2">
            <Logo />
            <p className="text-sm text-zinc-400">© 2025 Wolars Infosys Pvt Ltd.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm font-medium">Privacy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm font-medium">Terms</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm font-medium">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const AuthLayout = ({ children, title, subtitle, onBack, illustration }) => (
  <div className="min-h-screen w-full bg-zinc-50 flex items-center justify-center p-4 relative font-sans overflow-hidden">
    <BackgroundAurora />
    
    <button onClick={onBack} className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition z-20 font-bold bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/50">
      <ChevronLeft size={20} /> Home
    </button>

    <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 border border-white/60">
      {/* Form Side */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-zinc-900 mb-3 tracking-tight">{title}</h2>
          <p className="text-zinc-500 font-medium">{subtitle}</p>
        </div>
        {children}
      </div>

      {/* Illustration Side */}
      <div className="hidden md:flex w-1/2 bg-zinc-900 relative p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        {illustration}
      </div>
    </div>
  </div>
);

const InputGroup = ({ icon: Icon, type, placeholder, label }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">{label}</label>
    <div className="relative group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" size={20} />
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-4 pl-12 pr-4 text-zinc-900 font-medium focus:outline-none focus:ring-4 focus:ring-zinc-100 focus:border-zinc-900 transition-all placeholder:text-zinc-400"
      />
    </div>
  </div>
);

const UserRegistration = ({ onBack }) => {
  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join the queue from anywhere." 
      onBack={onBack}
      illustration={
        <>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              <User className="text-white" size={32} />
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 leading-tight">Your time is<br/>too valuable<br/>to wait.</h3>
          </div>
          <div className="bg-zinc-800/50 backdrop-blur-md border border-white/10 p-6 rounded-3xl relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Booking Confirmed</p>
                <p className="text-zinc-400 text-sm">You are #3 in line</p>
              </div>
            </div>
            <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </>
      }
    >
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <InputGroup icon={User} type="text" placeholder="Sanjay Choudhary" label="Full Name" />
        <InputGroup icon={Phone} type="tel" placeholder="+91 98765 43210" label="Mobile Number" />
        <InputGroup icon={Lock} type="password" placeholder="••••••••" label="Password" />
        
        <ShimmerButton className="w-full py-4 mt-4">
          Create Free Account
        </ShimmerButton>
      </form>
    </AuthLayout>
  );
};

const SalonRegistration = ({ onBack }) => {
  return (
    <AuthLayout 
      title="Partner With Us" 
      subtitle="Transform your salon business today." 
      onBack={onBack}
      illustration={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/90 z-0"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
              <Store className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">"Since using TrimGo, our revenue increased by 30% in the first month."</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-700 rounded-full"></div>
              <div>
                <p className="text-white font-bold text-sm">Rajesh Kumar</p>
                <p className="text-zinc-500 text-xs">Owner, The Royal Cut</p>
              </div>
            </div>
          </div>
        </>
      }
    >
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="md:col-span-2">
           <InputGroup icon={Store} type="text" placeholder="Urban Cut Pro" label="Salon Name" />
        </div>
        <InputGroup icon={User} type="text" placeholder="Owner Name" label="Contact Person" />
        <InputGroup icon={Phone} type="tel" placeholder="+91" label="Mobile" />
        <div className="md:col-span-2">
           <InputGroup icon={MapPin} type="text" placeholder="City, Area" label="Location" />
        </div>
        
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Salon Type</label>
          <div className="grid grid-cols-3 gap-3">
            {['Unisex', 'Men Only', 'Women Only'].map(type => (
              <button key={type} className="py-3 border border-zinc-200 rounded-xl text-sm font-bold hover:border-zinc-900 hover:bg-zinc-50 transition focus:ring-2 ring-zinc-900 ring-offset-2">
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 pt-4">
          <ShimmerButton className="w-full py-4">
            Continue Registration <ArrowRight size={18} />
          </ShimmerButton>
        </div>
      </form>
    </AuthLayout>
  );
};

// --- MAIN APP ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <>
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
      
      {currentView === 'home' && (
        <LandingPage 
          onNavigateUser={() => setCurrentView('user-register')} 
          onNavigateSalon={() => setCurrentView('salon-register')} 
        />
      )}
      
      {currentView === 'user-register' && (
        <UserRegistration onBack={() => setCurrentView('home')} />
      )}

      {currentView === 'salon-register' && (
        <SalonRegistration onBack={() => setCurrentView('home')} />
      )}
    </>
  );
}





// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   MapPin, Clock, Users, ArrowRight, CheckCircle, 
//   Scissors, Star, TrendingUp, Bell, ShieldCheck, 
//   ChevronLeft, Building2, User, Phone, Lock, Store, Zap,
//   BarChart3, Search, Command, Sparkles, Menu, X
// } from 'lucide-react';

// // --- ADVANCED HOOKS ---

// // Hook to track mouse position for 3D tilt effects
// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const updateMousePosition = (ev) => {
//       setMousePosition({ x: ev.clientX, y: ev.clientY });
//     };
//     window.addEventListener('mousemove', updateMousePosition);
//     return () => window.removeEventListener('mousemove', updateMousePosition);
//   }, []);
//   return mousePosition;
// };

// // Hook for spotlight effects on cards
// const useSpotlight = (divRef) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [opacity, setOpacity] = useState(0);

//   const handleMouseMove = (e) => {
//     if (!divRef.current) return;
//     const div = divRef.current;
//     const rect = div.getBoundingClientRect();
//     setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//     setOpacity(1);
//   };

//   const handleMouseLeave = () => {
//     setOpacity(0);
//   };

//   return { position, opacity, handleMouseMove, handleMouseLeave };
// };

// // --- VISUAL PRIMITIVES ---

// const NoiseOverlay = () => (
//   <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay">
//     <svg className="w-full h-full">
//       <filter id="noise">
//         <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
//       </filter>
//       <rect width="100%" height="100%" filter="url(#noise)" />
//     </svg>
//   </div>
// );

// const GlowBlob = ({ className }) => (
//   <div className={`absolute rounded-full blur-[100px] opacity-40 animate-pulse-slow pointer-events-none ${className}`} />
// );

// // --- 3D TILT CARD COMPONENT ---

// const TiltCard = ({ children, className }) => {
//   const ref = useRef(null);
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     const xPct = mouseX / width - 0.5;
//     const yPct = mouseY / height - 0.5;
//     setRotate({ x: yPct * -20, y: xPct * 20 });
//   };

//   const handleMouseLeave = () => {
//     setRotate({ x: 0, y: 0 });
//   };

//   return (
//     <div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
//       }}
//       className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// // --- SPOTLIGHT CARD COMPONENT ---

// const SpotlightCard = ({ children, className = "", noHover = false }) => {
//   const divRef = useRef(null);
//   const { position, opacity, handleMouseMove, handleMouseLeave } = useSpotlight(divRef);

//   return (
//     <div
//       ref={divRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className={`relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl ${className}`}
//     >
//       <div
//         className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
//         style={{
//           opacity,
//           background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
//         }}
//       />
//       <div className="relative h-full">{children}</div>
//     </div>
//   );
// };

// // --- UI COMPONENTS ---

// const Logo = () => (
//   <div className="flex items-center gap-3 select-none">
//     <div className="relative w-8 h-8 flex items-center justify-center">
//       <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-lg blur opacity-50"></div>
//       <div className="relative w-full h-full bg-black rounded-lg border border-white/20 flex items-center justify-center text-white font-bold text-xs">
//         TG
//       </div>
//     </div>
//     <span className="font-bold text-lg tracking-tight text-white">TrimGo</span>
//   </div>
// );

// const Navbar = ({ onAuth }) => (
//   <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
//     <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//       <Logo />
//       <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
//         <a href="#" className="hover:text-white transition-colors">Product</a>
//         <a href="#" className="hover:text-white transition-colors">Solutions</a>
//         <a href="#" className="hover:text-white transition-colors">Pricing</a>
//         <a href="#" className="hover:text-white transition-colors">Company</a>
//       </div>
//       <div className="flex items-center gap-4">
//         <button onClick={() => onAuth('login')} className="text-sm font-medium text-zinc-400 hover:text-white transition">Log in</button>
//         <button 
//           onClick={() => onAuth('register')}
//           className="group relative px-4 py-2 bg-white text-black text-sm font-bold rounded-full overflow-hidden transition-transform active:scale-95"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
//           <span className="relative z-10 flex items-center gap-2">
//             Get Started <ArrowRight size={14} />
//           </span>
//         </button>
//       </div>
//     </div>
//   </nav>
// );

// // --- HERO SECTION ---

// const Hero = ({ onNavigateUser, onNavigateSalon }) => {
//   return (
//     <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
//       <GlowBlob className="top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-600/20" />
//       <GlowBlob className="bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-600/20" />

//       {/* Pill Badge */}
//       <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer">
//         <span className="flex h-2 w-2 relative">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
//         </span>
//         TrimGo v2.0 is now live
//         <ArrowRight size={12} className="text-zinc-500" />
//       </div>

//       {/* Main Heading */}
//       <h1 className="text-center text-5xl md:text-8xl font-bold tracking-tight text-white max-w-5xl z-10">
//         Queue less. <br />
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 animate-gradient-x">
//           Experience more.
//         </span>
//       </h1>

//       <p className="mt-8 text-center text-lg text-zinc-400 max-w-2xl leading-relaxed z-10">
//         The intelligent operating system for modern salons. 
//         Real-time wait tracking, AI-powered scheduling, and seamless walk-in management.
//       </p>

//       {/* Buttons */}
//       <div className="mt-10 flex flex-col sm:flex-row gap-4 z-10">
//         <button 
//           onClick={onNavigateUser}
//           className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
//         >
//           Download App
//         </button>
//         <button 
//           onClick={onNavigateSalon}
//           className="px-8 py-4 bg-black border border-zinc-800 text-white rounded-full font-bold text-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all"
//         >
//           For Business
//         </button>
//       </div>

//       {/* 3D Dashboard Mockup */}
//       <div className="mt-20 w-full max-w-5xl relative z-10 perspective-[2000px]">
//         <TiltCard className="w-full">
//           <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden">
//              {/* Mockup Header */}
//              <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
//                <div className="flex gap-2">
//                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
//                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
//                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
//                </div>
//                <div className="mx-auto w-64 h-6 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-[10px] text-zinc-500 font-mono">
//                  salonqueue.app/dashboard
//                </div>
//              </div>

//              {/* Mockup Body */}
//              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px] overflow-hidden">
//                 {/* Left Col */}
//                 <div className="space-y-4">
//                   <div className="p-4 rounded-xl border border-white/5 bg-white/5">
//                     <div className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-2">Wait Time</div>
//                     <div className="text-3xl font-bold text-white">12 <span className="text-base font-normal text-zinc-500">mins</span></div>
//                   </div>
//                   <div className="p-4 rounded-xl border border-white/5 bg-white/5">
//                     <div className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-2">Queue Depth</div>
//                     <div className="text-3xl font-bold text-white">4 <span className="text-base font-normal text-zinc-500">people</span></div>
//                   </div>
//                   <div className="p-4 rounded-xl border border-white/5 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
//                     <div className="flex items-center gap-3 mb-2">
//                       <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-xs">AI</div>
//                       <span className="text-cyan-400 text-xs font-bold">Insight</span>
//                     </div>
//                     <p className="text-zinc-400 text-xs leading-relaxed">Peak traffic expected at 5:00 PM based on historical data.</p>
//                   </div>
//                 </div>

//                 {/* Center Col - List */}
//                 <div className="md:col-span-2 rounded-xl border border-white/5 bg-black/40 overflow-hidden flex flex-col">
//                   <div className="p-4 border-b border-white/5 flex justify-between items-center">
//                     <span className="text-white font-bold text-sm">Live Queue</span>
//                     <span className="text-xs text-green-400 font-mono flex items-center gap-1">
//                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//                       LIVE UPDATES
//                     </span>
//                   </div>
//                   <div className="p-2 space-y-1">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
//                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-zinc-400 text-xs font-bold">
//                           {i}
//                         </div>
//                         <div className="flex-1">
//                           <div className="h-2 w-24 bg-zinc-800 rounded mb-1 group-hover:bg-zinc-700 transition"></div>
//                           <div className="h-2 w-16 bg-zinc-900 rounded group-hover:bg-zinc-800 transition"></div>
//                         </div>
//                         <div className="text-xs font-mono text-zinc-600 group-hover:text-white transition">
//                           1{i}:00 PM
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//              </div>
             
//              {/* Gradient Overlay for "Fade" look at bottom of dashboard */}
//              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
//           </div>
//         </TiltCard>
//       </div>
//     </section>
//   );
// };

// // --- FEATURES SECTION (Bento Grid) ---

// const Features = () => (
//   <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
//     <div className="mb-20">
//       <h2 className="text-4xl font-bold text-white mb-6">Engineered for efficiency.</h2>
//       <p className="text-zinc-400 text-lg max-w-2xl">
//         We stripped away the clutter and built a system that respects your time. 
//         Powerful features, wrapped in a beautiful interface.
//       </p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto md:h-[600px]">
      
//       {/* Large Card */}
//       <SpotlightCard className="md:col-span-6 lg:col-span-8 p-8 flex flex-col justify-between group">
//         <div>
//           <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
//             <Clock size={24} />
//           </div>
//           <h3 className="text-2xl font-bold text-white mb-2">Predictive Wait Times</h3>
//           <p className="text-zinc-400 max-w-md">Our algorithm analyzes historical service data, barber speed, and shop occupancy to predict wait times with 95% accuracy.</p>
//         </div>
//         <div className="mt-8 relative h-32 w-full overflow-hidden rounded-lg border border-white/5 bg-black/50">
//           {/* Animated Graph Line */}
//           <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none">
//              <path d="M0,100 C100,50 200,80 300,20 400,60 500,10 600,40 L600,128 L0,128 Z" fill="url(#grad1)" />
//              <defs>
//                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
//                  <stop offset="0%" style={{stopColor:'rgba(59, 130, 246, 0.5)', stopOpacity:1}} />
//                  <stop offset="100%" style={{stopColor:'rgba(59, 130, 246, 0)', stopOpacity:1}} />
//                </linearGradient>
//              </defs>
//              <path d="M0,100 C100,50 200,80 300,20 400,60 500,10 600,40" stroke="#3b82f6" strokeWidth="2" fill="none" className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
//           </svg>
//         </div>
//       </SpotlightCard>

//       {/* Tall Card */}
//       <SpotlightCard className="md:col-span-3 lg:col-span-4 p-8 flex flex-col justify-end group">
//          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
//          <div className="relative z-10">
//            <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
//              <MapPin size={24} />
//            </div>
//            <h3 className="text-xl font-bold text-white mb-2">Geo-Fenced Check-in</h3>
//            <p className="text-zinc-400 text-sm">Automatically check in when you are within 100m of the salon.</p>
//          </div>
//       </SpotlightCard>

//       {/* Small Card 1 */}
//       <SpotlightCard className="md:col-span-3 lg:col-span-4 p-8">
//         <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6">
//           <ShieldCheck size={24} />
//         </div>
//         <h3 className="text-xl font-bold text-white mb-2">Verified Reviews</h3>
//         <p className="text-zinc-400 text-sm">No bots. Only real customers.</p>
//       </SpotlightCard>

//       {/* Small Card 2 */}
//       <SpotlightCard className="md:col-span-3 lg:col-span-4 p-8">
//         <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
//           <BarChart3 size={24} />
//         </div>
//         <h3 className="text-xl font-bold text-white mb-2">Revenue Analytics</h3>
//         <p className="text-zinc-400 text-sm">Track daily earnings live.</p>
//       </SpotlightCard>

//       {/* Small Card 3 */}
//       <SpotlightCard className="md:col-span-3 lg:col-span-4 p-8 flex items-center justify-center text-center cursor-pointer hover:bg-white/5 transition">
//          <div className="group-hover:scale-110 transition-transform duration-300">
//            <div className="text-3xl font-bold text-white mb-1">10k+</div>
//            <div className="text-zinc-500 text-sm">Active Users</div>
//          </div>
//       </SpotlightCard>

//     </div>
//   </section>
// );

// // --- AUTH PAGES (Floating Glass) ---

// const AuthPage = ({ type, onBack }) => (
//   <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
//     <button 
//       onClick={onBack}
//       className="absolute top-8 left-8 text-zinc-400 hover:text-white flex items-center gap-2 transition z-50"
//     >
//       <ChevronLeft size={20} /> Back
//     </button>
    
//     {/* Background FX */}
//     <div className="absolute inset-0 bg-black">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
//       <NoiseOverlay />
//     </div>

//     <SpotlightCard className="w-full max-w-md p-8 md:p-12 relative z-10 bg-black/80">
//       <div className="text-center mb-10">
//         <Logo />
//         <h2 className="text-2xl font-bold text-white mt-8">
//           {type === 'register' ? 'Create your account' : 'Welcome back'}
//         </h2>
//         <p className="text-zinc-400 text-sm mt-2">
//           {type === 'register' ? 'Join the future of salon management.' : 'Enter your details to access your dashboard.'}
//         </p>
//       </div>

//       <div className="space-y-4">
//         {type === 'register' && (
//           <div className="group relative">
//             <User className="absolute left-4 top-3.5 text-zinc-500 transition-colors group-focus-within:text-cyan-400" size={18} />
//             <input 
//               type="text" 
//               placeholder="Full Name" 
//               className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
//             />
//           </div>
//         )}
        
//         <div className="group relative">
//           <Phone className="absolute left-4 top-3.5 text-zinc-500 transition-colors group-focus-within:text-cyan-400" size={18} />
//           <input 
//             type="tel" 
//             placeholder="Mobile Number" 
//             className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
//           />
//         </div>

//         <div className="group relative">
//           <Lock className="absolute left-4 top-3.5 text-zinc-500 transition-colors group-focus-within:text-cyan-400" size={18} />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             className="w-full bg-zinc-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
//           />
//         </div>

//         <button className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-zinc-200 transition active:scale-95 mt-4">
//           {type === 'register' ? 'Sign Up' : 'Sign In'}
//         </button>
//       </div>

//       <div className="mt-8 text-center text-xs text-zinc-500">
//         By continuing, you agree to our Terms of Service and Privacy Policy.
//       </div>
//     </SpotlightCard>
//   </div>
// );

// // --- SALON REGISTRATION (Advanced Form) ---

// const SalonRegistration = ({ onBack }) => (
//   <div className="min-h-screen w-full flex p-6 relative overflow-hidden bg-black font-sans">
//     <NoiseOverlay />
//     <button onClick={onBack} className="absolute top-8 left-8 text-zinc-400 z-50 hover:text-white flex items-center gap-2 transition"><ChevronLeft size={20} /> Back</button>

//     <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      
//       <div className="order-2 lg:order-1">
//         <h1 className="text-5xl font-bold text-white mb-6">Scale your business <br/> with intelligence.</h1>
//         <ul className="space-y-6">
//            <li className="flex items-start gap-4">
//              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mt-1"><TrendingUp size={16} /></div>
//              <div>
//                <h4 className="text-white font-bold">Increase Revenue</h4>
//                <p className="text-zinc-400 text-sm">Fill empty slots dynamically.</p>
//              </div>
//            </li>
//            <li className="flex items-start gap-4">
//              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mt-1"><Users size={16} /></div>
//              <div>
//                <h4 className="text-white font-bold">Customer Retention</h4>
//                <p className="text-zinc-400 text-sm">Automated loyalty tracking.</p>
//              </div>
//            </li>
//         </ul>
//       </div>

//       <SpotlightCard className="order-1 lg:order-2 p-8 lg:p-12">
//         <h2 className="text-2xl font-bold text-white mb-6">Partner Registration</h2>
//         <div className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <input type="text" placeholder="Salon Name" className="bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
//             <input type="text" placeholder="Owner Name" className="bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
//           </div>
//           <input type="tel" placeholder="Mobile (+91)" className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
//           <input type="text" placeholder="City / Area" className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
          
//           <div className="pt-4">
//             <label className="text-xs text-zinc-500 uppercase font-bold tracking-wider mb-2 block">Salon Type</label>
//             <div className="grid grid-cols-3 gap-3">
//               <button className="p-3 rounded-lg border border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white transition text-sm">Unisex</button>
//               <button className="p-3 rounded-lg bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-900/20">Men</button>
//               <button className="p-3 rounded-lg border border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white transition text-sm">Women</button>
//             </div>
//           </div>

//           <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform">
//             Verify & Continue
//           </button>
//         </div>
//       </SpotlightCard>

//     </div>
//   </div>
// );

// // --- MAIN CONTROLLER ---

// export default function App() {
//   const [view, setView] = useState('home');

//   return (
//     <div className="bg-black min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
//       <NoiseOverlay />
      
//       {view === 'home' && (
//         <>
//           <Navbar onAuth={(type) => setView(type)} />
//           <Hero 
//             onNavigateUser={() => setView('register')} 
//             onNavigateSalon={() => setView('salon-register')}
//           />
//           <Features />
          
//           {/* Footer */}
//           <footer className="border-t border-white/10 py-12 text-center text-zinc-600 text-sm relative z-10 bg-black">
//             <p>© 2025 Wolars Infosys Pvt Ltd. All rights reserved.</p>
//           </footer>
//         </>
//       )}

//       {(view === 'login' || view === 'register') && (
//         <AuthPage type={view} onBack={() => setView('home')} />
//       )}

//       {view === 'salon-register' && (
//         <SalonRegistration onBack={() => setView('home')} />
//       )}
//     </div>
//   );
// }