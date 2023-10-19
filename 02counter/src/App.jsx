import { useState } from "react";
import "./App.css";

function App() {
  //here useState is hook,responsible for the UI updation which couldnothappen in react without its help
  const [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    // setCounter(prevCounter);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  function removeValue() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value:{counter} </button>
      <br />
      <button onClick={removeValue}>Remove Value:{counter} </button>

      <p>footer:{counter}</p>
    </>
  );
}

export default App;
