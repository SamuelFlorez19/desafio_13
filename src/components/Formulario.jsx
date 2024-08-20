import { useEffect, useState } from "react"

const Formulario = ({agregarProducto, productoAEditar, setProductoAEditar, editarProducto}) => { 

   const formInicial = {
    id: null,
    nombre: '',
    apellido: '',
    edad: '',
    colorFavorito: ''
   }

   
   useEffect(() => {
        console.log('Cambió el producto a editar')
        productoAEditar ? setForm(productoAEditar): setForm(formInicial)
   }, [productoAEditar])
   

   
   
   const [form, setForm] = useState(formInicial)

   


   const handleChange = e => { 

    setForm({
        ...form, 
        [e.target.name]: e.target.value,
    })

   }

   const handleSubmit = e => {
    e.preventDefault() 
    console.log('Enviando la información')

    /* ---------------------- */
    /* ---------------------- */

    if ( form.id === null ) {
        agregarProducto(form)
    } else {
        editarProducto(form)
    }
    
    handleReset()
   }

   const handleReset = () => {
    setForm(formInicial)
    setProductoAEditar(null)
   }

  return (
    <>
        <h2>Formulario de { productoAEditar ? 'edición' : 'creación'}</h2>
        <form className="w-75 border border-danger rounded-3 p-4" onSubmit={handleSubmit}>
            {/* Campo Nombre */}
            <div className="mb-3">
                <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-nombre" 
                    name="nombre" 
                    placeholder="Ingrese el Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
            </div>
            {/* Campo Apellido */}
            <div className="mb-3">
                <label htmlFor="lbl-apellido" className="form-label">Apellido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-apellido" 
                    name="apellido" 
                    placeholder="Ingrese el Apellido"
                    value={form.apellido}
                    onChange={handleChange}
                />
            </div>
            {/* Campo Edad */}
            <div className="mb-3">
                <label htmlFor="lbl-edad" className="form-label">Edad</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-edad" 
                    name="edad" 
                    placeholder="Ingrese la Edad"
                    value={form.edad}
                    onChange={handleChange}
                />
            </div>
            {/* Campo colorFavorito */}
            <div className="mb-3">
                <label htmlFor="lbl-colorFavorito" className="form-label">Color Favorito</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-colorFavorito" 
                    name="colorFavorito" 
                    placeholder="Ingrese el Color Favorito"
                    value={form.colorFavorito}
                    onChange={handleChange}
                />
            </div>
            
            <button type="submit" className="btn btn-dark me-2">{ productoAEditar ? 'Editar' : 'Guardar'}</button>
            <button type="reset" className="btn btn-danger" onClick={handleReset}>Resetear</button>
        </form>
    </>
  )
}

export default Formulario