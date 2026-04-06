import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickySocial from "@/components/layout/StickySocial";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Loader from "@/components/layout/Loader";

export type Lang = "hi" | "en";

const MainLayout = () => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "hi";
    return localStorage.getItem("lang") === "en" ? "en" : "hi";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <>
      {/* 🔥 LOADER */}
      <AnimatePresence mode="wait">
        {loading && (
          <Loader
            lang={lang}
            onFinish={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* 🔥 MAIN APP */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
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