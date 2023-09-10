import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import { getImageById } from '../reducers/images/imagesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';

const ImageScreen = () => {

  const { id: imageId } = useParams();

  const dispatch = useDispatch();
  const { image, isLoading } = useSelector(state => state.images);

  useEffect(() => {
    dispatch(getImageById(imageId))
  }, [dispatch, imageId])


  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      {isLoading ? (<Loader />) : (
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
      )}
     
    </>
  )
}

export default ImageScreen