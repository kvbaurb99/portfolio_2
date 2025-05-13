import MissionAndValues from "@/components/aboutMe/AboutMe";
import ContactSection from "@/components/contact/Contact";
import ExperienceSection from "@/components/experience/Experience";
import SoftSkills from "@/components/skills/soft/SoftSkills";
import TechnicalSkills from "@/components/skills/technical/TechnicalSkills";
import Header from "@/components/ui/header/Header";
import PortfolioSection from "@/components/portfolio/Portfolio";

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
