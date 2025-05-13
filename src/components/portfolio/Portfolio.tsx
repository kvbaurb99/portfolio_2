import Image from "next/image";
import Section from "../ui/Section/Section";
import Heading from "../ui/Headings/H2/Heading";
import AnimeImage from "@/assets/projects/naruto.jpg";
import PodiatryImage from "@/assets/projects/podologia.webp";
import VODImage from "@/assets/projects/vod.webp";
import TakelinkImage from "@/assets/projects/takelink.jpg";
import CasinoImage from "@/assets/projects/casino.webp";
import BlogImage from "@/assets/projects/blog.avif";
import PortfolioImage from "@/assets/header/header_image.webp";
import {
  CardContent,
  CardOverlay,
  ContentContainer,
  ProjectCard,
  ProjectDescription,
  ProjectImageContainer,
  ProjectsGrid,
  ProjectTitle,
  SectionBackground,
  Tag,
  TagsContainer,
  ViewProjectButton,
} from "./Portfolio.styled";

// Definiowanie typów
interface ProjectType {
  id: string;
  title: string;
  description: string;
  link?: string;
  image: string;
  tags: string[];
}

// Main component
const PortfolioSection = () => {
  // Sample projects data
  const projects: ProjectType[] = [
    {
      id: "e-commerce-platform",
      title: "Takelink domain marketplace",
      description:
        "Takelink - is a platform where users can buy publications about their service or website.",
      image: TakelinkImage.src,
      tags: [
        "Next.js",
        "React",
        "Stripe",
        "NextAuth.js",
        "Tailwind CSS",
        "Redux",
      ],
      link: "https://takelink.pl/",
    },
    {
      id: "dashboard-app",
      title: "VOD CMS",
      description:
        "VODCMS - appearance for the movie and series search engine.",
      image: VODImage.src,
      tags: ["React", "Next.js", "Redis", "Styled Components"],
    },
    {
      id: "weather-app",
      title: "VOD Anime CMS",
      description: "VODCMS - appearance for the animes search engine.",
      image: AnimeImage.src,
      tags: ["React", "Next.js", "Redis", "Styled Components"],
    },
    {
      id: "social-network",
      title: "Blog CMS",
      description: "BlogCMS - appearance for the blog site.",
      image: BlogImage.src,
      tags: ["React", "Next.js", "Redis", "Styled Components"],
    },
    {
      id: "fitness-tracker",
      title: "Casino CMS",
      description:
        "A modern, responsive user interface for the content management system (CMS) of a casino platform",
      image: CasinoImage.src,
      tags: ["React", "Next.js", "Redis", "Styled Components"],
    },
    {
      id: "portfolio-template",
      title: "Podiatry Website",
      description:
        "A modern, responsive user interface for a podiatry website.",
      image: PodiatryImage.src,
      tags: ["React", "Next.js", "Styled Components"],
      link: "https://podologjaworze.pl/",
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my projects and skills.",
      image: PortfolioImage.src,
      tags: ["React", "Next.js", "Styled Components"],
      link: "special",
    },
  ];

  return (
    <Section id="portfolio">
      <SectionBackground />
      <ContentContainer>
        <Heading title="Projects in which I participated" />

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} $index={index}>
              <ProjectImageContainer>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.5s ease",
                  }}
                  className="project-image"
                />
                <CardOverlay />
              </ProjectImageContainer>

              <CardContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TagsContainer>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagsContainer>
                {project.link !== "special" ? (
                  <a
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    href={project.link}
                  >
                    <ViewProjectButton>View Project</ViewProjectButton>
                  </a>
                ) : project.link === "special" ? (
                  <ViewProjectButton>
                    {project.link === "special"
                      ? "You are here!"
                      : "View Project"}
                  </ViewProjectButton>
                ) : null}
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentContainer>
    </Section>
  );
};

export default PortfolioSection;
