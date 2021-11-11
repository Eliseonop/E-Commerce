import React from "react";
import { Api } from "../../Services/Api";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Producto from "./Producto";
export default function Productos({setCarrito,carrito}) {
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
  
 
  return (
    <div>
      <div class="container mb-5 mt-5">
        <div class="row">
          {lista.map((item, i) => { 
             
            return (
              
              <Producto key={i} item={item} setCarrito={setCarrito} carrito={carrito}/>)  
          })}
        </div>
      </div>
    </div>
  );
}
