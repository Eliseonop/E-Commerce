import React from "react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { Api } from "../../Services/Api";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function Producto({ item, setCarrito, carrito }) {
  const { id, nombre, descripcion, precio, imagen } = item;

  const [lista, setLista] = useState([]);

  const getProducto = async () => {
    try {
      const productosObtenidos = await Api();
      // console.log(productosObtenidos)
      setLista(productosObtenidos);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getProducto();
  }, []);

  const agregarCarrito = (id) => {
    const producto = lista.find((item) => item.id === id);
    const existe = carrito.findIndex((plato) => plato.id === id);

    if (existe === -1) {
      setCarrito([...carrito, producto]);
      setCarrito([...carrito, { ...producto, cantidad: +1 }]);
    } else {
      let carritoTmp = [...carrito]; //copia de carrito
      carritoTmp[existe].cantidad += 1; //ya estoy aumentando su cantidad
      setCarrito(carritoTmp);
    }
  };

  return (
    <Fragment>
      <div class="col-md-4">
        <div className="card mt-3">
          <div className="product-1 align-items-center p-2 text-center">
            <img src={imagen} alt={nombre} class="rounded" width="80%" />
            <h5>{nombre}</h5>

            <div className="mt-3 info">
              <p className="text1 d-block">{descripcion}.</p>

              <div className="cost m-3 text-dark fw-bold">
                <span>S/{precio}</span>
              </div>
              <div>
                <Link to={`${id}`} className="btn btn-info">
                  Comprar
                </Link>
                <button
                  className="btn btn-success mx-2 m-md-2"
                  onClick={() => agregarCarrito(id)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Producto;
