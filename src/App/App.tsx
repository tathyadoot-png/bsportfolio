import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

// ✅ Pages
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about/AboutPage";
import JourneyPage from "@/pages/journey/JourneyPage";

// Work
import GovernmentWork from "@/pages/work/GovernmentWork";
import Awards from "@/pages/work/Awards";
import Contributions from "@/pages/work/Contributions";

// Social
import BloodDonation from "@/pages/social/BloodDonation";
import Vivah from "@/pages/social/Vivah";
import PublicService from "@/pages/social/PublicService";

// Media
import GalleryPage from "@/pages/media/GalleryPage";
import NewsPage from "@/pages/media/NewsPage";

// Other
import FamilyPage from "@/pages/family/FamilyPage";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          {/* ✅ MAIN */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journey" element={<JourneyPage />} />

          {/* ✅ WORK */}
          <Route path="/government-work" element={<GovernmentWork />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contributions" element={<Contributions />} />

          {/* ✅ SOCIAL */}
          <Route path="/blood-donation" element={<BloodDonation />} />
          <Route path="/vivah" element={<Vivah />} />
          <Route path="/public-service" element={<PublicService />} />

          {/* ✅ MEDIA */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />

          {/* ✅ OTHER */}
          <Route path="/family" element={<FamilyPage />} />

        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;