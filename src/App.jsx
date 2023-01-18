import React, {useState} from "react";
import './App.css';
import CounterApp from "./components/counter";
import Balance from "./components/balance";

function App() {
  const [counter, setCounter] = useState(0)

  const handleDecrementCounter = () => {
    setCounter(prev => prev - 1)
  }

  const handleIncrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <div>
      <p>with useState</p>
      <button onClick={handleIncrementCounter}>+</button>
        {counter}
      <button onClick={handleDecrementCounter}>-</button>
      <p>-----------------</p>
      <CounterApp/>
      <Balance/>
    </div>
  );
}

export default App;
