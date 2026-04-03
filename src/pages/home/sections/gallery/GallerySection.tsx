import { useState } from "react";
import { galleryData } from "@/data/galleryData";

interface Props {
  lang: "hi" | "en";
}

const GallerySection = ({ lang }: Props) => {
  const [year, setYear] = useState("all");
  const [category, setCategory] = useState("all");

  const filtered = galleryData.filter((item) => {
    return (
      (year === "all" || item.year === year) &&
      (category === "all" || item.category === category)
    );
  });

  return (
    <div className="w-[96%] lg:w-[88%] mx-auto">

      {/* HEADING */}
      <h1 className="text-3xl font-extrabold text-primary mb-6">
        {lang === "hi" ? "फोटो गैलरी" : "Photo Gallery"}
      </h1>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-4 mb-8">

        <select
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="all">
            {lang === "hi" ? "सभी वर्ष" : "All Years"}
          </option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>

        <select
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">
            {lang === "hi" ? "सभी इवेंट" : "All Events"}
          </option>
          <option value="blood">
            {lang === "hi" ? "रक्तदान" : "Blood"}
          </option>
          <option value="vivah">
            {lang === "hi" ? "विवाह" : "Vivah"}
          </option>
          <option value="political">
            {lang === "hi" ? "राजनीतिक" : "Political"}
          </option>
        </select>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {filtered.map((item, i) =>
          item.images.map((img, j) => (
            <div key={i + "-" + j} className="overflow-hidden rounded-xl">
              <img
                src={img}
                className="w-full h-60 object-cover hover:scale-110 transition"
              />
            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default GallerySection;