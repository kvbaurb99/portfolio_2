import {
  CTAButton,
  Figure3D,
  FloatingFigure,
  HeaderWrapper,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  ScrollIndicator,
} from "./Header.styled";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeroContent>
        <HeroTitle>
          Jakub <span>Urbański</span>
        </HeroTitle>
        <HeroSubtitle>
          Software Engineer (Front-end) • React, TypeScript & Next.js
        </HeroSubtitle>
        <CTAButton href="/resume/resume.pdf" download={true}>
          Download Resume
        </CTAButton>
      </HeroContent>

      <FloatingFigure>
        <Figure3D />
      </FloatingFigure>

      <ScrollIndicator>
        <span>Scroll down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </ScrollIndicator>
    </HeaderWrapper>
  );
}
