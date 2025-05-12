"use client";
import styled from "styled-components";

// Styled components for the heading
export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  min-width: fit-content;
  color: #fff;
  position: relative;
  margin-right: 2rem;
  padding-left: 1.5rem;
  
  // Stylowa kreska z lewej strony
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #059669, #059669);
    border-radius: 2px;
  }
  
  // Delikatny cień tekstu
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  
  // Responsywność
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1.5rem;
    margin-right: 1rem;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin: 2.5rem 0;
  position: relative;
`;

export const Divider = styled.div`
  height: 2px;
  background: linear-gradient(to right, rgba(50, 50, 50, 0.8), rgba(20, 20, 20, 0.2));
  flex-grow: 1;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(to right, #059669, transparent);
    opacity: 0.7;
    animation: shine 4s ease-in-out infinite;
  }
  
  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(600%);
      opacity: 0;
    }
  }
`;