import React from "react";
import "./App.css";
import Dashboard from "./secure/dashboard";
import Users from "./secure/users";
import Login from "./world/login";
import Register from "./world/Register";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} exact component={Dashboard} />
        <Route path={"/users"} component={Users} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
