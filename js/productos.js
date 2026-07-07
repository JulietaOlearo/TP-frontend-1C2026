import {
agregarAlCarrito
}
from "./funcionesCarrito.js";


import {
obtenerCarrito
}
from "./storage.js";


import {
actualizarContador
}
from "./ui.js";



const renderizarProductos=()=>{


const contenedor=document.getElementById(
"contenedor-tarjetas"
);



fetch("../data/productos.json")

.then(res=>res.json())


.then(productos=>{


productos.forEach(producto=>{


const card=document.createElement("article");

card.classList.add("card");



card.innerHTML=`

<img src="../${producto.img}" alt="${producto.nombre}">

<h3>${producto.nombre}</h3>

<p>${producto.descripcion}</p>

<p class="precio">$${producto.precio}</p>

<button class="btn">
Agregar al carrito
</button>

`;



const boton=card.querySelector("button");


boton.addEventListener(
"click",
()=>{

agregarAlCarrito(producto);

}

);



contenedor.appendChild(card);



});


});


}



document.addEventListener(
"DOMContentLoaded",
()=>{


actualizarContador(
obtenerCarrito()
);


renderizarProductos();


});