import React from "react";
import "./ProductItem.css";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";

function ProductItem(props) {
  const { name, price, currency, image, addToCart, id } = props;

  return (
    <div className="product-item col-4 d-flex flex-column align-items-center mb-3">
      <img src={image} alt="productPhoto" className="mb-2" />
      <p className="mb-1 text-center">{name}</p>
      <p className="text-center">
        {price} {currency}
      </p>
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          return addToCart({
            product: {
              id,
              name,
              price,
              currency,
              image,
            },
          });
        }}
      >
        Adauga in cos
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
