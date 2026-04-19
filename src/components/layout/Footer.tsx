import type { Lang } from "@/layouts/MainLayout";
import logo from "@/assets/SociyoLogo.png"; // Assuming you still use the partner logo
import { ArrowUpRight, Instagram, Twitter, Facebook, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { profileData } from "@/data/profileData";

const Footer = ({ lang }: { lang: Lang }) => {
  const isHi = lang === "hi";
  const name = profileData[lang].fullName;

  const navLinks = [
    { label: isHi ? "होम" : "Home", path: "/" },
    { label: isHi ? "পরিচয়" : "About", path: "/about" },
    { label: isHi ? "यात्रा" : "Journey", path: "/journey" },
    { label: isHi ? "कार्य" : "Work", path: "/government-work" },
    { label: isHi ? "योगदान" : "Impact", path: "/contributions" },
    { label: isHi ? "समाचार" : "News", path: "/news" },
    { label: isHi ? "गैलरी" : "Gallery", path: "/gallery" },
    { label: isHi ? "संपर्क" : "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 relative overflow-hidden">
      
      {/* 🌫️ Faint Color Washes (Unique Aesthetic) */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 relative z-10">
        
        {/* 🔝 TOP PART: Ultra-Compact & Balanced */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12">
          
          {/* Column 1: Brand & Commitment (Compact) */}
          <div className="md:col-span-4 flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={28} />
             </div>
             <div>
                <h2 className="font-gotu text-3xl font-black text-white uppercase leading-none">
                   {name}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                   <div className="w-6 h-[2px] bg-orange-500" />
                   <span className="text-[10px] font-bold text-orange-500 uppercase leading-none ">
                      {isHi ? "जनसेवा ही संकल्प" : "Public Service First"}
                   </span>
                </div>
             </div>
          </div>

          {/* Column 2: Nav Links (Tight Grid) */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="text-xs font-bold text-white/50 hover:text-emerald-400 transition-colors uppercase leading-none "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Social Nodes */}
          <div className="md:col-span-2 flex justify-start md:justify-end gap-3">
            {[<Twitter size={18} />, <Instagram size={18} />, <Facebook size={18} />, <Mail size={18} />].map((icon, i) => (
              <div key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#111] hover:text-orange-500 transition-all cursor-pointer">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* 🚀 THE "DYNAMIC GREEN DOCK" - Floating Compact Partner Section */}
        <div className="bg-[#111]/80 backdrop-blur-xl rounded-[2.5rem] md:rounded-full p-2 pl-6 pr-2 flex flex-col md:flex-row items-center justify-between border border-white/5 mb-10 shadow-2xl shadow-black/30 relative">
          
          {/* Glow Line at top */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          <div className="flex items-center gap-6 py-2 md:py-0">
            <span className="text-[10px] font-black text-white/20 uppercase ">
              © {new Date().getFullYear()}
            </span>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <p className="text-emerald-400 text-sm font-asar italic leading-none ">
              {isHi ? "प्रगतिशील विचार, सशक्त नेतृत्व" : "Progressive Vision, Strong Leadership"}
            </p>
          </div>

          <a
            href="https://thesociyo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-between md:justify-start gap-4 bg-black/40 hover:bg-black pl-6 pr-2 py-1.5 rounded-full border border-white/5 transition-all group"
          >
            <span className="text-[10px] font-bold text-white/50 uppercase ">
              Digital Partner
            </span>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Sociyo"
                className="h-6 w-auto brightness-0 invert opacity-60"
              />
              <div className="h-9 w-9 rounded-full bg-orange-600 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-xl shadow-orange-600/20">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </a>
        </div>

        {/* Legal Bottom (Very Tight) */}
        <div className="pb-8 border-t border-white/5 text-center pt-8">
           <p className="text-[9px] font-bold text-white/10 uppercase  leading-none">
             India • Designed for Impact • Official Presence
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;