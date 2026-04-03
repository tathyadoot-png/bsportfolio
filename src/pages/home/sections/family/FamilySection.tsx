import { motion } from "framer-motion";
import { familyData } from "@/data/familyData";

interface Props {
  lang: "hi" | "en";
}

const FamilySection = ({ lang }: Props) => {
  const t = familyData[lang];

  return (
    <div className="w-[96%] lg:w-[88%] mx-auto">

      {/* HEADING */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
          {t.title}
        </h1>
        <p className="text-gray-500 mt-2 max-w-2xl">
          {t.intro}
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {t.members.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden"
          >
            {/* IMAGE */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={item.image}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-bold text-primary">
                {item.name}
              </h3>
              <p className="text-sm text-green font-semibold mb-2">
                {item.role}
              </p>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default FamilySection;