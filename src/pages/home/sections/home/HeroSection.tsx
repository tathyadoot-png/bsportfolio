import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Zap, Building, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import gsap from "gsap";

// Swiper CSS (Very Important)
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
      // Text and Stats entrance
      const tl = gsap.timeline();
      tl.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }).from(".hero-stats-bar", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out"
      }, "-=0.5");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* 🖼️ ULTRA-SMOOTH BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }} // Fixes the overlap/ghosting issue
          speed={2000} 
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index} className="bg-black">
              {/* Ken Burns Animation */}
              <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 5, ease: "easeOut" }}
                className="h-full w-full"
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-cover object-top opacity-50"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Modern Overlays for Readability */}
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
      </div>

      {/* 📝 CONTENT LAYER */}
      <div className="relative z-20 h-full w-[94%] max-w-[1500px] mx-auto flex flex-col justify-center">
        <div className="hero-content max-w-4xl space-y-8">
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
              {isHi ? "जनसेवा एवं विकास का संकल्प" : "The Visionary Leader"}
            </span>
          </div>

          <h1 className="font-gotu text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter">
            <span className="font-semibold italic block opacity-80 pb-6">{isHi ? "भूपेंद्र" : "Bhupendra"}</span>
            <span className="font-semibold text-orange-500 block pt-6 ps-32">{isHi ? "सिंह" : "Singh"}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-asar max-w-2xl leading-relaxed border-l-4 border-orange-500/60 pl-8">
            {isHi 
              ? "अनुभव के 45 वर्ष, विकास की अटूट प्रतिबद्धता। सागर के हृदय सम्राट।" 
              : "45 Years of unwavering commitment. A leader built by the people, for the people."}
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/about" className="group relative px-10 py-5 bg-orange-500 text-white rounded-2xl font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/20">
              <span className="relative z-10 flex items-center gap-3">
                {isHi ? "जीवन परिचय" : "Biography"} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link to="/contact" className="px-10 py-5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold uppercase tracking-widest transition-all">
              {isHi ? "संपर्क" : "Contact"}
            </Link>
          </div>
        </div>

        {/* 📊 MODERN GLASS STATS BAR */}
        <div className="hero-stats-bar absolute bottom-12 left-0 right-0 hidden lg:grid grid-cols-4 gap-4 px-8 py-6 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem]">
          {[
            { icon: <Zap className="text-orange-400" />, val: "5+", label: "MLA Terms" },
            { icon: <Building className="text-emerald-400" />, val: "100+", label: "Projects" },
            { icon: <Calendar className="text-blue-400" />, val: "45+", label: "Years Exp." },
            { icon: <Award className="text-yellow-400" />, val: "1200+", label: "Villages" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-5 border-r border-white/5 last:border-0 justify-center">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/5">{stat.icon}</div>
              <div>
                <div className="text-3xl font-bold text-white tracking-tighter">{stat.val}</div>
                <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Dot Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-orange-500 rounded-full" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;