import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-weight:normal;
        font-size: medium;
        line-height: 1.5;
        color: ${({darkMode}) => darkMode ? "white" : "black"};
        background-color: ${({darkMode}) => darkMode ? "#2d2d2d" : "#e2e1e1"};
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004)
    }
`
