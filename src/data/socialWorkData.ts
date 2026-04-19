import {
  HeartPulse,
  HeartHandshake,
  PartyPopper,
  Landmark,
  Award,
  Flag,
  Home,
  UsersRound
} from "lucide-react";
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
    icon: HeartHandshake,
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
      hi: "सांस्कृतिक और धार्मिक परंपराओं का भव्य उत्सव।",
      en: "A grand celebration of cultural and religious traditions."
    },
    path: "/dohela-mahotsav",
    icon: PartyPopper,
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
      hi: "आध्यात्मिक शांति और पूजा-अर्चना का प्रमुख केंद्र।",
      en: "A spiritual center for peace and religious devotion."
    },
    path: "/rudraksh-dham",
    icon: Landmark,
    tag: "Spiritual",
    color: "from-indigo-500/20"
  },

  {
    key: "samman",
  title: {
  hi: "पहल - सम्मान जो समाज के काम आए",
  en: "Initiative – Awards for Social Good"
},
    desc: {
      hi: "प्राप्त सम्मान को समाजहित में उपयोग करने की पहल।",
      en: "An initiative to utilize awards for social welfare."
    },
    path: "/samman-seva",
    icon: Award,
    tag: "Inspiration",
    color: "from-yellow-500/20"
  },

  // 🔥 NEW ADDED

  {
    key: "bandari",
    title: {
      hi: "बांदरी गौरव दिवस",
      en: "Bandari Gaurav Diwas"
    },
    desc: {
      hi: "क्षेत्रीय गौरव और सामाजिक एकता को समर्पित आयोजन।",
      en: "An event dedicated to regional pride and community unity."
    },
    path: "/bandari-gaurav-diwas",
    icon: Flag,
    tag: "Pride",
    color: "from-green-500/20"
  },

  {
    key: "barodiya",
    title: {
      hi: "बरोदिया कलाँ गौरव दिवस",
      en: "Barodiya Kala Gaurav Diwas"
    },
    desc: {
      hi: "स्थानीय परंपराओं और गौरव को बढ़ावा देने वाला आयोजन।",
      en: "An initiative promoting local traditions and pride."
    },
    path: "/barodiya-gaurav-diwas",
    icon: Home,
    tag: "Culture",
    color: "from-blue-500/20"
  },

  { 
    key: "malthon",
    title: {
      hi: "मालथौन गौरव दिवस",
      en: "Malthon Gaurav Diwas"
    },
    desc: {
      hi: "क्षेत्रीय पहचान और जनभागीदारी का उत्सव।",
      en: "A celebration of regional identity and public participation."
    },
    path: "/malthon-gaurav-diwas",
    icon: UsersRound,
    tag: "Community",
    color: "from-purple-500/20"
  }
];