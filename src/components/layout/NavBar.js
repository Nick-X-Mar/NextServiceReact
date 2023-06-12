import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './NavBar.css';


const NavBar = () => {
  const isLoggedin = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const logoutHandler = () => {
    userService.logout();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav dropdown-menu-end">
            <li className="nav-item">
              <NavLink
                to="/service_history"
                className="nav-link pe-3"
                aria-current="page"
              >
                Ιστορικό Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/favorites"
                className="nav-link pe-3"
                aria-current="page"
              >
                Προϊόντα
              </NavLink>
            </li>
          </ul>
          {isLoggedin && (
            <button
              type="button"
              className="btn btn-sm btn-danger me-5"
              onClick={logoutHandler}
            >
              Αποσύνδεση
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
