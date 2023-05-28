import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Theme from './style/theme.jsx';
import GlobalStyle from './style/GlobalStyle.jsx';
import App from './App';

test('renders learn react link', () => {
  render(
    <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  );
});
