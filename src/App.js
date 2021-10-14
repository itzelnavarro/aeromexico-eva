import logo from './logo.svg';
import './App.scss';
import HpCard from "./components/HpCard.js";


function App() {
  return (
    <div className="App">
      <header className="Header">
        <img src={logo} className="HP-logo" alt="logo" />
        <p>Selecciona tu filtro</p>
      </header>
      <HpCard/>
    </div>
  );
}

export default App;
