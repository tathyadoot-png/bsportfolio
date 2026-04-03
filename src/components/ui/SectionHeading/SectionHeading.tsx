import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
// @ts-ignore (ScrolLTrigger import issue fix)
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  lang?: "hi" | "en";
}

const SectionHeading = ({ title, subtitle, lang = "en" }: SectionHeadingProps) => {
  const containerRef = useRef(null);
  const isHi = lang === "hi";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Line Connector Reveal
      gsap.from(".connector-line", {
        width: 0,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 95%" },
      });

      // 2. Character Reveal Effect for Title
      gsap.from(".title-reveal", {
        y: "110%",
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 95%" },
      });

      // 3. Staggered reveal for subtitle and tag
      gsap.from(".fade-right", {
        x: -20,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 95%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full lg:w-[96%] max-w-[1600px] mx-auto mb-16 md:mb-24 px-4 md:px-10 lg:px-12 overflow-hidden"
    >
      {/* 🔮 MODERN GRID OVERLAY (SUBTLE) */}
      <div className="absolute inset-0 opacity-[0.03] -z-10" style={{ backgroundImage: `radial-gradient(#112250 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      {/* WRAPPER */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-6 md:gap-10">
        
        {/* LEFT: HEADING */}
        <div className="md:col-span-8 overflow-hidden h-fit py-2">
          <h2 className="title-reveal py-1 font-gotu text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#112250] leading-[1] md:leading-[0.9] uppercase tracking-tighter">
            {title}
          </h2>
        </div>

        {/* RIGHT: SUBTITLE & TAG */}
        <div className="md:col-span-4 w-full flex flex-col items-start md:items-end justify-end space-y-3 pb-2 md:pb-4 text-left md:text-right">
          <div className="overflow-hidden h-fit w-full">
            {subtitle && (
              <p className="fade-right font-asar py-1 text-sm md:text-base lg:text-xl font-medium uppercase text-green leading-tight">
                {subtitle}
              </p>
            )}
            <div className="fade-right flex items-center justify-start md:justify-end gap-2 lg:gap-3 w-full">
              <span className="h-px w-6 lg:w-10 bg-[#112250]/20 hidden md:block" />
              <span className="text-[10px] lg:text-[12px] font-bold text-primary uppercase whitespace-nowrap tracking-wider">
                {isHi ? "जनसेवा एवं विकास का संकल्प" : "Vision • Leadership • Progress"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DESIGNER LINE */}
      <div className="mt-8 lg:mt-12 w-full h-[1px] bg-gray-100 relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "30%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-full bg-orange-500 rounded-full shadow-[0_0_10px_rgba(228,107,46,0.3)]"
        />
      </div>
    </div>
  );
};

export default SectionHeading;