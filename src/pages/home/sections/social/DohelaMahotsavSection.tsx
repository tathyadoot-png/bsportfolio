import { motion } from "framer-motion";
import type { Lang } from "@/layouts/MainLayout";
import { dohelaMahotsavData } from "@/data/dohelaMahotsavData";

type Props = {
  lang: Lang;
  preview?: boolean;
};

const DohelaMahotsavSection = ({ lang, preview = false }: Props) => {
  const isHi = lang === "hi";

  return (
    <section className="w-full bg-[#fcfcfc] py-16 md:py-24 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* Tag */}
        <span className="text-xs font-black uppercase   text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full">
          {dohelaMahotsavData.tag}
        </span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold text-[#112250] mt-4 mb-6"
        >
          {dohelaMahotsavData.title[lang]}
        </motion.h2>

        {/* Description */}
        <p className="text-lg text-slate-600 max-w-[800px]">
          {dohelaMahotsavData.description[lang]}
        </p>

        {/* Highlights */}
        {!preview && (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {dohelaMahotsavData.highlights.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border">
                <h3 className="text-xl font-bold text-[#112250] mb-2">
                  {item.title[lang]}
                </h3>
                <p className="text-slate-500 text-sm">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Preview Button */}
        {preview && (
          <div className="mt-10">
            <a href="/dohela-mahotsav" className="text-pink-600 font-semibold">
              {isHi ? "और देखें →" : "View Details →"}
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default DohelaMahotsavSection;