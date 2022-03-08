import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './header';
import { NavFabricDemoAppExample } from './nav-menu';

function App() {
  return (
    <div>
      <Header />

      <div style={{display: "flex"}}>
        <NavFabricDemoAppExample />
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
