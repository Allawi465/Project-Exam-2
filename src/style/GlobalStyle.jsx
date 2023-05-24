import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  --color-lightWhite: #F2F2F3;
  --color-lightBlack: #232324;
  --color-lightgray: #57595F;
  --color-lightpink: #ddd3fd;
  --color-red: #963839;
  --color-purple: #673BBF;
  --color-darkPurple: #452683;
}

body {
  font-family: 'Mulish', sans-serif;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}`;

export default GlobalStyle;
