import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import FamilySection from "@/pages/home/sections/family/FamilySection";

const FamilyPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <FamilySection lang={lang} />
    </div>
  );
};

export default FamilyPage;