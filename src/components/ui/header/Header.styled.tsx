"use client";
import styled from "styled-components";
import HeaderImage from "@/assets/header/northern-lights-jvwfhimjjaamngpk.jpg";

// Styled components
export const HeaderWrapper = styled.header`
  position: relative;
  background-image: url(${HeaderImage.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px) {
    background-attachment: fixed;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 2rem;
  max-width: 1200px;
  animation: fadeIn 1.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.1;

  span {
    color: #059669;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CTAButton = styled.a`
  display: inline-block;
  background: #059669;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(5, 150, 105, 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(5, 150, 105, 0.4);

    &::before {
      left: 100%;
    }
  }
`;

export const FloatingFigure = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 2;
  right: 5%;
  bottom: 10%;
  transform-style: preserve-3d;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px) rotateY(0deg);
    }
    50% {
      transform: translateY(-20px) rotateY(180deg);
    }
    100% {
      transform: translateY(0px) rotateY(360deg);
    }
  }

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
    right: 10%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Figure3D = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateX(10deg);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      #059669,
      rgba(245, 158, 11, 0) 70%
    );
    border-radius: 50%;
    bottom: -40px;
    filter: blur(15px);
    opacity: 0.6;
    transform: rotateX(90deg) translateZ(-40px);
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 2;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }

  span {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.8;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

export const Particle = styled.div<{
  size: number;
  $posX: string;
  delay: string;
  duration: string;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  top: -10%;
  left: ${(props) => props.$posX};
  animation: fall ${(props) => props.duration} linear ${(props) => props.delay}
    infinite;

  @keyframes fall {
    0% {
      top: -10%;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: 110%;
      opacity: 0;
    }
  }
`;
