import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from '../components/Image';
import axios from 'axios';

const HomeScreen = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await axios.get('/api/images')
      setImages(data)
    }

    getImages()
  }, []);

  return (
    <>
        <h1>Latest Photographs</h1>
        <Row>
            {images.map((image) => (
                <Col key={image._id} sm={12} md={6} lg={4} xl={3}>
                    <Image image={image} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen