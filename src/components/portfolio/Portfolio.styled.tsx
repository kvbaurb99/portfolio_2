"use client";
import styled, { keyframes } from "styled-components";

interface ProjectCardProps {
  $index: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at top right,
      rgba(245, 158, 11, 0.1),
      transparent 60%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(245, 158, 11, 0.05),
      transparent 40%
    );
  z-index: 0;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled.div<ProjectCardProps>`
  background: rgba(25, 25, 25, 0.7);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(5, 150, 105, 0.15);
  }

  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.$index * 0.1}s;
  opacity: 0;
  
  &:hover .project-image {
    transform: scale(1.05);
  }
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #2a2a2a;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  opacity: 0.7;
  transition: opacity 0.3s ease;
  z-index: 1;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  position: relative;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffffff;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }

  ${ProjectCard}:hover & {
    &::after {
      width: 100%;
    }
  }
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
  background: rgba(5, 150, 105, 0.15);
  color: #059669;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 30px;
  font-weight: 500;
  letter-spacing: 0.5px;

  &:hover {
    animation: ${pulse} 0.8s ease infinite;
    background: rgba(5, 150, 105, 0.25);
  }
`;

export const ViewProjectButton = styled.span`
  display: inline-block;
  background: transparent;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, var(--primary), transparent);
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite linear;
  }

  &:hover {
    color: #ffffff;
  }
`;