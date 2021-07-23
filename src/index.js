import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { CookiesProvider } from 'react-cookie';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: '#ffffff'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </ThemeProvider>,
  document.getElementById('root')
);