import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --color-lightWhite: #F2F2F3;
    --color-lightBlack: #232324;
    --color-lightgray: #57595F;
    --color-pink: #BB86FC;
    --color-red: #FB6264;
    --color-purple: #683DBD;
    height: 100%;
}

body {
    height: 100%;
    font-family: 'PT Sans', sans-serif;
}
`;

export default GlobalStyle;