"use client";
import { useState, useEffect } from "react";
import Container from "../Container/Container";
import Logo from "@/assets/J.png";
import {
  ActionButton,
  LogoWrapper,
  Nav,
  NavContainer,
  NavLink,
  NavLinks,
  Overlay,
} from "./Navbar.styled";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Nav className={isScrolled ? "scrolled" : ""}>
        <Container>
          <NavContainer>
            <LogoWrapper>
              <Image src={Logo} width={40} height={40} alt="logo" priority />
            </LogoWrapper>
            <NavLinks>
              <NavLink href="/" className="active">
                Home
              </NavLink>
              <NavLink href="#about-me">About me</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </NavLinks>

            <ActionButton href="/resume/resume.pdf" download={true}>
              Download Resume
            </ActionButton>
          </NavContainer>
        </Container>
      </Nav>

      <Overlay $isOpen={isMenuOpen} onClick={toggleMenu} />
    </>
  );
}
