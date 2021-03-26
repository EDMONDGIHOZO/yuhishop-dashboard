import React from "react";

const Nav = () => (
  <nav className="navbar sticky-top bg-dark">
    <h4>YUHI-ADMIN</h4>
    <button
      className="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
);

export default Nav;
