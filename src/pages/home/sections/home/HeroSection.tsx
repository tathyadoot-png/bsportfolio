import { useEffect, useRef, useState } from "react";
import { ArrowRight, Award, Zap, Building, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

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
  const containerRef = useRef<HTMLElement>(null);
  const [activeCycle, setActiveCycle] = useState<number>(0);

  const panels = [
    { img: slid1, tag: isHi ? "जनसेवा संकल्प" : "Public Service" },
    { img: slid2, tag: isHi ? "क्षेत्रीय विकास" : "Infrastructure" },
    { img: slid3, tag: isHi ? "नेतृत्व विज़न" : "Statecraft Vision" },
    { img: slid4, tag: isHi ? "जनसंवाद सभा" : "Public Assembly" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Prevent structural flashes
      gsap.set(".hero-stagger-node", { y: 15, opacity: 0 });
      gsap.set(".grid-column-panel", { scale: 0.98, opacity: 0 });

      tl.to(".grid-column-panel", {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out",
      })
      .to(".hero-stagger-node", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out"
      }, "-=0.4");

      // Automated shift for visual focus sequence across all 4 images
      const interval = setInterval(() => {
        setActiveCycle((prev) => (prev + 1) % 4);
      }, 3500);

      return () => clearInterval(interval);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#fafaf9] text-slate-900 flex flex-col justify-between pt-24 lg:pt-0 font-poppins"
    >
      {/* Editorial Structural Gridline Accents */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0 opacity-40">
        <div className="col-span-5 border-r border-slate-200 h-full" />
        <div className="col-span-7 h-full" />
      </div>

      {/* Main Grid Mesh Layout */}
      <div className="relative z-10 w-full max-w-[1650px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 flex-grow items-center px-4 sm:px-8 lg:px-16 py-8 lg:py-0">
        
        {/* LEFT COLUMN: Clean Typography Architecture */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
          <div className="space-y-6 flex flex-col items-start text-left">
            
            {/* Context Badge */}
            <div className="hero-stagger-node inline-flex items-center gap-3 px-4 py-1.5 bg-slate-100 border border-slate-200/80 text-slate-600">
              <div className="w-1.5 h-1.5 bg-orange-600 animate-pulse" />
              <span className="text-[10px] font-black font-poppins uppercase ">
                {isHi ? "प्रगतिशील दृष्टिकोण" : "Leadership & Vision"}
              </span>
            </div>

            {/* Original Name UI Structure Restored */}
            <div className="relative hero-stagger-node">
              <span className="text-xs font-mono  uppercase text-orange-600 block mb-2 font-bold">
                {isHi ? "माननीय विधायक" : "Honorable MLA"}
              </span>
              <h1 className="font-gotu text-5xl sm:text-7xl md:text-8xl lg:text-[5rem] xl:text-[6.5rem] leading-[0.95] text-slate-900 tracking-tighter">
                <div className="text-[#0c5240] pb-3 font-gotu block opacity-90  pr-1">
                  {isHi ? "भूपेन्द्र" : "Bhupendra"}
                </div>
                <span className=" font-gotu text-[#0c5240] block pl-24">
                  {isHi ? "सिंह" : "Singh"}
                </span>
              </h1>
            </div>

            {/* Description context line */}
            <p className="hero-stagger-node text-base text-orange-600 max-w-xl leading-relaxed border-l-2 border-orange-600 pl-6">
              {isHi  
                ? "अनुभव के 45 वर्ष, विकास की अटूट प्रतिबद्धता और जनहित का संकल्प।" 
                : "A definitive legacy of 45 years built on governance, progress, and unwavering public commitment."}
            </p>

            {/* Action buttons */}
            <div className="hero-stagger-node flex flex-wrap gap-4 pt-2">
              <Link to="/about" className="group px-7 py-3.5 bg-[#0c5240] text-white font-bold uppercase text-[10px] tracking-widest flex items-center gap-3 transition-colors hover:bg-orange-600 shadow-md">
                {isHi ? "जीवन परिचय" : "Biography"} <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-7 py-3.5 bg-white border border-orange-600 text-orange-600 font-semibold uppercase text-[10px] tracking-widest transition-colors hover:bg-slate-50">
                {isHi ? "संपर्क" : "Contact"}
              </Link>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Ultra-Responsive High-Expansion Matrix */}
        <div className="col-span-1 lg:col-span-7 w-full flex items-center">
          <div className="flex flex-col lg:flex-row w-full h-[550px] lg:h-[60vh] gap-3 items-stretch">
            {panels.map((panel, idx) => {
              const isFocused = activeCycle === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCycle(idx)}
                  className={`grid-column-panel relative overflow-hidden border border-white shadow-md bg-slate-200 transition-all duration-1000 ease-in-out cursor-pointer ${
                    isFocused 
                      ? "h-[280px] lg:h-auto lg:flex-[5] z-20 shadow-xl" 
                      : "h-[70px] lg:h-auto lg:flex-[0.7] opacity-40 z-10 hover:opacity-60"
                  }`}
                >
                  <img
                    src={panel.img}
                    alt={panel.tag}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      isFocused 
                        ? "scale-105 saturate-100 filter brightness-100 contrast-105 object-center lg:object-top" 
                        : "scale-100 saturate-[0.1] filter brightness-90 object-center"
                    }`}
                  />
                  
                  <div className={`absolute inset-0 transition-opacity duration-1000 ${
                    isFocused ? "bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-95" : "bg-black/5"
                  }`} />

                  <div className={`absolute bottom-4 left-4 z-20 flex flex-col gap-1 transition-all duration-700 ${
                    isFocused ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-white bg-orange-600 px-3 py-1 w-fit whitespace-nowrap shadow-sm">
                      {panel.tag}
                    </span>
                  </div>

                  <div className={`absolute bottom-0 lg:top-0 lg:bottom-auto left-0 right-0 h-1 bg-orange-500 transition-transform duration-[3500ms] ease-linear origin-left ${
                    isFocused ? "scale-x-100" : "scale-x-0"
                  }`} />
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* REDESIGNED BOTTOM NODE: Ultra-Premium Luxury KPI Strip */}
      <div className="relative z-20 w-full bg-white border-t border-slate-200/60 py-8 lg:py-12 font-poppins">
        <div className="w-full max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-0 md:divide-x md:divide-slate-200/50">
            {[
              { icon: <Calendar size={15} />, val: "45+", label: "Years Exp.", desc: isHi ? "सक्रिय सार्वजनिक सेवा वर्ष" : "Active Public Service" },
              { icon: <Zap size={15} />, val: "5+", label: "MLA Terms", desc: isHi ? "लगातार निर्वाचित विधानसभा" : "Legislative Assemblies" },
              { icon: <Building size={15} />, val: "100+", label: "Projects", desc: isHi ? "पूर्ण वृहत बुनियादी ढांचे" : "Completed Infrastructure" },
              { icon: <Award size={15} />, val: "1200+", label: "Villages", desc: isHi ? "सशक्त और जुड़े ग्रामीण क्षेत्र" : "Connected Communities" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="hero-stagger-node group flex flex-col justify-between pl-0 md:pl-8 lg:pl-12 first:pl-0 transition-all duration-300 relative"
              >
                {/* Minimal Micro-Layout Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-slate-400 group-hover:text-orange-600 transition-colors duration-300">
                    {stat.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                    {stat.label}
                  </span>
                </div>
                
                {/* Main Minimal Value & Text Row */}
                <div className="flex items-baseline gap-3 md:gap-4 flex-wrap sm:flex-nowrap">
                  <div className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-slate-950 font-poppins transition-transform duration-300 group-hover:translate-x-1">
                    {stat.val}
                  </div>
                  <div className="text-[11px] text-slate-500 font-normal leading-normal pr-4 line-clamp-1 group-hover:text-slate-800 transition-colors duration-300">
                    {stat.desc}
                  </div>
                </div>

                {/* Apple-style thin interaction slide line */}
                <div className="absolute bottom-[-8px] lg:bottom-[-12px] left-0 md:left-8 lg:left-12 first:left-0 right-0 h-[1.5px] bg-orange-500 scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-75 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;