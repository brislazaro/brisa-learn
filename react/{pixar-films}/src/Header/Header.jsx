import "./Header.css"
import logo from "../img/logopix.jpeg";




function Header(){
    return(
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
    )
}
export default Header