import { useState, useEffect, useRef } from "react";
import { Globe, Menu, X, ArrowRight, ChevronDown, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { profileData } from "@/data/profileData";
import hi from "@/locales/hi";
import en from "@/locales/en";
import logo from "@/assets/logo.jpg";

type Lang = "hi" | "en";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const t = lang === "hi" ? hi : en;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.inspiration, path: "/inspiration" },
    { label: t.nav.journey, path: "/journey" },
    {
      label: t.nav.work,
      dropdown: [
        { label: t.dropdown.governmentWork, path: "/government-work" },
        { label: t.dropdown.awards, path: "/awards" },
        { label: t.dropdown.contributions, path: "/contributions" },
      ],
    },
    { label: t.nav.social, path: "/social-work" },
    {
      label: t.nav.media,
      dropdown: [
        { label: t.dropdown.gallery, path: "/gallery" },
        { label: t.dropdown.news, path: "/news" },
      ],
    },
    // { label: t.nav.family, path: "/family" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const springConfig = { type: "spring", stiffness: 400, damping: 30 };

  return (
    <nav className="fixed top-0 z-[100] w-full px-4 md:px-10 py-4 md:py-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto w-full flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 rounded-full md:rounded-[2rem] border transition-all duration-500 ${
          scrolled
            ? "bg-white/90 border-primary/20 shadow-lg backdrop-blur-2xl"
            : "bg-white/40 border-white/60 backdrop-blur-md"
        }`}
      >
        {/* --- BRANDING (Same for Desktop) --- */}
        <Link to="/" className="flex items-center gap-2 md:gap-4 group">
          <img 
            src={logo} 
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white shadow-md object-cover" 
            alt="Logo" 
          />
          <div className="flex flex-col">
            <h1 className="font-heading text-secondary text-sm md:text-xl tracking-tight leading-none">
              {profileData[lang].fullName}
            </h1>
            <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold text-primary/80 mt-1">
              Service • Integrity
            </span>
          </div>
        </Link>

        {/* --- CENTER NAV (DESKTOP ONLY) --- */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.path ? (
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                    location.pathname === item.path ? "text-primary bg-primary/5" : "text-secondary/70 hover:text-secondary"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div layoutId="activeNav" className="absolute inset-0 bg-primary/10 rounded-full -z-10" />
                  )}
                </Link>
              ) : (
                <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-[13px] font-bold transition-all ${
                  activeDropdown === item.label ? "text-primary bg-primary/5" : "text-secondary/70 hover:text-secondary"
                }`}>
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              )}

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    // transition={springConfig}
                    className="absolute top-full left-0 mt-4 w-64 bg-white border border-primary/10 rounded-2xl shadow-xl p-2 backdrop-blur-3xl"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary text-secondary hover:text-white transition-all duration-300"
                      >
                        <span className="text-[13px] font-bold">{sub.label}</span>
                        <ArrowRight size={16} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* --- RIGHT ACTIONS --- */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="h-10 w-10 md:w-auto md:h-auto md:px-4 md:py-2 flex items-center justify-center rounded-full border border-primary/10 text-secondary font-bold text-[11px]"
          >
            <Globe size={16} className="md:mr-2" />
            <span className="hidden md:block">{lang === "hi" ? "English" : "हिंदी"}</span>
          </button>

          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-md hover:bg-primary transition-all"
          >
            {t.cta.contact}
            <Sparkles size={14} />
          </Link>

          {/* Attractive Mobile Toggle */}
          <button 
            className="lg:hidden p-2.5 rounded-full bg-secondary text-white shadow-lg active:scale-90 transition-transform" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.div>

      {/* --- NEW ATTRACTIVE MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary/20 backdrop-blur-xl z-[200] lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img src={logo} className="h-9 w-9 rounded-full" alt="logo" />
                  <span className="font-heading text-secondary font-bold">Menu</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 bg-gray-100 rounded-full text-secondary active:rotate-90 transition-transform"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-2">
                {navItems.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={item.label}
                  >
                    {item.path ? (
                      <Link 
                        to={item.path} 
                        onClick={() => setIsOpen(false)} 
                        className={`flex items-center justify-between p-4 rounded-2xl font-bold text-lg transition-all ${
                          location.pathname === item.path ? "bg-primary/10 text-primary" : "text-secondary hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                        <ChevronRight size={18} className={location.pathname === item.path ? "opacity-100" : "opacity-30"} />
                      </Link>
                    ) : (
                      <div className="bg-gray-50/50 rounded-2xl p-4">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3 block">{item.label}</span>
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown?.map(sub => (
                            <Link 
                              key={sub.path} 
                              to={sub.path} 
                              onClick={() => setIsOpen(false)} 
                              className="text-[15px] font-bold text-secondary/70 p-2 hover:text-primary flex items-center gap-2"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20"
                >
                  {t.cta.contact}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;