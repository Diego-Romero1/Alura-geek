const products = () => fetch("http://localhost:3000/productos").then((response) => response.json())

const addProducts = (imagen, nombre, precio, descripcion,) => {
   return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, nombre, precio, descripcion, id:uuid.v4()})
    })
}

const deleteProducts = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "DELETE"
  })
}

const detailedProducts = (id) => { 
    return fetch(`http://localhost:3000/productos/${id}`)
    .then(respuesta => respuesta.json());
  }

  const updateProducts = (imagen, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({imagen, nombre, precio, descripcion})
    }).then( respuesta => (respuesta))
        .catch(err => console.log(err))
  }

export const ProductServices = {
    products,
    addProducts,
    deleteProducts,
    detailedProducts,
    updateProducts
   
}

    
