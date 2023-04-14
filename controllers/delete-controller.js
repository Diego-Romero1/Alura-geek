import { ProductServices } from '../services/products-service.js';
import { createProduct } from './create-product-controller.js';

const box = document.querySelector('[data-caja]');

ProductServices.products()
	.then((data) => {
		data.forEach(({ imagen, nombre, precio, descripcion, id }) => {
			const contenido = `
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

			const nuevaLinea2 = createProduct(contenido);
			box.appendChild(nuevaLinea2);
		});
	})
	.catch((error) => console.log(error));
