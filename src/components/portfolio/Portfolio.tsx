import Image from "next/image";
import Section from "../ui/Section/Section";
import Heading from "../ui/Headings/H2/Heading";
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
import { projects } from "./data/projects/projects";

const PortfolioSection = () => {
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
                {project.link !== "special" && project.link ? (
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
