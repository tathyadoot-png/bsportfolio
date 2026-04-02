import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

import hi from "@/locales/hi";
import en from "@/locales/en";
import { achievementsData } from "@/data/achievementsData";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const AchievementsSection = ({ lang, preview = false }: Props) => {
  const t = lang === "hi" ? hi : en;

  const rawData = achievementsData[lang] || [];
  const data = preview ? rawData.slice(0, 3) : rawData;

  return (
    <section className="w-[96%] lg:w-[88%] mx-auto md:pt-16 pt-12 pb-10">

      {/* 🔥 HEADING */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
          {lang === "hi" ? "उपलब्धियां" : "Achievements"}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {lang === "hi"
            ? "सम्मान और उपलब्धियों की झलक"
            : "A glimpse of achievements and honors"}
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-xl transition-all"
          >
            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green/10 text-green mb-4 group-hover:scale-110 transition">
              <Award size={24} />
            </div>

            {/* YEAR */}
            <h3 className="text-green font-bold text-sm">
              {item.year}
            </h3>

            {/* TEXT */}
            <p className="text-gray-700 text-sm mt-2 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}

      </div>

      {/* 🔥 BUTTON */}
      {preview && (
        <div className="mt-10 text-center">
          <Link
            to="/awards"
            className="text-green font-bold text-sm hover:underline"
          >
            {lang === "hi"
              ? "सभी उपलब्धियां देखें →"
              : "View All Achievements →"}
          </Link>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;