import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';



const RegisterScreen = () => {
   
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { firstName, lastName, email, password, confirmPassword } = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <FormContainer>
        <h1>Sign Up</h1>
        <Form >

            <Form.Group controlId='firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='name' placeholder='Enter First Name'
                value={firstName} id='firstName' name='firstName'></Form.Control>
            </Form.Group>

            <Form.Group controlId='lastName'>
                <Form.Label>Surname</Form.Label>
                <Form.Control type='name' placeholder='Enter Surname'
                value={lastName} id='lastName' name='lastName' ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Email'
                value={email} id='email' name='email'></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password'
                value={password} id='password' name='password'></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='Confirm Password'
                value={confirmPassword} id='confirmPassword' name='confirmPassword'></Form.Control>
            </Form.Group>

            <Button className='mt-4' type='submit' variant='primary'>Register</Button>
        </Form>

        <Row className='py-3'>
            <Col>
                Have an Account? <Link to='/login'>
                    Login
                </Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default RegisterScreen