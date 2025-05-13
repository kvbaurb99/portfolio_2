import Image from "next/image";
import Section from "../ui/Section/Section";
import Heading from "../ui/Headings/H2/Heading";
import AnimeImage from "@/assets/projects/naruto.jpg";
import PodiatryImage from "@/assets/projects/podologia.webp";
import VODImage from "@/assets/projects/vod.webp";
import TakelinkImage from "@/assets/projects/takelink.jpg";
import CasinoImage from "@/assets/projects/casino.webp";
import BlogImage from "@/assets/projects/blog.avif";
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
        "A modern e-commerce platform built with Next.js, Stripe, and Sanity CMS offering seamless shopping experience.",
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
        "Interactive dashboard with real-time data visualization for business metrics and KPIs.",
      image: VODImage.src,
      tags: ["React", "Next.js", "Redis", "Styled Components"],
    },
    {
      id: "weather-app",
      title: "VOD Anime CMS",
      description:
        "Elegant weather forecasting app with location-based services and interactive maps.",
      image: AnimeImage.src,
      tags: ["React", "Next.js", "Redis", "Styled Components"],
    },
    {
      id: "social-network",
      title: "Blog CMS",
      description:
        "Full-stack social media application with real-time messaging and content sharing.",
      image: BlogImage.src,
      tags: ["React", "Next.js", "Redis", "Styled Components"],
    },
    {
      id: "fitness-tracker",
      title: "Casino CMS",
      description:
        "Mobile-first application for tracking workouts, nutrition, and progress with personalized insights.",
      image: CasinoImage.src,
      tags: ["React", "Next.js", "Redis", "Styled Components"],
    },
    {
      id: "portfolio-template",
      title: "Podiatry Website",
      description:
        "Customizable portfolio template for developers and designers with animation effects.",
      image: PodiatryImage.src,
      tags: ["React", "Next.js", "Styled Components"],
      link: "https://podologjaworze.pl/",
    },
  ];

  return (
    <Section id="portfolio">
      <SectionBackground />
      <ContentContainer>
        <Heading title="Projects in which I participated" />

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} $index={index}>
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
                {project.link ? (
                  <a
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    href={project.link}
                  >
                    <ViewProjectButton>View Project</ViewProjectButton>
                  </a>
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
