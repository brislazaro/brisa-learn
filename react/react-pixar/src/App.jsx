import React from "react";
import "./App.css";
import logo from "./logopix.jpeg";

function App() {
  return (
    <>
      <header className="header">
        <div className="logoContainer">
          <img className="logo" src={logo}></img>
        </div>
        <div className="subTitle">
          <p>FEATURE FILMS</p>
          <p>SHORT FILMS</p>
          <p>TECHNOLOGY</p>
          <p>CARRERS</p>
          <p>EXTRAS</p>
          <p>ABOUT</p>
        </div>
      </header>

      <main className="container"></main>
    </>
  );
}

export default App;
