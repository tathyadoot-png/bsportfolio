import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { contactData } from "@/data/contactData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

interface Props {
  lang: "hi" | "en";
}

const ContactSection = ({ lang }: Props) => {
  const t = contactData[lang];

  const infoNodes = [
    { icon: <MapPin size={18} />, label: lang === "hi" ? "कार्यालय" : "Office", value: t.address, color: "text-emerald-600" },
    { icon: <Phone size={18} />, label: lang === "hi" ? "संपर्क" : "Phone", value: t.phone, color: "text-orange-600" },
    { icon: <Mail size={18} />, label: lang === "hi" ? "ईमेल" : "Email", value: t.email, color: "text-blue-600" },
  ];

  return (
    <section className="w-full py-12 md:py-32 bg-white relative overflow-hidden">
      
      {/* 🟢 Aura - Reduced size for mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] bg-emerald-50/50 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        
        {/* 🏷️ CENTERED HEADING - Compact on Mobile */}
        <div className="text-center mb-10 md:mb-20">
          <SectionHeading 
            title={t.title} 
            subtitle={t.intro} 
            lang={lang}
            titleColor="text-[#112250]"
            subtitleColor="text-emerald-600"
          />
        </div>

        <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* 📍 LEFT: INFO HUB - Compact Stack */}
            <div className="lg:col-span-5 bg-slate-50/50 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
               <div className="h-full flex flex-col justify-between">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-10">
                    {infoNodes.map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center lg:items-start gap-4 md:gap-5 group"
                      >
                        <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center ${item.color} group-hover:bg-[#112250] group-hover:text-white transition-all duration-500`}>
                          {item.icon}
                        </div>
                        <div>
                          <span className="text-[9px] md:text-[10px] font-black uppercase text-slate-400 mb-1 block leading-none">
                            {item.label}
                          </span>
                          <p className="text-base md:text-lg font-asar font-bold text-[#112250] leading-tight">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Commitment Badge - Smaller on mobile */}
                  <div className="mt-8 md:mt-12 p-4 md:p-6 rounded-xl md:rounded-2xl bg-emerald-600 text-white flex items-center gap-3 md:gap-4">
                     <CheckCircle2 size={20} className="shrink-0" />
                     <p className="text-[10px] md:text-sm font-bold uppercase leading-none">
                        {lang === "hi" ? "त्वरित समाधान" : "Quick Resolution"}
                     </p>
                  </div>
               </div>
            </div>

            {/* 📝 RIGHT: THE FORM - Tight Spacing */}
            <div className="lg:col-span-7 p-6 md:p-12">
               <form className="space-y-5 md:space-y-8">
                  <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-1">{t.form.name}</label>
                      <input
                        type="text"
                        className="w-full bg-slate-50 rounded-xl md:rounded-2xl px-5 py-3.5 md:px-6 md:py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all font-asar text-base md:text-lg border-none"
                        placeholder="Name"
                      />
                    </div>
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-1">{t.form.phone}</label>
                      <input
                        type="text"
                        className="w-full bg-slate-50 rounded-xl md:rounded-2xl px-5 py-3.5 md:px-6 md:py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all font-asar text-base md:text-lg border-none"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-1">{t.form.message}</label>
                    <textarea
                      rows={3}
                      className="w-full bg-slate-50 rounded-xl md:rounded-2xl px-5 py-4 md:px-6 md:py-5 focus:ring-2 focus:ring-orange-500 outline-none transition-all font-asar text-base md:text-lg border-none resize-none"
                      placeholder={lang === "hi" ? "संदेश लिखें..." : "Message..."}
                    />
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 md:py-6 bg-orange-600 text-white rounded-xl md:rounded-2xl font-black text-[11px] md:text-sm uppercase flex items-center justify-center gap-3 md:gap-4 shadow-lg shadow-orange-600/20 hover:bg-[#112250] transition-all duration-500 group"
                  >
                    {t.form.button}
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
               </form>

               {/* Mobile Minimal Footer */}
               <div className="mt-6 flex items-center justify-center gap-4 opacity-20 grayscale md:hidden">
                  <span className="text-[8px] font-black uppercase  text-center">Secure • 24/7 Monitoring</span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;