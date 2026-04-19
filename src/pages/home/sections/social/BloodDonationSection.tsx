import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bloodDonationData } from "@/data/bloodDonationData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

interface Props {
  lang: "hi" | "en";
}

const BloodDonationSection = ({ lang }: Props) => {

  const [expandedEvent, setExpandedEvent] = useState<string | number | null>(null);
  const [sliderData, setSliderData] = useState<{ images: string[], index: number } | null>(null);

  // ✅ FIX: events separate
  const events = bloodDonationData.events;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sliderData) return;
      if (e.key === "ArrowRight") nextImg(new MouseEvent('click') as any);
      if (e.key === "ArrowLeft") prevImg(new MouseEvent('click') as any);
      if (e.key === "Escape") setSliderData(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sliderData]);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!sliderData) return;
    setSliderData({ ...sliderData, index: (sliderData.index + 1) % sliderData.images.length });
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!sliderData) return;
    setSliderData({ ...sliderData, index: (sliderData.index - 1 + sliderData.images.length) % sliderData.images.length });
  };

  return (
    <div className="w-full  bg-transparent">

      <div className="w-[94%] lg:w-[88%] mx-auto">

        {/* 🔥 HEADING + HIGHLIGHT */}
        <div className="mb-9 text-center">
          <SectionHeading
            title={lang === "hi" ? "रक्तदान सेवा" : "Blood Donation"}
            subtitle={lang === "hi" ? "मानवता की सेवा" : "Service to Humanity"}
            lang={lang}
          />

          <p className="text-primary font-bold text-lg ">
            {bloodDonationData.highlight[lang]}
          </p>
        </div>

        {/* 🔥 EVENTS */}
        {events.map((event) => {
          const isExpanded = expandedEvent === event.id;
          const allImages = [event.coverImage, ...event.images];

          return (
            <div key={event.id} className="mb-24">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT */}
                <div className="lg:col-span-5">

                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-8 bg-red-600"></span>
                    <p className="text-red-600 font-bold text-[10px] uppercase italic">
                      Impact Story
                    </p>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                    {event.title[lang]}
                  </h1>

                  <p className="text-slate-500 text-lg leading-relaxed mb-8 border-l-4 border-slate-100 pl-6">
                    {event.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-4">

                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-50">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-bold">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-50">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-bold">{event.location}</span>
                    </div>

                  </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-7">

                  <div className="grid grid-cols-4 gap-4">

                    <div
                      className="col-span-4 h-64 md:h-96 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl"
                      onClick={() => setSliderData({ images: allImages, index: 0 })}
                    >
                      <img src={event.coverImage} className="w-full h-full object-cover" />
                    </div>

                    {event.images.slice(0, 3).map((img, i) => (
                      <div
                        key={i}
                        className={`h-24 md:h-36 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform ${i === 0 ? 'col-span-2' : 'col-span-1'}`}
                        onClick={() => setSliderData({ images: allImages, index: i + 1 })}
                      >
                        <img src={img} className="w-full h-full object-cover" />
                      </div>
                    ))}

                  </div>

                  {/* EXTRA IMAGES */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                          {event.images.slice(3).map((img, idx) => (
                            <div
                              key={idx}
                              className="aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-md hover:scale-105 transition-transform"
                              onClick={() => setSliderData({ images: allImages, index: idx + 4 })}
                            >
                              <img src={img} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* BUTTON */}
                  {event.images.length > 3 && (
                    <button
                      onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                      className="w-full mt-6 py-4 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white hover:bg-red-600 transition-all active:scale-[0.98] shadow-lg"
                    >
                      <div className="flex flex-col items-center gap-1">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        <span className="text-[10px] font-bold uppercase">
                          {isExpanded ? 'Show Less' : `+${event.images.length - 3} More Images`}
                        </span>
                      </div>
                    </button>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔥 SLIDER */}
      <AnimatePresence>
        {sliderData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
          >
            <div className="absolute top-10 text-black font-black text-xs opacity-30">
              {sliderData.index + 1} / {sliderData.images.length}
            </div>

            <div className="relative w-full max-w-6xl flex items-center justify-center">

              <button onClick={prevImg} className="absolute -left-4 md:-left-20 p-5 bg-black/5 hover:bg-black/10 rounded-full z-50">
                <ChevronLeft className="w-8 h-8" />
              </button>

              <motion.img
                key={sliderData.index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                src={sliderData.images[sliderData.index]}
                className="max-h-[75vh] w-full object-contain rounded-[3rem] shadow-2xl"
              />

              <button onClick={nextImg} className="absolute -right-4 md:-right-20 p-5 bg-black/5 hover:bg-black/10 rounded-full z-50">
                <ChevronRight className="w-8 h-8" />
              </button>

            </div>

            <button
              onClick={() => setSliderData(null)}
              className="mt-12 px-12 py-5 bg-black text-white rounded-full font-black flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
            >
              <X className="w-5 h-5" /> CLOSE VIEW
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BloodDonationSection;