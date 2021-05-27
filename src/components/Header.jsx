import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";
import "./Header.css";
import { connect } from "react-redux";

function Header(props) {
  const { user, signOut, numberOfProducts } = props;

  return (
    <header className="border-bottom mb-3">
      <div className="header d-flex justify-content-between align-items-center container">
        <Link to="/" className="my-3">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div>
          {user && user.uid ? <p>Salut, {user.displayName}!</p> : null}
          <div className="d-flex justify-content-end">
            {user && user.uid ? (
              <p className="logout h5" onClick={() => signOut()}>
                Delogare
              </p>
            ) : (
              <Link to="/login" className="h5 mb-0">
                Logare
              </Link>
            )}
            <div className="d-flex align-items-center">
              <Link to="/cart" className="d-flex">
                <ShoppingCart className="ml-2" />
                <p className="ml-1 mb-0">{numberOfProducts}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.products.length,
  };
}

export default connect(mapStateToProps)(Header);
