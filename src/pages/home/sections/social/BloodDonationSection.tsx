import { motion } from "framer-motion";
import { bloodDonationData } from "@/data/bloodDonationData";

interface Props {
  lang: "hi" | "en";
}

const BloodDonationSection = ({ lang }: Props) => {
  const t = bloodDonationData[lang];

  return (
    <div className="w-[96%] lg:w-[88%] mx-auto">

      {/* 🔥 HEADING */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
        {t.title}
      </h1>

      {/* INTRO */}
      <p className="text-gray-600 mb-6 max-w-3xl">
        {t.intro}
      </p>

      {/* 🔥 TOTAL */}
      <div className="mb-10 p-6 bg-red-50 border-l-4 border-red-500 rounded-xl">
        <p className="text-xl font-bold text-red-600">
          {t.total}
        </p>
      </div>

      {/* 🔥 TIMELINE */}
      <div className="relative border-l-2 border-red-400 pl-6 space-y-8">

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
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow" />

            {/* CARD */}
            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-red-500 text-sm">
                {item.year}
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* 🔥 GALLERY PLACEHOLDER */}
      <div className="mt-16">
        <h2 className="text-xl font-bold text-primary mb-4">
          {lang === "hi" ? "फोटो गैलरी" : "Photo Gallery"}
        </h2>

        <p className="text-gray-500 text-sm">
          {lang === "hi"
            ? "यहां रक्तदान शिविरों की तस्वीरें दिखाई जाएंगी"
            : "Images from blood donation events will be displayed here"}
        </p>
      </div>

    </div>
  );
};

export default BloodDonationSection;