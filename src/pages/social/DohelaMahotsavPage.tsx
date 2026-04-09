import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import DohelaMahotsavSection from "@/pages/home/sections/social/DohelaMahotsavSection";

const DohelaMahotsavPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return <DohelaMahotsavSection lang={lang} />;
};

export default DohelaMahotsavPage;