export const createProduct = (contenido) => {
	const linea2 = document.createElement('div');

	linea2.innerHTML = contenido;
	const btnEliminar = linea2.querySelector('[data-eliminar]');

	if (btnEliminar)
		btnEliminar.addEventListener('click', () => {
			const id = btnEliminar.id;
			ProductServices.deleteProducts(id)
				.then((respuesta) => {
					console.log(respuesta);
				})
				.catch((err) => console(err));
		});

	return linea2;
};
