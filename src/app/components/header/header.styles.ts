'use client' 
import styled from "styled-components"

export const DivBoxHeaderSC = styled.div`
    position: fixed;
    width: 100vw;
    height: 100px;
    top: 0;
    z-index: 10;
    background-color: transparent;
    //&:after {
    //    content: "";
    //    position: absolute;
    //    left: 0;
    //    right: 0;
    //    bottom: 0;
    //    height: 1px; /* Высота линии границы */
    //
    //}
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    padding: 0 30px;
`;