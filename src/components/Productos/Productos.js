import React from "react";
import { Api } from "../../Services/Api";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Productos() {
  const [producto, setProducto] = useState([]);

  const getProducto = async () => {
    try {
      const productosObtenidos = await Api();
      console.log(productosObtenidos)
      setProducto(productosObtenidos);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getProducto();
  }, []);
  const btnAgregar = ()=>{
      
  }

  return (
    <div>
      <div class="container mb-5 mt-5">
        <div class="row">
          {producto.map(({ nombre, descripcion, precio,imagen }, i) => {
              return (
            <div class="col-md-4" key={i}>
              <div class="card mt-3">
                <div class="product-1 align-items-center p-2 text-center">
                  <img
                    src={imagen}
                    alt=""
                    class="rounded"
                    width="160"
                  />
                  <h5>{nombre}</h5>


                  <div class="mt-3 info">
                    <p class="text1 d-block">{descripcion}.</p>

                    <div class="cost m-3 text-dark fw-bold">
                      <span>S/{precio}</span>
                    </div>
                    <div> 
                        <button className="btn btn-info"> Comprar</button>
                        <button className="btn btn-success mx-2 m-md-2">Agregar al Carrito</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}
