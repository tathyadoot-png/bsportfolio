import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { malthonGauravData } from "@/data/malthonGauravData";

const MalthonGauravDiwasSection = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary text-center">
        {malthonGauravData.title[lang]}
      </h1>
    </div>
  );
};

export default MalthonGauravDiwasSection;