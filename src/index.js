import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header.js'
import Products from './Products.js';
import Recommend from './Recommend.js'
import Footer from './Footer.js';
import About from './About.js'
import Home from './Home.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
      <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
