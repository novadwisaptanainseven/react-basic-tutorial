import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/produk1.jpg"}
            alt="produk1.jpg"
          />
        </div>
        <p className="product-title">
          Daging Ayam berbumbu rasa original plus tepung crispy [1 carton - 1
          pack]
        </p>
        <p className="product-price">Rp. 30.000</p>
        <Counter />
      </div>
    );
  }
}

export default CardProduct;
