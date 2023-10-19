import React from "react";
import ReactDOM from "react-dom/client";
import { jsx as _jsx } from "react/jsx-runtime.js";
import App from "./App.jsx";

const anotherUserName = "its Variable guys";
const ReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherUserName
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

function MyApp() {
  return (
    <div>
      <h1>CustomApp</h1>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(ReactElement);
