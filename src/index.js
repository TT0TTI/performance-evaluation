import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import SignUp from "./container/signUp";
import Member from "./container/member";
import WritePost from "./container/writePost";
import Navigation from "./component/navigation";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" component={Member} />
      <Route exact path="/postNew" component={WritePost} />
      <Route exact path="/signUp" component={SignUp} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
