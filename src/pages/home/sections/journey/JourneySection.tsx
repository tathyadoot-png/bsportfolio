// 🌟 FIXED: Make sure 'motion' and 'AnimatePresence' are explicitly imported at the very top
import { motion, AnimatePresence } from "framer-motion"; 
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journeyData } from "@/data/journeyData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { ArrowRight, ShieldCheck } from "lucide-react";
import hi from "@/locales/hi";
import en from "@/locales/en";  

gsap.registerPlugin(ScrollTrigger);

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const JourneySection = ({ lang, preview = false }: Props) => {
  const t = lang === "hi" ? hi : en;
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  const rawData = journeyData[lang] || [];
  const data = preview ? rawData.slice(0, 4) : rawData;

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Line Fill Animation (GSAP ScrollTrigger)
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 30%",
              end: "bottom 70%",
              scrub: true,
            }
          }
        );
      }

      // Smooth Card Stagger Intro
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card, 
          { opacity: 0, y: 60 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={containerRef} className="relative py-16 md:py-28 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Premium Ambient Background Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-[1400px] text-center pointer-events-none select-none opacity-[0.02]">
        <span className="text-[12vw] font-heading font-black tracking-widest text-slate-900 block uppercase">
          CHRONICLE
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="mb-20 md:mb-28 text-center">
          <SectionHeading 
            title={t.nav.journey} 
            subtitle={lang === "hi" ? "विकास की अद्वितीय यात्रा" : "Unfolding the Digital Era"} 
            lang={lang}
          />
        </div>

        {/* Timeline Structure Wrapper */}
        <div className="relative mt-12 md:mt-16">
          
          {/* Base Background Track Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2" />
          
          {/* Dynamic GSAP Saffron & Green Animated Gradient Fill Track */}
          <div 
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 via-emerald-600 to-emerald-800 -translate-x-1/2 hidden md:block" 
          />

          <div className="space-y-12 md:space-y-24">
            {data.map((item, i) => {
              const isEven = i % 2 === 0;
              // Alternate subtle badge designs based on item index
              const isGreenTheme = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el!)}
                  className={`relative flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* CARD CANVAS SIDE */}
                  <div className="w-full md:w-[45%] flex">
                    <div className="w-full bg-slate-50/60 border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between hover:border-slate-300/80 hover:bg-white">
                      
                      {/* Floating Gradient Year Top Bar Accent */}
                      <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${
                        isGreenTheme ? "from-emerald-600 to-emerald-400" : "from-orange-500 to-amber-500"
                      }`} />

                      {/* Backdrop watermark index */}
                      <span className="absolute bottom-2 right-6 font-heading font-black text-6xl text-slate-200/40 select-none pointer-events-none group-hover:text-slate-200/70 transition-colors">
                        0{i + 1}
                      </span>

                      <div>
                        {/* Meta header block */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <ShieldCheck size={16} className={isGreenTheme ? "text-emerald-600" : "text-orange-500"} />
                            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-slate-400">
                              {lang === "hi" ? "मुख्य उपलब्धि" : "Milestone Insight"}
                            </span>
                          </div>
                          
                          {/* Floating badge for Mobile view context */}
                          <span className={`text-xs font-heading font-black px-3 py-1 rounded-full md:hidden ${
                            isGreenTheme ? "bg-emerald-50 text-emerald-800" : "bg-orange-50 text-orange-600"
                          }`}>
                            {item.year}
                          </span>
                        </div>

                        {/* Title text layout */}
                        <h3 className="text-xl md:text-2xl font-asar text-slate-800 leading-snug group-hover:text-slate-950 transition-colors duration-300">
                          {item.text}
                        </h3>
                      </div>

                      {/* Micro interaction link element */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-slate-500">
                          {lang === "hi" ? "विवरण पढ़ें" : "Read Context"}
                        </span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* CENTRAL CONNECTING NODE STEPPER */}
                  <div className="absolute left-4 md:left-1/2 top-4 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                    <div className={`w-8 h-8 rounded-full bg-white shadow-md border-2 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                      isGreenTheme ? "border-emerald-600" : "border-orange-500"
                    }`}>
                      <div className={`w-3 h-3 rounded-full ${
                        isGreenTheme ? "bg-emerald-600" : "bg-orange-500"
                      }`} />
                    </div>
                  </div>

                  {/* DESKTOP SIDE DISPLAY TEXT YEAR */}
                  <div className={`hidden md:flex w-[45%] items-center ${isEven ? "justify-start pl-12" : "justify-end pr-12"}`}>
                    <span className={`text-7xl lg:text-8xl font-heading font-black tracking-tighter select-none transition-colors duration-500 ${
                      isGreenTheme 
                        ? "text-slate-200/80 hover:text-emerald-800/10" 
                        : "text-slate-200/80 hover:text-orange-600/10"
                    }`}>
                      {item.year}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* CALL TO ACTION BUTTON PREVIEW TRIGGER */}
        {preview && (
          <div className="mt-16 md:mt-24 text-center">
            <Link to="/journey" className="relative inline-block group">
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="px-12 py-4 bg-emerald-800 text-white font-heading font-bold text-xs uppercase tracking-widest rounded-md shadow-xl hover:bg-orange-600 transition-all duration-300 flex items-center gap-3"
              >
                {lang === "hi" ? "पूर्ण विकास यात्रा देखें" : "View Complete Journey"}
                <ArrowRight size={14} />
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default JourneySection;