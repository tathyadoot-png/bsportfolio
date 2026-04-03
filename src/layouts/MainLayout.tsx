import { useEffect, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
  const isHi = lang === "hi";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [lang]);

  // ✅ Split text animation
  const splitText = (text: string) => {
    if (!text) return [];
    try {
      // @ts-ignore
      const segmenter = new (Intl as any).Segmenter(isHi ? "hi" : "en", {
        granularity: "grapheme",
      });
      return Array.from(segmenter.segment(text)).map((s: any) => s.segment);
    } catch {
      return text.split("");
    }
  };

  // ✅ FIXED (Dynamic data)
  const firstName = useMemo(
    () => splitText(profileData[lang].firstName),
    [lang]
  );

  const lastName = useMemo(
    () => splitText(profileData[lang].lastName),
    [lang]
  );

  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const letterAnim: Variants = {
    hidden: { opacity: 0, y: 60, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
          >
            <img src={bjp} className="w-14 mb-6 opacity-60" />

            {/* NAME */}
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <h2 className="flex justify-center text-white text-[10vw] font-bold">
                {firstName.map((l, i) => (
                  <motion.span key={i} variants={letterAnim}>
                    {l}
                  </motion.span>
                ))}
              </h2>

              <h2 className="flex justify-center text-orange-500 text-[7vw] mt-2">
                {lastName.map((l, i) => (
                  <motion.span key={i} variants={letterAnim}>
                    {l}
                  </motion.span>
                ))}
              </h2>
            </motion.div>

            {/* LOCATION */}
            <p className="text-white/60 mt-6 text-sm">
              {profileData[lang].location}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar lang={lang} setLang={setLang} />
          <StickySocial />
          <ScrollToTop />

          <main className="min-h-screen bg-[#fcfcfc]">
            <Outlet context={{ lang }} />
          </main>

          <Footer lang={lang} />
        </>
      )}
    </>
  );
};

export default MainLayout;