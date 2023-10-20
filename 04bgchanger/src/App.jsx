import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none ml-2 px-4 py-1 rounded text-white shadow-sm"
            style={{ backgroundColor: "red" }}
            rounded-full
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none ml-2 px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "green" }}
            rounded-full
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none ml-2 px-4 py-1 rounded-full text-white shadow-sm"
            style={{ backgroundColor: "blue" }}
            rounded-full
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
