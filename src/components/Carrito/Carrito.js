// import Swal from 'sweetalert2'
import { useState, useParams, useEffect } from "react";
import { set } from "react-hook-form";
import Producto from "../Productos/Producto";
// import {Producto,Comprar} from '../Productos/Producto';
export default function Carrito({ carrito, setCarrito }) {

 const eliminado = (id)=>{
    
        console.log(id)
 }
 const total = (cantidad,precio) => {
  console.log(cantidad)
  return(cantidad===1?(precio):(precio*cantidad))
  
};
  return (
    <div className="container my-4">
      <h4>Carrito de compras</h4>
            <table className="table">
              <thead>
                <tr>
                  <th className="col">Item</th>
                  <th className="col">Precio</th>
                  <th className="col">Cantidad</th>
                  <th className="col">Total</th>
                  <th className="col">Accion</th>
                </tr>
              </thead>
      {carrito.length === 0 ? (
        <h1>Carrito Vacio</h1>
      ) : (
        carrito.map((item, i) => {
          return (
              <tbody id="items">
                <tr key={i}>
                  <td>{item.nombre}</td>
                  <td>{item.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>{total(item.cantidad,item.precio)}</td>
                  <td><button className="btn btn-danger" onClick={eliminado(item.id)}
    
                  >Eliminar</button></td>
                </tr>
              </tbody>
          );
        })
        )}
        </table>
    </div>
  );
}
