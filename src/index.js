import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, About, Contact, History} from './AppReactRouter';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/about' element={<About/>}>
          <Route path='history' element={<History/>}></Route>
        </Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

