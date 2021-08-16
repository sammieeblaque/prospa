import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

const Layout = () => {
  return (
    <div className="landing__container">
      <BrowserRouter>
        <Sidebar />
        <Route exact path="/" component={SignUpPage} />
        <Route exact path="/signin" component={LoginPage} />
        <Route exact path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
