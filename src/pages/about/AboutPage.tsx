import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ShieldCheck, Quote, Sparkles, MoveDown, Compass, Activity, Scale, Landmark } from "lucide-react";
import { useRef, useState } from "react";

import img from "@/assets/bs.jpeg"; 
import godShadow from "@/assets/shadowimage.png"; 
import { aboutData } from "@/data/aboutData";

const AboutPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const t = aboutData[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45, damping: 15 });

  // Luxury Spatial Parallax Calculation Module
  const godScale = useTransform(smoothProgress, [0, 1], [1, 1.25]);
  const godY = useTransform(smoothProgress, [0, 1], [-20, 80]);
  const godOpacity = useTransform(smoothProgress, [0, 0.3, 0.8, 1], [0.03, 0.07, 0.07, 0.02]);

  // Blurred Backdrop Watermark Driving Coordinates
  const wordLeftX = useTransform(smoothProgress, [0, 1], [-50, 50]);
  const wordRightX = useTransform(smoothProgress, [0, 1], [50, -50]);

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
      className="relative w-full bg-[#fafaf9] overflow-hidden min-h-[180vh] font-poppins selection:bg-orange-500 selection:text-white"
    >
      {/* ⚡ RADIAL LIGHT SOURCE RUNNING CANVAS */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-500 hidden lg:block"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249,115,22,0.04), transparent 80%)`
        }}
      />

      {/* 🏛️ GIANT BLURRED POLITICAL TYPOGRAPHY WATERMARKS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.05] mix-blend-darken">
        <motion.h3 
          style={{ x: wordLeftX }}
          className="absolute left-4 top-[18%] text-[8rem] md:text-[14rem] font-black tracking-widest text-slate-900 font-gotu filter blur-[3px]"
        >
          {lang === "hi" ? "नेतृत्व" : "LEADERSHIP"}
        </motion.h3>
        
        <motion.h3 
          style={{ x: wordRightX }}
          className="absolute right-4 top-[55%] text-[8rem] md:text-[13rem] font-black tracking-widest text-orange-600 font-gotu filter blur-[4px]"
        >
          {lang === "hi" ? "कर्तव्य" : "INTEGRITY"}
        </motion.h3>
      </div>

      {/* 📐 ALIGNED BACKGROUND STRUCTURAL GRID MESH */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0 opacity-[0.45]">
        <div className="col-span-4 border-r border-dashed border-slate-200 h-full relative" />
        <div className="col-span-4 border-r border-dashed border-slate-200 h-full relative">
          <div className="absolute bottom-1/3 left-0 right-0 h-[1px] border-b border-dashed border-slate-200/80" />
        </div>
        <div className="col-span-4 h-full relative">
          <div className="absolute right-16 top-1/4 w-24 h-24 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-50" />
        </div>
      </div>

      {/* LUXURY BACKGROUND COLOR BLURS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-gradient-to-bl from-orange-500/[0.03] to-transparent blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-[45%] h-[45%] bg-slate-200/50 blur-[120px]" />
      </div>

      {/* 1. THE FIXED DIVINE BACKGROUND LAYER */}
      <motion.div 
        style={{ scale: godScale, y: godY, opacity: godOpacity }}
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <img 
          src={godShadow} 
          alt="Divine Silhouette Aura" 
          className="w-[85%] md:w-[55%] lg:w-[35%] h-auto object-contain grayscale" 
        />
      </motion.div>

      {/* 2. TOP HERO DISPLAY SECTION */}
      <div className="relative z-20 h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 max-w-5xl"
        >
          {/* Tech Context Badge */}
          <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-600 w-fit shadow-sm rounded-[1px] mb-6">
             <Compass size={12} className="text-orange-600 animate-[spin_12s_linear_infinite]" />
             <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500">Executive Identity Node</span>
          </div>

          <h2 className="font-gotu text-6xl sm:text-8xl md:text-[7rem] lg:text-[8.5rem] xl:text-[9.5rem] leading-[0.9] tracking-tighter text-slate-900">
            <div className="block font-light text-slate-950 opacity-95 pt-4">{t.nameFirst}</div>
            <div className="block text-orange-600 font-medium mt-4 relative pl-8 inline-block ps-36">
               <span className="absolute left-0 top-1/2 -translate-y-1/2 w-6 md:w-12 h-[1.5px] bg-orange-600 " />
               {t.nameLast}
            </div>
          </h2>
        </motion.div>

        {/* Scrolling System Anchor Trigger */}
        <motion.div 
           animate={{ y: [0, 12, 0] }} 
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2 cursor-default select-none z-20"
        >
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">Scroll to Explore</span>
            <MoveDown size={18} className="text-orange-500" />
        </motion.div>
      </div>

      {/* 3. DYNAMIC ALIGNED CONTENT MATRIX */}
      <div className="relative z-20 max-w-[1450px] mx-auto px-4 sm:px-8 lg:px-16 space-y-40 xl:space-y-52 pb-44">
        
        {/* Core Statement Card - Light Glass Accent */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:w-11/12 p-8 sm:p-14 md:p-20 bg-white border border-slate-200/80 shadow-2xl relative"
        >
          <Quote className="text-orange-500/20 absolute top-8 left-8" size={70} strokeWidth={1} />
          <p className="text-xl sm:text-2xl md:text-4xl text-left font-asar text-slate-800 leading-relaxed italic border-l-2 border-orange-500 pl-6 sm:pl-10 relative z-10">
            "{t.info}"
          </p>
          <div className="absolute right-6 bottom-6 w-16 h-16 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:8px_8px] opacity-60" />
        </motion.div>

        {/* Image & Stats Overlap Module */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Portrait Framework */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Geometric Framing lines */}
            <div className="absolute top-[-16px] left-[-16px] right-[16px] bottom-[16px] border border-slate-200/90 pointer-events-none hidden sm:block z-0" />
            <div className="absolute top-[-16px] left-[-16px] w-4 h-4 border-t-2 border-l-2 border-orange-500 hidden sm:block z-10" />
            <div className="absolute bottom-[-16px] right-[16px] w-4 h-4 border-b-2 border-r-2 border-slate-400 hidden sm:block z-10" />

            <div className="absolute -left-6 top-1/4 bg-white border border-slate-200 px-3 py-1.5 shadow-sm hidden xl:flex items-center gap-2 z-20">
              <Scale size={11} className="text-orange-500" />
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Governance</span>
            </div>
            
            <div className="absolute -right-6 top-2/3 bg-white border border-slate-200 px-3 py-1.5 shadow-sm hidden xl:flex items-center gap-2 z-20">
              <Landmark size={11} className="text-slate-600" />
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Public Trust</span>
            </div>

            <div className="relative aspect-[4/5] w-full max-w-[440px] bg-white border border-slate-200 p-3.5 shadow-2xl group">
              <div className="w-full h-full overflow-hidden bg-slate-50 relative">
                <img 
                  src={img} 
                  className="w-full h-full object-cover saturate-[1.12] contrast-[1.04] brightness-[0.99] transition-transform duration-1000 group-hover:scale-[1.03]" 
                  alt="Leader Professional Portrait" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Stats Anchoring Metadata */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-2 border-l-4 border-orange-500 pl-6 py-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-900 font-bold text-5xl md:text-6xl tracking-tight font-poppins">{t.experience}</span>
                <Activity size={20} className="text-orange-500 animate-pulse mt-2" />
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                {lang === "hi" ? "विकास एवं निरंतर जनसेवा के वर्ष" : "Years of Dedicated Legacy & Service"}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-slate-950 text-white flex items-center gap-6 shadow-xl relative overflow-hidden group"
            >
              <div className="p-3 bg-white/10 text-orange-500 relative z-10">
                 <ShieldCheck size={28} />
              </div>
              <div className="relative z-10">
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">Affiliation & Authority</p>
                <p className="text-xl md:text-2xl font-medium tracking-tight mt-0.5">{t.party}</p>
              </div>
              <div className="absolute inset-0 w-1/2 h-full bg-white/5 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Bio Editorial Text Grid Cells */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {t.bio.map((para, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 sm:p-12 bg-white text-left border border-slate-200 shadow-lg text-slate-600 text-sm md:text-base font-normal leading-relaxed relative"
              >
                {para}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-orange-500" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-orange-500" />
              </motion.div>
            ))}
        </div>

      </div>

      {/* 4. PREMIUM SYSTEM SLICK MARQUEE */}
      <div className="relative z-20 py-12 bg-slate-950 overflow-hidden rotate-[-1.5deg] scale-105 border-y border-orange-500/30 shadow-2xl mt-12">
        <div className="flex whitespace-nowrap gap-16 animate-[marquee_25s_linear_infinite]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 text-white font-light text-3xl md:text-4xl uppercase tracking-[0.15em]">
                <span className="text-slate-100 font-normal">{lang === "hi" ? "धर्म" : "Dharma"}</span>
                <Sparkles size={16} className="text-orange-500" />
                <span className="text-orange-500 font-medium">{lang === "hi" ? "नेतृत्व" : "Leadership"}</span>
                <Sparkles size={16} className="text-orange-500" />
                <span className="text-slate-300 font-light">{lang === "hi" ? "कर्म" : "Karma"}</span>
                <Sparkles size={16} className="text-orange-500" />
              </div>
            ))}
        </div>
      </div>

    </section>
  );
};

export default AboutPage;