import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onreset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={() => this.props.onDelete}
            onIncrement1={() => this.props.onIncrement1}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
