"use client";
import styled, { keyframes } from "styled-components";
import TestImage from "@/assets/header/windows-11-dark-mode-abstract-background-black-background-1920x1080-8710.jpg";

interface TimelineItemProps {
    $isEven: boolean;
    $delay: number;
  }

// Animation keyframes
export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(5, 150, 105, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(5, 150, 105, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(5, 150, 105, 0);
  }
`;

export const shimmerBg = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Niestandardowa wersja sekcji z tłem
export const CustomSection = styled.section`
  position: relative;
  background-color: transparent;
  color: #ffffff;
  padding: 2rem 0rem;
  overflow: hidden;
  background-image: url(${TestImage.src});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75); // Półprzezroczysta nakładka
    z-index: 0;
  }
`;

export const SectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at bottom right,
      rgba(5, 150, 105, 0.1),
      transparent 60%
    ),
    radial-gradient(
      circle at top left,
      rgba(5, 150, 105, 0.05),
      transparent 40%
    );
  z-index: 1;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 3rem auto 0;
  padding: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      #059669,
      #059669,
      transparent
    );
    background-size: 100% 200%;
    animation: ${shimmerBg} 8s linear infinite;
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled.div<TimelineItemProps>`
  display: flex;
  justify-content: ${(props) => (props.$isEven ? "flex-start" : "flex-end")};
  padding-bottom: 4rem;
  width: 100%;
  position: relative;
  animation: ${(props) => (props.$isEven ? fadeInLeft : fadeInRight)} 0.8s ease
    forwards;
  animation-delay: ${(props) => props.$delay * 0.2}s;
  opacity: 0;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
    animation: ${fadeInRight} 0.8s ease forwards;
    animation-delay: ${(props) => props.$delay * 0.2}s;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  border-radius: 50%;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: ${pulse} 2s infinite;

  @media (max-width: 768px) {
    left: 20px;
    transform: translateX(0);
  }
`;

export const TimelineContent = styled.div`
  background: rgba(20, 20, 20, 0.85);
  border: 1px solid rgba(5, 150, 105, 0.2);
  border-radius: 12px;
  width: 45%;
  padding: 1.5rem;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(5, 150, 105, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const CompanyLogo = styled.div`
position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2a2a2a;
  overflow: hidden;
  margin-right: 1rem;
  border: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CompanyTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.2rem;
`;

export const Position = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 0.2rem;
`;

export const Period = styled.span`
  font-size: 0.85rem;
  color: #b0b0b0;
  display: block;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #d0d0d0;
  margin-bottom: 1.5rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Skill = styled.span`
  background: rgba(5, 150, 105, 0.15);
  color: var(--primary);
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 30px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(5, 150, 105, 0.25);
    transform: translateY(-2px);
  }
`;