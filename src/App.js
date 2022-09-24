import { useState } from "react";
import "./App.css";

function App() {
  const [numberShown, setNumberShown] = useState(0);

  return (
    <div className="App">
      <h1>COUNTER</h1>
      <h2>{numberShown}</h2>
      <div>
        <button onClick={(e) => setNumberShown(numberShown - 1)}>
          Decrease
        </button>
        <button onClick={(e) => setNumberShown(0)}>Reset</button>
        <button onClick={(e) => setNumberShown(numberShown + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
