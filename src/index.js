import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { TextField } from "./TextField";
import "./styles.css";

function App() {
  const [value, setValue] = useState("Erase me");
  const [isFocused, setIsFocused] = useState(false);
  const isValid = useMemo(() => !!value, [value]);

  const reset = () => setValue("Erase me");

  return (
    <div className="App">
      <TextField
        value={value}
        setValue={setValue}
        setIsFocused={setIsFocused}
        isValid={isValid}
      />
      <button disabled={!isValid}>Submit</button>
      <h3>we can access the component's "internal state":</h3>
      {isFocused ? "Focused" : "Blurred"}
      <button onClick={reset}>Reset</button>
      <hr />
      <h1>Hooks are awesome!</h1>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/500tech/hook-cook-book"
      >
        Explore more examples
      </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
