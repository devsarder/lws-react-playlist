import { useState } from "react";
import "./App.css";
import Clock from "./components/classComponent/ClassComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Clock locale="en-US">this is component children</Clock>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
