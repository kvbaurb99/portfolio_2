import Section from "../../ui/Section/Section";
import Heading from "../../ui/Headings/H2/Heading";
import {
  SkillAccent,
  SkillCard,
  SkillCardInner,
  SkillContent,
  SkillDescription,
  SkillName,
  SkillsContainer,
} from "./SoftSkills.styled";
import { softSkills } from "./data/softSkills";

export default function SoftSkills() {
  return (
    <Section>
      <Heading title="Soft skills" />
      <SkillsContainer>
        {softSkills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillCardInner>
              <SkillAccent />
              <SkillContent>
                <SkillName>{skill.name}</SkillName>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillContent>
            </SkillCardInner>
          </SkillCard>
        ))}
      </SkillsContainer>
    </Section>
  );
}
