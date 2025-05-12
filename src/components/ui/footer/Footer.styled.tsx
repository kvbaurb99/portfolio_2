"use client";
import styled from "styled-components";

// Styled components
export const FooterWrapper = styled.footer`
  background-color: #111111;
  padding: 60px 0 30px;
  margin-top: 4rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #059669, #10b981, #059669);
    background-size: 200% 100%;
    animation: gradient 8s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1.5fr 1fr 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled.div`
  margin-bottom: 1.5rem;

  img {
    max-width: 150px;
    height: auto;
  }
`;

export const FooterAbout = styled.p`
  color: #b0b0b0;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  max-width: 400px;
`;

export const FooterHeading = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--primary);
    border-radius: 2px;
  }
`;

export const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterLink = styled.li`
  margin-bottom: 0.75rem;

  a {
    color: #b0b0b0;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
    padding-left: 16px;

    &::before {
      content: "›";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--primary);
      font-size: 1.2rem;
      opacity: 0.7;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &:hover {
      color: #f5f5f5;
      transform: translateX(5px);

      &::before {
        opacity: 1;
      }
    }
  }
`;

export const ContactInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactItem = styled.div`
  display: flex;
  color: #b0b0b0;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  position: relative;
  padding-left: 16px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--primary);
  }
`;

export const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Copyright = styled.p`
  color: #808080;
  font-size: 0.9rem;
  margin: 0;
`;

export const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  a {
    color: #b0b0b0;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary);
    }
  }
`;
