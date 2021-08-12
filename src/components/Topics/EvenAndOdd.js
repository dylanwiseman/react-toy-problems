import React, { Component, useState } from "react";

class EvenAndOdd extends Component {
  state = {
    evenArray: [],
    oddArray: [],
    userInput: [],
  };

  handleChange = (val) => {
    this.setState({ userInput: val });
  };

  handleClick = (userInput) => {
    userInput = userInput.split(",");
    let evens = [];
    let odds = [];
    userInput.map((i) => {
      if (i % 2 === 0) {
        evens.push(i);
      } else if (i % 2 === 1) {
        odds.push(i);
      }
    });
    this.setState({ evenArray: evens, oddArray: odds });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.handleClick(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">{this.state.evenArray}</span>
        <span className="resultsBox">{this.state.oddArray}</span>
      </div>
    );
  }
}

export default EvenAndOdd;
