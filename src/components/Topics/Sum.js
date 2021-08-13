import React, { Component } from "react";

class Sum extends Component {
  state = { num1: 0, num2: 0, sum: null };

  handleChange = (val) => {
    this.setState({ num1: val });
  };
  handleChange2 = (val) => {
    this.setState({ num2: val });
  };

  handleClick = (input1, input2) => {
    let sum = parseInt(input1) + parseInt(input2);
    this.setState({ sum: sum });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => {
            this.handleChange(e.target.value);
          }}
        />
        <input
          className="inputLine"
          onChange={(e) => {
            this.handleChange2(e.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.handleClick(this.state.num1, this.state.num2);
          }}
        >
          Sum
        </button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
