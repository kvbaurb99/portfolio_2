import MissionAndValues from "@/components/aboutMe/AboutMe";
import ContactSection from "@/components/contact/Contact";
import ExperienceSection from "@/components/experience/Experience";
import SoftSkills from "@/components/skills/soft/SoftSkills";
import TechnicalSkills from "@/components/skills/technical/TechnicalSkills";
import Header from "@/components/ui/header/Header";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const PortfolioSection = dynamic(
  () => import("@/components/portfolio/Portfolio"),
  {
    loading: () => <Loader2 className="animate-spin" size={16} />,
    ssr: true,
  }
);

export default function Home() {
  return (
    <>
      <Header />
      <MissionAndValues />
      <TechnicalSkills />
      <SoftSkills />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
