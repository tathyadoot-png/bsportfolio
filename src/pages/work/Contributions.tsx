import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import ContributionsSection from "@/pages/home/sections/contributions/ContributionsSection";

const Contributions = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <ContributionsSection lang={lang} />
    </div>
  );
};

export default Contributions;