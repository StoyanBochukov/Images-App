import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { useGetImageByIdQuery, useCreateCommentMutation } from '../reducers/images/imagesSlice';

const ImageScreen = () => {

  const { id: imageId } = useParams();
  const [commentData, setCommentData] = useState({comment: ''});
  const { comment } = commentData;

  const onChange = (e) => {
    setCommentData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
};
const { user } = useSelector(state => state.auth)
const { data: image, refetch, isLoading } = useGetImageByIdQuery(imageId);
const [createComment, {isLoading: isCommentLoding}] = useCreateCommentMutation()

  const onCommentCreate = async (e) => {
    e.preventDefault();
    try {
      await createComment({
        imageId,
        comment
      }).unwrap()
      refetch()
      setCommentData({
        comment: ''
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      {isLoading ? (<Loader />) : (
      <>
        <Row>
          <Col md={6}>
            <Image src={image.image} alt={image.name} fluid />
          </Col>
          <Col md={6}>
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

        <Row>
          <Col md={6}>
           {image.comments.length === 0 && <div>No Reviews</div>}
           <ListGroup variant='flush'>
            {image.comments.map((comment) => (
              <ListGroup.Item key={comment._id}>
                <strong>{comment.name}</strong>
                <p>{comment.createdAt.substring(0, 10)}</p>
                <p>{comment.comment}</p>
              </ListGroup.Item>
            ))}
           </ListGroup>
        {user && (
             <ListGroup variant='flush'>
               <ListGroup.Item>
                 <h2>Write a comment</h2>
                   <Form onSubmit={onCommentCreate} className='d-grid gap-2' >
                     <Form.Group controlId='comment' >
                       <Form.Label>Comment</Form.Label>
                       <Form.Control as='textarea' row='3' name='comment' value={comment}
                       onChange={onChange}>
                       </Form.Control>
                     </Form.Group>
                     <Button className='mt-4' size='lg' type='submit' variant='primary' >Submit</Button>
                   </Form>
               </ListGroup.Item>
             </ListGroup>
        )}
           </Col>
         </Row>
      </>
      )}
     
    </>
  )
}

export default ImageScreen