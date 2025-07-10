'use client'
import React, {ReactNode, useEffect} from 'react';
import anime from "animejs";
import {AnimeBoxSC} from "./animeBox.styles";

interface IPropAnimatedBox {
    children: ReactNode;
}

const AnimatedBox = (props: IPropAnimatedBox) => {
    const {children} = props;

    useEffect(() => {
        // Запускаем анимацию Anime.js при загрузке компонента
        anime({
            targets: '.box', // Селектор для элемента
            opacity: [0, 1], // Плавное появление
            translateY: [50, 0], // Поднятие элемента
            rotate: '1turn', // Полный оборот на 360 градусов
            duration: 1500, // Длительность анимации (в мс)
            easing: 'easeOutExpo', // Стиль анимации
        });
    }, []);
    return (
        <AnimeBoxSC className="box">
            {children}
        </AnimeBoxSC>
    );
};

export default AnimatedBox;
