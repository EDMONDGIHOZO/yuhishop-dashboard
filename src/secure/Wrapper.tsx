import React, { Component } from "react";
import Dashboard from "./dashboard";
import Users from "./users";
import Login from "../world/login";
import Nav from "./components/nav";
import SideNav from "./components/sidenav";
import { BrowserRouter, Route } from "react-router-dom";

class Wrapper extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {this.props.children}
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Wrapper;
