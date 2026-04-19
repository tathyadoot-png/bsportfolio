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
    <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-white text-slate-900 flex flex-col">
      
      {/* 🖼️ IMAGE SECTION */}
      {/* md:mt-0 rakha hai par z-index aur container padding se handle kiya hai */}
      <div className="relative md:absolute inset-0 w-full h-[45vh] md:h-full mt-24 md:mt-0 z-0">
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
      </div>

      {/* 📝 CONTENT LAYER */}
      {/* pt-32 desktop par navbar se gap maintain karega aur pb-48 stats bar se upar rakhega */}
      <div className="relative z-20 flex-grow w-[90%] max-w-[1400px] mx-auto flex flex-col justify-start md:justify-end items-start md:items-end py-8 md:pt-32 md:pb-48">
        <div className="hero-content space-y-5 md:space-y-6 flex flex-col items-start md:items-end text-left md:text-right">
          
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/10 text-orange-600 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase">
              {isHi ? "जनसेवा एवं विकास का संकल्प" : "Leadership & Vision"}
            </span>
          </div>

          <h1 className="font-gotu text-5xl md:text-[6.5rem] lg:text-[8.5rem] leading-[0.9] text-slate-900 drop-shadow-sm">
            <span className=" text-orange-500 text-shadow pb-3 italic block opacity-80">{isHi ? "भूपेन्द्र" : "Bhupendra"}</span>
            <span className="font-bold text-orange-500 block md:pr-4 pl-10 ">{isHi ? "सिंह" : "Singh"}</span>
          </h1>

          <p className="text-sm md:text-lg text-slate-700 font-asar max-w-lg leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-orange-500/40 pl-6 md:pl-0 md:pr-6">
            {isHi 
              ? "अनुभव के 45 वर्ष, विकास की अटूट प्रतिबद्धता।" 
              : "45 Years of service and commitment to progress."}
          </p>

          <div className="flex flex-wrap md:flex-row-reverse gap-4 pt-2">
            <Link to="/about" className="group px-7 py-3.5 bg-orange-500 text-white rounded-xl font-bold uppercase text-[10px] flex items-center gap-3 transition-all shadow-md hover:shadow-orange-500/30">
              {isHi ? "जीवन परिचय" : "Biography"} <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="px-7 py-3.5 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl font-bold uppercase text-[10px] transition-all">
              {isHi ? "संपर्क" : "Contact"}
            </Link>
          </div>
        </div>
      </div>

      {/* 📊 LIGHT STATS BAR */}
      <div className="hero-stats-bar relative md:absolute bottom-6 left-1/2 md:-translate-x-1/2 z-30 w-[94%] mx-auto mb-8 md:mb-0 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-6 bg-white/80 md:bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg">
        {[
          { icon: <Zap className="text-orange-500" />, val: "5+", label: "MLA Terms" },
          { icon: <Building className="text-emerald-600" />, val: "100+", label: "Projects" },
          { icon: <Calendar className="text-blue-600" />, val: "45+", label: "Years Exp." },
          { icon: <Award className="text-yellow-600" />, val: "1200+", label: "Villages" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-4 border-r border-slate-200 last:border-0 justify-center">
            <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-sm">{stat.icon}</div>
            <div>
              <div className="text-xl md:text-2xl font-black text-slate-800">{stat.val}</div>
              <div className="text-[9px] uppercase font-black text-slate-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;