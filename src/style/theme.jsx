import { ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
  color: {
    lightWhite: 'var(--color-lightWhite)',
    lightBlack: 'var(--color-lightBlack)',
    lightgray: 'var(--color-lightgray)',
    lightpink: 'var(--color-lightpink)',
    red: 'var(--color-red)',
    purple: 'var(--color-purple)',
    darkPurple: 'var(--color-darkPurple)',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
