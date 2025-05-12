import React from "react";
import Section from "../../ui/Section/Section";
import Heading from "../../ui/Headings/H2/Heading";
import {
  Skill,
  SkillBottomLine,
  SkillContainer,
  SkillsContainer,
} from "./TechnicalSkills.styled";
import { useSkills } from "./data";

export default function TechnicalSkills() {
  const { skills } = useSkills();
  return (
    <Section id="skills">
      <Heading title="Technical skills" />
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillContainer key={index}>
            <h3 className="opacity-50 text-white">{skill.name}</h3>
            <div className="flex flex-wrap gap-2.5">
              {skill.items.map((item, index) => (
                <Skill
                  rel="nofollow noopener noreferrer"
                  href={item.link ? item.link : "#"}
                  key={index}
                  $isLink={item.link ? true : false}
                >
                  <h4>{item.name}</h4>
                  <SkillBottomLine $isLink={item.link ? true : false} />
                </Skill>
              ))}
            </div>
          </SkillContainer>
        ))}
      </SkillsContainer>
    </Section>
  );
}
