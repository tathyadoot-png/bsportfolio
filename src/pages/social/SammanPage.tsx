import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import SammanSection from "@/pages/home/sections/social/SammanSection";

const SammanPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return <SammanSection lang={lang} />;
};

export default SammanPage;