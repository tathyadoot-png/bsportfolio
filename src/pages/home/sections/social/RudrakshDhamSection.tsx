import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Lang } from "@/layouts/MainLayout";
import { rudrakshDhamData } from "@/data/rudrakshDhamData";
import { Calendar, MapPin, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  lang: Lang;
  preview?: boolean;
};

const RudrakshDhamSection = ({ lang, preview = false }: Props) => {
  const isHi = lang === "hi";
  const sectionRef = useRef(null);
  
  const [expandedEvent, setExpandedEvent] = useState<string | number | null>(null);
  const [sliderData, setSliderData] = useState<{ images: string[], index: number } | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".events-container",
          start: "top 85%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className="w-full bg-[#fcfcfc] py-20 relative overflow-hidden">
      
      {/* Universal Section Heading Component */}
      <SectionHeading 
        title={isHi ? "रुद्राक्ष धाम" : "Rudraksha Dham"} 
        subtitle={isHi ? "आध्यात्मिक केंद्र एवं सेवा" : "Spiritual Center & Service"} 
        lang={lang}
        titleColor="text-[#112250]"
        subtitleColor="text-[#FF9933]"
      />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="events-container space-y-32 mt-20">
          {rudrakshDhamData.map((event, index) => {
            const isExpanded = expandedEvent === event.id;
            // Hum cover image ko skip kar rahe hain, sirf gallery images use kar rahe hain
            const galleryImages = event.images; 

            return (
              <div key={event.id} className="event-card grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                
                {/* 📝 INFO SIDE (Sticky) */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[1.5px] w-10 bg-[#FF9933]" />
                    <span className="text-[#FF9933] font-bold text-[9px] uppercase">Sacred Initiative</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-[#112250] mb-6 leading-tight  ">
                    {event.title[lang]}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                      <MapPin size={14} className="text-[#FF9933]" />
                      <span className="text-xs font-bold text-[#112250]">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                      <Calendar size={14} className="text-[#FF9933]" />
                      <span className="text-xs font-bold text-[#112250]">{event.date}</span>
                    </div>
                  </div>

                  <p className="text-slate-500 font-asar text-xl leading-relaxed italic border-l-4 border-slate-200 pl-6 mb-8">
                    {event.description[lang]}
                  </p>

                  {preview && (
                    <a href="/rudraksh-dham" className="inline-flex items-center gap-2 text-[#112250] font-black text-[10px] uppercase   hover:text-[#FF9933] transition-colors">
                      {isHi ? "और जानें" : "Learn More"} →
                    </a>
                  )}
                </div>

                {/* 🖼️ MEDIA SIDE (No Cover Image) */}
                <div className="lg:col-span-7">
                  <motion.div layout className="grid grid-cols-6 gap-4 md:gap-5">
                    {/* 1st Image (Badi Spotlight) */}
                    <motion.div 
                      layout
                      whileHover={{ scale: 1.01 }}
                      className="col-span-6 h-[350px] md:h-[480px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl relative group border-4 border-white"
                      onClick={() => setSliderData({ images: galleryImages, index: 0 })}
                    >
                      <img src={galleryImages[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/40 to-transparent" />
                    </motion.div>

                    {/* 2nd & 3rd Images (Thumbnails) */}
                    {galleryImages.slice(1, 3).map((img, i) => (
                      <motion.div 
                        layout
                        whileHover={{ scale: 1.03 }}
                        key={i} 
                        className={`h-36 md:h-48 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg border-4 border-white ${i === 0 ? 'col-span-4' : 'col-span-2'}`}
                        onClick={() => setSliderData({ images: galleryImages, index: i + 1 })}
                      >
                        <img src={img} className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* 📂 DYNAMIC EXPANSION (Remaining Images) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="mt-5 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                          {galleryImages.slice(3).map((img, sIdx) => (
                            <motion.div 
                              layout
                              key={sIdx} 
                              onClick={() => setSliderData({ images: galleryImages, index: sIdx + 3 })}
                              className="aspect-[4/3] rounded-[2rem] overflow-hidden cursor-pointer border-4 border-white shadow-md hover:scale-[1.05] transition-transform"
                            >
                              <img src={img} className="w-full h-full object-cover" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 🔘 SLIM THEME BUTTON */}
                  {!preview && galleryImages.length > 3 && (
                    <motion.button 
                      layout
                      onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                      className="w-full mt-6 py-5 bg-[#112250] text-white rounded-[2.5rem] flex items-center justify-center gap-3 hover:bg-[#FF9933] transition-all shadow-xl active:scale-[0.98] group"
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} className="animate-bounce" />}
                      <span className="text-[9px] font-black uppercase">
                        {isExpanded ? "Show Less" : `View ${galleryImages.length - 3} More Moments`}
                      </span>
                    </motion.button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 🌌 KEYBOARD CONTROLLED SLIDER */}
      <AnimatePresence>
        {sliderData && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] bg-white/95 backdrop-blur-3xl flex flex-col items-center justify-center p-6">
            <div className="absolute top-10 flex items-center gap-4 text-[#112250]/30 font-black text-[9px]  uppercase">
               <span>Gallery</span> <div className="w-10 h-px bg-[#112250]/10" /> <span>{sliderData.index + 1} / {sliderData.images.length}</span>
            </div>
            <div className="relative w-full max-w-6xl flex items-center justify-center">
              <button onClick={(e) => {e.stopPropagation(); setSliderData({...sliderData, index: (sliderData.index - 1 + sliderData.images.length) % sliderData.images.length})}} className="absolute left-0 lg:-left-20 p-5 bg-white shadow-xl text-[#112250] rounded-full hover:bg-[#FF9933] hover:text-white transition-all z-50">
                <ChevronLeft size={28} />
              </button>
              <motion.img 
                key={sliderData.index} 
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }} 
                src={sliderData.images[sliderData.index]} 
                className="max-h-[75vh] w-full object-contain rounded-[3rem] shadow-2xl border-[15px] border-white bg-white" 
              />
              <button onClick={(e) => {e.stopPropagation(); setSliderData({...sliderData, index: (sliderData.index + 1) % sliderData.images.length})}} className="absolute right-0 lg:-right-20 p-5 bg-white shadow-xl text-[#112250] rounded-full hover:bg-[#FF9933] hover:text-white transition-all z-50">
                <ChevronRight size={28} />
              </button>
            </div>
            <button onClick={() => setSliderData(null)} className="mt-10 px-12 py-4 bg-[#112250] text-white rounded-full font-black flex items-center gap-3 hover:bg-[#FF9933] hover:scale-105 transition-all shadow-xl text-[9px] ">
              <X size={16} /> CLOSE GALLERY
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RudrakshDhamSection;