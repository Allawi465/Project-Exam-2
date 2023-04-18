import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-primary: #FEEAB0;
    --color-black: #000000;
    --color-LightBlack: #222326;
    --color-white: #FFFFFF;
    --color-lightWhite: #F6F6F6;
    --color-lightgrey: #8e8e8e;
    --color-red: #eb5757;
    --color-darkred: #670901;
    height: 100%;
}

body {
    height: 100%;
    font-family: 'PT Sans', sans-serif;
}
`;

export default GlobalStyle;