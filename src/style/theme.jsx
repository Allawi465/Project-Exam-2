import { ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
  color: {
    primary: 'var(--color-primary)',
    LightBlack: 'var(--color-LightBlack)',
    black: 'var(--color-black)',
    white: 'var(--color-white)',
    lightWhite: 'var(--color-lightWhite)',
    lightgrey: 'var(--color-lightgrey)',
    red: 'var(--color-red)',
    darkred: 'var(--color-darkred)',
  },
};

export const Theme= ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;