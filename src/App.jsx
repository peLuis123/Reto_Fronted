import React, { useState } from "react";

import { Button } from "react-bootstrap";
import './App.css'
import Question1 from './question/pregunta1'
import Question2 from "./question/pregunta2";
import Question3 from "./question/pregunta3";
import image1 from './img/descarga.png'
import image2 from './img/pregunta_2.jpg'
import image3 from './img/Pregunta_3.jpg'
import { Card } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'

const Home = () => <h1></h1>

const inLineStyles = {
  padding: 5
}
const App = () => {
  const [page, setPage] = useState(() => {
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page
  })
  const getContent = () => {
    if (page === 'pregunta1') {
      return <Question1 />
    }
    else if (page == 'pregunta2') {
      return <Question2 />
    }
    else if (page == 'pregunta3') {
      return <Question3 />
    }
  }
  const bePage = page => event => {
    history.pushState(null, '', `/${page}`)
    event.preventDefault()
    setPage(page)
    console.log(page)
  }
  return (

    <div className="container">
    <h1> Video Cuestionario</h1>
    <p>Para iniciar el questionario presiona en cualquiera de las 3 preguntas tendras 2 minutos por pregunta puedes grabar las preguntas las veces que tu desees</p>
    <CardDeck>
        <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
                <Card.Title>pregunta 1</Card.Title>
                <Card.Text>
                    Cual fue tu videojuego favorito durante la infancia.
                </Card.Text>
                <Button variant="primary" onClick={bePage('pregunta1')}>Grabar respuesta</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
                <Card.Title>pregunta 2</Card.Title>
                <Card.Text>
                    Cual fue tu serie favorita durante la infancia.
                </Card.Text>
                <Button variant="primary" onClick={bePage('pregunta2')}>Grabar respuesta</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
                <Card.Title>pregunta 3</Card.Title>
                <Card.Text>
                    Cual fue tu plato favorito durante la infancia.
                </Card.Text>
                <Button variant="primary" onClick={bePage('pregunta3')}>Grabar respuesta</Button>
            </Card.Body>
        </Card>
    </CardDeck>
    {getContent()}
</div>
   
  )
}

export default App
