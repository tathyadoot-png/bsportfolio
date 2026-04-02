import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import AchievementsSection from "@/pages/home/sections/achievements/AchievementsSection";

const Awards = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <AchievementsSection lang={lang} />
    </div>
  );
};

export default Awards;