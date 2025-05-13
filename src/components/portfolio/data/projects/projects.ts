import AnimeImage from "@/assets/projects/naruto.jpg";
import PodiatryImage from "@/assets/projects/podologia.webp";
import VODImage from "@/assets/projects/vod.webp";
import TakelinkImage from "@/assets/projects/takelink.jpg";
import CasinoImage from "@/assets/projects/casino.webp";
import BlogImage from "@/assets/projects/blog.avif";
import PortfolioImage from "@/assets/header/header_image.webp";
import { ProjectType } from "@/types/projects";

export const projects: ProjectType[] = [
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