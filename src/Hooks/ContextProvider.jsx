import React, { createContext, useState} from 'react'

export const categoriaContext = createContext();


export const Datos = ({ children }) => {
  const [categoria, setCategoria] = useState(null)
  const [listaJugadores, setListaJugadores] = useState([{nombre: 'nombre', accion:'accion' , lugar:'lugar', observacion:'observacion'}])
  const [agregarMarca , setAgregarMarca] = useState(false)
  const [nuevoJugador, setNuevoJugador] = useState({})

 return (
   <categoriaContext.Provider value={{ categoria, setCategoria, listaJugadores, setListaJugadores, agregarMarca, setAgregarMarca, nuevoJugador, setNuevoJugador}}>
        {children}
    </categoriaContext.Provider>
  )
}
   



