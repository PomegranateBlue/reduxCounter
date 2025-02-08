import { useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const [counter, setCounter] = useState(0);
  const counterStore = useSelector((state) => state);
  const counterModule = useSelector((state) => state.counter);

  console.log(counterStore);
  console.log(counterModule);
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
