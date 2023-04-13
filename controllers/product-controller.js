import { ProductServices } from "../services/products-service.js"

const crearNuevoProducto = (imagen, nombre,precio, descripcion, id) => {
    const linea = document.createElement("div");
    const contenido = `
   
    <div class="starwars-articulo">
    <img src="${imagen}" alt="imagen de stormtrooper" class="star-wars_imagen">
    <h3>${nombre}</h3> 
        <figcaption>${nombre}</figcaption>
        <p>$ ${precio}</p>
    </img>
    <p>${descripcion}</p>
    <a href="../screens/index.html?id=${id}" class="starwars-enlace">Ver producto</a>
</div>`
    linea.innerHTML = contenido;
    /*const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
      const id = btn.id;
      clientServices.eliminarCuenta(id)
      .then(respuesta => {
        console.log(respuesta)
      }).catch(err => alert("error"))
    })*/
    return linea
}

const caja = document.querySelector("[data-caja]");

ProductServices.products()
.then((data) => {
    data.forEach(({ imagen, nombre, precio, descripcion, id}) => {
        const nuevaLinea = crearNuevoProducto(imagen, nombre, precio, descripcion, id);
        caja.appendChild(nuevaLinea);
    })
})
.catch((error) =>  console.log(error))

