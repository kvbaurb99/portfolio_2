import Heading from "../ui/Headings/H2/Heading";
import Container from "../ui/Container/Container";
import {
  CompanyHeader,
  CompanyTitle,
  CustomSection,
  Description,
  Period,
  Position,
  SectionBackground,
  Skill,
  SkillsContainer,
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineItem,
} from "./Experience.styled";
import { experiences } from "./data/experience";

// Main component
const ExperienceSection = () => {
  return (
    <CustomSection id="experience">
      <SectionBackground />
      <Container>
        <Heading title="Professional experience" />

        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} $isEven={index % 2 === 0} $delay={index}>
              <TimelineDot />
              <TimelineContent>
                <CompanyHeader>
                  <div>
                    <CompanyTitle>{exp.company}</CompanyTitle>
                    <Position>{exp.position}</Position>
                    <Period>{exp.period}</Period>
                  </div>
                </CompanyHeader>
                <Description>{exp.description}</Description>
                <SkillsContainer>
                  {exp.skills.map((skill, i) => (
                    <Skill key={i}>{skill}</Skill>
                  ))}
                </SkillsContainer>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </CustomSection>
  );
};

export default ExperienceSection;
