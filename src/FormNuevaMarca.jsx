import React, { useContext } from 'react'
import { categoriaContext } from './Hooks/ContextProvider'

export default function FormNuevaMarca() {
  const { setAgregarMarca } = useContext(categoriaContext)
  
  return (
    <>
      <div>
        <button onClick={()=>{setAgregarMarca(false)}}>X</button>
        </div>
    </>
  )
}
