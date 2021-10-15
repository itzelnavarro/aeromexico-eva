import logo from './logo.svg';
import './App.scss';
import HpCard from "./components/HpCard.js";
import Btns from "./components/Btns.js";


function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={logo} className="HP-logo" alt="logo" />
        <p>Selecciona tu filtro</p>
      </header>
      <Btns/>
      <HpCard/>
    </div>
  );
}

export default App;
