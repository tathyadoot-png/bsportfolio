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

  return (
    <section className="relative w-full bg-[#ffffff] overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-12 md:pt-32 md:pb-20 relative z-50">
        <div className="text-center">
          <SectionHeading 
            title={lang === "hi" ? "विकास एवं सुशासन" : "Governance & Impact"} 
            subtitle={lang === "hi" ? "जनहित में किए गए मुख्य कार्य" : "Key initiatives for public welfare"} 
            lang={lang}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[650px] bg-[#ffffff]">
        {data.map((item, i) => {
          const isHovered = hoveredIndex === i;
          const baseColor = (i + 1) % 2 === 0 ? "#0A0A0A" : "#051510"; 
          const activeColor = "#E46B2E"; 

          return (
            <motion.div
              key={i}
              onMouseEnter={() => !isMobile && setHoveredIndex(i)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              // ✅ Mobile toggle logic: Click pe open/close hoga
              onClick={() => {
                if (isMobile) {
                  setHoveredIndex(isHovered ? null : i);
                } else {
                  navigate(`/government-work/${item.id || i}`);
                }
              }}
              animate={{
                width: isMobile ? "100%" : (isHovered ? "55%" : hoveredIndex === null ? "25%" : "15%"),
                height: isMobile ? (isHovered ? "450px" : "90px") : "100%",
                backgroundColor: isHovered ? activeColor : baseColor,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-b md:border-b-0 md:border-r border-white/10 overflow-hidden group cursor-pointer"
            >
              <motion.span 
                animate={{ opacity: isHovered ? 0.2 : 0.05 }}
                className="absolute top-2 left-4 md:top-0 md:left-[-30px] text-white font-black text-7xl md:text-[18rem] italic leading-none pointer-events-none z-10 select-none"
              >
                0{i + 1}
              </motion.span>

              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center md:justify-center px-8"
                  >
                    <h3 className="text-white/30 text-lg md:text-xl font-heading font-bold uppercase md:rotate-[-90deg] md:whitespace-nowrap group-hover:text-white transition-all duration-500 ">
                      {item.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute inset-0 z-30 p-8 md:p-16 flex flex-col justify-end">
                 <motion.div
                   initial={false}
                   animate={{ 
                     y: isHovered ? 0 : 60, 
                     opacity: isHovered ? 1 : 0 
                   }}
                   transition={{ duration: 0.5 }}
                 >
                    <h3 className="text-white text-3xl md:text-5xl font-heading font-black mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <div className="w-20 h-1.5 bg-white mb-8 rounded-full" />
                    <p className="text-white/90 font-asar text-lg md:text-2xl max-w-2xl leading-relaxed mb-8">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-4 text-white font-black text-[10px] uppercase ">
                       <span>Explore Case Study</span>
                       <ArrowRight size={16} />
                    </div>
                 </motion.div>
              </div>

              <div className="absolute top-10 right-10 z-40 hidden md:block">
                 <motion.div
                   animate={{ rotate: isHovered ? 45 : 0 }}
                   className={`w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors ${isHovered ? 'bg-white text-black border-none shadow-2xl' : ''}`}
                 >
                    <Plus size={24} />
                 </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {preview && (
        <div className="w-full flex justify-center py-16 bg-white">
            <Link to="/government-work">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-black font-black text-[10px] uppercase rounded-full shadow-2xl transition-all flex items-center gap-4 hover:bg-primary hover:text-white"
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