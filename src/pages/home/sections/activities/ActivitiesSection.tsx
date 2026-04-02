import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { activitiesData, Activity } from "@/data/activitiesData";

const ActivitiesSection = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [activeItem, setActiveItem] = useState<Activity | null>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeItem) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [activeItem]);

  const displayedActivities = [...activitiesData].reverse().slice(0, visibleCount);

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section id="activities" className="relative w-full bg-[#FDFDFD] overflow-hidden">
      
      {/* 1. TOP SEAMLESS HEADING - Full Width like About Section */}
      <div className="w-full md:pt-10 pb-10 bg-gradient-to-b from-gray-50 to-white">
        <SectionHeading 
          subtitle={isHi ? "सामाजिक सक्रियता" : "Engagement"}
          title={isHi ? "नवीनतम गतिविधियाँ" : "Latest Activities"} 
        />
      </div>

      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40rem] h-[40rem] bg-green/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-28 pb-24 relative z-10">
        
        {/* --- GRID SYSTEM --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-16"
        >
          {displayedActivities.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => { setActiveItem(item); setCurrentImage(0); }}
              className="group relative bg-white rounded-[2.5rem] p-3 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(228,107,46,0.1)] cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <img
                  src={item.cover}
                  alt={item.title.en}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green animate-ping" />
                  <span className="text-[10px] font-bold text-secondary tracking-tighter uppercase">{item.location}</span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-white p-4 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                      <ArrowUpRight className="text-primary" size={24} />
                   </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 text-muted text-[11px] font-bold mb-3 tracking-widest uppercase">
                  <Calendar size={14} className="text-primary" />
                  {item.date}
                </div>
                <h3 className="text-xl font-gotu font-bold text-secondary leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {isHi ? item.title.hi : item.title.en}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- LOAD MORE --- */}
        {visibleCount < activitiesData.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisibleCount(v => v + 3)}
              className="btn-saffron !rounded-full group flex items-center gap-4 py-4 px-10 shadow-lg"
            >
              <span>{isHi ? "और देखें" : "View More"}</span>
              <div className="w-2 h-2 rounded-full bg-white group-hover:w-8 transition-all" />
            </button>
          </div>
        )}
      </div>

      {/* --- PREMIUM MODAL --- */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-6 lg:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-secondary/80 backdrop-blur-xl" onClick={() => setActiveItem(null)} />
            
            <motion.div
              className="relative bg-white w-full max-w-[1400px] h-[90vh] sm:h-auto sm:max-h-[85vh] rounded-t-[3rem] sm:rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <button 
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 z-[1000] p-4 bg-white/10 hover:bg-primary text-white sm:text-secondary sm:bg-bg-soft rounded-full transition-all backdrop-blur-md"
              >
                <X size={24} />
              </button>

              {/* Media Section */}
              <div className="relative flex-[1.4] bg-black min-h-[40vh] sm:min-h-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={activeItem.images[currentImage]}
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full object-contain p-4 sm:p-8"
                    />
                  </AnimatePresence>
                </div>

                {activeItem.images.length > 1 && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-6 py-3 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 z-20">
                    <button onClick={() => setCurrentImage(c => (c - 1 + activeItem.images.length) % activeItem.images.length)} className="text-white hover:text-primary transition-colors">
                      <ChevronLeft size={24} />
                    </button>
                    <div className="flex gap-1.5">
                      {activeItem.images.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentImage ? "w-8 bg-primary" : "w-1.5 bg-white/40"}`} />
                      ))}
                    </div>
                    <button onClick={() => setCurrentImage(c => (c + 1) % activeItem.images.length)} className="text-white hover:text-primary transition-colors">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="flex-1 bg-white p-8 lg:p-16 overflow-y-auto">
                <div className="max-w-xl mx-auto space-y-8">
                  <div className="space-y-4 pt-4 sm:pt-0">
                    <div className="flex items-center gap-2 text-green font-bold text-xs tracking-widest uppercase">
                      <MapPin size={16} /> {activeItem.location}
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-gotu font-bold text-secondary leading-[1.1]">
                      {isHi ? activeItem.title.hi : activeItem.title.en}
                    </h2>
                    <p className="text-primary font-bold text-sm tracking-widest">{activeItem.date}</p>
                  </div>
                  <div className="w-20 h-1.5 bg-primary/20 rounded-full" />
                  <p className="text-muted font-playpen text-lg leading-relaxed text-justify">
                    {isHi ? activeItem.description.hi : activeItem.description.en}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Watermark - Exact match with About Section Legacy style */}
      <h1 className="absolute bottom-0 right-0 text-[22vw] font-black text-gray-400/5 leading-none select-none pointer-events-none uppercase">
        Vikas
      </h1>
    </section>
  );
};

export default ActivitiesSection;