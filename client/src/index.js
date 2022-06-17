import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import { createGlobalStyle } from "styled-components";

// import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
    list-style: none;
    text-decoration: none;
    outline: none;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
