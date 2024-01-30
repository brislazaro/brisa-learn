import "./Header.css";
import logo from "../img/logopix.jpeg";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
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

      <button className="burgerMenu" onClick={handleOpenMenu}>
        ☰
      </button>

      <Drawer anchor="left" open={isMenuOpen} onClose={handleCloseMenu}>
        <div className="drawer-menu">
          <p>FEATURE FILMS</p>
          <p>SHORT FILMS</p>
          <p>TECHNOLOGY</p>
          <p>CARRERS</p>
          <p>EXTRAS</p>
          <p>ABOUT</p>
        </div>
      </Drawer>
    </header>
  );
}
export default Header;
