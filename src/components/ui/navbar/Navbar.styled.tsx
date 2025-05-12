"use client";
import Link from "next/link";
import styled from "styled-components";

// Styled components
export const Nav = styled.nav`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  transition: all 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &.scrolled {
    backdrop-filter: blur(10px);
    background-color: rgba(10, 10, 15, 0.75);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0;
`;

export const LogoWrapper = styled.div`
  position: relative;
  color: #fff;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  opacity: 0.9;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #059669;
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover,
  &.active {
    opacity: 1;
    color: white;

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
`;

export const MenuIcon = styled.div<{ $isOpen: boolean }>`
  width: 30px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease;
  transform: ${(props) =>
    props.$isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
    transform: ${(props) =>
      props.$isOpen ? "rotate(90deg) translate(8px, 0)" : "none"};
  }

  &::after {
    bottom: -8px;
    opacity: ${(props) => (props.$isOpen ? 0 : 1)};
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: rgba(15, 15, 20, 0.95);
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  transition: transform 0.4s ease-in-out;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.75rem 0;
  position: relative;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    opacity: 1;
    color: #f59e0b;
  }
`;

export const ActionButton = styled.a`
  position: relative;
  z-index: 2;
  background-color: #059669;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(5, 150, 105, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(5, 150, 105, 0.4);
    background-color: #047857;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileActionButton = styled(ActionButton)`
  margin-top: 2rem;
  text-align: center;
  padding: 0.8rem 1.5rem;
  align-self: center;
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  backdrop-filter: blur(3px);

  @media (min-width: 769px) {
    display: none;
  }
`;
