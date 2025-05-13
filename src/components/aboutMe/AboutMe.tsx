import Heading from "@/components/ui/Headings/H2/Heading";
import Section from "@/components/ui/Section/Section";
import ImageOne from "@/assets/header/night_city_neon_city_lights_151920_1920x1080.jpg";
import ImageTwo from "@/assets/header/night_city_neon_city_lights_151920_1920x1080.jpg";
import {
  ContentBox,
  FeatureDescription,
  FeatureIcon,
  FeaturePoint,
  FeatureRow,
  FeatureText,
  FeatureTitle,
  ImageAccent,
  ImageContainer,
  ImageShadow,
  ImageWrapper,
  StyledImage,
  WhyUsContainer,
} from "./AboutMe.styled";

export default function MissionAndValues() {
  return (
    <Section id="about-me">
      <Heading title="What I do?" />
      <WhyUsContainer>
        <FeatureRow>
          <ImageContainer>
            <ImageWrapper>
              <StyledImage
                src={ImageOne.src}
                loading="lazy"
                alt="Wysokiej jakości figurki 3D"
              />
              <ImageAccent />
            </ImageWrapper>
            <ImageShadow />
          </ImageContainer>
          <ContentBox>
            <FeatureTitle>
              My name is Jakub Urbanski, I am a Front-end Developer based in
              Poland.
            </FeatureTitle>
            <FeatureDescription>
              I have over 3 years of commercial experience as a Front-end
              Developer, specializing in developing modern web applications
              using React and Next.js. On a daily basis, I work for a website
              traffic building company where I create web applications and user
              interfaces. During my work I focus on writing clear code,
              optimizing application architecture and ensuring high performance.
            </FeatureDescription>
            <FeaturePoint>
              <FeatureIcon>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </FeatureIcon>
              <FeatureText>
                I have 3 years of commercial experience.
              </FeatureText>
            </FeaturePoint>
            <FeaturePoint>
              <FeatureIcon>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </FeatureIcon>
              <FeatureText>Specializing in React and Next.js.</FeatureText>
            </FeaturePoint>
            <FeaturePoint>
              <FeatureIcon>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </FeatureIcon>
              <FeatureText>Creating optimized websites.</FeatureText>
            </FeaturePoint>
          </ContentBox>
        </FeatureRow>

        <FeatureRow>
          <ImageContainer>
            <ImageWrapper>
              <StyledImage
                loading="lazy"
                src={ImageTwo.src}
                alt="Unikalne i limitowane kolekcje figurek"
              />
              <ImageAccent />
            </ImageWrapper>
            <ImageShadow />
          </ImageContainer>
          <ContentBox>
            <FeatureTitle>
              In my daily work, I focus on delivering high quality code, taking
              care of clean application architecture and performance
              optimization.
            </FeatureTitle>
            <FeatureDescription>
              I deliver high quality code, taking care of clear architecture and
              performance optimization. I keep up to date with the news from the
              world of programming technologies, I constantly focus on my
              development and learning. I have experience in working in Agile,
              as well as in effective collaboration in teams, which allows me to
              deliver projects at the highest level.
            </FeatureDescription>
            <FeaturePoint>
              <FeatureIcon>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </FeatureIcon>
              <FeatureText>
                I am constantly focusing on my development and learning.
              </FeatureText>
            </FeaturePoint>
            <FeaturePoint>
              <FeatureIcon>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </FeatureIcon>
              <FeatureText>I have experience working in Agile.</FeatureText>
            </FeaturePoint>
            <FeaturePoint>
              <FeatureIcon>
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </FeatureIcon>
              <FeatureText>
                I adhere to the principle of Clean Code.
              </FeatureText>
            </FeaturePoint>
          </ContentBox>
        </FeatureRow>
      </WhyUsContainer>
    </Section>
  );
}
