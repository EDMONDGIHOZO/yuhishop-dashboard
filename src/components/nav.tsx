import React from "react";


const Nav = () => (
    <nav className="navbar sticky-top bg-dark">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Yuhi</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    </nav>
)

export default  Nav;