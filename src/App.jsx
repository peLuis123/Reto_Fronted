import { useState } from 'react'
//import image from './img/descarga.png'
import './App.css'
//import Hero from './componentes/hero'
//import Acord from './componentes/acordion'

import image1 from './img/descarga.png'
import image2 from './img/pregunta_2.jpg'
import image3 from './img/Pregunta_3.jpg'


import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'
function App() {
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

export default App
