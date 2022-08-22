import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const plusHandler = () => {
    setNumber(number + 1);
  };

  const minusHandler = () => {
    setNumber(number - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{number}</p>
        <button onClick={plusHandler}>+</button>
        <button onClick={minusHandler}>-</button>
      </header>
    </div>
  );
}

export default App;
