import {
  FaMedal,
  FaInfinity,
  FaGraduationCap,
  FaAward,
  FaLocationDot,
  FaBuildingColumns,
  FaStar,
  FaBookmark,
  FaLink,
  FaRepeat,
} from "react-icons/fa6";

export const person = {
  name: "Maryam Mirzakhani",
  persianName: "مریم میرزاخانی",
  born: "12 May 1977",
  died: "14 July 2017",
};

export const portrait = {
  src: "/images/maryam-mirzakhani.jpg",
  alt: "Portrait of Maryam Mirzakhani",
};

export const hero = {
  eyebrow: "In memoriam · 1977 - 2017",
  role: "Iranian mathematician · Professor at Stanford University",
  lead: "She devoted her career to the geometry of curved surfaces, and to the vast spaces of all the shapes those surfaces can take. In 2014 she became the first woman to receive the Fields Medal.",
  tribute:
    "This page is a small, independent tribute to her curiosity, her patience and her quiet daring.",
};

export const stats = [
  {
    icon: FaGraduationCap,
    title: "Education",
    value: "PhD from Harvard",
  },
  {
    icon: FaAward,
    title: "Fields Medal",
    value: "Won in 2014",
  },
  {
    icon: FaInfinity,
    title: "Legacy",
    value: "Inspiring future generations",
  },
];

export const quote = {
  text: "The beauty of mathematics only shows itself to more patient followers.",
  author: "Maryam Mirzakhani",
};

export const about = {
  paragraphs: [
    {
      text: "Maryam Mirzakhani was born in Tehran on 12 May 1977. As a child she loved books and imagined becoming a writer. Mathematics came into focus during her years at the Farzanegan schools, which educate exceptionally talented students.",
    },
    {
      text: "In 1994 and 1995 she represented Iran at the International Mathematical Olympiad, winning gold medals: 41 of 42 points in Hong Kong, then a perfect 42 of 42 in Toronto. She went on to study mathematics at Sharif University of Technology, graduating in 1999.",
    },
    {
      text: "At Harvard University she completed her doctorate in 2004 under Curtis McMullen, himself a Fields Medalist. She then held a Clay Research Fellowship and an assistant professorship at Princeton, before becoming a professor at Stanford University.",
    },
    {
      text: "Colleagues describe a mathematician who thought in pictures and covered large sheets of paper with drawings of surfaces. She called herself a 'slow' mathematician, happy to stay with a hard problem for years. She died of cancer on 14 July 2017, at the age of 40.",
    },
  ],
  facts: [
    { label: "Born", value: "12 May 1977, Tehran, Iran" },
    { label: "Died", value: "14 July 2017, Stanford, California" },
    { label: "Field", value: "Geometry and dynamical systems" },
    { label: "Doctoral advisor", value: "Curtis T. McMullen" },
  ],
};
export const timeline = [
  {
    year: "1977",
    title: "Tehran, Iran",
    description: "Born on May 12th into a family that valued education.",
    icon: FaLocationDot,
  },
  {
    year: "1994-95",
    title: "IMO Gold Medals",
    description:
      "First Iranian student to achieve a perfect score and win gold at the International Mathematical Olympiad.",
    icon: FaAward,
  },
  {
    year: "1999",
    title: "Sharif University",
    description: "Graduated with a B.Sc. in mathematics.",
    icon: FaGraduationCap,
  },
  {
    year: "2004",
    title: "Harvard University",
    description:
      "Earned her PhD under the supervision of Fields Medalist Curtis McMullen.",
    icon: FaBuildingColumns,
  },
  {
    year: "2008/09",
    title: "Stanford University",
    description: "Became a professor of Mathematics.",
    icon: FaBuildingColumns,
  },
  {
    year: "2014",
    title: "Fields Medal",
    description:
      "Became the first woman and first Iranian to receive this honor in Seoul.",
    icon: FaMedal,
  },
  {
    year: "2017",
    title: "Remembrance",
    description:
      "Passed away on July 14th, leaving a lasting legacy in mathematics.",
    icon: FaInfinity,
  },
];
