import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { sammanData } from "@/data/sammanData";
import { sammanGalleryData } from "@/data/sammanGalleryData";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, X, Heart, Award, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

// ✅ Props define kar di hain
interface Props {
  lang: Lang;
  preview?: boolean;
}

const SammanSection = ({ lang, preview = false }: Props) => {
  const isHi = lang === "hi";
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const [sliderData, setSliderData] = useState<{ images: string[], index: number } | null>(null);

  const filteredImages = sammanGalleryData
    .filter((item) => active === "all" || item.category === active)
    .map(item => item.image);

  const icons = [<Award size={22} />, <Users size={22} />, <Heart size={22} />];

  // Keyboard controls
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
    <section className="w-full bg-white py-12 md:py-16 relative overflow-hidden">
      
      {/* 🎯 HEADER - Compact and Clean */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
            <SectionHeading 
            title={sammanData.title[lang]} 
            subtitle={isHi ? "समाज सेवा की एक पहल" : "A Social Initiative"} 
            lang={lang}
            titleColor="text-[#112250]"
            subtitleColor="text-[#FF9933]"
            />
            <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto text-slate-500 font-asar text-lg md:text-xl mt-[-25px] italic leading-relaxed"
            >
            {sammanData.description[lang]}
            </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* 📊 SIDEBAR: CATEGORIES & HIGHLIGHTS */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Minimal Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
              {["all", "blanket", "education", "help"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActive(cat); setExpanded(false); }}
                  className={`flex-1 px-3 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                    active === cat ? "bg-[#112250] text-white shadow-md" : "text-slate-400 hover:bg-white hover:text-[#112250]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* highlights - Simple & Elegant */}
            <div className="grid grid-cols-1 gap-4">
              {sammanData.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-3xl bg-slate-50 border border-slate-50 hover:border-[#FF9933]/20 hover:bg-white hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#FF9933] flex items-center justify-center shadow-sm">
                        {icons[i]}
                    </div>
                    <h4 className="font-bold text-[#112250] text-base">{item.title[lang]}</h4>
                  </div>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">{item.desc[lang]}</p>
                </motion.div>
              ))}
            </div>

            {preview && (
              <Link to="/samman-seva" className="flex items-center justify-center gap-3 w-full py-5 bg-[#FF9933] text-white rounded-3xl font-black uppercase text-[10px] tracking-widest hover:bg-[#112250] transition-all shadow-lg shadow-orange-200">
                {isHi ? "और विस्तार से देखें" : "Explore More"}
                <ArrowRight size={16} />
              </Link>
            )}
          </div>

          {/* 🖼️ GALLERY GRID - Asymmetric Layout */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
              {/* Main Visual */}
              {filteredImages.length > 0 && (
                <motion.div 
                  className="col-span-2 md:col-span-6 h-[300px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white cursor-pointer"
                  onClick={() => setSliderData({ images: filteredImages, index: 0 })}
                >
                  <img src={filteredImages[0]} className="w-full h-full object-cover" alt="Main" />
                </motion.div>
              )}

              {/* Smaller Grid items */}
              {filteredImages.slice(1, 5).map((img, i) => (
                <motion.div 
                  key={i}
                  className={`rounded-3xl overflow-hidden shadow-lg border-2 border-white cursor-pointer h-32 md:h-48 ${
                    i % 3 === 0 ? 'col-span-1 md:col-span-3' : 'col-span-1 md:col-span-3'
                  }`}
                  onClick={() => setSliderData({ images: filteredImages, index: i + 1 })}
                >
                  <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt="Sub" />
                </motion.div>
              ))}
            </div>

            {/* Load More Logic */}
            <AnimatePresence>
              {expanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-4 overflow-hidden"
                >
                  {filteredImages.slice(5).map((img, sIdx) => (
                    <div key={sIdx} onClick={() => setSliderData({ images: filteredImages, index: sIdx + 5 })} className="aspect-square rounded-3xl overflow-hidden border-2 border-white shadow-md cursor-pointer">
                      <img src={img} className="w-full h-full object-cover" alt="Gallery" />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {!preview && filteredImages.length > 5 && (
              <button 
                onClick={() => setExpanded(!expanded)}
                className="w-full mt-8 py-5 border-2 border-slate-100 text-[#112250] rounded-3xl flex items-center justify-center gap-3 hover:bg-[#112250] hover:text-white transition-all font-bold text-[10px] uppercase tracking-widest"
              >
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {expanded ? "Show Less" : `See ${filteredImages.length - 5} More`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 🌌 SLIDER MODAL */}
      <AnimatePresence>
        {sliderData && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-4">
            <div className="relative w-full max-w-5xl flex items-center justify-center">
              <button onClick={() => setSliderData({...sliderData, index: (sliderData.index - 1 + sliderData.images.length) % sliderData.images.length})} className="absolute left-0 p-4 bg-white shadow-xl rounded-full text-[#112250] z-50"><ChevronLeft /></button>
              <img src={sliderData.images[sliderData.index]} className="max-h-[70vh] rounded-[2rem] shadow-2xl border-8 border-white object-contain" alt="Preview" />
              <button onClick={() => setSliderData({...sliderData, index: (sliderData.index + 1) % sliderData.images.length})} className="absolute right-0 p-4 bg-white shadow-xl rounded-full text-[#112250] z-50"><ChevronRight /></button>
            </div>
            <button onClick={() => setSliderData(null)} className="mt-8 px-10 py-4 bg-[#112250] text-white rounded-full font-black text-[10px] tracking-widest flex items-center gap-2 transition-transform active:scale-95">
              <X size={16} /> CLOSE GALLERY
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ✅ Yeh line zaroor check karna, bina iske error aayegi
export default SammanSection;