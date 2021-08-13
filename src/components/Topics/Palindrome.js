import React, { Component } from "react";

class Palindrome extends Component {
  state = {
    userInput: "",
    palindrome: "",
  };

  handleChange = (val) => {
    this.setState({ userInput: val });
  };

  handleClick = (input) => {
    let palindrome = [];
    input.split("").map((i) => {
      palindrome.unshift(i);
    });
    palindrome.join();
    this.setState({ palindrome: palindrome });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(e) => {
            this.handleChange(e.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.handleClick(this.state.userInput);
          }}
        >
          Flip
        </button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
