import React from "react";
import ReactDOM from "react-dom";
import { TextField, useTextField } from "./TextField";
import "./styles.css";

function App() {
  const textField = useTextField("Erase me");

  const reset = () => textField.setValue("Erase me");

  return (
    <div className="App">
      <TextField {...textField} />
      <button disabled={!textField.isValid}>Submit</button>
      <h3>we can access the component's "internal state":</h3>
      {textField.isFocused ? "Focused" : "Blurred"}
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
