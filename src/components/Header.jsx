import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";
import "./Header.css";
import { connect } from "react-redux";

function Header(props) {
  const { user, signOut, numberOfProducts } = props;
  return (
    <div className="header d-flex justify-content-between align-items-center container">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div>
        {user ? (
          <div>
            <p>{user.displayName}</p>
            <button onClick={signOut}>Sign Out</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/cart">
          <ShoppingCart className="ml-2" />
        </Link>
        <p className="ml-2">{numberOfProducts}</p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.products.length,
  };
}

export default connect(mapStateToProps)(Header);
