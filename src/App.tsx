import React from 'react';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import Header from './header';

function App() {
  return (
    <div>
      <Header />

      <div style={{display: "flex"}}>
        <nav style={{
          borderRight: "solid 1px",
          paddingBottom: "24px",
          marginRight: "24px"
        }}>
          <NavLink 
              style={({isActive}) => {
                  return {
                      display: "block",
                      margin: "24px",
                      color: isActive ? "red" : ""
                  }
              }}
              to={`/tomato`}
              key="tomato"
          >
              Tomato
          </NavLink>

          <NavLink 
              style={({isActive}) => {
                  return {
                      display: "block",
                      margin: "24px",
                      color: isActive ? "red" : ""
                  }
              }}
              to={`/spinach`}
              key="spinach"
          >
              Spinach
          </NavLink>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
