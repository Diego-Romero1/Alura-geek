import { ProductServices } from "../services/products-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    ProductServices
    .addProducts(imagen, nombre, precio, descripcion)
    .then((respuesta) => {
        window.location.href = "../screens/index.html"
    })
    .catch((err) => {console.log(err)})
})
