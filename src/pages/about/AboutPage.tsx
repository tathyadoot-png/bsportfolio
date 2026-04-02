import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, User, Quote } from "lucide-react";

import img from "@/assets/14.jpg";
import { aboutData } from "@/data/aboutData";

const AboutPage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  const t = aboutData[lang];

  return (
    <section className="relative w-full bg-[#FDFDFD] overflow-hidden pt-28 pb-20">

      {/* HEADING */}
      <div className="w-full pb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
          {t.heading}
        </h1>
        <p className="text-gray-500 mt-2">{t.subtitle}</p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-12">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-10">

          {/* NAME */}
          <h2 className="font-[Gotu] font-black uppercase text-[#112250] text-5xl md:text-7xl">
            <span className="text-orange-500 block">{t.nameFirst}</span>
            <span>{t.nameLast}</span>
          </h2>

          {/* INFO */}
          <div className="p-6 border-l-4 border-green bg-white shadow rounded-xl">
            <p className="font-bold text-lg text-[#112250]">
              {t.info}
            </p>
          </div>

          {/* BIO */}
          <div className="space-y-6 text-gray-600 text-base leading-relaxed">

            <div className="flex gap-4">
              <Quote className="text-orange-500 shrink-0" size={28} />
              <p>{t.bio[0]}</p>
            </div>

            <p>{t.bio[1]}</p>
            <p>{t.bio[2]}</p>

          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 space-y-6">

          <div className="h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <img src={img} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-5">

            <motion.div className="p-6 bg-primary text-white rounded-2xl">
              <User className="mb-3" />
              <p className="font-bold">{t.experience}</p>
            </motion.div>

            <motion.div className="p-6 bg-white border rounded-2xl">
              <GraduationCap className="mb-3 text-green" />
              <p className="font-bold">{t.education}</p>
            </motion.div>

            <motion.div className="p-6 bg-white border rounded-2xl col-span-2">
              <ShieldCheck className="mb-3 text-green" />
              <p className="font-bold">{t.party}</p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* FAMILY */}
      <div className="max-w-[1400px] mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {t.familyTitle}
        </h2>
        <p className="text-gray-600">{t.familyText}</p>
      </div>

      {/* IDEOLOGY */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {t.ideologyTitle}
        </h2>
        <p className="text-gray-600">{t.ideologyText}</p>
      </div>

    </section>
  );
};

export default AboutPage;