import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  lang?: "hi" | "en";
  titleColor?: string;
  subtitleColor?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  lang = "en", 
  titleColor = "text-[#112250]", 
  subtitleColor = "text-emerald-600" 
}: SectionHeadingProps) => {
  const containerRef = useRef(null);
  const ghostRef = useRef(null);
  const isHi = lang === "hi";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle Ghost Parallax
      gsap.to(ghostRef.current, {
        x: -40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Title Reveal
      gsap.from(".title-main", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 95%" },
      });

      // Line Expansion
      gsap.from(".center-line", {
        scaleX: 0,
        duration: 1,
        ease: "expo.inOut",
        scrollTrigger: { trigger: containerRef.current, start: "top 95%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1400px] mx-auto mb-6 md:mb-6 px-4 overflow-hidden flex flex-col items-center text-center pt-0 "
    >
      {/* 👻 GHOST TEXT (Positioned tightly) */}
      <div 
        ref={ghostRef}
        className="absolute top-1/2 left-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none opacity-[0.02] z-0 select-none hidden lg:block"
      >
        <span className={`text-[8rem] font-black uppercase italic ${titleColor}`} style={{ WebkitTextStroke: '1px currentColor', color: 'transparent' }}>
          {title}
        </span>
      </div>

      {/* ✨ TOP ANCHOR (Reduced Margin) */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="mb-2 p-1.5 rounded-full bg-orange-500/10 text-orange-500 z-10"
      >
        <Sparkles size={14} />
      </motion.div>

      {/* 📝 SUBTITLE (Very Compact) */}
      {subtitle && (
        <p className={`font-asar text-[10px] md:text-xs lg:text-sm font-bold uppercase ${subtitleColor}  mb-4 z-10 opacity-80`}>
          {subtitle}
        </p>
      )}

      {/* 🏆 MAIN TITLE (Sized for Elegance) */}
      <div className="relative z-10">
        <h2 className={`title-main font-gotu text-3xl md:text-4xl lg:text-6xl font-black ${titleColor} leading-tight uppercase `}>
          {title}
        </h2>
      </div>

      {/* 🛰️ TAGLINE (Tightened Spacing) */}
      <div className="mt-3 flex items-center gap-3 z-10">
        <div className="h-[1px] w-5 bg-slate-200" />
        <span className="text-[8px] lg:text-[9px] font-bold text-slate-400 uppercase ">
          {isHi ? "जनसेवा एवं विकास का संकल्प" : "Vision • Leadership • Progress"}
        </span>
        <div className="h-[1px] w-5 bg-slate-200" />
      </div>

      {/* 🚀 MINIMAL LINE (Very Thin & Discrete) */}
      <div className="mt-6 w-32 h-[1px] bg-slate-100 relative overflow-hidden">
        <div className="center-line absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center" />
      </div>

    </div>
  );
};

export default SectionHeading;