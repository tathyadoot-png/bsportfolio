import { HeartPulse, Users, HandHelping } from "lucide-react";

export const socialWorkData = [
  {
    key: "blood",
    title: {
      hi: "रक्तदान सेवा",
      en: "Blood Donation"
    },
    desc: {
      hi: "रक्तदान शिविरों के माध्यम से जीवन बचाने की एक निरंतर पहल।",
      en: "A continuous initiative to save lives through organized blood donation camps."
    },
    path: "/blood-donation",
    icon: HeartPulse,
    tag: "Life Saving",
    color: "from-red-500/20"
  },
  {
    key: "vivah",
    title: {
      hi: "सामूहिक विवाह",
      en: "Samuhik Vivah"
    },
    desc: {
      hi: "जरूरतमंद परिवारों की कन्याओं के विवाह हेतु आर्थिक एवं सामाजिक सहायता।",
      en: "Financial and social support for the marriage of daughters from needy families."
    },
    path: "/vivah",
    icon: Users,
    tag: "Community",
    color: "from-orange-500/20"
  },
 
  {
  key: "dohela",
  title: {
    hi: "डोहेला महोत्सव",
    en: "Dohela Mahotsav"
  },
  desc: {
    hi: "डोहेला महोत्सव एक सांस्कृतिक और धार्मिक आयोजन है, जिसमें क्षेत्रीय परंपराओं, भक्ति और लोक संस्कृति का भव्य प्रदर्शन किया जाता है।",
    en: "Dohela Mahotsav is a cultural and religious festival showcasing regional traditions, devotion, and folk heritage."
  },
  path: "/dohela-mahotsav",
  icon: Users, // 👉 change later if needed
  tag: "Festival",
  color: "from-pink-500/20"
},

{
  key: "rudraksh",
  title: {
    hi: "रुद्राक्ष धाम, सागर",
    en: "Rudraksh Dham, Sagar"
  },
  desc: {
    hi: "रुद्राक्ष धाम एक पवित्र धार्मिक स्थल है, जहाँ भक्तों के लिए आध्यात्मिक शांति और पूजा-अर्चना की व्यवस्था की गई है।",
    en: "Rudraksh Dham is a sacred temple providing a peaceful spiritual environment for devotees and religious activities."
  },
  path: "/rudraksh-dham",
  icon: HandHelping, // 👉 later you can replace with temple icon
  tag: "Spiritual",
  color: "from-indigo-500/20"
},
{
  key: "samman",
  title: {
    hi: "सम्मान जो समाज के काम आए",
    en: "Awards for Social Good"
  },
  desc: {
    hi: "यह एक अनूठी पहल है, जिसमें प्राप्त सम्मान और पुरस्कारों को समाज के हित में उपयोग किया जाता है, ताकि जरूरतमंद लोगों की सहायता की जा सके।",
    en: "A unique initiative where received awards and honors are utilized for social welfare, helping those in need."
  },
  path: "/samman-seva",
  icon: HandHelping, // 👉 later you can change to Award icon
  tag: "Inspiration",
  color: "from-yellow-500/20"
}
];