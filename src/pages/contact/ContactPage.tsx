import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import ContactSection from "@/pages/home/sections/contact/ContactSection";

const ContactPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28">
      <ContactSection lang={lang} />
    </div>
  );
};

export default ContactPage;