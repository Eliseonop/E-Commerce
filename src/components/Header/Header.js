import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Landing from "../Landing/Landing";
import Productos from "../Productos/Productos";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [nav, setNav] = useState({
    show:true
  })
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
                onClick={()=>{
                  setNav({
                    show: !nav.show
                  })
                }}
                data-bs-toggle="collapse"
                data-bs-target="#menuNavegador"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div id="menuNavegador" className={nav.show? "collapse navbar-collapse" : "collapse navbar-collapse active"  }>
                <ul className="navbar-nav   ">
                  <li className="nav-item mx-lg-5  mx-md-1">
                    <Link to="/E-Commerce/" className="nav-link fs-6  mx-lg-2">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-lg-4 mx-md-2">
                    <Link to="/E-Commerce/productos" className="nav-link fs-6  mx-lg-2">
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

          <Route path="/E-Commerce/" element={<Landing />} />
          <Route path="/E-Commerce/productos" element={<Productos />} />
        </Routes>
      </Router>
    </div>
  );
}