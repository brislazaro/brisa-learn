import "./App.css";
import Header from "./Header/Header";
import Principal from "./Principalimg/Principal";
import Phrase from "./Phrase/Phrase";
import Imagenes from "./Imagenes/Imagenes";
import Footer from "./Footer/Container";
import Registred from "../Registred/Registred";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Principal />
        <Phrase />
        <Imagenes />

        <Registred />
        <Footer />
      </main>
    </>
  );
}

export default App;
