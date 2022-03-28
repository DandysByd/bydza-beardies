import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from './Sites/Contact'
import reportWebVitals from './reportWebVitals';
import './Styles/main_css.css';
import './Styles/querries.css';

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
