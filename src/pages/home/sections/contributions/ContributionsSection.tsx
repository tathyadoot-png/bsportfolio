import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowUpRight, ShieldCheck, Heart, Users } from "lucide-react";
import { contributionsData } from "@/data/contributionsData";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const ContributionsSection = ({ lang, preview = false }: Props) => {
  const rawData = contributionsData[lang] || [];
  const data = preview ? rawData.slice(0, 3) : rawData;

  const icons = [<ShieldCheck size={28} />, <Heart size={28} />, <Users size={28} />];

  return (
    <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden">
      
      {/* 🌌 Atmospheric Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 🏷️ MINIMALIST HEADER */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-orange-500 font-black text-xs uppercase tracking-[0.6em] mb-4 block"
            >
              {lang === "hi" ? "समाज और राष्ट्र" : "Legacy & Impact"}
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-gotu font-black text-white leading-none">
              {lang === "hi" ? "प्रमुख योगदान" : "Key Contributions"}
            </h2>
          </div>
          <p className="text-white/40 font-asar text-lg md:text-xl max-w-xs md:text-right">
            {lang === "hi" 
              ? "विकास और जनसेवा के अटूट स्तंभ" 
              : "Steadfast pillars of development and public service"}
          </p>
        </div>

        {/* 🧩 BENTO MOSAIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto">
          
          {data.map((item, i) => {
            // Bento Logic: 1st card spans more columns
            const colSpan = i === 0 ? "lg:col-span-7 md:col-span-6" : "lg:col-span-5 md:col-span-3";
            const isFirst = i === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${colSpan} min-h-[350px] rounded-[3rem] overflow-hidden border border-white/10 bg-[#111] hover:bg-[#161616] transition-all duration-700 shadow-2xl`}
              >
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                {/* 🎨 GRADIENT GLOW ON HOVER */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${isFirst ? 'from-emerald-500/20 to-orange-500/20' : 'from-orange-500/20 to-emerald-500/20'} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    {/* ICON CIRCLE */}
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-xl">
                      {icons[i % icons.length]}
                    </div>
                    <ArrowUpRight className="text-white/20 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
                  </div>

                  <div className="mt-12">
                    <h3 className={`font-gotu font-black text-white leading-tight mb-4 ${isFirst ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                      {item.title}
                    </h3>
                    <p className={`font-asar text-white/50 leading-relaxed group-hover:text-white/80 transition-colors ${isFirst ? 'text-xl md:text-2xl max-w-xl' : 'text-lg'}`}>
                      {item.text}
                    </p>
                  </div>

                  {/* BOTTOM DECOR */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-[1px] flex-grow bg-white/5" />
                    <Star size={14} className="text-orange-500 fill-orange-500 opacity-20 group-hover:opacity-100 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔗 FINAL FOOTER ACTION */}
        {preview && (
          <div className="mt-20 flex justify-center">
            <Link
              to="/contributions"
              className="group relative px-12 py-5 bg-white rounded-full text-black font-black text-[10px] uppercase tracking-[0.4em] overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                {lang === "hi" ? "पूर्ण योगदान रिपोर्ट" : "Full Impact Report"}
              </span>
              <div className="absolute inset-0 bg-[#0a0a0a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        )}
      </div>

    </section>
  );
};

export default ContributionsSection;