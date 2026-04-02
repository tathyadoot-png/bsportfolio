import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/25.jpg"; // 👉 apni image lagana

interface Props {
  lang: "hi" | "en";
}

const HeroSection = ({ lang }: Props) => {
  const isHi = lang === "hi";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-[96%] lg:w-[88%] mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-green-400 mb-3"
          >
            {isHi ? "जनसेवा ही संकल्प" : "Dedicated to Public Service"}
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            {isHi ? "भूपेंद्र सिंह" : "Bhupendra Singh"}
          </motion.h1>

          {/* DESIGNATION */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-lg md:text-xl text-gray-300 font-medium"
          >
            {isHi
              ? "पूर्व मंत्री, मध्य प्रदेश शासन"
              : "Former Minister, Government of Madhya Pradesh"}
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-sm md:text-base text-gray-400 max-w-lg"
          >
            {isHi
              ? "45 वर्षों के राजनीतिक अनुभव के साथ जनसेवा, विकास और नेतृत्व का एक मजबूत स्तंभ।"
              : "A strong pillar of leadership, development, and public service with over 45 years of political experience."}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/about"
              className="flex items-center gap-2 bg-green px-6 py-3 rounded-xl text-sm font-bold uppercase hover:bg-green/80 transition"
            >
              {isHi ? "और जानें" : "Learn More"}
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl text-sm uppercase hover:bg-white/10 transition"
            >
              {isHi ? "संपर्क करें" : "Contact"}
            </Link>
          </motion.div>

          {/* 🔥 STATS */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-green">5+</h3>
              <p className="text-xs text-gray-400">
                {isHi ? "बार विधायक" : "Times MLA"}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green">45+</h3>
              <p className="text-xs text-gray-400">
                {isHi ? "वर्ष अनुभव" : "Years Experience"}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green">100+</h3>
              <p className="text-xs text-gray-400">
                {isHi ? "जनसेवा कार्य" : "Public Works"}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={heroImg}
            className="w-[80%] rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;