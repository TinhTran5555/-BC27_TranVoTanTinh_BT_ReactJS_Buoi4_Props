import React, { Component } from "react";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import data from "../data.json";
export default class Shoes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
      isOpen: false,
    };
  }
  handleSelect = (product) => {
    this.setState({ selectedProduct: product , isOpen :true});

  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { selectedProduct , isOpen} = this.state;
    return (
      <div className="container">
        <h1 className="text-center text-primary">Shoes Shop</h1>
        <ProductList products={data} onSelect={this.handleSelect}/>

        <ProductDetails
          product={selectedProduct}
          isOpen={isOpen} 
          onClose={this.handleClose}
        />
      </div>
    );
  }
}
