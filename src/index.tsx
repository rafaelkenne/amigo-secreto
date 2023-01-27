import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cabecalho from './componentes/cabecalho';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);