import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

import { socialWorkData } from "@/data/socialWorkData";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const SocialWorkSection = ({ lang, preview = false }: Props) => {
  const t = socialWorkData[lang];

  return (
    <section className="w-[96%] lg:w-[88%] mx-auto md:pt-16 pt-12 pb-10">

      {/* 🔥 HEADING */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
          {lang === "hi" ? "सामाजिक कार्य" : "Social Work"}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {lang === "hi"
            ? "जनसेवा के प्रमुख कार्य"
            : "Key initiatives for public welfare"}
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* BLOOD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl bg-white border shadow-sm hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-red-500">
              <Heart />
            </div>
            <h3 className="text-lg font-bold text-primary">
              {t.blood.title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            {t.blood.desc}
          </p>

          <p className="font-bold text-red-500">
            {t.blood.stats}
          </p>
        </motion.div>

        {/* VIVAH */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-3xl bg-white border shadow-sm hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-500">
              <Users />
            </div>
            <h3 className="text-lg font-bold text-primary">
              {t.vivah.title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            {t.vivah.desc}
          </p>

          <p className="font-bold text-green">
            {t.vivah.stats}
          </p>
        </motion.div>

      </div>

      {/* 🔥 BUTTON */}
      {preview && (
        <div className="mt-10 text-center">
          <Link
            to="/blood-donation"
            className="text-green font-bold text-sm hover:underline"
          >
            {lang === "hi"
              ? "सभी सामाजिक कार्य देखें →"
              : "View All Social Work →"}
          </Link>
        </div>
      )}
    </section>
  );
};

export default SocialWorkSection;