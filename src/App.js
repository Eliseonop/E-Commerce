import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Productos from "../src/components/Productos/Productos";
import VistaProduct from "../src/View/VistaProduct"
import Carrito from "../src/components/Carrito/Carrito"
import  Landing from "../src/components/Landing/Landing";
function App() {
  ///El carrito
  const [carrito, setCarrito] = useState([])
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Header/>}/> */}

          <Route path="/" element={<Landing />} />
          <Route path="/productos" element={<Productos setCarrito={setCarrito} carrito={carrito}/>} />
          <Route path="/carrito" element={<Carrito  carrito={carrito} setCarrito={setCarrito}/>} />
          <Route path="/productos/:id" element={<VistaProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
