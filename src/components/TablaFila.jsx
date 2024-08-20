import { notificacionSweet } from "./TablaFila.service";


const TablaFila = ( { product, eliminarProducto, setProductoAEditar } ) => {
    
  

  const handleEliminar = () => {
    
    notificacionSweet(product.nombre, () => {
      eliminarProducto(product.id)
    })

  }

  const handleEditar = (prod) => {
    console.log(prod)
    setProductoAEditar(prod)
  }

  return (
    <tr>
      <th scope="row">{product.nombre}</th>
      <td>{product.apellido}</td>
      <td>{product.edad}</td>
      <td>{product.colorFavorito}</td>
      <td>
        <button className="btn btn-warning me-2" onClick={() => handleEditar(product)}>Editar</button>
        <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TablaFila;
