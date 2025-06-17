"use client";
import styled from "styled-components";

// Styled components
export const WhyUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 2rem 0;
`;

export const FeatureRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  perspective: 1200px;
  height: 220px;
  @media (min-width: 768px) {
    height: 400px;
    flex: 1;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s ease;
  transform: rotateY(5deg) rotateX(3deg);
  &:hover {
    transform: rotateY(-5deg) rotateX(-3deg);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.08);
  transform-style: preserve-3d;
  position: relative;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15),
      0 15px 15px -5px rgba(0, 0, 0, 0.1);
  }
`;

export const ImageShadow = styled.div`
  position: absolute;
  bottom: -30px;
  left: 5%;
  right: 5%;
  height: 20px;
  background: radial-gradient(
    ellipse at center,
    rgba(5, 150, 105, 0.15) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  border-radius: 50%;
  transform: rotateX(60deg);
  z-index: -1;
  filter: blur(5px);
  transition: all 0.5s ease;
`;

export const ImageAccent = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  border: 3px solid var(--primary);
  border-radius: 8px;
  top: -15px;
  right: -15px;
  z-index: -1;
  transform: translateZ(-20px);
  transition: all 0.5s ease;
`;

export const ContentBox = styled.div`
  flex: 1;
  padding: 2rem;
  background: linear-gradient(
    145deg,
    rgba(18, 18, 20, 0.95),
    rgba(10, 10, 15, 0.95)
  );
  border-radius: 12px;
  color: #1f2937;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(11, 190, 116, 0.1);
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  font-weight: 600;
  color: var(--primary);
  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40%;
    height: 3px;
    background: linear-gradient(90deg, #059669, rgba(5, 150, 105, 0.5));
    border-radius: 2px;
  }
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

export const FeaturePoint = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #059669, #047857);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 5px rgba(5, 150, 105, 0.3);
  svg {
    width: 14px;
    height: 14px;
    color: #fff;
  }
`;

export const FeatureText = styled.span`
  font-size: 0.95rem;
  color: #fff;
`;
