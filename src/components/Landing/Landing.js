import React from 'react'
import mapsvg from './img/mapsvg.svg'
import pc from './img/pc.svg'
import "./Landing.css"
export default function Landing() {
    return (
        <div>
            
    <main class="container" id="main">
        <div class="row d-flex align-items-center " id="contenedores">
            
            <div class="col-lg-6 ">
                <img src={pc}   id="img" alt="" width="500px" height="400px"/>
            </div>
            <div class="col-lg-6 d-flex flex-column  text-start">
                <h1 class="fw-bold">Las mejores marcas en tus manos</h1>
                <p >Compre facil y rapido con un solo Click!</p>
                <a href="https://eliseonop.github.io/E-Commerce/productos" id="btn-comprar" class="">Empezar a comprar</a>
                
            </div>
        </div>
    </main>
    <article  id="article">
        <div class="container">

            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-lg-6 mt-3">
                    <h2>Nuestra ubicacion</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, excepturi!</p>
                    <button class="btn btn-primary">Informacion</button>
                </div>
                <div class="col-lg-6 ">
                    <img src={mapsvg}  id="img" width="400px" height="400px" alt=""/>
                </div>
                
            </div>
            
        </div>

    </article>
    <footer>
        <div class="grid">
            <div class="textos-footer">
                <h2 class="subtitulos">Contactanos</h2>
            </div>
            <div class="footer-item1 con"><a href=""><i class="fab fa-facebook-square"></i></a></div>
            <div class="footer-item2 con"><a href=""><i class="fab fa-instagram"></i></a></div>
            <div class="footer-item3 con"><a href=""><i class="fab fa-whatsapp"></i></a></div>
            <div class="footer-item4 con"><a href=""><i class="fab fa-tiktok"></i></a></div>
        </div>
    </footer>
    
        </div>
    )
}

