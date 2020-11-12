import React, { Component } from "react";

class Counter extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (val) => {
    this.props.onCounterChange(val);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => this.handleCounterChange(this.state.order)
      );
    }
  };
  render() {
    return (
      <div className="counter-container">
        <button onClick={this.handleMinus} className="minus">
          -
        </button>
        <input type="text" value={this.state.order} />
        <button onClick={this.handlePlus} className="plus">
          +
        </button>
      </div>
    );
  }
}

export default Counter;
