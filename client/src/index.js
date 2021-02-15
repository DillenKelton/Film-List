import React from "react";
import ReactDOM from "react-dom";
import AddFilm from "./AddFilm";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AddFilm />
  </React.StrictMode>,
  document.getElementById("root")
);
