import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, User, Quote } from "lucide-react";

import img from "@/assets/14.jpg"; // 👉 politician image

const AboutPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const isHi = lang === "hi";

  return (
    <section className="relative w-full bg-[#FDFDFD] overflow-hidden pt-28 pb-20">

      {/* 🔥 HEADING */}
      <div className="w-full pb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
          {isHi ? "परिचय" : "About"}
        </h1>
        <p className="text-gray-500 mt-2">
          {isHi
            ? "जनसेवा को समर्पित एक जीवन"
            : "A Life Dedicated to Public Service"}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-10">

          {/* NAME */}
          <h2 className="font-[Gotu] font-black uppercase text-[#112250] text-5xl md:text-7xl">
            <span className="text-orange-500 block">
              {isHi ? "भूपेंद्र" : "BHUPENDRA"}
            </span>
            <span>{isHi ? "सिंह" : "SINGH"}</span>
          </h2>

          {/* BASIC INFO */}
          <div className="p-6 border-l-4 border-green bg-white shadow rounded-xl">
            <p className="font-bold text-lg text-[#112250]">
              {isHi
                ? "जन्म: 20 मई 1960 | शिक्षा: एलएलबी, सागर विश्वविद्यालय"
                : "Born: 20 May 1960 | Education: LLB, Sagar University"}
            </p>
          </div>

          {/* BIO */}
          <div className="space-y-6 text-gray-600 text-base leading-relaxed">

            <div className="flex gap-4">
              <Quote className="text-orange-500 shrink-0" size={28} />
              <p>
                {isHi
                  ? "भूपेंद्र सिंह मध्य प्रदेश के वरिष्ठ भाजपा नेता हैं, जिन्होंने अपने लंबे राजनीतिक जीवन में जनसेवा और विकास को सर्वोच्च प्राथमिकता दी है।"
                  : "Bhupendra Singh is a senior BJP leader from Madhya Pradesh known for his dedication to public service and development."}
              </p>
            </div>

            <p>
              {isHi
                ? "वे खुरई विधानसभा क्षेत्र से कई बार विधायक रह चुके हैं और मध्य प्रदेश शासन में मंत्री के रूप में शहरी विकास, आवास, परिवहन जैसे महत्वपूर्ण विभागों का नेतृत्व कर चुके हैं।"
                : "He has served multiple terms as MLA from Khurai and has held key ministerial positions in Urban Development, Housing, and Transport."}
            </p>

            <p>
              {isHi
                ? "उनकी राजनीति का मुख्य उद्देश्य जनसेवा, पारदर्शिता और विकास है।"
                : "His politics is centered around public service, transparency, and development."}
            </p>

          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 space-y-6">

          {/* IMAGE */}
          <div className="h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="Bhupendra Singh"
            />
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-2 gap-5">

            <motion.div className="p-6 bg-primary text-white rounded-2xl">
              <User className="mb-3" />
              <p className="font-bold">
                {isHi ? "45+ वर्ष अनुभव" : "45+ Years Experience"}
              </p>
            </motion.div>

            <motion.div className="p-6 bg-white border rounded-2xl">
              <GraduationCap className="mb-3 text-green" />
              <p className="font-bold">
                {isHi ? "एलएलबी" : "LLB"}
              </p>
            </motion.div>

            <motion.div className="p-6 bg-white border rounded-2xl col-span-2">
              <ShieldCheck className="mb-3 text-green" />
              <p className="font-bold">
                {isHi
                  ? "भारतीय जनता पार्टी"
                  : "Bharatiya Janata Party"}
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 🔥 FAMILY */}
      <div className="max-w-[1400px] mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {isHi ? "पारिवारिक पृष्ठभूमि" : "Family Background"}
        </h2>

        <p className="text-gray-600">
          {isHi
            ? "उनके पिता स्वर्गीय श्री अमोल सिंह जी सागर जिले के प्रमुख किसान थे और राष्ट्रीय स्वयंसेवक संघ से जुड़े हुए थे।"
            : "His father, Late Shri Amol Singh Ji, was a respected farmer and associated with RSS."}
        </p>
      </div>

      {/* 🔥 IDEOLOGY */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {isHi ? "विचारधारा" : "Ideology"}
        </h2>

        <p className="text-gray-600">
          {isHi
            ? "उनकी राजनीति का मूल उद्देश्य जनसेवा, विकास और सुशासन है।"
            : "His ideology focuses on development, public service and good governance."}
        </p>
      </div>

    </section>
  );
};

export default AboutPage;