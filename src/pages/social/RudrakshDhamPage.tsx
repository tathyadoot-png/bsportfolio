import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import RudrakshDhamSection from "@/pages/home/sections/social/RudrakshDhamSection";

const RudrakshDhamPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return <RudrakshDhamSection lang={lang} />;
};

export default RudrakshDhamPage;