import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import { Route, Switch } from "react-router";
import Category from "./pages/Category";
import Cart from "./pages/Cart";

import "firebase/auth";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/category/:categoryName" component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
