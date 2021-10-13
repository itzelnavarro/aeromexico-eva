import logo from './logo.svg';
import './App.css';
import HpCard from "./components/HpCard.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="HP-logo" alt="logo" />
        <p>Selecciona tu filtro</p>
        <HpCard/>
      </header>
    </div>
  );
}

export default App;
