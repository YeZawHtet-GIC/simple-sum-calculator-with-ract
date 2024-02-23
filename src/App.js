import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink className="nav-link" to="/Calculator">
                Check Calculator
              </NavLink>
            </li>
            <li class="nav-item active">
              <NavLink className="nav-link" to="/TestUseMemo">Check TestUseMemo</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="d-flex justify-content-center flex-column bg-dark"
        style={{ height: "100vh" }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
