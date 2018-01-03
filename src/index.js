// load everything in the react library
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import StorePicker from "./components/StorePicker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

ReactDOM.render(<StorePicker />, document.querySelector(".App"));
