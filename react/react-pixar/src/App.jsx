import React from "react";
import "./App.css";
import logo from "./img/logopix.jpeg";

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

      <main className="container">
        <section className="principalImg">
          <h1 className="text">RENDERMAN</h1>
        </section>
        <section className="prhase">
          <div className="phrase-text">
            <p>
              “What began as an interesting artistic exercise is now an
              indispensable tool. It's notable that twenty years after putting
              its first pixels on the screen RenderMan remains the benchmark for
              all rendering technology.”
            </p>
            <p className="phrase-autor">— GEORGE LUCAS</p>
          </div>

          <div className="button-container">
            <hr className="separacion" />

            <button className="button">VISIT RENDERMAN.PIXAR.COM</button>

            <hr className="separacion" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
