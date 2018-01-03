import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Enter store yo</h2>
        <input type="text" placeholder="store name here" required />
        <button type="submit">Submit!</button>
      </form>
    );
  }
}

export default StorePicker;
