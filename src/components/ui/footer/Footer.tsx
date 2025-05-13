import Container from "../Container/Container";
import Link from "next/link";
import {
  ContactInfo,
  ContactItem,
  Copyright,
  FooterAbout,
  FooterBottom,
  FooterColumn,
  FooterContent,
  FooterHeading,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterWrapper,
} from "./Footer.styled";
import Logo from "@/assets/logo/J.png";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterLogo>
              <Image
                src={Logo}
                width={40}
                height={40}
                loading="lazy"
                alt="logo"
              />
            </FooterLogo>
            <FooterAbout>
              My personal portfolio website, showcasing my skills and experience
              in software development.
            </FooterAbout>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Quick links</FooterHeading>
            <FooterLinks>
              <FooterLink>
                <Link href="#about-me">About me</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#skills">Skills</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#experience">Experience</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#portfolio">Portfolio</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#contact">Contact</Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterHeading>Social links</FooterHeading>
            <ContactInfo>
              <ContactItem
                rel="nofollow noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/jakub-urba%C5%84ski-99a2k/"
              >
                Linkedin
              </ContactItem>
              <ContactItem
                rel="nofollow noopener noreferrer"
                target="_blank"
                href="https://github.com/kvbaurb99"
              >
                GitHub
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <Copyright>© {currentYear} Jakub Urbański.</Copyright>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}
