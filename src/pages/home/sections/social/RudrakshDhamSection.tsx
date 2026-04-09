import { motion } from "framer-motion";
import type { Lang } from "@/layouts/MainLayout";
import { rudrakshDhamData } from "@/data/rudrakshDhamData";

type Props = {
  lang: Lang;
  preview?: boolean;
};

const RudrakshDhamSection = ({ lang, preview = false }: Props) => {
  const isHi = lang === "hi";

  return (
    <section className="w-full bg-[#fcfcfc] py-16 md:py-24 relative overflow-hidden">
      
      {/* background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* 🔥 Section Heading */}
        <span className="text-xs font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
          {isHi ? "रुद्राक्ष धाम" : "Rudraksha Dham"}
        </span>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold text-[#112250] mt-4 mb-6"
        >
          {isHi ? "आध्यात्मिक केंद्र एवं सेवा" : "Spiritual Center & Activities"}
        </motion.h2>

        <p className="text-lg text-slate-600 max-w-[800px]">
          {isHi
            ? "रुद्राक्ष धाम में समय-समय पर धार्मिक एवं सामाजिक आयोजन किए जाते हैं।"
            : "Various religious and social activities are आयोजित at Rudraksha Dham."}
        </p>

        {/* 🔁 Events */}
        <div className="mt-14 space-y-16">
          {rudrakshDhamData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl border p-6 md:p-10 shadow-sm"
            >
              
              {/* 🧾 Event Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#112250]">
                    {event.title[lang]}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    📍 {event.location} • 📅 {event.date}
                  </p>
                </div>

              </div>

              {/* 🖼️ Cover Image */}
              <div className="w-full h-[260px] md:h-[340px] rounded-2xl overflow-hidden mb-6">
                <img
                  src={event.coverImage}
                  alt={event.title[lang]}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* 📝 Description */}
              <p className="text-slate-600 mb-6 max-w-[800px]">
                {event.description[lang]}
              </p>

              {/* 🖼️ Gallery */}
              {!preview && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.images.slice(0, preview ? 4 : event.images.length).map((img, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl"
                    >
                      <img
                        src={img}
                        alt="gallery"
                        className="w-full h-[140px] object-cover hover:scale-110 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 🔗 Preview Button */}
        {preview && (
          <div className="mt-10">
            <a href="/rudraksh-dham" className="text-indigo-600 font-semibold">
              {isHi ? "और देखें →" : "View Details →"}
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default RudrakshDhamSection;