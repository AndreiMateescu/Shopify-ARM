import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

function Layout(props) {
  const { signOut, user } = props;

  return (
    <div className="layout">
      <Header signOut={signOut} user={user} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
