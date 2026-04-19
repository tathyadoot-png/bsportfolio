import { useOutletContext, Link } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { socialWorkData } from "@/data/socialWorkData";

const SocialWorkPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const isHi = lang === "hi";

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen pt-12 pb-24 relative overflow-hidden">
      
      {/* 🟢 Background Aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full -z-10" />

      {/* 🏷️ Heading */}
      <div className="mb-3 py-12">
        <SectionHeading 
          title={isHi ? "सामाजिक कार्य" : "Social Initiatives"} 
          subtitle={isHi ? "सेवा परमो धर्म:" : "Service Above Self"} 
          lang={lang}
          titleColor="text-[#112250]"
          subtitleColor="text-emerald-600"
        />
      </div>

      {/* 🍱 Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {socialWorkData.map((item, idx) => {
            const Icon = item.icon; // ✅ IMPORTANT

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={item.path} className="block relative h-full">

                  <div className="h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] group-hover:-translate-y-2 overflow-hidden flex flex-col">
                    
                    {/* Glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-full`} />

                    {/* Icon & Tag */}
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#112250] group-hover:bg-[#112250] group-hover:text-white transition-all duration-500">
                        <Icon size={32} /> {/* ✅ FIXED */}
                      </div>

                      <span className="text-[10px] font-black uppercase  text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow relative z-10">
                      <h2 className="text-2xl md:text-3xl font-gotu font-bold text-[#112250] mb-4 leading-tight">
                        {item.title[lang]} {/* ✅ FIXED */}
                      </h2>

                      <p className="text-slate-500 font-asar text-lg leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                        {item.desc[lang]} {/* ✅ FIXED */}
                      </p>
                    </div> 

                    {/* Footer */}
                    <div className="mt-10 flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-orange-500 transition-colors">
                        <ShieldCheck size={18} />
                        <span className="text-[10px] font-bold uppercase  ">
                          {isHi ? "प्रमाणित कार्य" : "Verified Work"}
                        </span>
                      </div>
                      
                      <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Bottom Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-emerald-500 group-hover:w-full transition-all duration-700" />

                  </div>
                </Link>
              </motion.div>
            );
          })}

        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="mt-20 flex justify-center opacity-10">
        <div className="w-24 h-[1px] bg-[#112250]" />
        <div className="mx-4 w-2 h-2 rounded-full border border-[#112250]" />
        <div className="w-24 h-[1px] bg-[#112250]" />
      </div>

    </div>
  );
};

export default SocialWorkPage;