import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from '../components/Image';
import { getImages } from '../reducers/images/imagesSlice';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/Loader'


const HomeScreen = () => {

  const dispatch = useDispatch();
  const { images, isLoading } = useSelector(state => state.images)


  useEffect(() => {
    dispatch(getImages())
  }, [dispatch])

  return (
    <>
        <h1>Latest Photographs</h1>
        {isLoading ? (<Loader />) : (
          <Row>
            {images.map((image) => (
                <Col key={image._id} sm={12} md={6} lg={4} xl={3}>
                    <Image image={image} />
                </Col>
            ))}
          </Row>
        )}
        
    </>
  )
}

export default HomeScreen