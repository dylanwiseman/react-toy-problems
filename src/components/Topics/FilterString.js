import React, { Component } from "react";

class FilterString extends Component {
  state = {
    unfilteredArray: ["car", "cat", "dog", "tree", "name", "bob"],
    userInput: "",
    filteredArray: [],
  };

  handleChange = (val) => {
    this.setState({ userInput: val });
  };

  handleClick = (inputString) => {
    let stringArray = [];
    this.state.unfilteredArray.map((string) => {
      if (string.includes(inputString)) {
        stringArray.push(string);
      }
      this.setState({ filteredArray: stringArray });
    });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}
        </span>
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
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterString;
