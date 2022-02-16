import ModalMovie from '../ModalMovie/ModalMovie';
import { useState, useEffect } from 'react';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';


function Movie(props) {
    //{ console.log(props.ele) }
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <Container>
            <Row md={3}>
                {

                    <Col key={props.data.id} >
                        <Card className='div-card'>
                            <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} />
                            <Card.Body>
                                <Card.Title className='div-card-title'>Title : {props.data.title}</Card.Title>
                                <p>Release Date : {props.data.release_date}</p>
                                <div>
                                    <Button className='div-card-button' variant="primary"
                                        onClick={() => {
                                            setCardInfo(props.data)
                                            setShow(true);
                                        }}>Add To Favorites</Button>
                                </div>
                            </Card.Body>
                            {
                                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
                            }
                        </Card>
                    </Col>
                }
            </Row>
        </Container>


    )

}

export default Movie;
