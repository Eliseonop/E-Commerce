import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";


export default function Header() {
  const [nav, setNav] = useState({
    show: true,
  });
  
  return (
    <div>
      
        <div>
          <nav
            className="navbar navbar-expand-md navbar-dark  border-3 border-bottom  "
            id="navegador"
          >
            <div className="container-fluid  ms-lg-4 ">
              <a
                href="#"
                className="navbar-brand text-dark fs-1 fw-bold ms-1 pe-1 pe-lg-4 mx-lg-5"
              >
                <i class="fas fa-shopping-cart"></i>
                E-Commerce
              </a>
              <button
                type="button"
                className="navbar-toggler"
                onClick={() => {
                  setNav({
                    show: !nav.show,
                  });
                }}
                data-bs-toggle="collapse"
                data-bs-target="#menuNavegador"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                id="menuNavegador"
                className={
                  nav.show
                    ? "collapse navbar-collapse"
                    : "collapse navbar-collapse active"
                }
              >
                <ul className="navbar-nav   ">
                  <li className="nav-item me-lg-2  mx-md-1">
                    <Link
                      to="/"
                      className="nav-link fs-5 fs-md-6  white"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-lg-2 mx-md-1 ">
                    <Link
                      to="/productos"
                      className="nav-link fs-5 fs-md-6 white "
                    >
                      Productos
                    </Link>
                  </li>
                  <li className="nav-item me-lg-2   mx-md-1">
                    <Link className="nav-link fs-5  fs-md-6 white" to="/carrito">
                      Carrito 
                    </Link>
                  </li>
                  <li className="nav-item me-lg-2 mx-md-1   ">
                    <Link
                      to="/login"
                      className="nav-link fs-5  fs-md-6"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        
      
    </div>
  );
}
