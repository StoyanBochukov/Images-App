import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

const ImageScreen = () => {

  const { id: imageId } = useParams();
  const [image, setImage] = useState({});

  useEffect(() => {
    const getImage = async () => {
      const { data } = await axios.get(`/api/images/${imageId}`);
      setImage(data)
    };

    getImage()
  }, [imageId])


  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image.image} alt={image.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3><strong>{image.name}</strong></h3>
            </ListGroup.Item>
            <ListGroup.Item>
              {image.title}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {image.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ImageScreen