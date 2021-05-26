import React from "react";
import Layout from "../components/Layout";
import { connect } from "react-redux";

function Cart(props) {
  const { cartItems } = props;
  return (
    <div>
      <Layout>
        {cartItems.map((cartItem) => {
          return (
            <div>
              <h2>{cartItem.name}</h2>
              <img src={cartItem.image} alt={cartItem.name} />
            </div>
          );
        })}
      </Layout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: state.products,
  };
}

export default connect(mapStateToProps)(Cart);
