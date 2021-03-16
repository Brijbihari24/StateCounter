import React, { useState } from "react";
import "./App.css";

function App() {
  //state
  const [count, setCount] = useState(0);

  return (
    <div className=" App">
      <header>
        <h1>Count App using State/Hooks</h1>
      </header>
      <h2>Current app count is {count}</h2>
      <button onClick={() => setCount(0)}>Restart Count</button>
      <button onClick={() => (count > 10 ? "" : setCount(count + 1))}>
        Increase Counter
      </button>
      <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
    </div>
  );
}

export default App;
