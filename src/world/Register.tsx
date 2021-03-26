import React, { Component, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";
import "./Main.css";

class Register extends Component {
  // varialbles
  first_name = "";
  last_name = "";
  email = "";
  password = "";
  password_confirm = "";

  state = {
    redirect: false,
  };

  saveInfo = (e: SyntheticEvent) => {
    e.preventDefault();
    // TODO create the connection to the backend for registration
    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={"login"} />;
    }
    return (
      <div>
        <form className="form-signin" onSubmit={this.saveInfo}>
          <h1 className="h3 mb-3 fw-normal">Register here</h1>
          <label htmlFor="inputFirstName" className="sr-only">
            {" "}
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="first name"
            id="inputFirstName"
            required
            onChange={(e) => (this.first_name = e.target.value)}
          />
          <label htmlFor="inputLastName" className="sr-only">
            {" "}
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="last name"
            id="inputLastName"
            required
            onChange={(e) => (this.last_name = e.target.value)}
          />
          <label htmlFor="inputLastName" className="sr-only">
            {" "}
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="your email Address"
            id="inputEmail"
            required
            onChange={(e) => (this.email = e.target.value)}
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
            onChange={(e) => (this.password = e.target.value)}
          />
          <label htmlFor="inputPasswordConfirm" className="sr-only">
            {" "}
            Password comfirmation
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="please confirm your password"
            required
            autoFocus
          />

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
