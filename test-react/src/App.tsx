import "./App.css";
import Hello from "./components/Hello/Hello";
import StaticNumber from "./components/StaticNumber/StaticNumber";
import SayHi from "./components/SayHi/SayHi";
import UserCard from "./components/UserCard/UserCard";
import NumberCount from "./components/NumberCount/NumberCount";

function App() {
  return (
    <div className="app-container">
      <Hello />
      <SayHi userName="Solde" />
      <UserCard userName="Solde" age={29} />
      <StaticNumber />
      <NumberCount />
    </div>
  );
}

export default App;
