import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactData } from "@/data/contactData";

interface Props {
  lang: "hi" | "en";
}

const ContactSection = ({ lang }: Props) => {
  const t = contactData[lang];

  return (
    <div className="w-[96%] lg:w-[88%] mx-auto">

      {/* HEADING */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
          {t.title}
        </h1>
        <p className="text-gray-500 mt-2">{t.intro}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT - INFO */}
        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <MapPin className="text-green" />
            <p>{t.address}</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-green" />
            <p>{t.phone}</p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-green" />
            <p>{t.email}</p>
          </div>

        </div>

        {/* RIGHT - FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 bg-white p-6 rounded-2xl shadow"
        >
          <input
            type="text"
            placeholder={t.form.name}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="text"
            placeholder={t.form.phone}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <textarea
            placeholder={t.form.message}
            className="w-full border px-4 py-2 rounded-lg"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded-lg font-bold hover:opacity-90"
          >
            {t.form.button}
          </button>
        </motion.form>

      </div>

    </div>
  );
};

export default ContactSection;