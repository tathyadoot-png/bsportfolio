import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowUpRight, ShieldCheck, Heart, Users } from "lucide-react";
import { contributionsData } from "@/data/contributionsData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const ContributionsSection = ({ lang, preview = false }: Props) => {
  const rawData = contributionsData[lang] || [];
  const data = preview ? rawData.slice(0, 3) : rawData;

  const icons = [<ShieldCheck size={28} />, <Heart size={28} />, <Users size={28} />];

  return (
    <section className="relative w-full pb-8 bg-white overflow-hidden">
      
      <SectionHeading
        title={lang === "hi" ? "प्रमुख योगदान" : "Key Contributions"} 
        subtitle={lang === "hi" ? "विकास और जनसेवा के अटूट स्तंभ" : "Steadfast pillars of development and public service"} 
        lang={lang}
      />

      {/* 🌌 Atmospheric Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
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
               
                className={`group relative ${colSpan} min-h-[350px] rounded-[3rem] overflow-hidden border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-500 shadow-md hover:shadow-xl`}
              >
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

                {/* 🎨 GRADIENT GLOW ON HOVER (Light Opacity) */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${isFirst ? 'from-emerald-500/5 to-orange-500/5' : 'from-orange-500/5 to-emerald-500/5'} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    {/* ICON CIRCLE */}
                    {/* 🌟 FIXED: Icon container keeps premium light theme response */}
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-50 group-hover:border-emerald-500 transition-all duration-500 shadow-sm">
                      {icons[i % icons.length]}
                    </div>
                    <ArrowUpRight className="text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={32} />
                  </div>

                  <div className="mt-12">
                    {/* 🌟 FIXED: Headings remain high contrast dark slate */}
                    <h3 className={`font-gotu font-black text-slate-800 group-hover:text-slate-900 leading-tight mb-4 transition-colors duration-300 ${isFirst ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                      {item.title}
                    </h3>
                    {/* 🌟 FIXED: Description text remains gray for excellent legibility */}
                    <p className={`font-asar text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors duration-300 ${isFirst ? 'text-xl md:text-2xl max-w-xl' : 'text-lg'}`}>
                      {item.text}
                    </p>
                  </div>

                  {/* BOTTOM DECOR */}
                  <div className="mt-8 flex items-center gap-4">
                    {/* 🌟 FIXED: Soft light divider line */}
                    <div className="h-[1px] flex-grow bg-slate-200/60 group-hover:bg-slate-200 transition-colors duration-300" />
                    <Star size={14} className="text-orange-500 fill-orange-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
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
              className="group relative px-12 py-5 bg-slate-900 border border-slate-900 rounded-full text-white font-black text-[10px] uppercase overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 group-hover:text-slate-900 transition-colors duration-500">
                {lang === "hi" ? "पूर्ण योगदान रिपोर्ट" : "Full Impact Report"}
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        )}
      </div>

    </section>
  );
};

export default ContributionsSection;