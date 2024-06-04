import React from "react";
// import { useState } from "react";
import Button from "./assets/components/Button.jsx";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
    };
  }

  // //on change event
  handleLowerCase = () => {
    this.setState({ text: this.state.text.toLowerCase() });
  };

  // handleUpperCase = () => {
  //   this.setState({ text: this.state.text.toUpperCase() });
  // };

  // handleChange = (event) => {
  //   this.setState({ text: event.target.value });
  // };

  render() {
    return (
      <div className="Containers">
        <div className="Container_title">
          <h1>Text Editor</h1>
        </div>
        <div className="Container_input">
          <form>
            <label>Convert your text</label>
            <textarea
              placeholder="Enter text here"
              value={this.state.text}
              onChange={(e) => {
                this.setState({
                  text: e.target.value,
                });
              }}
            />
          </form>
        </div>
        <div className="Container_button">
          {/* <button onClick={this.handleLowerCase}>Lower case</button>
          <button
            onClick={() => {
              this.setState({
                text: this.state.text.toUpperCase(),
              });
            }}
          >
            Upper case
          </button> */}

          <Button click={this.handleLowerCase} btnName="Lower case" />
          <Button
            click={() => {
              this.setState({
                text: this.state.text.toUpperCase(),
              });
            }}
            btnName="Upper case"
          />
          <Button btnName="Reverse" />
          <Button btnName="Clear" />
        </div>
      </div>
    );
  }
}

export default App;