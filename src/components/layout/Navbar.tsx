import { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  Globe,
  Menu,
  X,
  ArrowRight,
  Home,
  User,
  Map,
  Briefcase,
  Tv,
  BadgeCheck,
  PhoneCall,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

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
  const navRef = useRef(null);

  // ✅ ROUTE BASED NAV
  const navItems = [
    { label: t.nav.home, path: "/", icon: <Home size={20} /> },
    { label: t.nav.about, path: "/about", icon: <User size={20} /> },
    { label: t.nav.journey, path: "/journey", icon: <Map size={20} /> },

    {
      label: t.nav.work,
      icon: <Briefcase size={20} />,
      dropdown: [
        { label: t.dropdown.governmentWork, path: "/government-work" },
        { label: t.dropdown.awards, path: "/awards" },
        { label: t.dropdown.contributions, path: "/contributions" },
      ],
    },

    {
      label: t.nav.social,
      icon: <BadgeCheck size={20} />,
      dropdown: [
        { label: t.dropdown.bloodDonation, path: "/blood-donation" },
        { label: t.dropdown.vivah, path: "/vivah" },
        { label: t.dropdown.publicService, path: "/public-service" },
      ],
    },

    {
      label: t.nav.media,
      icon: <Tv size={20} />,
      dropdown: [
        { label: t.dropdown.gallery, path: "/gallery" },
        { label: t.dropdown.news, path: "/news" },
      ],
    },

    { label: t.nav.family, path: "/family", icon: <User size={20} /> },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-reveal",
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.05 }
      );
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 z-[100] w-full px-4 md:px-8 py-4">
      <div
        className={`mx-auto max-w-7xl flex items-center justify-between px-4 py-3 rounded-2xl border ${
          scrolled
            ? "bg-white shadow-xl border-border"
            : "bg-white/90 backdrop-blur-xl border-white"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="nav-reveal flex items-center gap-3">
          <img src={logo} className="h-10 w-10 rounded-lg object-cover" />
          <h1 className="font-bold text-secondary uppercase">
            {lang === "hi" ? "भूपेंद्र सिंह" : "Bhupendra Singh"}
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.path ? (
                <Link to={item.path}>
                  <span className="text-xs font-bold uppercase text-secondary/80 hover:text-green">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <span className="text-xs font-bold uppercase text-secondary/80 cursor-pointer hover:text-green">
                  {item.label}
                </span>
              )}

              {/* DROPDOWN */}
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-3 text-sm hover:bg-gray-100"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="hidden lg:flex items-center gap-2 px-3 py-2 border rounded-lg"
          >
            <Globe size={14} />
            {lang === "hi" ? "EN" : "हिंदी"}
          </button>

          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-2 bg-primary px-5 py-2 rounded-lg text-white"
          >
            {t.cta.contact}
            <ArrowRight size={14} />
          </Link>

          <button className="xl:hidden" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 bg-white p-6 flex flex-col"
          >
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>

            {navItems.map((item) => (
              <div key={item.label}>
                {item.path && (
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                )}

                {item.dropdown &&
                  item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className="block pl-4 py-2"
                    >
                      {sub.label}
                    </Link>
                  ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;