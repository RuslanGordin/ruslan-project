'use client'
import styled from "styled-components";
import Link from "next/link";
import {NameSC} from "@/app/home.styles";

export const DivBoxTabletSC = styled.div`
    width: max-content;
    height: max-content;
    display: grid;
    grid-template-columns: repeat(5, max-content);
    gap: 30px;

`
export const DivBoxItemTabSC = styled(Link)`
    width: max-content;
    height: max-content;
    border-radius: 10px;
    background-color: transparent;
    cursor: pointer;
`
export const TextTabSC = styled.div`
    transition: 0.2s;
    background: linear-gradient(0.15turn, #ECD06F, #ebf8e1);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover{
        background: #C3070F;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        transform: scale(1.2);
    }
`