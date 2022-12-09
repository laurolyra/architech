import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
