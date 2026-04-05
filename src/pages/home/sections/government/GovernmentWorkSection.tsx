import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { governmentWorkData } from "@/data/governmentWorkData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const GovernmentWorkSection = ({ lang, preview = false }: Props) => {
  const rawData = governmentWorkData[lang] || [];
  const data = preview ? rawData.slice(0, 4) : rawData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Responsive Handler
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* 🏷️ REUSABLE HEADING SECTION */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-12 md:pt-32 md:pb-20 relative z-50">
        <div className="text-center">
          <SectionHeading 
            title={lang === "hi" ? "विकास एवं सुशासन" : "Governance & Impact"} 
            subtitle={lang === "hi" ? "जनहित में किए गए मुख्य कार्य" : "Key initiatives for public welfare"} 
            lang={lang}
            titleColor="text-white"
            subtitleColor="text-orange-500"
          />
        </div>
      </div>

      {/* 🏗️ INTERACTIVE SLIDES CONTAINER */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[650px]">
        {data.map((item, i) => {
          const isHovered = hoveredIndex === i;
          
          // ✅ Even/Odd Logic: Odd = Emerald, Even = Black
          const baseColor = (i + 1) % 2 === 0 ? "#080808" : "#022c22"; 
          const activeColor = "#ea580c"; 

          return (
            <motion.div
              key={i}
              onMouseEnter={() => !isMobile && setHoveredIndex(i)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onClick={() => isMobile && setHoveredIndex(hoveredIndex === i ? null : i)}
              animate={{
                // Desktop: Dynamic Width | Mobile: Stacked with Dynamic Height
                width: isMobile ? "100%" : (isHovered ? "55%" : hoveredIndex === null ? "25%" : "15%"),
                height: isMobile ? (isHovered ? "400px" : "80px") : "100%",
                backgroundColor: isHovered ? activeColor : baseColor,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-b md:border-b-0 md:border-r border-white/5 overflow-hidden group cursor-pointer"
            >
              
              {/* 🔢 STATIC BACKGROUND NUMBER (Fixed) */}
              <motion.span 
                animate={{ opacity: isHovered ? 0.12 : 0.03 }}
                className="absolute top-2 left-4 md:top-[-10px] md:left-[-20px] text-white font-black text-7xl md:text-[14rem] italic leading-none pointer-events-none z-10 select-none"
              >
                0{i + 1}
              </motion.span>

              {/* 📝 CLOSED STATE TITLE (Horizontal on Mobile, Vertical on Desktop) */}
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center md:justify-center px-6 md:px-0"
                  >
                    <h3 className="text-white/40 text-lg md:text-2xl font-gotu font-black uppercase md:rotate-[-90deg] md:whitespace-nowrap leading-none group-hover:text-white transition-all duration-500">
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 📄 OPEN STATE CONTENT */}
              <div className="absolute inset-0 z-30 p-8 md:p-12 flex flex-col justify-end overflow-hidden">
                 <motion.div
                   initial={false}
                   animate={{ 
                      y: isHovered ? 0 : 40, 
                      opacity: isHovered ? 1 : 0 
                   }}
                   transition={{ duration: 0.4 }}
                 >
                    <h3 className="text-white text-2xl md:text-4xl font-gotu font-black mb-4 leading-none">
                      {item.title}
                    </h3>
                    <div className="w-12 h-1 bg-white/40 mb-4 rounded-full" />
                    <p className="text-white/90 font-asar text-base md:text-xl max-w-xl leading-snug">
                      {item.text}
                    </p>
                 </motion.div>
              </div>

              {/* 🔘 PLUS ICON (Desktop Only) */}
              <div className="absolute bottom-8 right-8 z-40 hidden md:block">
                 <motion.div
                   animate={{ rotate: isHovered ? 45 : 0 }}
                   className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white ${isHovered ? 'bg-white text-orange-600 border-none' : ''}`}
                 >
                    <Plus size={20} />
                 </motion.div>
              </div>

              {/* High-End Gloss Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* 🚀 ALL WORK BUTTON (Mobile Responsive) */}
      {preview && (
        <div className="w-full flex justify-center py-12 md:absolute md:bottom-10 md:right-10 md:p-0 md:justify-end z-50">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-full shadow-2xl hover:bg-orange-600 hover:text-white transition-all"
            >
              {lang === "hi" ? "सभी कार्य देखें" : "View Full Portfolio"}
            </motion.button>
        </div>
      )}

    </section>
  );
};

export default GovernmentWorkSection;