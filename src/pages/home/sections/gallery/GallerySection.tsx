import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "@/data/galleryData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { Maximize2, Calendar, Filter } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const GallerySection = ({ lang, preview = false }: Props) => {
  const [year, setYear] = useState("all");
  const [category, setCategory] = useState("all");

  const filtered = galleryData.filter((item) => {
    return (
      (year === "all" || item.year === year) &&
      (category === "all" || item.category === category)
    );
  });

const displayImages = preview
  ? filtered
      .flatMap((i) =>
        i.images.map((img) => {
          const src = typeof img === "string" ? img : img.src;
          const date = typeof img === "string" ? "" : img.date;

          return {
            url: src,
            date,
            category: i.category,
            year: i.year,
          };
        })
      )
      .slice(0, 8)
  : filtered.flatMap((i) =>
      i.images.map((img) => {
        const src = typeof img === "string" ? img : img.src;
        const date = typeof img === "string" ? "" : img.date;

        return {
          url: src,
          date,
          category: i.category,
          year: i.year,
        };
      })
    );

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="w-[92%] lg:w-[90%] mx-auto">
        
        {/* 🏷️ REUSABLE HEADING */}
        <div className="mb-10 md:mb-16">
          <SectionHeading 
            title={lang === "hi" ? "फोटो गैलरी" : "Visual Journey"} 
            subtitle={lang === "hi" ? "जनसेवा और कार्यक्रमों की यादगार झलकियां" : "Moments captured from the field and public service"} 
            lang={lang}
          />
        </div>

        {/* ❌ FILTERS: Ultra-Responsive Version */}
        {!preview && (
          <div className="flex flex-col gap-6 mb-12">
            
            {/* Year Scroll Track */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2 px-1">
                <Calendar size={12} /> {lang === "hi" ? "वर्ष चुनें" : "Select Year"}
              </span>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-2 px-2">
                {["all", "2025", "2024", "2023"].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYear(y)}
                    className={`flex-shrink-0 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${
                      year === y 
                      ? 'bg-[#112250] text-white border-[#112250] shadow-md' 
                      : 'bg-white text-slate-500 border-slate-200 hover:border-[#112250]'
                    }`}
                  >
                    {y === "all" ? (lang === "hi" ? "सभी" : "All") : y}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Track */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2 px-1">
                <Filter size={12} /> {lang === "hi" ? "श्रेणी" : "Category"}
              </span>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-2 px-2">
                {[
                  { id: "all", hi: "सभी इवेंट्स", en: "All Events" },
                  { id: "blood", hi: "रक्तदान", en: "Blood Donation" },
                  { id: "political", hi: "राजनीतिक", en: "Political" },
                  { id: "vivah", hi: "विवाह", en: "Vivah" },
                  { id: "ServiceSociety", hi: "सेवा समाज", en: "Service Society" }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`flex-shrink-0 px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all border ${
                      category === cat.id 
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' 
                      : 'bg-white text-slate-500 border-slate-200 hover:border-emerald-600'
                    }`}
                  >
                    {lang === "hi" ? cat.hi : cat.en}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 🖼️ DYNAMIC MASONRY GRID (Mobile Fixed) */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {displayImages.map((img, i) => (
              <motion.div
                layout
                key={img.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative group break-inside-avoid rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden cursor-pointer bg-slate-100"
              >
                {/* Image */}
                <img
                  src={img.url}
                  alt="Gallery"
                  loading="lazy"
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlays (Hidden on mobile touch by default, shows on click/hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                   <div className="flex items-center gap-2 mb-1">
                      <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">{img.year}</span>
                   </div>
                   <h4 className="text-white font-gotu font-bold text-xs md:text-sm capitalize">{img.category}</h4>
                   
                   <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 size={14} />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 🚀 MOBILE CTA */}
        {preview && (
          <div className="mt-12 md:mt-20 flex justify-center">
            <Link to="/gallery" className="w-full md:w-auto">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="w-full md:px-12 py-4 rounded-full bg-[#112250] text-white text-[10px] font-black uppercase tracking-[0.4em] shadow-xl"
              >
                {lang === "hi" ? "गैलरी खोलें" : "Open Full Gallery"}
              </motion.button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default GallerySection;