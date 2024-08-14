import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"

/* CONTENEDOR */
const InicioApp = () => {
  const url = import.meta.env.VITE_API_PRODUCTOS
  
  //     [estado, setEstado] -> setEstado cambia el estado. No lo puedo modificar directamente, tengo que usar le función que modifica el estado

  // estado = estado + 1 // ! No puedo cambiar directamente el estado 
  // setEstado(estado + 1)
  const [products, setProducts] = useState(null)
  const [productoAEditar, setProductoAEditar] = useState(null)

  useEffect(() => {
    console.log('Se monta el componente en la pantalla')
    obtenerTodosLosProductos()
  }, [])
  
  const obtenerTodosLosProductos = async () => {
    
    try {

      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`No se pudo obtener los productos ${res.status}`)
      }

      const data = await res.json()

      //console.log(data)
      
      // Seteo los productos que me llegaron del backend
      setProducts(data)
      
    } catch (error) {
      console.error('[obtenerTodosLosProductos]', error)
    }

  }

  const agregarProducto = async (producto) => {

    try {
        /* 1. Hacer la petición para el guardado del producto en el backend */

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(producto)
      }

      const res = await fetch(url, options)

      if (!res.ok) {
        throw new Error(`No se pudo crear el producto ${res.status}`)
      }

      const dataNuevoProducto = await res.json()

      console.log(dataNuevoProducto) // nuevo id

      /* 2. Cambiar el estado de react para que vuelve a renderizar y pueder la creación del producto. */ 
      const nuevoEstadoProductos = [...products, dataNuevoProducto]
      setProducts(nuevoEstadoProductos)


    } catch (error) {
      console.error('[agregarProducto]', error)
    }


   }

  const editarProducto = async (productoEditado) => { 

    try {

      // 1. Petición asincrónica para actualizar el backend con el producto nuevo
      const urlEdicion = url + productoEditado.id // http://local.../productos/{id}
      const options = {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(productoEditado)
      }
      const res = await fetch(urlEdicion, options)

      if ( !res.ok ) {
        throw new Error(`No se pudo editar el producto ${res.status}`)
      }
      
      const dataEditado = await res.json()
      console.log(dataEditado)

      // 2. Actualizo el estado basado en el producto editado que me llega del backend

      const nuevoEstadoProductos = products.map( 
        prod => 
          (prod.id === productoEditado.id) // condición
          ?
           productoEditado 
           : 
           prod
          )
      
      setProducts(nuevoEstadoProductos)

      
    } catch (error) {
      console.error('[editarProducto]', error)
    }

  }

  const eliminarProducto = async (id) => { 
    // console.log(id)
    try {
      // 1. Petición asincronica para borrar un producto

      const urlEliminacion = url + id // http://loca.../products/{id}

      const options = {
        method: 'DELETE'
      }

      const res = await fetch(urlEliminacion, options)

      if ( !res.ok ) {
        throw new Error(`No se pudo borrar el producto ${res.status}`)
      }

      const dataEliminado = await res.json()

      const data = {
        id: id,
        producto: dataEliminado
      }

      // 2. Modificar el estado products de react para eliminar el producto con el id recibdo

      const nuevoEstadoProductos = products.filter( prod => prod.id !== data.id)
      setProducts(nuevoEstadoProductos)

    } catch (error) {
      
    }



  }

  return (
    <div className="container">
      <Formulario 
        agregarProducto={agregarProducto}
        productoAEditar={productoAEditar}
        setProductoAEditar={setProductoAEditar}
        editarProducto={editarProducto}
      />
      <Tabla 
        products={products} 
        eliminarProducto={eliminarProducto}
        setProductoAEditar={setProductoAEditar}
      />
    </div>
  )
}

export default InicioApp