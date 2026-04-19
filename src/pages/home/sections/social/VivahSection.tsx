import { useState, useEffect, useRef } from "react";
import { vivahData } from "@/data/vivahData";
import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VivahSection = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const isHi = lang === "hi";
  const sectionRef = useRef<HTMLDivElement>(null);

  const [expandedEvent, setExpandedEvent] = useState<string | number | null>(null);
  const [sliderData, setSliderData] = useState<{ images: string[], index: number } | null>(null);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".impact-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".impact-card",
          start: "top 85%",
        }
      });

      gsap.utils.toArray(".event-row").forEach((row: any) => {
        gsap.from(row, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
          }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Keyboard Navigation for Slider
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sliderData) return;
      if (e.key === "ArrowRight") setSliderData(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null);
      if (e.key === "ArrowLeft") setSliderData(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null);
      if (e.key === "Escape") setSliderData(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sliderData]);

  return (
    <section ref={sectionRef} className="w-full pb-32 bg-[#fcfcfc] overflow-hidden">
      <SectionHeading 
        title={vivahData.title[lang]} 
        subtitle={isHi ? "कन्यादान : सबसे बड़ा पुण्य" : "The Sacred Union of Hearts"} 
        lang={lang}
        titleColor="text-[#112250]"
        subtitleColor="text-[#FF9933]"
      />

      {/* 📊 PREMIUM COMPACT STATS */}
      <div className="w-full px-4 md:px-10 mb-20 impact-card">
        <div className="w-full bg-[#112250] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-[#FF9933] rounded-2xl rotate-3 group-hover:rotate-0 transition-transform">
                <Sparkles className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-5xl md:text-6xl font-black text-[#FF9933] leading-none">
                  {vivahData.total[lang].split(' ')[0]}<span className="text-white"></span>
                </h3>
                <p className="text-white/40 uppercase text-[10px] font-bold mt-1">
                  {vivahData.total[lang].split(' ').slice(1).join(' ')}
                </p>
              </div>
            </div>
            <div className="h-px w-full md:h-16 md:w-px bg-white/10" />
            <p className="max-w-xl text-xl md:text-2xl font-asar italic text-white/80 text-center md:text-left">
              "{vivahData.highlight[lang]}"
            </p>
          </div>
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9933]/10 blur-[80px] rounded-full" />
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="space-y-32">
          {vivahData.events.map((event, idx) => {
            const isExpanded = expandedEvent === idx;
            const galleryImages = event.images;

            return (
              <div key={idx} className="event-row grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* 📝 LEFT: STICKY CONTENT */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF9933]/10 text-[#FF9933] rounded-full mb-6">
                    <span className="w-2 h-2 bg-[#FF9933] rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase  ">Welfare Initiative</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#112250] mb-6 leading-[1.1]  ">
                    {event.title[lang]}
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                      <Calendar size={14} className="text-[#FF9933]" />
                      <span className="text-xs font-bold text-[#112250] opacity-70">{event.date[lang]}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                      <MapPin size={14} className="text-[#FF9933]" />
                      <span className="text-xs font-bold text-[#112250] opacity-70">{event.location[lang]}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 font-asar text-xl leading-relaxed italic border-l-4 border-[#FF9933]/30 pl-8">
                    {event.description[lang]}
                  </p>
                </div>

                {/* 🖼️ RIGHT: DYNAMIC BENTO GRID */}
                <div className="lg:col-span-7">
                  <motion.div layout className="grid grid-cols-6 gap-4 md:gap-6">
                    {/* Big Spotlight */}
                    <motion.div 
                      layout 
                      className="col-span-6 h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl relative group"
                      onClick={() => setSliderData({ images: galleryImages, index: 0 })}
                    >
                      <img src={galleryImages[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/40 via-transparent to-transparent" />
                    </motion.div>
                    
                    {/* Small Thumbnails */}
                    {galleryImages.slice(1, 3).map((img, i) => (
                      <motion.div 
                        layout 
                        key={i} 
                        className={`h-36 md:h-52 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg border-2 border-white transition-all hover:scale-[1.05] ${i === 0 ? 'col-span-4' : 'col-span-2'}`} 
                        onClick={() => setSliderData({ images: galleryImages, index: i + 1 })}
                      >
                        <img src={img} className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* 📂 EXPANDABLE CONTENT */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                          {galleryImages.slice(3).map((img, sIdx) => (
                            <motion.div 
                              layout
                              key={sIdx} 
                              onClick={() => setSliderData({ images: galleryImages, index: sIdx + 3 })}
                              className="aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer border-2 border-white shadow-md hover:brightness-110 transition-all"
                            >
                              <img src={img} className="w-full h-full object-cover" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 🔘 WOW EFFECT BUTTON */}
                  {galleryImages.length > 3 && (
                    <motion.button 
                      layout
                      onClick={() => setExpandedEvent(isExpanded ? null : idx)}
                      className="w-full mt-8 py-5 group relative overflow-hidden bg-[#112250] text-white rounded-[2rem] shadow-xl active:scale-[0.98] transition-all"
                    >
                      <div className="absolute inset-0 bg-[#FF9933] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} className="animate-bounce" />}
                        <span className="text-[10px] font-black uppercase ">
                          {isExpanded ? 'Show Less' : `View all ${galleryImages.length - 3} Moments`}
                        </span>
                      </div>
                    </motion.button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🌌 FULLSCREEN SLIDER (Responsive & Keyboard Controlled) */}
      <AnimatePresence>
        {sliderData && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[10000] bg-[#112250]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10"
          >
            <div className="absolute top-8 flex items-center gap-4 text-white/30 font-black text-[10px] uppercase">
               <span>Immersion Mode</span> <div className="w-12 h-px bg-white/10" /> <span>{sliderData.index + 1} / {sliderData.images.length}</span>
            </div>

            <div className="relative w-full max-w-6xl flex items-center justify-center group">
              {/* Navigation Controls */}
              <button 
                onClick={(e) => {e.stopPropagation(); setSliderData({...sliderData, index: (sliderData.index - 1 + sliderData.images.length) % sliderData.images.length})}} 
                className="absolute left-0 md:-left-20 p-5 bg-white shadow-2xl text-[#112250] rounded-full hover:bg-[#FF9933] hover:text-white transition-all z-50 opacity-0 md:group-hover:opacity-100"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.div 
                key={sliderData.index}
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full relative"
              >
                <img 
                  src={sliderData.images[sliderData.index]} 
                  className="max-h-[70vh] w-full object-contain rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] border-[8px] md:border-[15px] border-white/5 bg-black/20" 
                />
              </motion.div>

              <button 
                onClick={(e) => {e.stopPropagation(); setSliderData({...sliderData, index: (sliderData.index + 1) % sliderData.images.length})}} 
                className="absolute right-0 md:-right-20 p-5 bg-white shadow-2xl text-[#112250] rounded-full hover:bg-[#FF9933] hover:text-white transition-all z-50 opacity-0 md:group-hover:opacity-100"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Close Button & Mobile Controls */}
            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="flex gap-4 md:hidden">
                 <button onClick={() => setSliderData({...sliderData, index: (sliderData.index - 1 + sliderData.images.length) % sliderData.images.length})} className="p-4 bg-white/10 rounded-full text-white"><ChevronLeft /></button>
                 <button onClick={() => setSliderData({...sliderData, index: (sliderData.index + 1) % sliderData.images.length})} className="p-4 bg-white/10 rounded-full text-white"><ChevronRight /></button>
              </div>
              <button onClick={() => setSliderData(null)} className="px-12 py-5 bg-white text-[#112250] rounded-full font-black flex items-center gap-4 hover:bg-[#FF9933] hover:text-white transition-all shadow-2xl text-[10px] ">
                <X size={18} /> EXIT GALLERY
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VivahSection;