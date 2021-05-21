import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  const { signOut, user } = props;
  return (
    <div>
      <Header signOut={signOut} user={user} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
