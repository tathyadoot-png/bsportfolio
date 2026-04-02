import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { journeyData } from "@/data/journeyData";
import hi from "@/locales/hi";
import en from "@/locales/en";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const JourneySection = ({ lang, preview = false }: Props) => {
  const t = lang === "hi" ? hi : en;

  // ✅ SAFE DATA (no crash)
  const rawData = journeyData[lang] || [];
  const data = preview ? rawData.slice(0, 2) : rawData;

  return (
    <section className="w-[96%] lg:w-[88%] mx-auto md:pt-16 pt-12 pb-10">

      {/* HEADING */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
          {t.nav.journey}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {lang === "hi"
            ? "अनुभव और नेतृत्व का सफर"
            : "A journey of leadership and experience"}
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative border-l-2 border-green pl-6 space-y-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* DOT */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green rounded-full border-4 border-white shadow" />

            {/* CARD */}
            <div className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="text-green font-bold text-sm">
                {item.year}
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* BUTTON */}
      {preview && (
        <div className="mt-8">
          <Link
            to="/journey"
            className="text-green font-bold text-sm hover:underline"
          >
            {lang === "hi" ? "पूरी यात्रा देखें →" : "View Full Journey →"}
          </Link>
        </div>
      )}
    </section>
  );
};

export default JourneySection;