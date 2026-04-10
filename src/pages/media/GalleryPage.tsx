import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import GallerySection from "@/pages/home/sections/media/GallerySection";

const GalleryPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <GallerySection lang={lang} />
    </div>
  );
};

export default GalleryPage;