import React, { useContext, useState } from 'react'
import { categoriaContext } from './Hooks/ContextProvider'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


export default function Seleccion() {
  const { setCategoria } = useContext(categoriaContext)
  const { setNuevoJugador } = useContext(categoriaContext)

  

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategoria(e.target.children[0].children[1].value)
    setNuevoJugador(e.target.children[0].children[3].value)
    e.target.children[0].children[1].value = ''
    
  }

  return (
    <>
      <Row className='seccionSeleccion' style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems:'center', overflow:'hidden', position:'relative'}}>
        <p style={{ position: 'absolute', top: '-45rem', right: '10rem', color: '#ff450070', fontSize: '90rem', padding: '0px', margin: '0px', fontWeight:'bold', zIndex:'1'}}>G</p>
        <Row>
        <Col className='modificacionTitulo' style={{ fontWeight: 'bold', margin: '0px', zIndex: '2', textAlign: 'start', fontFamily: 'Helvetica', zIndex:'2' }}>
        <p>Estadisticas y analisis</p>
        <p style={{color:'orangered'}}>Deportivo</p>
        </Col>
        </Row>
        <Row  style={{ zIndex: '2', width:'60%', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Col md='12' sm='12' lg='12'>
          <form style={{width:'100%', display:'flex', justifyContent:'center' , backgroundColor: '#00000070' }} onSubmit={handleSubmit}>
          <div style={{display:'flex', flexDirection:'column', padding:'2rem', width:'80%', gap:'6px'}}>
        <label style={{color:'white', fontWeight:'bold'}}>Ingrese una categoria a evaluar</label>
        <input type='text' name='categoria'></input>
        <label style={{color:'white', fontWeight:'bold'}}>Ingrese un Jugador</label>
        <input type='text' name='categoria'></input>
        <button type='submit'>Continuar</button>
                </div>
          
          </form>
          </Col>
          </Row>
        </Row>
    </>
  )
}
