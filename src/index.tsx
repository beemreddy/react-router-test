import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import { Tomato } from './Tomato';
import { Spinach } from './Spinach';
import { TomatoVariety } from './TomatoVariety';

const root = document.getElementById('root');

ReactDOM.render( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="tomato" element={<Tomato/>} >
          <Route path=":id" element={<TomatoVariety />} />
        </Route>
        <Route path="spinach" element={<Spinach/>} />
        
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
