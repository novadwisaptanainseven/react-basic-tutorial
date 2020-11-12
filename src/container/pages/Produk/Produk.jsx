import React, { Component, Fragment } from "react";
import "./Produk.css";
import CardProduct from "./CardProduct/CardProduct";

class Produk extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Product Component</h1>
        <hr />
        <div className="header">
          <div className="logo">
            <p className="title">Logo</p>
          </div>
          <div className="troley">
            <div className="icon"></div>
            <div className="counter">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Produk;
