import { vivahData } from "@/data/vivahData";
import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion } from "framer-motion";
import { Calendar, MapPin, Heart, Image as ImageIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const VivahSection = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const isHi = lang === "hi";

  return (
    <section className="w-full pb-24 bg-[#fcfcfc]">
      {/* 🏷️ Dynamic Heading */}
      <SectionHeading 
        title={vivahData.title[lang]} 
        subtitle={isHi ? "कन्यादान : सबसे बड़ा दान" : "Supporting Dreams, Joining Hearts"} 
        lang={lang}
        titleColor="text-[#112250]"
        subtitleColor="text-pink-600"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* 📊 IMPACT STATS CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 p-8 rounded-[2rem] bg-gradient-to-r from-[#112250] to-[#1a3066] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-orange-400 mb-2">
              {vivahData.total[lang].split(' ')[0]}
            </h3>
            <p className="text-white/70 uppercase tracking-[0.2em] text-xs font-bold">
              {vivahData.total[lang].split(' ').slice(1).join(' ')}
            </p>
          </div>
          <p className="md:max-w-2xl text-lg md:text-xl font-asar leading-relaxed text-white/90 italic border-l-2 border-orange-500/30 pl-6 relative z-10">
            "{vivahData.highlight[lang]}"
          </p>
          {/* Background Decor */}
          <Heart className="absolute -right-10 -bottom-10 text-white/5" size={250} />
        </motion.div>

        {/* 🗓️ EVENTS LIST */}
        <div className="space-y-20">
          {vivahData.events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* LEFT: INFO (4 cols) */}
              <div className="lg:col-span-4 sticky top-32">
                <div className="flex items-center gap-3 mb-4">
                   <div className="px-4 py-1 rounded-full bg-pink-50 text-pink-600 text-[10px] font-black uppercase tracking-widest border border-pink-100">
                     Official Event
                   </div>
                   <div className="h-px flex-grow bg-slate-100" />
                </div>
                <h2 className="text-3xl md:text-4xl font-gotu font-black text-[#112250] mb-6 leading-tight">
                  {event.title[lang]}
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-slate-500">
                    <Calendar size={18} className="text-orange-500" />
                    <span className="text-sm font-bold">{event.date[lang]}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <MapPin size={18} className="text-orange-500" />
                    <span className="text-sm font-bold">{event.location[lang]}</span>
                  </div>
                </div>

                <p className="text-slate-600 font-asar text-lg leading-relaxed mb-8">
                  {event.description[lang]}
                </p>
              </div>

              {/* RIGHT: MEDIA GRID (8 cols) */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Big Cover Image */}
                  <div className="md:col-span-2 relative h-[400px] rounded-[2rem] overflow-hidden group/img shadow-xl">
                    <img src={event.cover} className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  {event.images.slice(1, 5).map((img, i) => (
                    <div key={i} className="h-64 rounded-[1.5rem] overflow-hidden shadow-lg border-4 border-white">
                      <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
                
                {/* View More Counter */}
                <div className="mt-6 flex justify-end">
                   <button className="flex items-center gap-2 text-[#112250] font-black text-[10px] uppercase tracking-widest hover:text-pink-600 transition-colors">
                     <ImageIcon size={16} /> 
                     +{event.images.length} Photos in Gallery
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VivahSection; // ✅ Ye default export hamesha hona chahiye