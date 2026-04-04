import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journeyData } from "@/data/journeyData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { ArrowRight, Star, ArrowUpRight } from "lucide-react";
import hi from "@/locales/hi";
import en from "@/locales/en";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const JourneySection = ({ lang, preview = false }: Props) => {
  const t = lang === "hi" ? hi : en;
  const containerRef = useRef(null);
  
  const rawData = journeyData[lang] || [];
  const data = preview ? rawData.slice(0, 3) : rawData;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className={`relative w-full py-20 lg:py-2 ${preview ? 'bg-white' : 'bg-[#fcfcfc]'}`}>
      
      <div className="mb-16">
        <SectionHeading 
          title={t.nav.journey} 
          subtitle={lang === "hi" ? "सपनों से संकल्प तक का सफर" : "The Evolution of a Visionary"} 
          lang={lang}
          titleColor="text-[#112250]"
          subtitleColor="text-emerald-600"
        />
      </div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* 📟 LEFT: STICKY PROGRESS INDICATOR */}
        <div className="hidden lg:block sticky top-40 w-[20%]">
          <div className="relative h-48 flex flex-col justify-between">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-200">
               <motion.div style={{ height: pathHeight }} className="w-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </div>
            <div className="pl-8 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#041a12] flex items-center justify-center text-emerald-400 shadow-xl border border-emerald-500/20">
                <Star size={16} fill="currentColor" />
              </div>
              <h4 className="text-[10px] font-black text-[#112250] uppercase tracking-[0.4em]">Timeline</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{data[0].year} — ACTIVE</p>
            </div>
          </div>
        </div>

        {/* 🎴 RIGHT: THE BALANCED CARDS */}
        <div className="w-full lg:w-[80%] space-y-6">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-[#041a12] rounded-[2rem] p-8 md:p-10 lg:p-12 min-h-[200px] flex items-center overflow-hidden border border-white/5 transition-all duration-500 hover:border-emerald-500/30">
                
                {/* 1. Year Background (Centered & Symmetric) */}
                <div className="absolute left-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                   <span className="text-7xl md:text-9xl lg:text-[10rem] font-black text-white whitespace-nowrap">
                      {item.year}
                   </span>
                </div>

                {/* 2. Grid Content for Perfect Alignment */}
                <div className="grid md:grid-cols-12 w-full gap-6 items-center relative z-10">
                  
                  {/* Year Column */}
                  <div className="md:col-span-4 lg:col-span-3">
                    <span className="text-4xl md:text-5xl font-black text-emerald-500/90 tracking-tighter block group-hover:text-orange-500 transition-colors">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em]">Milestone</span>
                    </div>
                  </div>

                  {/* Text Content Column */}
                  <div className="md:col-span-7 lg:col-span-8">
                    <h3 className="text-xl md:text-3xl font-asar text-white/95 leading-[1.4] md:leading-[1.3]">
                      {item.text}
                    </h3>
                  </div>

                  {/* Arrow Column (Always Visible) */}
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-orange-500 group-hover:border-orange-500 group-hover:translate-x-2 transition-all duration-500">
                       <ArrowRight size={24} />
                    </div>
                  </div>

                </div>

                {/* Animated Accent Line */}
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-700" />
              </div>
            </motion.div>
          ))}

          {/* 🔗 CTA BUTTON */}
          {preview && (
            <div className="pt-8 flex justify-center lg:justify-start">
              <Link
                to="/journey"
                className="group flex items-center gap-6 text-[#112250] transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-[#112250] text-white flex items-center justify-center group-hover:bg-orange-500 transition-all shadow-xl">
                   <ArrowUpRight size={20} />
                </div>
                <span className="font-black uppercase text-[10px] tracking-[0.4em] group-hover:text-emerald-600 transition-colors">
                  {lang === "hi" ? "पूर्ण इतिहास देखें" : "View All Milestones"}
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default JourneySection;