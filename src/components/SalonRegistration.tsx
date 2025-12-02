"use client";

import React, { useState } from "react";
import { Store, User, Phone, MapPin, ArrowRight, ChevronLeft } from "lucide-react";

// ----------------------------------------------------------------------
// TYPES
// ----------------------------------------------------------------------

export interface Salon {
  id: number;
  name: string;
  area: string;
  city: string;
  distance: string;
  waiting: number;
  eta: number;
  rating: number;
  reviews: number;
  tag: string;
  price: string;
  type: string;
  verified: boolean;
  revenue: number;
}

interface SalonRegistrationProps {
  onBack: () => void;
  onRegister?: (salon: Salon) => void;
}

// ----------------------------------------------------------------------
// UI HELPER COMPONENTS (Internal)
// ----------------------------------------------------------------------

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

interface ShimmerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed bg-zinc-900 text-white shadow-xl shadow-zinc-900/20 hover:shadow-2xl hover:shadow-zinc-900/30 ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      <span className="relative z-20 flex items-center justify-center gap-2 px-6 py-3.5">
        {children}
      </span>
    </button>
  );
};

interface InputGroupProps {
  icon: React.ElementType;
  type: string;
  placeholder: string;
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  icon: Icon,
  type,
  placeholder,
  label,
  name,
  value,
  onChange,
}) => (
  <div className="space-y-1.5">
    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">
      {label}
    </label>
    <div className="relative group">
      <Icon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors"
        size={20}
      />
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-4 pl-12 pr-4 text-zinc-900 font-medium focus:outline-none focus:ring-4 focus:ring-zinc-100 focus:border-zinc-900 transition-all placeholder:text-zinc-400"
      />
    </div>
  </div>
);

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  onBack: () => void;
  illustration: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  onBack,
  illustration,
}) => (
  <div className="min-h-screen w-full bg-zinc-50 flex items-center justify-center p-4 relative font-sans overflow-hidden">
    <BackgroundAurora />
    <NoiseOverlay />

    <button
      onClick={onBack}
      className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition z-50 font-bold bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/50"
    >
      <ChevronLeft size={20} /> Home
    </button>

    <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 border border-white/60">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <div className="mb-10">
          <h2 className="text-4xl font-black text-zinc-900 mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-zinc-500 font-medium">{subtitle}</p>
        </div>
        {children}
      </div>

      <div className="hidden md:flex w-1/2 bg-zinc-900 relative p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        {illustration}
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------

const SalonRegistration: React.FC<SalonRegistrationProps> = ({
  onBack,
  onRegister,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    mobile: "",
    city: "",
    type: "Unisex",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSalon: Salon = {
      id: Date.now(),
      name: formData.name || "New Salon",
      area: formData.city.split(",")[1] || "Downtown",
      city: formData.city.split(",")[0] || "City",
      distance: "0.5 km",
      waiting: 0,
      eta: 0,
      rating: 5.0,
      reviews: 0,
      tag: "New Partner",
      price: "₹₹",
      type: formData.type,
      verified: false,
      revenue: 0,
    };

    if (onRegister) onRegister(newSalon);
  };

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
            <h3 className="text-3xl font-bold text-white mb-6">
              "Since using TrimGo, our revenue increased by 30% in the first
              month."
            </h3>
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
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        onSubmit={handleSubmit}
      >
        <div className="md:col-span-2">
          <InputGroup
            icon={Store}
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Urban Cut Pro"
            label="Salon Name"
          />
        </div>
        <InputGroup
          icon={User}
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          type="text"
          placeholder="Owner Name"
          label="Contact Person"
        />
        <InputGroup
          icon={Phone}
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          type="tel"
          placeholder="+91"
          label="Mobile"
        />
        <div className="md:col-span-2">
          <InputGroup
            icon={MapPin}
            name="city"
            value={formData.city}
            onChange={handleChange}
            type="text"
            placeholder="Jodhpur, Shastri Nagar"
            label="Location (City, Area)"
          />
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">
            Salon Type
          </label>
          <div className="grid grid-cols-3 gap-3">
            {["Unisex", "Men Only", "Women Only"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, type })}
                className={`py-3 border rounded-xl text-sm font-bold transition focus:ring-2 ring-zinc-900 ring-offset-2 ${
                  formData.type === type
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 pt-4">
          <ShimmerButton className="w-full py-4">
            Complete Registration <ArrowRight size={18} />
          </ShimmerButton>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SalonRegistration;