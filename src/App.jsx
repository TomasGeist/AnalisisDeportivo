import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cancha from './Cancha'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container'
import Seleccion from './Seleccion'
import { categoriaContext } from './Hooks/ContextProvider'
import Lista from './Lista'



function App() {
  const {categoria} = useContext(categoriaContext)

  return (
    <>
      
        <Container>
          {(categoria == null)
            ? <Seleccion></Seleccion>
            : <Cancha></Cancha>
        }
        </Container>
        
    </>
  )
}

export default App
