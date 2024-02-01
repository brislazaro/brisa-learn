import "./Header.css";
import logo from "../img/color.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
        <p>Hello there,Brisa!</p>
      </div>
    </header>
  );
}

export default Header;
