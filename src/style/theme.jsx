import { ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
  color: {
    lightWhite: 'var(--color-lightWhite)',
    lightBlack: 'var(--color-lightBlack)',
    lightgray: 'var(--color-lightgray)',
    pink: 'var(--color-pink)',
    red: 'var(--color-red)',
    purple: 'var(--color-purple)',
  },
};

export const Theme= ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;