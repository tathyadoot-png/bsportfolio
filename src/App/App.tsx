import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

// ✅ Pages
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about/AboutPage";
import JourneyPage from "@/pages/journey/JourneyPage";
import ContactSection from "@/pages/contact/ContactPage";

// Work
import GovernmentWork from "@/pages/work/GovernmentWork";
import Awards from "@/pages/work/Awards";
import Contributions from "@/pages/work/Contributions";

// Social
import BloodDonation from "@/pages/social/BloodDonation";
import Vivah from "@/pages/social/Vivah";
import SocialWorkPage from "@/pages/social/SocialWorkPage";
// Media
import GalleryPage from "@/pages/media/GalleryPage";
import NewsPage from "@/pages/media/NewsPage";

// Other
import FamilyPage from "@/pages/family/FamilyPage";
import NotFound from "@/pages/NotFound";
import DohelaMahotsavPage from "@/pages/social/DohelaMahotsavPage";
import RudrakshDhamPage from "@/pages/social/RudrakshDhamPage";
import SammanPage from "@/pages/social/SammanPage";
import BandariGauravDiwas from "@/pages/social/BandariGauravDiwas";
import BarodiyaGauravDiwas from "@/pages/social/BarodiyaGauravDiwas";
import MalthonGauravDiwas from "@/pages/social/MalthonGauravDiwas";

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
<Route path="/social-work" element={<SocialWorkPage />} />
          {/* ✅ MEDIA */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
<Route path="/contact" element={<ContactSection />} />
          {/* ✅ OTHER */}
          <Route path="/family" element={<FamilyPage />} />
          <Route path="/dohela-mahotsav" element={<DohelaMahotsavPage />} />
          <Route path="/rudraksh-dham" element={<RudrakshDhamPage />} />
          <Route path="/samman-seva" element={<SammanPage />} />
          <Route path="/bandari-gaurav-diwas" element={<BandariGauravDiwas />} />
          <Route path="/barodiya-gaurav-diwas" element={<BarodiyaGauravDiwas />} />
          <Route path="/malthon-gaurav-diwas" element={<MalthonGauravDiwas />} />

        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;