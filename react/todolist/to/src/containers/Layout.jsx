import "./Layout.css";
import Header from "../Header/Header";

function Layout(props) {
  return (
    <div className="app-container">
      <Header />

      <main className="app-content">{props.children}</main>
    </div>
  );
}

export default Layout;
