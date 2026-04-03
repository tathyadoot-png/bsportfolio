import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const SocialWorkPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const isHi = lang === "hi";

  const items = [
    {
      title: isHi ? "रक्तदान सेवा" : "Blood Donation",
      desc: isHi ? "रक्तदान शिविर और जीवन बचाने की पहल" : "Blood camps and life-saving initiatives",
      path: "/blood-donation",
    },
    {
      title: isHi ? "सामूहिक विवाह" : "Samuhik Vivah",
      desc: isHi ? "जरूरतमंद परिवारों के लिए विवाह आयोजन" : "Marriage support for needy families",
      path: "/vivah",
    },
    {
      title: isHi ? "जन सेवा" : "Public Service",
      desc: isHi ? "सामाजिक और जनहित कार्य" : "Social and public welfare work",
      path: "/public-service",
    },
  ];

  return (
    <div className="w-[96%] lg:w-[88%] mx-auto pt-10 pb-16">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-primary">
          {isHi ? "सामाजिक कार्य" : "Social Work"}
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          {isHi
            ? "समाज के लिए किए गए प्रमुख कार्य"
            : "Key initiatives for society"}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="group p-6 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all bg-white"
          >
            <h2 className="text-lg font-bold text-secondary group-hover:text-primary">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              {item.desc}
            </p>

            <span className="text-xs text-primary mt-4 inline-block">
              {isHi ? "और देखें →" : "Explore →"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialWorkPage;