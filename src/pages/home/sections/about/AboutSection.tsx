import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, MoveUpRight, Zap, ShieldCheck } from "lucide-react";
import { useRef } from "react";

import img from "@/assets/bs.jpeg";
import godShadow from "@/assets/shadowimage.png"; 
import { aboutData } from "@/data/aboutData";
// ✅ Reusable Heading Component Integrated
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const HomeAbout = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const t = aboutData[lang];
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 🚀 Innovative Parallax Calculations
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const godY = useTransform(scrollYProgress, [0, 1], [-20, 100]);
  const godOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.12, 0.03]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#041a12] py-4 lg:py-7 overflow-hidden">
      
      {/* 🟢 INNOVATIVE BACKGROUND AURA */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-500/5 blur-[150px] rounded-full" />
      </div>

      {/* 🔱 DIVINE SPIRIT SHADOW (Dynamic Depth) */}
      <motion.div 
        style={{ y: godY, opacity: godOpacity }}
        className="absolute right-0 top-20 w-[70%] md:w-[45%] pointer-events-none z-0"
      >
        <img src={godShadow} alt="" className="w-full h-auto grayscale brightness-[2.5]" />
      </motion.div>

      {/* 🏷️ REUSABLE HEADING COMPONENT */}
      <div className="relative z-10 mb-12 lg:mb-20">
         <SectionHeading 
            title={t.heading} 
            subtitle={t.subtitle} 
            lang={lang} 
            titleColor="text-white"     
  subtitleColor="text-emerald-400" 
         />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* 🖼️ LEFT: CINEMATIC IMAGE FRAME */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              style={{ y: yImage }}
              className="relative aspect-[4/5] rounded-[3rem] lg:rounded-[5rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <img 
                src={img} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105" 
                alt="Leadership" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041a12]/80 via-transparent to-transparent" />
            </motion.div>

            {/* Experience Floating Card (Glassmorphism) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-6 -left-6 lg:-left-12 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl"
            >
               <p className="text-orange-500 font-black text-5xl leading-none">{t.experience}</p>
               <p className="text-[10px] text-emerald-400 uppercase  font-bold mt-2">Sustained Progress</p>
            </motion.div>
          </div>

          {/* 📝 RIGHT: HINDI-READY TYPOGRAPHY CONTENT */}
          <motion.div 
            style={{ y: yText }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
               <Zap size={16} fill="currentColor" />
               <span className="text-[10px] font-black uppercase">Commitment & Service</span>
            </div>

            {/* MAIN NAME: Fixed for Hindi Matra Overlap */}
            <div className="space-y-2">
               <h2 className="font-gotu text-7xl md:text-9xl lg:text-[10.5rem] text-white leading-[1.1]">
                 <span className="block opacity-90">{t.nameFirst}</span>
                 <div className="block text-orange-500 italic font-black -mt-4 pt-6 ps-12 lg:mt-10">
                   {t.nameLast}
                 </div>
               </h2>
            </div>

            {/* QUOTE & BIO */}
            <div className="max-w-2xl space-y-10">
              <p className="text-2xl md:text-4xl font-asar text-white/90 leading-tight italic border-l-4 border-emerald-500 pl-8">
                 "{t.info}"
              </p>

              <p className="text-lg md:text-xl text-white/50 font-asar leading-relaxed">
                 {t.bio[0]}
              </p>

              {/* ACTION AREA */}
              <div className="flex flex-wrap items-center gap-8 pt-6">
                 <button className="px-12 py-5 bg-emerald-600 hover:bg-orange-500 text-white rounded-full font-bold uppercase text-[10px]  flex items-center gap-4 transition-all shadow-xl shadow-emerald-950/40 group">
                    View Full Journey <MoveUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                 </button>

                 <div className="flex items-center gap-4 text-white/60">
                    <ShieldCheck size={24} className="text-orange-500" />
                    <span className="text-sm font-bold uppercase ">{t.party}</span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Side Marker */}
      <div className="absolute left-10 bottom-20 flex flex-col items-center gap-6 opacity-20">
         <div className="w-[1px] h-20 bg-emerald-500" />
         <span className="[writing-mode:vertical-lr] text-[10px] text-white uppercase ">Development</span>
      </div>
    </section>
  );
};

export default HomeAbout;