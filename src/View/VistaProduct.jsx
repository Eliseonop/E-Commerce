import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./VistaProduct.css"
const VistaProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://616b5ec016c3fa0017171694.mockapi.io/Productos/${id}`
        );
        setProduct(data);
      } catch (error) {
        throw error;
      }
    };
    getProduct();
  }, []);
  

  

  return (
    <Fragment>
      <div id ="contenedor"className=" d-flex flex-lg-row align-items-center justify-content-center flex-sm-column flex-xs-column">
        <img 
        id="img"
        className="rounded mx-5 d-block my-5 border border p-2  border-dark"
          src={product.imagen}
          alt={product.nombre}
          height="400px"
          width="400px"
        />
        <div className="col-sm-12 col-lg-4">
          <h4 className="text-uppercase text-black-50">
            {product.descripcion}
          </h4>
          <h1 className="">{product.nombre}</h1>

        <h3 className="fw-bold ">S/ {product.precio}</h3>
        <p className="lead">Adquierelo con un Click</p>
        <button className="btn btn-outline-dark px-4 py-2 my-2"
        >Add to Cart</button>
        <NavLink to="/" className="btn btn-outline-dark px-4 py-2 ">
          Comprar
        </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default VistaProduct;
