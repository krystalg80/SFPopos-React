import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './About';
import POPOSList from './POPOSList';
import POPOSDetails from './POPOSDetails';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
