import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Zap, Building, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/effect-fade";

// Assets
import slid1 from "@/assets/slid1.jpeg";
import slid2 from "@/assets/slid2.jpeg";
import slid3 from "@/assets/slid3.jpeg";
import slid4 from "@/assets/slid4.jpeg";

interface Props {
  lang: "hi" | "en";
}

const HeroSection = ({ lang }: Props) => {
  const isHi = lang === "hi";
  const heroRef = useRef(null);
  const slides = [slid1, slid2, slid3, slid4];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-content > *", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    // ✅ Change 1: White Background (Light Mode)
    <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-white text-slate-900 flex flex-col">
      
      {/* 🖼️ IMAGE SECTION - Navbar ke niche shift kiya hai */}
      {/* ✅ Change 2: Added 'mt-20' for mobile and 'mt-0' for desktop to avoid Navbar overlap */}
      <div className="relative w-full h-[45vh] md:h-screen mt-24 md:mt-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={2000} 
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5 }}
                className="h-full w-full"
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-cover object-top" 
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* ✅ Change 3: Light Gradients (Clean look) */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent hidden md:block z-10" /> */}
      </div>

      {/* 📝 CONTENT LAYER - Light Theme text colors */}
      <div className="relative z-20 flex-grow w-[90%] max-w-[1400px] mx-auto flex flex-col justify-start md:justify-center py-8 md:py-0">
        <div className="hero-content space-y-5 md:space-y-8">
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/10 text-orange-600">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase ">
              {isHi ? "जनसेवा एवं विकास का संकल्प" : "Leadership & Vision"}
            </span>
          </div>

          <h1 className="font-gotu text-5xl md:text-[7rem] lg:text-[9rem] leading-[0.95] text-slate-900">
            <span className=" pb-2 font-light italic block opacity-80">{isHi ? "भूपेंद्र" : "Bhupendra"}</span>
            <span className="font-bold text-orange-500 block pl-8">{isHi ? "सिंह" : "Singh"}</span>
          </h1>

          <p className="text-sm md:text-xl text-slate-600 font-asar max-w-xl leading-relaxed border-l-2 border-orange-500/40 pl-6">
            {isHi 
              ? "अनुभव के 45 वर्ष, विकास की अटूट प्रतिबद्धता।" 
              : "45 Years of service and commitment to progress."}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/about" className="group px-7 py-3.5 bg-orange-500 text-white rounded-xl font-bold uppercase text-[10px]  flex items-center gap-3 transition-all shadow-md hover:shadow-orange-500/30">
              {isHi ? "जीवन परिचय" : "Biography"} <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="px-7 py-3.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-xl font-bold uppercase text-[10px]  transition-all">
              {isHi ? "संपर्क" : "Contact"}
            </Link>
          </div>
        </div>
      </div>

      {/* 📊 LIGHT STATS BAR */}
      <div className="hero-stats-bar relative z-30 w-[94%] mx-auto mb-8 hidden lg:grid grid-cols-4 gap-4 px-6 py-6 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm">
        {[
          { icon: <Zap className="text-orange-500" />, val: "5+", label: "MLA Terms" },
          { icon: <Building className="text-emerald-600" />, val: "100+", label: "Projects" },
          { icon: <Calendar className="text-blue-600" />, val: "45+", label: "Years Exp." },
          { icon: <Award className="text-yellow-600" />, val: "1200+", label: "Villages" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-4 border-r border-slate-200 last:border-0 justify-center">
            <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-sm">{stat.icon}</div>
            <div>
              <div className="text-2xl font-black text-slate-800">{stat.val}</div>
              <div className="text-[9px] uppercase font-black text-slate-400  ">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;