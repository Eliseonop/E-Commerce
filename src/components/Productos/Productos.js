import React from "react";
import { Api } from "../../Services/Api";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Producto from "./Producto";
export default function Productos({carrito,setCarrito}) {
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
  
  /////////////////////////////////}
  const agregarCarrito = (id) => {
    const producto = lista.find((item) => item.id === id);
    const existe = carrito.findIndex((prod) => prod.id === id);

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
    <div>
      <div class="container mb-5 mt-5">
        <div class="row">
          {lista.map((item, i) => { 
             
            return (
              
              <Producto key={i} item={item} agregarCarrito={agregarCarrito}
              />)  
          })}
        </div>
      </div>
    </div>
  );
}
