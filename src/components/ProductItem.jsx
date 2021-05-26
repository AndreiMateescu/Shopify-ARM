import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";

function ProductItem(props) {
  const { name, price, currency, image, addToCartWithDispatch } = props;
  return (
    <div className="product-item col-4 d-flex flex-column align-items-center">
      <img src={image} alt="productPhoto" className="mb-2" />
      <p className="mb-1 text-center">{name}</p>
      <p className="text-center">
        {price} {currency}
      </p>
      <button
        className="btn btn-outline-dark"
        onClick={() =>
          addToCartWithDispatch({
            name,
            price,
            currency,
            image,
          })
        }
      >
        Adauga in cos
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCartWithDispatch: (product) => {
      dispatch(addToCart(product));
    },
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
