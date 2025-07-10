'use client'
import styled from 'styled-components'
import Link from "next/link";

export const PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-template-rows: repeat(3, minmax(300px, 1fr));;
    gap: 20px;
`;

export const ProjectCard = styled.div`
    border: 1px solid #ECD06F;
    border-radius: 15px;
    padding: 20px;

`;

export const ProjectImage = styled.img`
    width: 100%;
    border-radius: 15px;
`;

export const ProjectTitle = styled.h2`
    margin: 0;
`;

export const ProjectDescription = styled.p`
    margin-bottom: 10px;
`;

export const ProjectLink = styled(Link)`
    text-decoration: none;
    color: #ebf8e1;
`;