import React, { useContext, useRef, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { categoriaContext } from './Hooks/ContextProvider';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import BotonesAgregado from './BotonesAgregado';
import { PDFDownloadLink } from '@react-pdf/renderer';


export default function Lista({lugar , accion , jugador}) {
const {listaJugadores} = useContext(categoriaContext)
const {setListaJugadores} = useContext(categoriaContext)
const {setCategoria} = useContext(categoriaContext)
const [nada, setNada] = useState('flex')  
  
const listItems = listaJugadores.map((jugador) =>
  <ListGroup.Item as="li">{jugador.nombre} | {jugador.accion} | {jugador.lugar} | { jugador.observacion }</ListGroup.Item>
);

  const imprimir = () => {
    setTimeout(() => {
    window.print();
    }, "100");
    
  }




  const agregarALista = (e) => {
    e.preventDefault()

    

    setListaJugadores(
      (listaJugadores[1]==null && listaJugadores[0].nombre=='nombre')?[{
      nombre: e.target.parentNode.children[1].value,
      accion: e.target.parentNode.children[3].value,
        lugar: e.target.parentNode.children[5].value,
        observacion: e.target.parentNode.children[7].value 
    }] :
      [...listaJugadores, {
      nombre: e.target.parentNode.children[1].value,
      accion: e.target.parentNode.children[3].value,
      lugar: e.target.parentNode.children[5].value,
      observacion: e.target.parentNode.children[7].value
    }])
  }
  
  return (
    <>
      
      <Row style={{display: nada, justifyContent:'center', alignItems:'center'}}>
       <div style={{width:'40%', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
          <button onClick={() => {
            setNada('none')
            setTimeout(() => {
           setNada('flex')
            }, "300");
            imprimir()
          }} style={{width:'auto'}}>Imprimir</button>
          <button onClick={()=>setCategoria(null)} style={{width:'auto'}}>Cancelar</button>
         </div>
      </Row>
      <Row>
        <Col lg='6' md='6'>
          <form className='formLista' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <label>Nombre del jugador</label>
            <input name='Nombre del jugador' disabled value={jugador} ></input>
            <label >Accion</label>
            <input disabled name='accion' value={accion}></input>
            <label>Lugar de la cancha</label>
            <input disabled value={lugar}></input>
            <label>Observacion</label>
            <textarea wrap="soft"></textarea>
             <button onClick={agregarALista} style={{ width: 'auto', display:nada }}>Agregar</button>
            </form>
        </Col>
        <Col>
        <ListGroup className='mt-5' as="ul" style={{overflowY:'scroll' , maxHeight:'20vh'}}>
          {listItems}
          </ListGroup>
          </Col>
      </Row>
      
     
    </>
  )
}
