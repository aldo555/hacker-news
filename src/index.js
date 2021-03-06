import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/Navbar'
import Stories from './components/Stories'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div class="grain fixed top-0 left-0 w-full h-full pointer-events-none"></div>
      <Nav />
      <main className="max-w-7xl mx-auto font-sans border-l-4 border-r-4 border-black">
        <Stories />
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
