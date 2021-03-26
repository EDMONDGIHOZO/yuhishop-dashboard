import React, { Component } from "react";
import "./Main.css";

class Login extends Component {
  render() {
    return (
      <form className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          {" "}
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="email Address"
          required
          autoFocus
        />

        <label htmlFor="inputPassword" className="sr-only">
          {" "}
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="your secret"
          required
          autoFocus
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    );
  }
}

export default Login;
