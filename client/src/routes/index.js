import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

const index = () => {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  );
};

export default index;
