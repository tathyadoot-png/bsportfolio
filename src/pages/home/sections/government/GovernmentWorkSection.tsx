import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { governmentWorkData } from "@/data/governmentWorkData";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const GovernmentWorkSection = ({ lang, preview = false }: Props) => {
  const rawData = governmentWorkData[lang] || [];
  const data = preview ? rawData.slice(0, 4) : rawData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full h-auto md:h-[750px] bg-[#050505] overflow-hidden flex flex-col md:flex-row">
      
      {/* 🏷️ SECTION LABEL - Minimalist Side Branding */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 z-50 pointer-events-none">
        <h2 className="text-white/20 text-[10px] font-black uppercase tracking-[1.2em] mb-3">
          {lang === "hi" ? "सरकारी कार्य" : "Governance Impact"}
        </h2>
        <div className="h-[2px] w-8 bg-orange-500" />
      </div>

      <div className="flex flex-col md:flex-row w-full h-full">
        {data.map((item, i) => {
          const isHovered = hoveredIndex === i;
          
          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === i ? null : i)}
              animate={{
                // Responsive Logic: Mobile Stack vs Desktop Strips
                width: typeof window !== 'undefined' && window.innerWidth < 768 
                  ? "100%" 
                  : (isHovered ? "60%" : hoveredIndex === null ? "25%" : "13.33%"),
                height: typeof window !== 'undefined' && window.innerWidth < 768 
                  ? (isHovered ? "450px" : "90px") 
                  : "100%",
                // DARK EMERALD TO RICH ORANGE
                backgroundColor: isHovered ? "#ea580c" : "#022c22", // Deep dark green shade
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-b md:border-b-0 md:border-r border-white/5 overflow-hidden group cursor-pointer"
            >
              
              {/* 🌑 SUBTLE VIGNETTE (Adds that "Elite" look) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 pointer-events-none z-10" />

              {/* 📝 CLOSED STATE: VERTICAL MARQUEE-STYLE TITLE */}
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex md:items-center md:justify-center p-5 md:p-0"
                  >
                    <h3 className="text-white/50 text-base md:text-2xl font-gotu font-black uppercase md:rotate-[-90deg] md:whitespace-nowrap tracking-tighter leading-none group-hover:text-white/80 transition-colors">
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 📄 OPEN STATE: REVEAL CONTENT */}
              <div className="absolute inset-0 z-30 p-8 md:p-20 flex flex-col justify-end overflow-hidden">
                 <motion.div
                   initial={false}
                   animate={{ 
                      y: isHovered ? 0 : 40, 
                      opacity: isHovered ? 1 : 0 
                   }}
                   transition={{ duration: 0.5, delay: 0.1 }}
                 >
                    {/* Big Bold Index Number */}
                    <span className="text-white/10 font-black text-8xl md:text-[12rem] absolute -top-10 -left-6 pointer-events-none italic">
                      0{i + 1}
                    </span>
                    
                    <h3 className="relative text-white text-3xl md:text-6xl font-gotu font-black mb-6 leading-[1] tracking-tighter drop-shadow-2xl">
                      {item.title}
                    </h3>

                    <div className="w-20 h-1.5 bg-white/30 mb-8 rounded-full" />

                    <p className="text-white/90 font-asar text-lg md:text-2xl max-w-2xl leading-relaxed drop-shadow-md">
                      {item.text}
                    </p>
                 </motion.div>
              </div>

              {/* 🔘 INTERACTIVE PLUS ICON */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 z-40 md:block hidden">
                 <motion.div
                   animate={{ 
                     rotate: isHovered ? 135 : 0,
                     scale: isHovered ? 1.4 : 1,
                     opacity: isHovered ? 1 : 0.3
                   }}
                   className="text-white"
                 >
                    <Plus size={40} strokeWidth={2.5} />
                 </motion.div>
              </div>

              {/* High-End Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      {/* 🚀 CALL TO ACTION (Floating Button) */}
      {preview && (
        <div className="absolute bottom-10 right-10 z-50 md:block hidden">
           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
             <button className="px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.4em] rounded-full shadow-2xl hover:bg-orange-500 hover:text-white transition-all">
               {lang === "hi" ? "सभी कार्य देखें" : "View Full Portfolio"}
             </button>
           </motion.div>
        </div>
      )}

    </section>
  );
};

export default GovernmentWorkSection;