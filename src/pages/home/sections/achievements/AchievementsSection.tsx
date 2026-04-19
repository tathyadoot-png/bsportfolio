import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Trophy, ArrowUpRight, Award, Medal } from "lucide-react";
import { achievementsData } from "@/data/achievementsData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const AchievementsSection = ({ lang, preview = false }: Props) => {
  const containerRef = useRef(null);
  const rawData = achievementsData[lang] || [];
  const data = preview ? rawData.slice(0, 2) : rawData;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-[#f8fafc] overflow-hidden">
      
      {/* 🌀 Background Animated Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" 
      />
      
      <div className="mb-20">
        <SectionHeading 
          title={lang === "hi" ? "उपलब्धियां" : "Major Milestones"} 
          subtitle={lang === "hi" ? "सम्मान जो हमारी सेवा को प्रमाणित करते हैं" : "Recognition of dedicated public service"} 
          lang={lang}
          titleColor="text-[#112250]"
          subtitleColor="text-emerald-600"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        
        {/* 🏆 THE STAIRCASE LAYOUT */}
        <div className="flex flex-col space-y-32 md:space-y-48">
          {data.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                {/* 1. LARGE BACKGROUND YEAR (The Anchor) */}
                <div className={`absolute ${isEven ? '-left-10' : '-right-10'} top-[-40%] md:top-[-60%] pointer-events-none opacity-[0.04]`}>
                  <h4 className="text-[15rem] md:text-[25rem] font-black text-[#112250] leading-none select-none">
                    {item.year}
                  </h4>
                </div>

                {/* 2. MAIN CARD (Glassmorphism) */}
                <div className="relative z-10 w-full md:w-1/2 group">
                  <div className="relative p-1 bg-gradient-to-br from-emerald-500/20 to-orange-500/20 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="bg-white/90 backdrop-blur-xl rounded-[2.9rem] p-10 md:p-14 transition-all duration-700 group-hover:bg-white">
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#112250] text-white flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition-colors">
                          <Trophy size={20} />
                        </div>
                        <span className="text-[10px] font-black  text-emerald-600 uppercase">Honor Roll</span>
                      </div>

                      <h3 className="text-2xl md:text-4xl font-asar font-bold text-[#112250] leading-[1.4] mb-8">
                        {item.text}
                      </h3>

                      <div className="flex items-center justify-between">
                         <div className="h-px w-24 bg-slate-100" />
                         <span className="text-sm font-black text-slate-300 group-hover:text-[#112250] transition-colors">{item.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. FLOATING DECORATIVE ELEMENT (UX WoW) */}
                <div className="hidden md:block w-1/3 relative h-64">
                   <motion.div 
                     animate={{ y: [0, -20, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute inset-0 flex items-center justify-center"
                   >
                      <div className="w-40 h-40 rounded-[2rem] border border-emerald-100 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-700">
                         <Award size={80} className="text-emerald-500/20" />
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-orange-400 animate-ping" />
                   </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* 🔗 FINAL CTA */}
        {preview && (
          <div className="mt-40 flex justify-center">
            <Link
              to="/awards"
              className="group relative px-12 py-5 rounded-full overflow-hidden flex items-center gap-4 border border-slate-200 hover:border-emerald-500 transition-all"
            >
              <div className="absolute inset-0 bg-emerald-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 font-black text-[10px]  text-[#112250] group-hover:text-white transition-colors">
                {lang === "hi" ? "पूरी सूची देखें" : "View Full Recognition List"}
              </span>
              <ArrowUpRight size={18} className="relative z-10 text-emerald-500 group-hover:text-white transition-colors" />
            </Link>
          </div>
        )}
      </div>

    </section>
  );
};

export default AchievementsSection;