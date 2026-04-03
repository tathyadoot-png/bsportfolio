import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, User, Quote, Award, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "@/assets/14.jpg";
import { aboutData } from "@/data/aboutData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const t = aboutData[lang];
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Parallax
      gsap.to(".about-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".image-container",
          start: "top bottom",
          scrub: true,
        },
      });

      // Floating Stats Animation
      gsap.to(".floating-stat", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-white overflow-hidden pb-20">
      
      {/* 1. REUSABLE HEADING (Top of the page) */}
      <div className="pt-28">
        <SectionHeading 
          title={t.heading} 
          subtitle={t.subtitle} 
          lang={lang} 
        />
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 🖼️ LEFT: IMAGE WITH MODERN MASKING */}
          <div className="image-container relative group">
            {/* Background Decorative Box */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-orange-100 rounded-[3rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
              <img 
                src={img} 
                className="about-image absolute inset-0 w-full h-full object-cover scale-110" 
                alt="Leader" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/40 to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="floating-stat absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 z-20">
              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-200">
                <Award size={28} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Experience</p>
                <p className="text-xl font-black text-[#112250]">{t.experience}</p>
              </div>
            </div>
          </div>

          {/* 📝 RIGHT: BOLD TYPOGRAPHY & CONTENT */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }}
                className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-2"
              >
                <Sparkles size={14} /> Leadership & Vision
              </motion.span>
              
              <h2 className="font-gotu text-6xl md:text-8xl text-[#112250] leading-[0.9] tracking-tighter">
                {t.nameFirst} <br />
                <span className="text-orange-500 font-black">{t.nameLast}</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-slate-50 rounded-3xl border-l-8 border-orange-500">
                <p className="text-xl font-bold text-[#112250] leading-relaxed italic">
                  "{t.info}"
                </p>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-asar">
                <p>{t.bio[0]}</p>
                <p>{t.bio[1]}</p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-slate-100 rounded-3xl hover:border-orange-200 transition-colors group">
                <GraduationCap className="text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Education</p>
                <p className="font-bold text-[#112250]">{t.education}</p>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-3xl hover:border-orange-200 transition-colors group">
                <ShieldCheck className="text-green mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Political Party</p>
                <p className="font-bold text-[#112250]">{t.party}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 FAMILY & IDEOLOGY: ASYMMETRICAL CARDS */}
      <div className="max-w-[1500px] mx-auto px-6 mt-32 grid md:grid-cols-2 gap-8">
        
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-12 bg-[#112250] rounded-[3rem] text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
          <h3 className="text-3xl font-gotu mb-6 flex items-center gap-4">
            <span className="w-10 h-[2px] bg-orange-500" /> {t.familyTitle}
          </h3>
          <p className="text-white/70 text-lg leading-relaxed">{t.familyText}</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="p-12 bg-white border-2 border-slate-100 rounded-[3rem] text-slate-800 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
          <h3 className="text-3xl font-gotu mb-6 flex items-center gap-4 text-[#112250]">
            <span className="w-10 h-[2px] bg-orange-500" /> {t.ideologyTitle}
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed">{t.ideologyText}</p>
        </motion.div>

      </div>

    </section>
  );
};

export default AboutPage;