import { ProductServices } from "../services/products-service.js";

const form = document.querySelector("[data-form]");

 const obtenerDatos = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id == null) {
        alert("something went wrong")
    };
        const imagen = document.querySelector("[data-imagen]");
        const nombre = document.querySelector("[data-nombre]");
        const precio = document.querySelector("[data-precio]");
        const descripcion = document.querySelector("[data-descripcion]");
        try {
            const productos = await ProductServices
                .detailedProducts(id);
            if (productos.imagen && productos.nombre && productos.precio && productos.descripcion) {
                imagen.value = productos.imagen;
                nombre.value = productos.nombre;
                precio.value = productos.precio;
                descripcion.value = productos.descripcion;
            }
        } catch (error) {
            console.log(error)
        }
    }

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const url = new URL(window.location);
        const id = url.searchParams.get("id");
        
        const imagen = document.querySelector("[data-imagen]").value;
        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        const descripcion = document.querySelector("[data-descripcion]").value;
        
        ProductServices.updateProducts(imagen, nombre, precio, descripcion, id).then((respuesta) => {
                alert("Producto actualizado");
            })
    })

 obtenerDatos()

