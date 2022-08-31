import React, { useState } from 'react'
import './App.css'
import WebCamRecoder from './question/pregunta1'
import image1 from './img/descarga.png'
import image2 from './img/pregunta_2.jpg'
import image3 from './img/Pregunta_3.jpg'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { CardDeck } from 'react-bootstrap'


const Home = () => <h1>Iniciar Cuestionario</h1>
const Principal = () => {
    const [page, setPage] = useState(() => {
        const { pathname } = window.location
        const page = pathname.slice(1)
        return page
    })
    const getContent = () => {
        if (page === 'pregunta1') {
            return <WebCamRecoder/>
        }
        else if (page == 'mes') {
            return <Home />
        }
        else { return <Home /> }
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
                    <Card.Img variant="top" src={image3} />
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
