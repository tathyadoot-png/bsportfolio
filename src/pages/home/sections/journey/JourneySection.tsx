import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journeyData } from "@/data/journeyData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import hi from "@/locales/hi";
import en from "@/locales/en";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  lang: "hi" | "en";
  preview?: boolean;
}

const JourneySection = ({ lang, preview = false }: Props) => {
  const t = lang === "hi" ? hi : en;
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const rawData = journeyData[lang] || [];
  const data = preview ? rawData.slice(0, 4) : rawData;

useEffect(() => {
  // 1. Context create karo
  let ctx = gsap.context(() => {
    
    // Aapka saara GSAP animation code iske andar hona chahiye
    cardsRef.current.forEach((card, index) => {
      if (!card) return; // Safety check

      gsap.fromTo(card, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  }, containerRef); // 2. Scope define karo (containerRef)

  // 3. Cleanup function: Ye sabse important hai error rokne ke liye
  return () => ctx.revert(); 
}, []);

  return (
    <section ref={containerRef} className="relative py-5 bg-[#FBFBFE] overflow-hidden">
      
      {/* Dynamic Background Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-slate-100 uppercase ">
           Growth
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <SectionHeading 
            title={t.nav.journey} 
            subtitle={lang === "hi" ? "विकास की अद्वितीय यात्रा" : "Unfolding the Digital Era"} 
            lang={lang}
            titleColor="text-secondary"
            subtitleColor="text-primary"
          />
        </div>

        <div className="relative">
          {/* Vertical Center Line - Saffron Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-emerald-400 to-transparent opacity-20 hidden md:block" />

          <div className="space-y-32">
            {data.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el!)}
                  className={`relative flex items-center justify-between flex-col md:flex-row gap-7 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Card Side */}
                  <div className="w-full md:w-[45%]">
                    <div className="glass-card bg-white p-10 rounded-[2.5rem] shadow-bento group hover:shadow-premium-hover transition-all duration-700 border-none relative overflow-hidden">
                      
                      {/* Year Badge (Floating) */}
                      <div className={`absolute top-0 ${isEven ? 'left-0 rounded-br-[2rem]' : 'right-0 rounded-bl-[2rem]'} bg-saffron-gradient px-6 py-3 text-white font-heading font-black shadow-lg`}>
                        {item.year}
                      </div>

                      <div className="mt-8">
                        <div className="flex items-center gap-2 mb-4">
                           <ShieldCheck size={16} className="text-emerald-500" />
                           <span className="text-[10px] font-bold uppercase text-slate-400">Milestone Achievement</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-asar text-secondary leading-snug group-hover:text-primary transition-colors duration-500">
                          {item.text}
                        </h3>
                      </div>

                      {/* Floating Glow on Hover */}
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Middle Node (Unique Design) */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                     <div className="w-14 h-14 rounded-2xl bg-white shadow-2xl border border-slate-50 flex items-center justify-center group cursor-pointer hover:rotate-45 transition-transform duration-500">
                        <div className="w-8 h-8 rounded-lg bg-emerald-gradient flex items-center justify-center text-white shadow-emerald-glow">
                           <span className="text-xs font-bold">{i + 1}</span>
                        </div>
                     </div>
                  </div>

                  {/* Year Side (Big Aesthetic Year) */}
                  <div className={`hidden md:flex w-[45%] ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-8xl lg:text-9xl font-heading font-black text-slate-100 group-hover:text-primary/5 transition-colors select-none">
                      {item.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        {preview && (
          <div className="mt-14 text-center">
            <Link to="/journey" className="relative inline-block group">
               <div className="btn-premium-saffron !px-16 !py-3 !rounded-full shadow-2xl">
                 <span className="flex items-center gap-3">
                   View Full Saga <ArrowUpRight size={20} />
                 </span>
               </div>
               {/* Decorative ring */}
               <div className="absolute -inset-2 border border-primary/20 rounded-full scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </Link>
          </div>
        )}
      </div>

    </section>
  );
};

export default JourneySection;