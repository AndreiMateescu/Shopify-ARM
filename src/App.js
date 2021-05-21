import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import { Route, Switch } from "react-router";
import Category from "./pages/Category";

//Firebase imports
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./configs/firebase";

const firebaseApp = firebase.initializeApp(config);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App(props) {
  console.log(props);
  const { user, signOut, signInWithGoogle } = props;
  return (
    <div className="App">
      {/* <header className="App-header">
        {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </header> */}
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} signOut={signOut} user={user} />}
        />
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} signInWithGoogle={signInWithGoogle} />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/category/:categoryName" component={Category} />

        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
