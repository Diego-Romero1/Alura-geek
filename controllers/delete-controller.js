import { ProductServices } from "../services/products-service.js";

const crearNuevoProducto2 = (imagen, nombre, precio, descripcion, id) => {
  const linea2 = document.createElement("div");
  const contenido2 = `
   <div class="starwars-articulo">
        <div class="starwars-buttens"> 
            <button class="boton-eliminar" type="button" id="${id}" data-eliminar>Eliminar</button>
            <a href="../screens/actualizar-productos.html?id=${id}"> <button class="boton-editar" data-btn-editar>Editar</button> </a>         
        </div>
   <img src="${imagen}" alt="imagen de stormtrooper" class="star-wars_imagen">
    <h3>${nombre}</h3> 
        <figcaption>${nombre}</figcaption>
        <p>$ ${precio}</p>
    </img>
    <p>${descripcion}</p>
    <a href="../screens/index.html?id=${id}" class="starwars-enlace">Ver producto</a>
</div>`;

linea2.innerHTML = contenido2;
const btnEliminar = linea2.querySelector("[data-eliminar]");
  btnEliminar.addEventListener("click", () => {
    const id = btnEliminar.id;
    ProductServices.deleteProducts(id)
    .then(respuesta => {
        console.log(respuesta)
    }).catch((err) => console(err))
  })
    return linea2;
  
};

const box = document.querySelector("[data-caja]");

ProductServices.products()
  .then((data) => {
    data.forEach(({ imagen, nombre, precio, descripcion, id }) => {
      const nuevaLinea2 = crearNuevoProducto2(
        imagen,
        nombre,
        precio,
        descripcion,
        id
      );
      box.appendChild(nuevaLinea2);
    });
  })
  .catch((error) => console.log(error));
