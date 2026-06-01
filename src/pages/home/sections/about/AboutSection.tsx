import { useOutletContext, Link } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Compass, ShieldCheck, Activity, Scale, Landmark } from "lucide-react";
import { useRef, useState } from "react";

import img from "@/assets/bs.jpeg";
import godShadow from "@/assets/shadowimage.png"; 
import { aboutData } from "@/data/aboutData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const HomeAbout = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const t = aboutData[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // Micro Parallax Adjustments optimized for 100vh scale boundary
  const yImage = useTransform(smoothProgress, [0, 1], [30, -30]);
  const yText = useTransform(smoothProgress, [0, 1], [-10, 10]);
  const imgScale = useTransform(smoothProgress, [0, 0.5], [1.06, 1]);
  const bgLineScale = useTransform(smoothProgress, [0, 0.7], [0, 1]);
  
  // Parallax Background Political Tokens
  const wordLeftX = useTransform(smoothProgress, [0, 1], [-40, 20]);
  const wordRightX = useTransform(smoothProgress, [0, 1], [60, -20]);

  const godY = useTransform(smoothProgress, [0, 1], [-10, 60]);
  const godOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.015, 0.04, 0.015]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full lg:h-screen min-h-[750px] lg:min-h-screen bg-[#fafaf9] flex flex-col justify-center overflow-hidden font-poppins border-t border-slate-200/60 selection:bg-orange-500 selection:text-white py-16 lg:py-0"
    >
      {/* ⚡ RADIAL GLOW NODE */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-50 transition-opacity duration-500 hidden lg:block"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249,115,22,0.045), transparent 80%)`
        }}
      />

      {/* 🏛️ BACKGROUND GIANT BLURRED TYPOGRAPHY */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.05] mix-blend-darken">
        <motion.h3 
          style={{ x: wordLeftX }}
          className="absolute left-4 top-[15%] text-[8rem] md:text-[12rem] font-black tracking-widest text-slate-900 font-gotu filter blur-[3px]"
        >
          {lang === "hi" ? "नेतृत्व" : "LEADERSHIP"}
        </motion.h3>
        
        <motion.h3 
          style={{ x: wordRightX }}
          className="absolute right-4 bottom-[20%] text-[8rem] md:text-[11rem] font-black tracking-widest text-orange-600 font-gotu filter blur-[4px]"
        >
          {lang === "hi" ? "कर्तव्य" : "INTEGRITY"}
        </motion.h3>
      </div>

      {/* 📐 ALIGNED BACKGROUND STRUCTURAL GRID MESH */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0 opacity-[0.55]">
        <div className="col-span-4 border-r border-dashed border-slate-200 h-full relative">
          <motion.div 
            style={{ scaleY: bgLineScale, originY: 0 }}
            className="absolute right-[-1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-slate-300 via-orange-400/20 to-transparent" 
          />
        </div>
        <div className="col-span-4 border-r border-dashed border-slate-200 h-full relative">
          <div className="absolute bottom-1/4 left-0 right-0 h-[1px] border-b border-dashed border-slate-200/80" />
        </div>
        <div className="col-span-4 h-full relative">
          <div className="absolute right-16 top-24 w-24 h-24 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-50" />
        </div>
      </div>

      {/* BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-orange-500/[0.03] to-transparent blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-slate-200/50 blur-[120px]" />
      </div>

      {/* SILHOUETTE CANVAS */}
      <motion.div 
        style={{ y: godY, opacity: godOpacity }}
        className="absolute right-4 top-[10%] w-[40%] md:w-[25%] pointer-events-none z-0 mix-blend-multiply filter contrast-125"
      >
        <img src={godShadow} alt="" className="w-full h-auto grayscale" />
      </motion.div>

      {/* MAIN CONTAINER CONTENT - Perfect Vertical Center Alignment */}
      <div className="w-full max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 flex flex-col justify-center h-full">
        
        {/* COMPONENT SEGMENT HEADING */}
        <div className="relative z-10 mb-12 lg:mb-16 xl:mb-20 shrink-0">
           <SectionHeading 
              title={t.heading} 
              subtitle={t.subtitle} 
              lang={lang} 
              titleColor="text-slate-900"     
              subtitleColor="text-orange-600" 
           />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 xl:gap-24 items-center">
          
          {/* 🖼️ LEFT PORTRAIT CANVAS FRAME */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Architectural Border Alignments */}
            <div className="absolute top-[-16px] left-[-16px] right-[16px] bottom-[16px] border border-slate-200/90 pointer-events-none hidden sm:block z-0" />
            <div className="absolute top-[-16px] left-[-16px] w-4 h-4 border-t-2 border-l-2 border-orange-500 hidden sm:block z-10" />
            <div className="absolute bottom-[-16px] right-[16px] w-4 h-4 border-b-2 border-r-2 border-slate-400 hidden sm:block z-10" />
            
            {/* Context Value Badges */}
            <div className="absolute -left-6 top-1/4 bg-white border border-slate-200 px-3 py-1.5 shadow-sm hidden xl:flex items-center gap-2 z-20">
              <Scale size={11} className="text-orange-500" />
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Governance</span>
            </div>
            
            <div className="absolute -right-6 top-2/3 bg-white border border-slate-200 px-3 py-1.5 shadow-sm hidden xl:flex items-center gap-2 z-20">
              <Landmark size={11} className="text-slate-600" />
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Public Trust</span>
            </div>

            <motion.div 
              style={{ y: yImage }}
              className="relative aspect-[4/5] w-full max-w-[380px] xl:max-w-[420px] bg-white border border-slate-200 shadow-2xl p-3.5 z-10 group"
            >
              <div className="w-full h-full overflow-hidden bg-slate-50 relative rounded-[1px]">
                <motion.img 
                  style={{ scale: imgScale }}
                  src={img} 
                  className="w-full h-full object-cover saturate-[1.15] contrast-[1.05] brightness-[0.99]" 
                  alt="Bhupendra Singh Executive Alignment Portrait" 
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:18px_18px] mix-blend-overlay opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Dynamic Shift Experience Counter Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="absolute -bottom-5 right-5 px-5 py-3.5 bg-white border border-slate-200 text-slate-950 shadow-2xl flex flex-col min-w-[155px]"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-2xl font-semibold tracking-tight font-poppins leading-none">{t.experience}</span>
                  <Activity size={13} className="text-orange-500 animate-pulse" />
                </div>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1.5 whitespace-nowrap">
                  {lang === "hi" ? "विकास के वर्ष" : "Years of Legacy"}
                </span>
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-orange-500" />
              </motion.div>
            </motion.div>
          </div>

          {/* 📝 RIGHT EDITORIAL TYPOGRAPHY BLOCK */}
          <motion.div 
            style={{ y: yText }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 xl:space-y-8 lg:pl-4"
          >
            {/* Identity Node Chip */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-slate-200 text-slate-600 w-fit shadow-sm relative z-10"
            >
               <Compass size={12} className="text-orange-600 animate-[spin_12s_linear_infinite]" />
               <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">Executive Identity Node</span>
            </motion.div>

            {/* SPLIT TYPOGRAPHY BLOCK FOR NAME */}
            <div className="space-y-2 relative overflow-hidden py-1">
               <h2 className="font-gotu text-5xl sm:text-7xl md:text-8xl lg:text-[5rem] xl:text-[6rem] text-slate-900 leading-[0.95] tracking-tighter">
                 <motion.span 
                   initial={{ y: "100%" }}
                   whileInView={{ y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                   className="block font-light text-slate-950 opacity-95"
                 >
                   {t.nameFirst}
                 </motion.span>
                 
                 <motion.span 
                   initial={{ y: "100%", opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                   className="block text-orange-600 font-medium pl-14 lg:pl-24 mt-3 relative"
                 >
                   {/* Layout Connector Accent Line */}
                   <motion.span 
                     initial={{ scaleX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.7, delay: 0.3 }}
                     className="absolute left-0 top-1/2 -translate-y-1/2 w-10 lg:w-18 h-[1.5px] bg-gradient-to-r from-orange-500 via-orange-400 to-transparent origin-left" 
                   />
                   {t.nameLast}
                 </motion.span>
               </h2>
            </div>

            {/* STATEMENT & BODY SEGMENT WITH MICRO DETAIL NODES */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl space-y-6 xl:space-y-8"
            >
              <p className="text-lg md:text-xl xl:text-2xl text-left font-asar text-slate-800 font-normal leading-relaxed italic border-l-2 border-orange-500 pl-5 bg-gradient-to-r from-orange-500/[0.02] to-transparent py-2.5 pr-2">
                 "{t.info}"
              </p>

              <p className="text-xs md:text-sm xl:text-base text-left text-slate-500 font-normal leading-relaxed pr-2">
                 {t.bio[0]}
              </p>

              {/* ACTION LAYOUT FOOTER */}
              <div className="flex flex-wrap items-center gap-6 xl:gap-8 pt-6 xl:pt-8 border-t border-slate-200/70">
                 <Link 
                   to="/about"
                   className="relative overflow-hidden px-8 py-3.5 bg-slate-950 text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-3 group transition-all duration-300 hover:bg-orange-600 shadow-xl"
                 >
                    <span className="relative z-10 flex items-center gap-3">
                      View Full Journey 
                      <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 w-1/2 h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
                 </Link>

                 <div className="flex items-center gap-3 text-slate-400 group cursor-default">
                    <ShieldCheck size={16} className="text-orange-600 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors duration-300">{t.party}</span>
                 </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Structural Bottom Anchor */}
      <div className="absolute left-8 bottom-10 flex items-center gap-3 opacity-25 hidden xl:flex">
         <div className="w-12 h-[1px] bg-slate-400" />
         <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.25em]">CORE INSIGHT STRUCTURAL MAP</span>
      </div>
    </section>
  );
};

export default HomeAbout;