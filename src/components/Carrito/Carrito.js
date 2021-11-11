// import Swal from 'sweetalert2'
import { useState,useParams } from 'react';
import {Producto,Comprar} from '../Productos/Producto';
export default function Carrito() {

   


    return (
        <div className="container my-4">
             
        <h4>Carrito de compras</h4>
        <table className="table">
            <thead>
            <tr>
                <th className="col">Item</th>
                <th className="col">Cantidad</th>
                <th className="col">Acción</th>
                <th className="col">Total</th>
            </tr>
            </thead>
            <tbody id="items">
                
            </tbody>
            <tfoot>
            <tr id="footer-carrito">
                <th className="row" >
                </th>
                
            </tr>
            </tfoot>
        </table>
    </div>
        
    )
}
