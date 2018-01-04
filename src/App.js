import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StorePicker from "./components/StorePicker";
import Header from "./components/Header";
import Inventory from "./components/Inventory";
import Order from "./components/Order";

class App extends Component {
  render() {
    return (
      <div>
        <Header tagline="fresh seafood market"/>
        <StorePicker />
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
