'use client'
import styled from "styled-components"

export const DivWrapperLayoutSC = styled.div`
	display: grid;
	grid-template-rows: 70px max-content;
    justify-items: center;
	width: 100vw;
	min-height: 100vh;
	height: 100%;
`

export const DivWrapperContentSC = styled.div`
	display: grid;
	width: 100%;    
    max-width: 1280px;
    box-sizing: border-box;
	margin-top: 200px;
    padding: 0 40px;
`