export type Project = {
  id: string;
  name: string;
  year: string;
  location: string;
  imageUrl: string;
  summary: string;
};

export const allProjects: Project[] = [
  {
    id: "patrick-street",
    name: "168 Patrick Street",
    year: "2025",
    location: "Sydney",
    imageUrl: "/oha/168 Patrick Street 1.jpg.jpeg",
    summary:
      "A refined urban home proposal that balances privacy, ventilation, and modern family living.",
  },
  {
    id: "king-street",
    name: "32 King Street",
    year: "2024",
    location: "Sydney",
    imageUrl: "/oha/+32 King Street A.jpg.jpeg",
    summary:
      "A compact infill design with efficient planning, textured facades, and strong indoor-outdoor flow.",
  },
  {
    id: "karingal-ave",
    name: "26 Karingal Ave, Carlingford",
    year: "2024",
    location: "Carlingford",
    imageUrl: "/oha/26 Karingal Ave. Carlingford.jpg.jpeg",
    summary:
      "A suburban redevelopment strategy designed around family functionality and long-term adaptability.",
  },
  {
    id: "ostend-street",
    name: "66 Ostend Street",
    year: "2023",
    location: "Sydney",
    imageUrl: "/oha/66 Ostend Street 20210219 A.jpg.jpeg",
    summary:
      "A multi-level residence combining robust structure, clear circulation, and efficient daylight access.",
  },
  {
    id: "binalong",
    name: "75 Binalong",
    year: "2023",
    location: "Sydney",
    imageUrl: "/oha/75 Binalong v1.jpg.jpeg",
    summary:
      "A site-responsive concept with layered massing and a calm, contemporary architectural expression.",
  },
  {
    id: "wilbur-street",
    name: "113 Wilbur Street",
    year: "2023",
    location: "Sydney",
    imageUrl: "/oha/113 Wilbur Street View 01.jpg.jpeg",
    summary:
      "A streetscape-led design balancing neighborhood character with updated lifestyle requirements.",
  },
  {
    id: "urunga-parade",
    name: "24 Urunga Parade",
    year: "2022",
    location: "Sydney",
    imageUrl: "/oha/20210503 24 Urunga Parade 01A.jpg.jpeg",
    summary:
      "A waterfront-oriented home concept emphasizing views, resilience, and environmental performance.",
  },
  {
    id: "chandler-st",
    name: "17 Chandler Street",
    year: "2022",
    location: "Sydney",
    imageUrl: "/oha/17 Chandler St.jpg.jpeg",
    summary:
      "A contemporary upgrade with improved permeability, flexible interiors, and refined detailing.",
  },
  {
    id: "rhodes-st",
    name: "16 Rhodes Street, Hillsdale",
    year: "2021",
    location: "Hillsdale",
    imageUrl: "/oha/16 Rhodes st, Hillsdale_High Res.jpg.jpeg",
    summary:
      "A practical residential design approach focused on efficiency, comfort, and material longevity.",
  },
  {
    id: "lucerne-st",
    name: "67 Lucerne Street",
    year: "2021",
    location: "Sydney",
    imageUrl: "/oha/01 67 LUCERNE ST.jpg.jpeg",
    summary:
      "A carefully proportioned project that aligns planning clarity with a strong architectural identity.",
  },
];

export const featuredProjects: Project[] = allProjects.slice(0, 3);