import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { vivahData } from "@/data/vivahData";

interface Props {
  lang: "hi" | "en";
}

const VivahSection = ({ lang }: Props) => {
  const t = vivahData[lang];

  return (
    <div className="w-[96%] lg:w-[88%] mx-auto">

      {/* 🔥 HEADING */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
          {t.title}
        </h1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          {t.intro}
        </p>
      </div>

      {/* 🔥 HIGHLIGHT CARD */}
      <div className="mb-12 p-6 bg-green/10 border-l-4 border-green rounded-2xl flex items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green text-white">
          <Users size={26} />
        </div>

        <div>
          <p className="text-sm text-gray-500">
            {lang === "hi" ? "कुल विवाह" : "Total Marriages"}
          </p>
          <p className="text-xl font-bold text-green">
            {t.total}
          </p>
        </div>
      </div>

      {/* 🔥 TIMELINE */}
      <div className="relative border-l-2 border-green pl-6 space-y-10">

        {(t.events || []).map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* DOT */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green rounded-full border-4 border-white shadow" />

            {/* CARD */}
            <div className="bg-white border border-border rounded-xl p-5 shadow-sm hover:shadow-lg transition">
              <h3 className="text-green font-bold text-sm">
                {item.year}
              </h3>
              <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* 🔥 FUTURE GALLERY */}
      <div className="mt-16">
        <h2 className="text-xl font-bold text-primary mb-3">
          {lang === "hi" ? "फोटो गैलरी" : "Photo Gallery"}
        </h2>

        <p className="text-gray-500 text-sm">
          {lang === "hi"
            ? "यहां सामूहिक विवाह कार्यक्रम की तस्वीरें दिखाई जाएंगी"
            : "Images from mass marriage events will be displayed here"}
        </p>
      </div>

    </div>
  );
};

export default VivahSection;