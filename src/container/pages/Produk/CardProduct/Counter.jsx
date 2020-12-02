import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../../../redux/reducer/GlobalActionType";
import { RootContext } from "../../../Home/Home";
import { GlobalConsumer } from "../../../../context/context";

class Counter extends Component {
  // state = {
  //   order: 4,
  // };

  // handleCounterChange = (val) => {
  //   this.props.onCounterChange(val);
  // };

  // handlePlus = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order);
  //     }
  //   );
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => this.handleCounterChange(this.state.order)
  //     );
  //   }
  // };
  render() {
    console.log(this);
    return (
      <div className="counter-container">
        <button
          onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}
          className="minus"
        >
          -
        </button>
        <input type="text" value={this.props.state.totalOrder} />
        <button
          onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}
          className="plus"
        >
          +
        </button>
      </div>
    );
  }
}

// Memanggil State Global
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

// Memanggil Dispatch Global
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
    handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);
