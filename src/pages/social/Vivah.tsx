import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import VivahSection from "@/pages/home/sections/social/VivahSection";

const Vivah = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <VivahSection lang={lang} />
    </div>
  );
};

export default Vivah;