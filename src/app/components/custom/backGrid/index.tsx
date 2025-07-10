'use client';

import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import {
    BackgroundWrapper,
    Grid,
    GridItem
} from "./backGrid.styles";


export default function BackgroundGrid() {
    const [columns, setColumns] = useState(1); // Количество колонок
    const [rows, setRows] = useState(1); // Количество строк

    // Функция для вычисления количества строк и колонок
    const calculateGrid = () => {
        const itemSize = 100; // Примерная ширина и высота каждого элемента (в px)
        const columns = Math.ceil(window.innerWidth / itemSize); // Колонки, заполняющие весь экран
        const rows = Math.ceil(window.innerHeight / itemSize); // Строки, заполняющие весь экран
        setColumns(columns);
        setRows(rows);
    };

    // Ранний расчет при монтировании компонента и установка обработчика на изменение размера
    useEffect(() => {
        calculateGrid(); // Рассчитать сетку при загрузке
        window.addEventListener('resize', calculateGrid); // Пересчитывать сетку при изменении размеров окна
        return () => window.removeEventListener('resize', calculateGrid); // Очистка события
    }, []);

    // Анимация
    useEffect(() => {
        anime({
            targets: '.grid-item',
            backgroundColor: [
                { value: 'rgba(195,7,15,0.51)', easing: 'easeOutSine', duration: 800 },
                { value: '#1A1A1D', easing: 'easeInOutQuad', duration: 1200 },
            ],
            scale: [
                { value: 0.1, easing: 'easeOutSine', duration: 500 },
                { value: 1, easing: 'easeInOutQuad', duration: 1200 },
            ],
            delay: anime.stagger(50, { grid: [columns, rows], from: 'center' }), // Адаптируемое значение для сетки
            //loop: true, // Включаем повтор анимации
        });
    }, [columns, rows]); // Перезапуск анимации при изменении размера сетки

    return (
        <BackgroundWrapper>
            <Grid columns={columns} rows={rows}>
                {Array.from({ length: columns * rows }).map((_, index) => (
                    <GridItem className="grid-item" key={index} />
                ))}
            </Grid>
        </BackgroundWrapper>
    );
}
