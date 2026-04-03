import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import NewsSection from "@/pages/home/sections/media/NewsSection";

const NewsPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <NewsSection lang={lang} />
    </div>
  );
};

export default NewsPage;