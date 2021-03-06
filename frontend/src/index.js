import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {theme} from "components/ThemeProvider"
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/raleway/400.css"
import "@fontsource/open-sans/700.css"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
