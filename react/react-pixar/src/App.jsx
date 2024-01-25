import React from "react";
import "./App.css";
import logo from "./img/logopix.jpeg";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";
import logofb from "./img/fblogo.png";
import logotw from "./img/twitterlogo.png";
import logoyt from "./img/sss.webp";
import logoig from "./img/iglogo.png";

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
          <div className="second-phrase">
            <p>
              RenderMan® is Pixar's Academy Award®-winning rendering technology,
              excelling at producing stunning imagery for VFX and feature film
              animation. RenderMan is constantly evolving to meet new creative
              and technical challenges and to take advantage of the latest
              advances in computer technology.
            </p>
            <hr className="separacion"></hr>
          </div>
        </section>
        <section className="imagenes">
          <div className="img-container">
            <img className="img" src={img1}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img2}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img3}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img4}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img5}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img6}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img7}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img8}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img9}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img10}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img11}></img>
          </div>
          <div className="img-container">
            <img className="img" src={img12}></img>
          </div>
        </section>
        <div className="registred-container">
          <h3 className="registred">
            RENDERMAN IS A REGISTERED TRADEMARK OF PIXAR
          </h3>
        </div>
        <footer className="fotter">
          <div className="redes-sociales">
            <a href="https://www.facebook.com/Pixar/" target="_blank">
              <img className="rs-logo" src={logofb}></img>
            </a>
            <a href="https://twitter.com/pixar" target="_blank">
              <img className="rs-logo" src={logotw}></img>
            </a>
            <a href="https://www.youtube.com/pixar" target="_blank">
              <img className="rs-logo" src={logoyt}></img>
            </a>
            <a href="https://www.instagram.com/pixar/" target="_blank">
              <img className="rs-logo" src={logoig}></img>
            </a>
          </div>
          <div className="politics-container">
            <div className="partes">
              <a
                className="politics"
                href="https://privacy.thewaltdisneycompany.com/en/"
                target="_blank"
              >
                PRIVACY POLICY
              </a>
              | &nbsp;
              <a
                className="politics"
                href="https://disneytermsofuse.com/"
                target="_blank"
              >
                TERMS OF USE
              </a>
            </div>
            <div className="partes">
              <a
                className="politics"
                href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/"
                target="_blank"
              >
                YOUR US STATE PRIVACY RIGHTS
              </a>
              | &nbsp;
              <a
                className="politics"
                href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
                target="_blank"
              >
                CHILDREN'S ONLINE PRIVACY POLICY
              </a>
            </div>

            <a
              className="politics"
              href="https://preferences-mgr.truste.com/?affiliateId=115&type=disneycolor"
              target="_blank"
            >
              INTEREST - BASED ADS
            </a>
            <p className="years">© 1986-2023 DISNEY / PIXAR</p>
          </div>

          <section className="final-button">
            <button className="personalInformation-button">
              Do Not Sell or Share My Personal Information
            </button>
          </section>
        </footer>
      </main>
    </>
  );
}

export default App;
