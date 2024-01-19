import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';
import { categoriaContext } from './Hooks/ContextProvider';
import Lista from './Lista';
import FormNuevaMarca from './FormNuevaMarca';
import BotonesAgregado from './BotonesAgregado';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);



export default function Cancha() {
  const {categoria} = useContext(categoriaContext)
  const {nuevoJugador} = useContext(categoriaContext)
  const {setListaJugadores} = useContext(categoriaContext)
  const {agregarMarca} = useContext(categoriaContext)


  const [zonaSeleccionada, setZonaSeleccionada] = useState('')
  


  const [zona, setZona] = useState({
    z0: 0, z1: 0, z2: 0, z3: 0,
    z00: 0, z11: 0, z22: 0, z33: 0, 
    z000: 0, z111: 0, z222: 0, z333: 0, 
    z0000: 0, z1111: 0, z2222: 0, z3333: 0, 
  });
  
  const [cantTotal, setCantTotal] = useState(0)
  const [promedioPorZona, setPromedioPorZona] = useState({
    internos: 0,
    externos: 0,
    circuloCentral: 0,
  })

  const data = {
    labels: ['Internos', 'Externos', 'Circulo Personal'],
    datasets:[
    {
        data: [(promedioPorZona.internos == 1) ? '0':promedioPorZona.internos, (promedioPorZona.externos < 1)?'0': promedioPorZona.externos,(promedioPorZona.circuloCentral < 1)?'0': promedioPorZona.circuloCentral],
      backgroundColor: ['aqua', 'red', 'purple']
      }
      ]
  }

  const data2= {
    labels: ['Cantidad total'],
    datasets:[
    {
        data: [cantTotal],
      backgroundColor: ['aqua']
      }
      ]
  }
const options2 = {}
const options = {}

  const [bg, setBg] = useState('white')

  const zonaselec = (e) => {

    const zonaId = e.target.id;
    
    setZona(prevZona => ({
      ...prevZona,
      [zonaId]: prevZona[zonaId] + 1,
    }));

    setCantTotal(cantTotal + 1)
    

    if (zonaId == 'z00' || zonaId == 'z11' || zonaId == 'z22'|| zonaId == 'z33' || zonaId == 'z000' || zonaId == 'z111' || zonaId == 'z222' || zonaId == 'z333') {
      
      const internos = 'internos'
      
      setZonaSeleccionada(internos)
      
      

      setPromedioPorZona(prevPromedio => ({
      ...prevPromedio,
      [internos]: prevPromedio[internos] + 1,
    }));
      
      if (zonaId == 'z11' || zonaId == 'z22' || zonaId == 'z111' || zonaId == 'z222') {
      const circuloCentral = 'circuloCentral'

      setPromedioPorZona(prevPromedio => ({
      ...prevPromedio,
      [circuloCentral]: prevPromedio[circuloCentral] + 1,
      }));
        
      setZonaSeleccionada('Circulo Central')
        
        
    }
      
      
    } else {
      const externos = 'externos'

      setPromedioPorZona(prevPromedio => ({
      ...prevPromedio,
      [externos]: prevPromedio[externos] + 1,
      }));
      
      setZonaSeleccionada(externos)
        


    }
    
    

  }

  




  return (
    <>
       
      <Row className='mt-5' style={{width: '100%', display: 'flex', justifyContent: 'center', margin:'0px', position:'relative', backgroundColor:'white'}}>
        <div style={{ zIndex: '2', width: '100%', height: '100%', position: 'absolute', backgroundColor: '#0c0d0e96', top: '0', display: (agregarMarca == true) ? 'flex' : 'none' }}>
          <FormNuevaMarca>
          </FormNuevaMarca>
        </div>

      <h2>Mapa de calor</h2>
      <h3>Tematica: {categoria}</h3>
        <Col md='7'>
          <div style={{width: '100%', padding:'2rem'  , margin:'0px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Row style={{ width: '100%', userSelect: 'none' ,margin:'0px', color:'transparent' }}>
          <Row className='filasCancha' style={{cursor:'pointer'}}>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z0 < 1) ? bg : ((zona.z0 < 10) ? '#198754' : ((zona.z0 > 9 && zona.z0 < 20) ? '#ffc107' : ( zona.z0>19) ? '#dc3620' : null )) + (zona.z0 * 2 + 8).toString(), borderTop:'2px solid black' , borderLeft:'2px solid black'}} id='z0'>{zona.z0}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z1 < 1) ? bg : ((zona.z1 < 10) ? '#198754' : ((zona.z1 > 9 && zona.z1 < 20) ? '#ffc107' : ( zona.z1>19) ? '#dc3620'  : null )) + (zona.z1 * 2 + 8).toString(), borderTop:'2px solid black'}} id='z1'>{zona.z1}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z2 < 1) ? bg : ((zona.z2 < 10) ? '#198754' : ((zona.z2 > 9 && zona.z2 < 20) ? '#ffc107' : ( zona.z2>19) ? '#dc3620' : null )) + (zona.z2 * 2 + 8).toString(), borderTop:'2px solid black', borderLeft:'2px solid black'  }} id='z2'>{zona.z2}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z3 < 1) ? bg : ((zona.z3 < 10) ? '#198754' : ((zona.z3 > 9 && zona.z3 < 20) ? '#ffc107' : ( zona.z3>19) ? '#dc3620' : null )) + (zona.z3 * 2 + 8).toString(), borderTop:'2px solid black' , borderRight:'2px solid black' }} id='z3'>{zona.z3}</Col>
        </Row>
        <Row className='filasCancha' style={{cursor:'pointer'}}>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z00 < 1) ? bg : ((zona.z00 < 10) ? '#198754' : ((zona.z00 > 9 && zona.z00 < 20) ? '#ffc107' : ( zona.z00>19) ? '#dc3620' : null )) + (zona.z00 * 2 + 8).toString(), borderLeft:'2px solid black' }} id='z00'>{zona.z00}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z11 < 1) ? bg : ((zona.z11 < 10) ? '#198754' : ((zona.z11 > 9 && zona.z11 < 20) ? '#ffc107' : ( zona.z11>19) ? '#dc3620' : null )) + (zona.z11 * 2 + 8).toString() }} id='z11'>{zona.z11}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z22 < 1) ? bg : ((zona.z22 < 10) ? '#198754' : ((zona.z22 > 9 && zona.z22 < 20) ? '#ffc107' : ( zona.z22>19) ? '#dc3620' : null )) + (zona.z22 * 2 + 8).toString() , borderLeft:'2px solid black'  }} id='z22'>{zona.z22}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z33 < 1) ? bg : ((zona.z33 < 10) ? '#198754' : ((zona.z33 > 9 && zona.z33 < 20) ? '#ffc107' : ( zona.z33>19) ? '#dc3620' : null )) + (zona.z33 * 2 + 8).toString() , borderRight:'2px solid black' }} id='z33'>{zona.z33}</Col>
        </Row> 
        <Row className='filasCancha' style={{cursor:'pointer'}}>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z000 < 1) ? bg : ((zona.z000 < 10) ? '#198754' : ((zona.z000 > 9 && zona.z000 < 20) ? '#ffc107' : ( zona.z000>19) ? '#dc3620' : null )) + (zona.z000 * 2 + 8).toString(), borderLeft:'2px solid black' }} id='z000'>{zona.z000}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z111 < 1) ? bg : ((zona.z111 < 10) ? '#198754' : ((zona.z111 > 9 && zona.z111 < 20) ? '#ffc107' : ( zona.z111>19) ? '#dc3620' : null )) + (zona.z111 * 2 + 8).toString() }} id='z111'>{zona.z111}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z222 < 1) ? bg : ((zona.z222 < 10) ? '#198754' : ((zona.z222 > 9 && zona.z222 < 20) ? '#ffc107' : ( zona.z222>19) ? '#dc3620' : null )) + (zona.z222 * 2 + 8).toString() , borderLeft:'2px solid black'  }} id='z222'>{zona.z222}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z333 < 1) ? bg : ((zona.z333 < 10) ? '#198754' : ((zona.z333 > 9 && zona.z333 < 20) ? '#ffc107' : ( zona.z333>19) ? '#dc3620' : null )) + (zona.z333 * 2 + 8 ).toString() , borderRight:'2px solid black' }} id='z333'>{zona.z333}</Col>
        </Row>
        <Row className='filasCancha' style={{cursor:'pointer'}}>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z0000 < 1) ? bg : ((zona.z0000 < 10) ? '#198754' : ((zona.z0000 > 9 && zona.z0000 < 20) ? '#ffc107' : ( zona.z0000>19) ? '#dc3620' : null )) + (zona.z0000 * 2 + 8).toString(), borderBottom:'2px solid black', borderLeft:'2px solid black' }} id='z0000'>{zona.z0000}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z1111 < 1) ? bg : ((zona.z1111 < 10) ? '#198754' : ((zona.z1111 > 9 && zona.z1111 < 20) ? '#ffc107' : ( zona.z1111>19) ? '#dc3620' : null )) + (zona.z1111 * 2 + 8).toString(), borderBottom:'2px solid black'}} id='z1111'>{zona.z1111}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z2222 < 1) ? bg : ((zona.z2222 < 10) ? '#198754' : ((zona.z2222 > 9 && zona.z2222 < 20) ? '#ffc107' : ( zona.z2222>19) ? '#dc3620' : null )) + (zona.z2222 * 2 + 8).toString(), borderBottom:'2px solid black', borderLeft:'2px solid black'   }} id='z2222'>{zona.z2222}</Col>
          <Col onMouseUp={zonaselec} style={{backgroundColor: (zona.z3333 < 1) ? bg : ((zona.z3333 < 10) ? '#198754' : ((zona.z3333 > 9 && zona.z3333 < 20) ? '#ffc107' : ( zona.z3333>19) ? '#dc3620' : null )) + (zona.z3333 * 2 + 8).toString(), borderBottom:'2px solid black' , borderRight:'2px solid black'  }} id='z3333'>{zona.z3333}</Col>
        </Row>
            </Row>
          </div>

          
            <p>Promedio de internos: {(cantTotal > 0) ? Number((promedioPorZona.internos * 100) / cantTotal).toFixed(2) + '%' : '0%'}</p>
             <p>Promedio de externos: { (cantTotal > 0) ? Number((promedioPorZona.externos * 100) / cantTotal).toFixed(2) + '%' : '0%' }</p>
            <p>Promedio de circulo central: { (cantTotal > 0) ? Number((promedioPorZona.circuloCentral * 100) / cantTotal).toFixed(2) + '%' : '0%' }</p>
          

        </Col>
        
<Col md='5' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Row style={{ width: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}>
          
            <Col >
              <div style={{ display:'flex',maxHeight:'20vh', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <Pie 
        options={options}
        data={data}
          />
            <Pie 
        options={options2}
        data={data2}
                />
                </div>
          </Col>
          
        </Row>
    </Col>
        
        <Lista lugar={zonaSeleccionada} accion={categoria} jugador={nuevoJugador}></Lista>
        </Row>

        
      
    </>
  )
}
