import { ProductServices } from '../services/products-service.js';
import { createProduct } from './create-product-controller.js';

const caja = document.querySelector('[data-caja]');

ProductServices.products()
	.then((data) => {
		data.forEach(({ imagen, nombre, precio, descripcion, id }) => {
			const contenido = `   
                <div class="starwars-articulo">
                    <img src="${imagen}" alt="imagen de stormtrooper" class="star-wars_imagen">
                        <h3>${nombre}</h3> 
                        <figcaption>${nombre}</figcaption>
                        <p>$ ${precio}</p>
                    </img>
                    <p>${descripcion}</p>
                    <a href="../screens/index.html?id=${id}" class="starwars-enlace">Ver producto</a>
                </div>
                    `;

			const nuevaLinea = createProduct(contenido);
			caja.appendChild(nuevaLinea);
		});
	})
	.catch((error) => console.log(error));
