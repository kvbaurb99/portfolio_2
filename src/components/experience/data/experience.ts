import { ExperienceType } from "@/types/experience";

export const experiences: ExperienceType[] = [
  {
    id: "company1",
    company: "TakeGroup",
    position: "Frontend Developer",
    period: "2022 - Present",
    description:
      "Front-end technology development at Webleaders where I was responsible for the development of advanced CMS web applications using Next.js and React.js technologies, working closely with the back-end developer to ensure optimal integration of the user interface with the server layer.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Styled Components",
      "Jest",
    ],
    logo: "/images/logos/company1.png",
  },
  {
    id: "company2",
    company: "IT Freelancer",
    position: "Frontend Developer",
    period: "2022 - present",
    description:
      "Specializing in the design and implementation of responsive user interfaces using React.js and Next.js. Performing end-to-end website performance optimization, increasing performance ratings. Experience in CMS integration and REST API implementation ensuring seamless data synchronization.",
    skills: [
      "React",
      "Angular",
      "JavaScript",
      "SCSS",
      "Webpack",
      "RESTful APIs",
    ],
    logo: "/images/logos/company2.png",
  },
  {
    id: "company3",
    company: "Komputronik S.A.",
    position: "IT Technician",
    period: "2020 - 21",
    description:
      "Comprehensive technical support for customers in the diagnosis and repair of computer hardware, including installation of components, installation of operating systems, and troubleshooting of hardware and software problems. Specializing in configuring new computer sets according to customers' needs and providing professional advice on the selection of components and software.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "WordPress",
      "Responsive Design",
    ],
    logo: "/images/logos/company3.png",
  },
];
