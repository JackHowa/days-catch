// load everything in the react library
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./css/style.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
