// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Importa el JS necesario para Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
