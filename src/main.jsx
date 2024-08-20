import React from 'react' 
import ReactDOM from 'react-dom/client' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import Usuarios from './pages/Usuarios'
import * as bootstrap from 'bootstrap' 
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import DetalleUsuario from './pages/DetalleUsuario'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import NoEncontrado from './pages/NoEncontrado'




ReactDOM.createRoot(document.getElementById('root'))
.render(
  <BrowserRouter>

  
  <Navbar />

  <Routes>

    <Route path="/" element={<Inicio/>}/>
    <Route path="/usuarios" element={<Usuarios />} />
    <Route path="/detalle-producto/:id" element={<DetalleUsuario />} /> 
    <Route path="/nosotros" element={<Nosotros />}/>
    <Route path="/contacto" element={<Contacto />}/>
    <Route path="*" element={<NoEncontrado />} />

  </Routes>

</BrowserRouter>
)

