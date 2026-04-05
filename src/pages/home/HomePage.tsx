import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";

// ✅ Sections (only important ones)
import HeroSection from "./sections/home/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import JourneySection from "./sections/journey/JourneySection";
import AchievementsSection from "./sections/achievements/AchievementsSection";
import GallerySection from "./sections/gallery/GallerySection";
import ContactSection from "./sections/contact/ContactSection";
import GovernmentWorkSection from "./sections/government/GovernmentWorkSection";
import SocialWorkSection from "./sections/social/SocialWorkSection";

const HomePage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <>
      {/* 🔥 HERO */}
      <section>
        <HeroSection lang={lang} />
      </section>

      {/* 👤 ABOUT (SHORT PREVIEW) */}
      <section>
        <AboutSection   />
      </section>

      {/* 🧭 JOURNEY (SHORT TIMELINE) */}
      <section>
        <JourneySection lang={lang} preview />
      </section>

      {/* 🏆 TOP ACHIEVEMENTS */}
      <section>
        <AchievementsSection lang={lang} preview />
      </section>
      <section>
       <GovernmentWorkSection lang={lang} preview />
      </section>
      <section>
      {/* <SocialWorkSection lang={lang} preview /> */}
      </section>

      {/* 🖼 GALLERY PREVIEW */}
      <section>
       <GallerySection lang={lang}  />
      </section>

      {/* 📞 CONTACT */}
      <section>
        <ContactSection lang={lang} />
      </section>
    </>
  );
};

export default HomePage;