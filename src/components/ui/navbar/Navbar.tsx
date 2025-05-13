"use client";
import { useState, useEffect } from "react";
import Container from "../Container/Container";
import { Menu as MenuIcon } from "lucide-react";
import Logo from "@/assets/logo/J.png";
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
import Menu from "@/components/mobile/menu/Menu";

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

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
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

            <MenuIcon
              width={26}
              height={26}
              color="#fff"
              onClick={toggleMenu}
              className="lg:hidden"
              style={{ cursor: "pointer" }}
            />
          </NavContainer>
        </Container>
        {/* Only render Menu when open */}
        {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />}
      </Nav>

      {/* Only render overlay when menu is open */}
      {isMenuOpen && <Overlay $isOpen={isMenuOpen} onClick={handleCloseMenu} />}
    </>
  );
}
