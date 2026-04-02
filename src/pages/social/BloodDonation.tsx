import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import BloodDonationSection from "@/pages/home/sections/social/BloodDonationSection";

const BloodDonation = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <BloodDonationSection lang={lang} />
    </div>
  );
};

export default BloodDonation;