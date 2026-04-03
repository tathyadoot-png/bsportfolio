import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { newsData } from "@/data/newsData";

interface Props {
  lang: "hi" | "en";
}

const NewsSection = ({ lang }: Props) => {
  const data = newsData[lang] || [];

  return (
    <div className="w-[96%] lg:w-[88%] mx-auto">

      {/* HEADING */}
      <h1 className="text-3xl font-extrabold text-primary mb-6">
        {lang === "hi" ? "समाचार एवं मीडिया" : "News & Media"}
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-xl transition"
          >
            {/* DATE */}
            <p className="text-sm text-gray-400 mb-2">
              {item.date}
            </p>

            {/* TITLE */}
            <h3 className="font-bold text-primary mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-600 text-sm mb-4">
              {item.desc}
            </p>

            {/* LINK */}
            <a
              href={item.link}
              target="_blank"
              className="text-green text-sm font-semibold flex items-center gap-2"
            >
              {lang === "hi" ? "पूरा पढ़ें" : "Read More"}
              <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default NewsSection;