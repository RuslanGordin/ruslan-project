'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    /* @font-face {
      font-family: var(--circular-std), sans-serif, sans-serif, sans-serif;
      src: url('/fonts') format('truetype');
      font-weight: normal;
      font-style: normal;
    } */


    :root {
        --background-color: #1A1A1D;
        --text-primary: #0D0D0D;
        --color-black: #0D0D0D;
    }

    body {
        color: var(--text-primary);
        background-color: var(--background-color);
    }


    a {
        text-decoration: none;
    }

    a:hover, a:focus {

        text-decoration: none !important;
        color: inherit;

    }

    p {
        padding: 0;
        margin: 0;
    }

    /* ::-webkit-scrollbar {
        width: 4px;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 1px var(--fills-card-overlay-2, #010502);
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: white;
    } */

`
