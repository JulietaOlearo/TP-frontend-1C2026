import {
obtenerCarrito
}
from "./storage.js";


import {
eliminarProducto,
vaciarCarrito
}
from "./funcionesCarrito.js";


import {
actualizarContador
}
from "./ui.js";



const renderizarCarrito=()=>{


const contenedor=
document.getElementById(
"contenedor-carrito"
);



const carrito=obtenerCarrito();


actualizarContador(carrito);


contenedor.innerHTML="";



carrito.forEach((producto,index)=>{


const card=document.createElement("article");

card.classList.add("card");


card.innerHTML=`

<img src="../${producto.img}">

<h3>${producto.nombre}</h3>

<p>$${producto.precio}</p>

<button class="btn">
Eliminar
</button>

`;



card.querySelector("button")
.addEventListener(
"click",
()=>{

eliminarProducto(index);

renderizarCarrito();

}

);



contenedor.appendChild(card);



});



}



document
.getElementById("vaciar")
.addEventListener(
"click",
()=>{

vaciarCarrito();

renderizarCarrito();

});



document.addEventListener(
"DOMContentLoaded",
renderizarCarrito
);