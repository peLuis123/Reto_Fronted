import React, { useState } from "react";
import Principal from "./Principal";
import WebCamRecoder from './question/pregunta1'
import { Button } from "react-bootstrap";
import image1 from './img/descarga.png'
import image2 from './img/pregunta_2.jpg'
import image3 from './img/Pregunta_3.jpg'
import './App.css'
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'


const inLineStyles = {
  padding: 5
}


const Home = () => <h1></h1>
const Notes = () => <h1></h1>
const Fin = () => <h1></h1>

const App = () => {
  const [page,setPage] = useState('')
  const getContent = () => {
    if (page === 'home') {
      return <Principal />
    }
    else if (page === 'notes') {
      return <WebCamRecoder />
    }
    else if (page === 'fin') {
      return <Fin />
    }
  }
  const bePage=page =>event =>{
    history.pushState(null,'',`/${page}`)
    event.preventDefault()
    setPage(page)
    console.log(page)
  }
/*
  const toPage = page => event => {
    event.preventDefault()
    setPage(page)
    console.log(page)
  }
  */
  return (
    <div>
      //
      <header>
        <Button onClick={bePage('home')}>xd</Button>
        <a href='#' onClick={bePage('home')} style={inLineStyles}>home</a>
        <a href='#' onClick={bePage('notes')} style={inLineStyles}>notes</a>
      </header>
      {getContent()}
    </div>
  )
}

export default App




//principal.jsx

import React,{ useState } from 'react'
import './App.css'
import image1 from './img/descarga.png'
import image2 from './img/pregunta_2.jpg'
import image3 from './img/Pregunta_3.jpg'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'

function Principal() {
    
  return (
    <div className="container">
      <h1> Video Cuestionario</h1>
      <p>Para iniciar el questionario presiona en cualquiera de las 3 preguntas tendras 2 minutos por pregunta puedes grabar las preguntas las veces que tu desees</p>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={image1}/>
          <Card.Body>
            <Card.Title>pregunta 1</Card.Title>
            <Card.Text>
              Cual fue tu videojuego favorito durante la infancia.
              </Card.Text>
            <Button variant="primary">Grabar respuesta</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Title>pregunta 2</Card.Title>
            <Card.Text>
              Cual fue tu serie favorita durante la infancia.
              </Card.Text>
            <Button variant="primary">Grabar respuesta</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src= {image3} />
          <Card.Body>
            <Card.Title>pregunta 3</Card.Title>
            <Card.Text>
              Cual fue tu plato favorito durante la infancia.
            </Card.Text>
            <Button variant="primary">Grabar respuesta</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>

  )
}

export default Principal
