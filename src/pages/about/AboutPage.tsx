import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, ShieldCheck, Quote, Award, Sparkles, MoveDown } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "@/assets/bs.jpeg"; 
import godShadow from "@/assets/shadowimage.png"; 
import { aboutData } from "@/data/aboutData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const t = aboutData[lang];
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for the God Image
  const godScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const godOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.08, 0.15, 0.15, 0.05]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#eeeeee] overflow-hidden min-h-[200vh]">
      
      {/* 1. THE FIXED DIVINE BACKGROUND (AB DIKHEGI!) */}
      <motion.div 
        style={{ scale: godScale, opacity: godOpacity }}
        className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <img 
          src={godShadow} 
          alt="Divine Silhouette" 
          className="w-[90%] md:w-[60%] lg:w-[40%] h-auto object-contain brightness-200 grayscale contrast-125" 
        />
      </motion.div>

      {/* 2. TOP HERO HEADER */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           
           <h2 className="mt-10 font-gotu text-[12vw] md:text-[11vw] leading-none  text-orange-500 uppercase mix-blend-difference">
              {t.nameFirst} <br />
              <div className="text-[#0c5e48] font-black italic pt-16">{t.nameLast}</div>
           </h2>
       
           
           <motion.div 
             animate={{ y: [0, 20, 0] }} 
             transition={{ repeat: Infinity, duration: 2 }}
             className="mt-20 text-[#0c5e48] flex flex-col items-center gap-2"
           >
              <span className="text-xs font-bold uppercase">Scroll to Explore</span>
              <MoveDown size={30} />
           </motion.div>
        </motion.div>
      </div>

      {/* 3. FLOATING CONTENT BLOCKS */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 space-y-40 pb-40">
        
        {/* About Card - Glassmorphism */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="lg:w-2/3 p-10 md:p-20 rounded-[4rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl"
        >
          <Quote className="text-[#0c5e48] mb-10" size={60} />
          <p className="text-3xl md:text-5xl text-justify font-asar text-orange-500 leading-tight">
            {t.info}
          </p>
        </motion.div>

        {/* Image & Stats Overlap Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="relative rounded-[5rem] overflow-hidden group shadow-2xl border-4 border-white/10"
          >
            <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Leader" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
          </motion.div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[#0c5e48] font-black text-6xl block">{t.experience}</span>
              <p className="text-orange-500 text-xl font-asar leading-relaxed uppercase ">Years of Dedicated Service</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-[#0c5e48] text-white flex items-center gap-6">
              <ShieldCheck size={40} />
              <div>
                <p className="text-xs font-bold uppercase opacity-80">Affiliation</p>
                <p className="text-2xl font-bold">{t.party}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Text Blocks */}
        <div className="grid md:grid-cols-2 gap-10">
            {t.bio.map((para, i) => (
              <motion.div 
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="p-10 rounded-[3rem] bg-white/5 text-justify backdrop-blur-sm border border-white/10 text-orange-500 text-xl font-asar leading-relaxed"
              >
                {para}
              </motion.div>
            ))}
        </div>

      </div>

      {/* 4. HORIZONTAL MARQUEE (The "Different" Factor) */}
      <div className="relative z-20 py-20 bg-[#305249] overflow-hidden rotate-[-2deg] scale-110">
        <div className="flex whitespace-nowrap gap-20 animate-marquee">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center md:gap-20 gap-5 text-white font-black md:text-6xl uppercase italic">
                <span>Dharma</span>
                <Sparkles />
                <span>Leadership</span>
                <Sparkles />
                <span>Karma</span>
                <Sparkles />
              </div>
            ))}
        </div>
      </div>

    </section>
  );
};

export default AboutPage;