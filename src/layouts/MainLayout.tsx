import { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import bjp from "@/assets/bjp.png";
import StickySocial from "@/components/layout/StickySocial";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { profileData } from "@/data/profileData";

export type Lang = "hi" | "en";

const MainLayout = () => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "hi";
    return localStorage.getItem("lang") === "en" ? "en" : "hi";
  });

  const [loading, setLoading] = useState(true);
  const saffronRef = useRef(null);
  const greenRef = useRef(null);
  const whiteRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const timer = setTimeout(() => setLoading(false), 4200);
    return () => clearTimeout(timer);
  }, [lang]);

  // ✅ THE TIRANGA EXIT STRATEGY (GSAP)
  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();

      tl.to([saffronRef.current, greenRef.current], {
        height: "0%",
        duration: 1.2,
        ease: "expo.inOut",
        stagger: 0.1
      });

      tl.to(whiteRef.current, {
        opacity: 0,
        scale: 1.5,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.8");

      tl.to(contentRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4
      }, "-=0.5");
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <div className="fixed inset-0 z-[9999] flex flex-col overflow-hidden">
            
            {/* 🟠 SAFFRON LAYER */}
            <div ref={saffronRef} className="absolute top-0 left-0 w-full h-[33.4%] bg-[#FF9933] z-30" />
            
            {/* ⚪ WHITE LAYER (Center) */}
            <div ref={whiteRef} className="absolute top-[33.3%] left-0 w-full h-[33.4%] bg-white z-20 flex items-center justify-center">
                {/* ☸️ ASHOKA CHAKRA INSPIRED GLOW */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[400px] h-[400px] border-[1px] border-blue-900/10 rounded-full flex items-center justify-center"
                >
                   {[...Array(24)].map((_, i) => (
                     <div key={i} className="absolute h-full w-[1px] bg-blue-900/5" style={{ transform: `rotate(${i * 15}deg)` }} />
                   ))}
                </motion.div>
            </div>

            {/* 🟢 GREEN LAYER */}
            <div ref={greenRef} className="absolute bottom-0 left-0 w-full h-[33.4%] bg-[#138808] z-30" />

            {/* 📄 TEXT & LOGO CONTENT */}
 

<div className="relative z-50 h-full w-full flex flex-col items-center justify-center p-6 text-center">
  
  {/* BJP LOGO */}
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: "backOut" }}
    className="mb-6 md:mb-8"
  >
    <img src={bjp} className="w-20 md:w-28 drop-shadow-2xl" />
  </motion.div>

  {/* FIRST NAME - Fixed Clipping */}
  <div className="overflow-visible py-2"> {/* overflow-visible rakha hai taaki matraye na katein */}
    <motion.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      // leading-tight aur py-1 se matra ko space milta hai
      className="text-[#112250] text-[12vw] md:text-[6vw] font-black leading-tight "
    >
      {profileData[lang].firstName}
    </motion.h1>
  </div>

  {/* LAST NAME - Fixed Clipping */}
  <div className="overflow-visible py-2">
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      // Hindi ke liye tracking-normal hi best hai
      className="text-orange-600 text-[10vw] md:text-[4vw] font-asar font-bold tracking-normal leading-tight "
    >
      {profileData[lang].lastName}
    </motion.h2>
  </div>

  {/* LOCATION STAMP */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2 }}
    className="mt-10 px-8 py-2.5 bg-[#112250] text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg"
  >
    {profileData[lang].location}
  </motion.div>
</div>

          </div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar lang={lang} setLang={setLang} />
          <StickySocial />
          <ScrollToTop />

          <main className="min-h-screen bg-[#fcfcfc]">
            <Outlet context={{ lang }} />
          </main>

          <Footer lang={lang} />
        </motion.div>
      )}
    </>
  );
};

export default MainLayout;