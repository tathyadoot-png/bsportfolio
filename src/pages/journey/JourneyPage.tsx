import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import JourneySection from "../home/sections/journey/JourneySection";

const JourneyPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <JourneySection lang={lang} />
    </div>
  );
};

export default JourneyPage;