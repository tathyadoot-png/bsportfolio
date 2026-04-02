import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";

const PublicService = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <div className="pt-28 w-[96%] lg:w-[88%] mx-auto">

      {/* HEADING */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
        {lang === "hi" ? "जनसेवा कार्य" : "Public Service"}
      </h1>

      {/* INTRO */}
      <p className="text-gray-600 mb-10 max-w-3xl">
        {lang === "hi"
          ? "जनता की सेवा और समाज के विकास के लिए विभिन्न सामाजिक कार्यों का निरंतर संचालन किया गया है।"
          : "Continuous efforts have been made towards public welfare and social development through various initiatives."}
      </p>

      {/* 🔥 WORK LIST */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition">
          <h3 className="font-bold text-green mb-2">
            {lang === "hi" ? "स्वास्थ्य सेवाएं" : "Health Services"}
          </h3>
          <p className="text-gray-600 text-sm">
            {lang === "hi"
              ? "स्वास्थ्य शिविरों और चिकित्सा सहायता के माध्यम से लोगों की मदद।"
              : "Providing medical support through health camps and initiatives."}
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition">
          <h3 className="font-bold text-green mb-2">
            {lang === "hi" ? "शिक्षा सहायता" : "Education Support"}
          </h3>
          <p className="text-gray-600 text-sm">
            {lang === "hi"
              ? "छात्रों के लिए शिक्षा और संसाधनों की व्यवस्था।"
              : "Support for students through education and resources."}
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition">
          <h3 className="font-bold text-green mb-2">
            {lang === "hi" ? "गरीब कल्याण" : "Welfare Programs"}
          </h3>
          <p className="text-gray-600 text-sm">
            {lang === "hi"
              ? "जरूरतमंद लोगों के लिए सहायता और योजनाएं।"
              : "Support and welfare initiatives for underprivileged people."}
          </p>
        </div>

      </div>

    </div>
  );
};

export default PublicService;