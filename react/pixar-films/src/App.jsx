import "./App.css";

import Header from "./Header/Header";
import Principal from "./Principal/Principal";
import Catalogo from "./Catalogo/Catalogo";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app-component">
      <Header />
      <Principal />
      <Catalogo />
      <Footer />
    </div>
  );
}

export default App;
