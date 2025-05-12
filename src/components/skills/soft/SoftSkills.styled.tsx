"use client";
import styled from "styled-components";


export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

export const SkillCard = styled.div`
  height: 100%;
`;

export const SkillCardInner = styled.div`
  position: relative;
  background: linear-gradient(
    145deg,
    rgba(18, 18, 20, 0.95),
    rgba(10, 10, 15, 0.95)
  );
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(5, 150, 105, 0.1);
  }
`;

export const SkillAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 40px;
  background: linear-gradient(to bottom, #059669, rgba(5, 150, 105, 0.5));
  border-radius: 2px 0 0 2px;
`;

export const SkillContent = styled.div`
  flex: 1;
`;

export const SkillName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

export const SkillDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #777777;
  padding-left: 1rem;
`;