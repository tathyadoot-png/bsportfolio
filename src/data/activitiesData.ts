import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.jpg";
import img13 from "@/assets/13.jpg";
import img14 from "@/assets/14.jpg";
import img15 from "@/assets/15.jpg";
import img16 from "@/assets/16.jpg";
import img17 from "@/assets/17.jpg";
import img18 from "@/assets/18.jpg";
import img19 from "@/assets/19.jpg";
import img20 from "@/assets/20.jpg";
import img21 from "@/assets/21.jpg";
import img22 from "@/assets/22.jpg";
import img23 from "@/assets/23.jpg";
import img24 from "@/assets/24.jpg";
import img25 from "@/assets/25.jpg";
import img26 from "@/assets/26.jpg";

export interface Activity {
  id: number;
  title: {
    hi: string;
    en: string;
  };
  description: {
    hi: string;
    en: string;
  };
  cover: string;
  images: string[];
  date: string;
  location: string;
}

export const activitiesData: Activity[] = [
  {
    id: 1,
    title: {
      hi: "जनसंपर्क अभियान",
      en: "Public Outreach Program",
    },
    description: {
      hi: "क्षेत्र में घर-घर जाकर लोगों की समस्याएं सुनी गईं।",
      en: "Visited households to understand public issues.",
    },
    cover: img1,
    images: [img1, img2, img3, img4],
    date: "Jan 2026",
    location: "District Area",
  },
  {
    id: 2,
    title: {
      hi: "विकास कार्य निरीक्षण",
      en: "Development Work Inspection",
    },
    description: {
      hi: "चल रहे निर्माण कार्यों का निरीक्षण किया गया।",
      en: "Inspected ongoing construction projects.",
    },
    cover: img8,
    images: [img8, img9, img10, img11],
    date: "Feb 2026",
    location: "City Zone",
  },
  {
    id: 3,
    title: {
      hi: "महिला सशक्तिकरण कार्यक्रम",
      en: "Women Empowerment Event",
    },
    description: {
      hi: "महिलाओं के लिए विशेष कार्यक्रम आयोजित किया गया।",
      en: "Organized program for women empowerment.",
    },
    cover: img5,
    images: [img5, img6, img7],
    date: "Mar 2026",
    location: "Rural Area",
  },
  {
    id: 4,
    title: {
      hi: "सांस्कृतिक महोत्सव",
      en: "Cultural Festival",
    },
    description: {
      hi: "स्थानीय संस्कृति और परंपरा का उत्सव मनाया गया।",
      en: "Celebrated local culture and traditions.",
    },
    cover: img14,
    images: [img14, img15, img16, img17],
    date: "Apr 2026",
    location: "Town Hall",
  },
  {
    id: 5,
    title: {
      hi: "युवा खेल प्रतियोगिता",
      en: "Youth Sports Event",
    },
    description: {
      hi: "युवाओं को खेलों के लिए प्रेरित किया गया।",
      en: "Encouraged youth participation in sports.",
    },
    cover: img21,
    images: [img21, img22, img23],
    date: "May 2026",
    location: "Sports Ground",
  },
  {
    id: 6,
    title: {
      hi: "जनसभा संबोधन",
      en: "Public Rally Address",
    },
    description: {
      hi: "जनसभा में विकास योजनाओं पर चर्चा की गई।",
      en: "Addressed public regarding development plans.",
    },
    cover: img9,
    images: [img9, img10, img11],
    date: "Jun 2026",
    location: "सभा स्थल",
  },
  {
    id: 7,
    title: {
      hi: "स्वास्थ्य शिविर",
      en: "Health Camp",
    },
    description: {
      hi: "ग्रामीण क्षेत्र में स्वास्थ्य शिविर का आयोजन किया गया।",
      en: "Organized health camp in rural region.",
    },
    cover: img6,
    images: [img6, img7, img8],
    date: "Jul 2026",
    location: "Village Area",
  },
  {
    id: 8,
    title: {
      hi: "शिक्षा जागरूकता अभियान",
      en: "Education Awareness Drive",
    },
    description: {
      hi: "बच्चों को शिक्षा के महत्व के बारे में जागरूक किया गया।",
      en: "Spread awareness about education importance.",
    },
    cover: img11,
    images: [img11, img12, img13],
    date: "Aug 2026",
    location: "School Campus",
  },
  {
    id: 9,
    title: {
      hi: "ग्राम विकास बैठक",
      en: "Village Development Meeting",
    },
    description: {
      hi: "गांव के विकास के लिए बैठक आयोजित की गई।",
      en: "Meeting held for village development planning.",
    },
    cover: img12,
    images: [img12, img13, img14],
    date: "Sep 2026",
    location: "Panchayat",
  },
];