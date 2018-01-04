import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StorePicker from "./components/StorePicker";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <StorePicker />;
      </div>
    );
  }
}

export default App;
