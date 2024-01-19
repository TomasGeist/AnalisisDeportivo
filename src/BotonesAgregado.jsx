import React, { useContext } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { categoriaContext } from './Hooks/ContextProvider'

export default function BotonesAgregado({jugador}) {
    const {setAgregarMarca} = useContext(categoriaContext)
    const {agregarMarca} = useContext(categoriaContext)

  
  return (
    <>
      <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
       <div style={{width:'40%', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
          <button onClick={() => {
            console.log('hola')
          }} style={{ width: 'auto' }}>Agregar</button>
          <button style={{width:'auto'}}>Imprimir</button>
          <button style={{width:'auto'}}>Cancelar</button>
         </div>
      </Row>
    </>
  )
}
