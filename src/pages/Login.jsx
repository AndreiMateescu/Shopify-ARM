import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import "./Login.css";
import { signInWithGoogleAction } from "../redux/actions/user";
import { connect } from "react-redux";

class Login extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.userData !== prevProps.userData) {
      this.props.history.push("/");
    }
  }

  handleGoogleLogin() {
    const { signInWithGoogleWithDispatch } = this.props;
    signInWithGoogleWithDispatch();
  }

  render() {
    return (
      <div className="login-page">
        <Link to="/">
          <img src={Logo} alt="logo" className="mb-5" />
        </Link>

        <h1 className="h2">Login</h1>
        <button
          className="btn btn-outline-dark d-flex align-items-center"
          onClick={() => this.handleGoogleLogin()}
        >
          <Google className="w-50 mr-3" />
          <span className="text-nowrap">Loghează-te cu Google</span>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.user.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signInWithGoogleWithDispatch: () => dispatch(signInWithGoogleAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
