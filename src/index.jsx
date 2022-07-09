import React from 'react';
import ReactDOM from 'react-dom';

//import "primereact/resources/themes/lara-light-blue/theme.css"; //theme
//import "primereact/resources/themes/lara-dark-blue/theme.css" //theme dark
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
