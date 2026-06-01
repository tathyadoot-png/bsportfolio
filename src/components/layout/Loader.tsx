import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import bjp from "@/assets/bjp.png";
import { profileData } from "@/data/profileData";

type Props = {
  lang: "hi" | "en";
  onFinish: () => void;
};

const Loader = ({ lang, onFinish }: Props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // 💎 THE CLEAN LIGHT DISSOLVE EXIT
          gsap.to(mainRef.current, {
            opacity: 0,
            scale: 0.98,
            filter: "blur(8px)",
            duration: 0.7,
            ease: "power3.inOut",
            onComplete: onFinish
          });
        }
      });

      // Kinetic Light Entrance
      tl.fromTo(containerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
        "-=0.4"
      );

      // Smooth Horizontal Linear Scale Progress
      tl.fromTo(progressLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.4, ease: "power1.inOut" },
        "-=0.2"
      );

      tl.fromTo(footerRef.current,
        { opacity: 0, y: 8 },
        { opacity: 0.4, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );

      tl.to({}, { duration: 0.3 });
    });

    return () => ctx.revert();
  }, [onFinish]);

  // Symmetrical Light Block Style (Matra Safe)
  const nameStyle = "text-[11vw] md:text-[6.5vw] font-black uppercase tracking-tight leading-none py-2 block select-none";

  return (
    <div 
      ref={mainRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#fafaf9] w-full h-full"
    >
      {/* 📐 LIGHT BACKGROUND STRUCTURAL MESH GRID */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.45] w-full h-full">
        <div className="col-span-4 border-r border-dashed border-slate-200 h-full" />
        <div className="col-span-4 border-r border-dashed border-slate-200 h-full" />
        <div className="col-span-4 h-full" />
      </div>

      {/* Gentle Ambient Warm Flow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/[0.025] rounded-full blur-[130px] pointer-events-none" />

      {/* 🏛️ LIGHT REVEAL FRAME */}
      <div ref={containerRef} className="relative z-10 flex flex-col items-center w-full max-w-6xl px-6 text-center">
        
        {/* BRAND EMBLEM SHADOW MAP */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src={bjp} 
            className="w-12 md:w-16 filter drop-shadow-[0_10px_25px_rgba(234,88,12,0.12)]" 
            alt="Identity Node Brand Accent"
          />
        </motion.div>

        {/* ✍️ EDITORIAL LIGHT TYPOGRAPHY SPLIT */}
        <div className="w-full relative py-2 flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 overflow-visible w-full">
            <h1 className={`${nameStyle} text-slate-900 font-light`}>
              {profileData[lang].firstName}
            </h1>
            <h1 className={`${nameStyle} text-orange-600 font-bold`}>
              {profileData[lang].lastName}
            </h1>
          </div>

          {/* Symmetrical Accent Alignment Underline */}
          <div 
            ref={lineRef}
            className="w-24 md:w-36 h-[1.5px] bg-gradient-to-r from-transparent via-orange-600/30 to-transparent mt-6 origin-center"
          />
        </div>

        {/* 📟 LIGHT PRECISE SYSTEM PROGRESS STRIP */}
        <div className="mt-8 w-40 h-[2px] bg-slate-200/80 overflow-hidden relative rounded-full">
          <div 
            ref={progressLineRef}
            className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-orange-500 origin-left"
          />
        </div>
      </div>

      {/* 🏷️ LOCATION FOOTER RUNNER */}
      <div ref={footerRef} className="absolute bottom-12 flex flex-col items-center gap-2">
        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-center font-poppins">
          {profileData[lang].location}
        </p>
      </div>

      {/* 📐 CORNER IDENTIFIER SYSTEM DATA */}
      <div className="absolute top-10 left-10 text-[8px] font-mono text-slate-400 tracking-[0.2em] uppercase hidden md:block select-none">
        System_Identity_Lock_2026
      </div>
    </div>
  );
};

export default Loader;