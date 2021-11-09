import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Landing from "../Landing/Landing";
import Productos from "../Productos/Productos";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Router>
        <div>
          <nav
            className="navbar navbar-expand-md navbar-dark  border-3 border-bottom  "
            id="navegador"
          >
            <div className="container-fluid mx-2 ms-5 ">
              <a href="#" className="navbar-brand fs-2 ms-4 pe-4">
                E-Comerce
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#menuNavegador"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div id="menuNavegador" className="collapse navbar-collapse  ">
                <ul className="navbar-nav   ">
                  <li className="nav-item mx-lg-5  mx-md-1">
                    <Link to="/E-Commerce-React/" className="nav-link fs-6  mx-lg-2">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-lg-4 mx-md-2">
                    <Link to="/E-Commerce-React/productos" className="nav-link fs-6  mx-lg-2">
                      Productos
                    </Link>
                    
                  </li>
                  <li className="nav-item mx-lg-4  mx-md-2">
                    <a className="nav-link fs-6 mx-lg-2" href="#">
                      Carrito
                    </a>
                  </li>
                  <li className="nav-item mx-lg-4  mx-md-2">
                    <a className="nav-link fs-6 mx-lg-2" href="#">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <Routes>
          {/* <Route path='/' element={<Header/>}/> */}

          <Route path="/E-Commerce-React/" element={<Landing />} />
          <Route path="/E-Commerce-React/productos" element={<Productos />} />
        </Routes>
      </Router>
    </div>
  );
}
