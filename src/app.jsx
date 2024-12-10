import { useState } from "react";
import "./app.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  // [theActualThingThatWeRKeepingTrackOf, theFunctionThatWillChangeTheThing] = useState(theInitialValueOfTheThing)
  const [count, setCount] = useState(10);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button
          onClick={() => {
            setCount((previousCount) => previousCount + 10);
          }}
        >
          count hi {count + 100}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
