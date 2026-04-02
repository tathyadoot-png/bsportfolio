import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import GovernmentWorkSection from "@/pages/home/sections/government/GovernmentWorkSection";

const GovernmentWork = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <GovernmentWorkSection lang={lang} />
    </div>
  );
};

export default GovernmentWork;