import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const { signInWithGoogle, history } = props;

  function handleButtonClick() {
    signInWithGoogle();
    history.push("/");
  }

  return (
    <div>
      <h1>Login</h1>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <button onClick={handleButtonClick}>Google SignIn</button>
    </div>
  );
}

export default Login;
