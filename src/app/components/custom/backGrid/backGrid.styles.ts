'use client'
import styled from 'styled-components';

// Styled wrapper for the background
export const BackgroundWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1; /* Отправляем фон на задний план */
    background: #1A1A1D; /* Цвет фона страницы */
`;

// Grid container
export const Grid = styled.div<{
    columns?: number;
    rows?: number;
}>`
    display: grid;
    grid-template-columns: repeat(${({columns}) => columns}, 1fr); /* Автоматическое количество колонок */
    grid-template-rows: repeat(${({rows}) => rows}, 1fr); /* Автоматическое количество строк */
    gap: 2px; /* Отступы между элементами */
    width: 100%;
    height: 100%;
`;

// Individual grid items
export const GridItem = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10%; /* Круг */
    background: transparent; /* Основной цвет */
    transform: scale(0.1); /* Начальное состояние для анимации */
`;