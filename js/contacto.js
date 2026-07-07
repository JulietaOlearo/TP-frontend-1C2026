document.addEventListener("DOMContentLoaded", () => {

  const formulario = document.querySelector(".form-contacto");

  formulario.addEventListener("submit", (e) => {

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
      e.preventDefault();
      alert("Por favor, completá todos los campos.");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      e.preventDefault();
      alert("Ingresá un correo electrónico válido.");
      return;
    }

  });

});