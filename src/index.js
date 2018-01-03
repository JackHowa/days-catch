// load everything in the react library
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

class StorePicker extends React.Component {
  // similar to es6 classes
  render() {
    return <p>Hello</p>;
  }
}

ReactDOM.render(<StorePicker />, document.querySelector(".App"));
