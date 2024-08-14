import { useEffect, useState } from "react"

const Formulario = ({agregarProducto, productoAEditar, setProductoAEditar, editarProducto}) => { // props = { agregarProducto }

   const formInicial = {
    id: null,
    nombre: '',
    apellido: '',
    edad: '',
    colorFavorito: ''
   }

   // useEffect(callback, [<referencias>])
   useEffect(() => {
        console.log('Cambió el producto a editar')
        productoAEditar ? setForm(productoAEditar): setForm(formInicial)
   }, [productoAEditar])
   

   //console.log(productoAEditar)
   
   const [form, setForm] = useState(formInicial)

   //console.log(form)


   const handleChange = e => { // Evento -> e -> evt -> evento -> event
    //console.log(e.target.name)
    //console.log(e.target.value)
    // debugger

    /* const obj = {
        ...form, // Spread Operator (Todo lo que tenía el form),
        [e.target.name]: e.target.value,
    }

    setForm(obj) */

    setForm({
        ...form, // Spread Operator (Todo lo que tenía el form),
        [e.target.name]: e.target.value,
    })

   }

   const handleSubmit = e => {
    e.preventDefault() // Detiene el comportamiento por defecto de los formulario
    console.log('Enviando la información')

    /* ---------------------- */
    /* ---------------------- */

    if ( form.id === null ) {
        agregarProducto(form)
    } else {
        editarProducto(form)
    }
    //console.log(form)
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
                    placeholder="Ingrese el nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
            </div>
            {/* Campo Categoría */}
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
            {/* Campo Precio */}
            <div className="mb-3">
                <label htmlFor="lbl-edad" className="form-label">Edad</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-edad" 
                    name="edad" 
                    placeholder="Ingrese el edad"
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
                    placeholder="Ingrese el color Favorito"
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