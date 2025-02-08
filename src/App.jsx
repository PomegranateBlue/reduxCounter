import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Redux Counter</h2>
      <div value={counter}>counter:{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        SUB
      </button>
    </div>
  );
}

export default App;
