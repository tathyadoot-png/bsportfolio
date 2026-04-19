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
  const mainRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // 💎 THE "GLASS DISSOLVE" EXIT
          gsap.to(mainRef.current, {
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(255,255,255,0)",
            duration: 1,
            ease: "power3.inOut",
            onComplete: onFinish
          });
        }
      });

      // Simple 2-second hold for reveal
      tl.to({}, { duration: 2.2 });

      gsap.fromTo(cardRef.current, 
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "expo.out" }
      );
    });

    return () => ctx.revert();
  }, [onFinish]);

  // Symmetrical Block Style (Matra Safe)
  const nameStyle = "text-[12vw] md:text-[7.5vw] font-black uppercase  leading-[1.4] py-4 px-0";

  return (
    <div 
      ref={mainRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden backdrop-blur-lg bg-white/10"
    >
      {/* 🧊 FLOATING GLASS ELEMENT */}
      <div ref={cardRef} className="relative z-10 flex flex-col items-center w-full max-w-6xl px-4 text-center">
        
        {/* LOGO: SUBTLE ACCENT */}
        <div className="mb-6">
          <img 
            src={bjp} 
            className="w-14 md:w-20 opacity-80 filter drop-shadow-[0_5px_15px_rgba(255,153,51,0.15)]" 
          />
        </div>

        {/* ✍️ THE SOLID BLOCK (No Words Space, Identical Size) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 overflow-visible border-y border-black/[0.03] py-2 w-full">
          <h1 className={`${nameStyle} text-black`}>
            {profileData[lang].firstName}
          </h1>
          <h1 className={`${nameStyle} text-[#FF9933]`}>
            {profileData[lang].lastName}
          </h1>
        </div>

        {/* 📟 MINIMALIST PULSE (No Numbers) */}
        <div className="mt-8 flex items-center gap-3 opacity-20">
           <div className="w-12 h-[1px] bg-black" />
           <div className="flex gap-1">
              <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-[#FF9933]" />
              <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-black" />
              <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#138808]" />
           </div>
           <div className="w-12 h-[1px] bg-black" />
        </div>
      </div>

      {/* 🏷️ LOCATION: ARCHITECTURAL FOOTER */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-30">
        <p className="text-[10px] md:text-[12px] font-bold  uppercase text-black text-center ml-[2em]">
          {profileData[lang].location}
        </p>
      </div>

      {/* 📐 CORNER STATS */}
      <div className="absolute top-10 left-10 text-[8px] font-mono text-black/10 uppercase  hidden md:block">
        Legislative_Session_2026
      </div>
    </div>
  );
};

export default Loader;