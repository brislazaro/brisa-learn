import "./App.css";

import { useState } from "react";

import Header from "./Header/Header";
import Principal from "./Principal/Principal";
import Catalogo from "./Catalogo/Catalogo";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app-component">
      <Header />
      <Principal />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          flexDirection: "column",
          gap: "12px",
        }}
      ></div>
      <Catalogo />
      <Footer />
    </div>
  );
}

export default App;
