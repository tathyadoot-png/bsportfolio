import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { Lang } from "@/layouts/MainLayout";
import { sammanData } from "@/data/sammanData";
import { sammanGalleryData } from "@/data/sammanGalleryData";
import { getImageUrl } from "@/utils/cloudinary";

type Props = {
  lang: Lang;
  preview?: boolean;
};

const SammanSection = ({ lang, preview = false }: Props) => {
  const isHi = lang === "hi";
  const [active, setActive] = useState("all");

  return (
    <section className="w-full bg-[#fcfcfc] py-14 md:py-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Tag */}
        <span className="text-xs font-black uppercase tracking-widest text-yellow-600 bg-yellow-50 px-4 py-1.5 rounded-full">
          {sammanData.tag}
        </span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#112250] mt-4 mb-4 leading-tight"
        >
          {sammanData.title[lang]}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-[850px]"
        >
          {sammanData.description[lang]}
        </motion.p>

        {/* Highlights */}
        {!preview && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {sammanData.highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#112250] mb-2">
                  {item.title[lang]}
                </h3>
                <p className="text-sm md:text-base text-slate-500">
                  {item.desc[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* 🔥 FILTER BUTTONS */}
        {!preview && (
          <div className="mt-12 flex flex-wrap gap-2 sm:gap-3">
            {["all", "blanket", "education", "help"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full border transition ${
                  active === cat
                    ? "bg-yellow-500 text-white border-yellow-500"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-yellow-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* 🔥 GALLERY */}
        {!preview && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {sammanGalleryData
              .filter((item) => active === "all" || item.category === active)
              .map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <img
                   src={item.image}
                    alt={item.title[lang]}
                    className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-end p-3 sm:p-4">
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight">
                      {item.title[lang]}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Preview Button */}
        {preview && (
          <div className="mt-10">
            <Link
              to="/samman-seva"
              className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:gap-3 transition-all"
            >
              {isHi ? "और देखें" : "View Details"}
              <span>→</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default SammanSection;