import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Plus, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { governmentWorkData } from "@/data/governmentWorkData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

interface GovernmentItem {
  id?: string | number;
  title: string;
  text: string;
}

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const GovernmentWorkSection = ({ lang, preview = false }: Props) => {
  const navigate = useNavigate();
  const rawData: GovernmentItem[] = governmentWorkData[lang] || [];
  const data = preview ? rawData.slice(0, 4) : rawData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const blockThemes = [
    { 
      baseBg: "#0f5132",    // Deep Royal Emerald Green (Vibrant but mature)
      hoverBg: "#198754",   // Premium Crisp Green on Hover
      textColor: "#d1e7dd", // Clean Mint Tint
      accentLine: "#f97316" // Saffron Contrast Strip
    },
    { 
      baseBg: "#bc4c10",    // Rich Matte Saffron Orange (Deep state identity, not blinking bright)
      hoverBg: "#ea580c",   // Vibrant Saffron on Hover
      textColor: "#fff3cd", // Warm Saffron Tint
      accentLine: "#198754" // Green Contrast Strip
    },
    { 
      baseBg: "#0a4328",    // Elegant Deep Forest Shade
      hoverBg: "#0f5132",   // Deep Emerald on Hover
      textColor: "#d1e7dd", 
      accentLine: "#f97316"
    },
    { 
      baseBg: "#a03e0b",    // Deep Royal Terracotta/Saffron
      hoverBg: "#bc4c10",   // Matte Saffron on Hover
      textColor: "#fff3cd", 
      accentLine: "#198754"
    },
  ];
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-20 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 pb-12 md:pb-16 relative z-50">
        <div className="text-center">
          <SectionHeading 
            title={lang === "hi" ? "विकास एवं सुशासन" : "Governance & Impact"} 
            subtitle={lang === "hi" ? "जनहित में किए गए मुख्य कार्य" : "Key initiatives for public welfare"} 
            lang={lang}
          />
        </div>
      </div>

      {/* 🚀 ORIGINAL EXPANSIBLE ACCORDION LAYOUT WITH CLEAN VIBRANT COLORS */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[620px] bg-white overflow-hidden shadow-xl border-y border-slate-100">
        {data.map((item, i) => {
          const isHovered = hoveredIndex === i;
          const currentTheme = blockThemes[i % blockThemes.length];

          return (
            <motion.div
              key={i}
              onMouseEnter={() => !isMobile && setHoveredIndex(i)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onClick={() => {
                if (isMobile) {
                  setHoveredIndex(isHovered ? null : i);
                } else {
                  navigate(`/government-work/${item.id || i}`);
                }
              }}
              animate={{
                width: isMobile ? "100%" : (isHovered ? "52%" : hoveredIndex === null ? "25%" : "16%"),
                height: isMobile ? (isHovered ? "400px" : "90px") : "100%",
                backgroundColor: isHovered ? currentTheme.hoverBg : currentTheme.baseBg,
              }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="relative border-b md:border-b-0 md:border-r border-white/20 overflow-hidden group cursor-pointer"
            >
              {/* Premium Subtle Shimmer Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              {/* Big Backdrop Numbers - Clean White Translucent */}
              <motion.span 
                animate={{ 
                  opacity: isHovered ? 0.18 : 0.08,
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.4 }}
                className="absolute top-2 left-4 md:top-6 md:left-[-20px] text-white font-heading font-black text-6xl md:text-[16rem] italic leading-none pointer-events-none z-10 select-none"
              >
                0{i + 1}
              </motion.span>

              {/* CLOSED VERTICAL TEXT STATE */}
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center md:justify-center px-8"
                  >
                    <h3 
                      style={{ color: currentTheme.textColor }}
                      className="text-base md:text-xl font-heading font-black uppercase tracking-wider md:rotate-[-90deg] md:whitespace-nowrap transition-all duration-300 drop-shadow-sm"
                    >
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* OPENED EXPANDED CONTENT STATE */}
              <div className="absolute inset-0 z-30 p-8 md:p-14 flex flex-col justify-end pointer-events-none">
                 <motion.div
                   initial={false}
                   animate={{ 
                     y: isHovered ? 0 : 40, 
                     opacity: isHovered ? 1 : 0 
                   }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   className="pointer-events-auto"
                 >
                    <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 leading-tight drop-shadow-sm">
                      {item.title}
                    </h3>
                    
                    {/* Vibrant Contrast Accent Line */}
                    <div 
                      style={{ backgroundColor: currentTheme.accentLine }}
                      className="w-16 h-1 mb-6 rounded-full shadow-sm" 
                    />
                    
                    <p className="text-white font-asar text-base md:text-xl max-w-xl leading-relaxed mb-6 drop-shadow-sm">
                      {item.text}
                    </p>
                    
                    <div className="inline-flex items-center gap-3 text-white bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-widest transition-all hover:bg-white hover:text-slate-900">
                       <span>Explore Initiatives</span>
                       <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                 </motion.div>
              </div>

              {/* PLUS ICON CONTROLLER BUTTON */}
              <div className="absolute top-6 right-6 z-40 hidden md:block">
                 <motion.div
                   animate={{ rotate: isHovered ? 45 : 0 }}
                   className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                     isHovered 
                       ? 'bg-white text-slate-900 border-none shadow-xl scale-110' 
                       : 'border-white/30 text-white/80 group-hover:text-white group-hover:border-white/60'
                   }`}
                 >
                    <Plus size={20} />
                 </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {preview && (
        <div className="w-full flex justify-center pt-16 bg-white">
            <Link to="/government-work">
              <motion.button 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-emerald-800 text-white font-heading font-bold text-xs uppercase tracking-widest rounded-md shadow-xl hover:bg-orange-600 transition-all duration-300 flex items-center gap-4"
              >
                {lang === "hi" ? "सभी सरकारी कार्य देखें" : "View Full Portfolio"}
                <ArrowRight size={16} />
              </motion.button>
            </Link>
        </div>
      )}
    </section>
  );
};

export default GovernmentWorkSection;