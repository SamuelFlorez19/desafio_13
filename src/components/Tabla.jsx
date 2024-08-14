import TablaFila from "./TablaFila";

const Tabla = ({products, eliminarProducto, setProductoAEditar}) => {

  return (
    <>
      <h2>Tabla de productos</h2>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Color Favorito</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
              products && products.map((product, idx) => (
                <TablaFila 
                  key={idx} 
                  product={product} 
                  eliminarProducto={eliminarProducto} 
                  setProductoAEditar={setProductoAEditar}
                />
              ))
            }
        </tbody>
      </table>

    </>
  );
};

export default Tabla;

/* 

{
  products.map(() => (
    <TablaFila />
  ))
}

{
  products.map(() => {
     return <TablaFila />
  })
}
*/

/* {
  products ? 
    (
      <>
        {
            products.map((product, idx) => (
              <TablaFila 
                key={idx} 
                product={product} 
                eliminarProducto={eliminarProducto} 
                setProductoAEditar={setProductoAEditar}
              />
            ))
        }
      </>
  ) 
  : 
  <p>Todavía no se cargaron</p>
 
} */