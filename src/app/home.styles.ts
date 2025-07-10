"use client";
import styled from "styled-components";

export const DivContainerSC = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const DivBoxAboutMeSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: calc(100vh - 5rem);
  gap: 1rem;
`;

export const NameSC = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const TextSpecialSC = styled.span`
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

export const TextAboutSC = styled.p<{ $width?: string; $margin?: string }>`
  font-size: 1.25rem;
  color: var(--text-secondary);
  width: ${(props) => props.$width || "100%"};
  margin: ${(props) => props.$margin || "1rem 0"};
  line-height: 1.6;
`;

export const NavLinksSC = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  button {
    background: transparent;
    border: 1px solid var(--text-secondary);
    color: var(--text-secondary);
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: var(--primary);
      color: var(--primary);
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

export const SocialLinksSC = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    color: var(--text-secondary);
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary);
      transform: translateY(-2px);
    }
  }
`;
