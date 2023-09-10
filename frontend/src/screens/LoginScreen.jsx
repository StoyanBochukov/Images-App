import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = loginData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email'
                value={email} id='email' name='email'></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password'
                value={password} id='email' name='email'></Form.Control>
            </Form.Group>

            <Button className='mt-4' type='submit' variant='primary'>Sing In</Button>
        </Form>

        <Row className='py-3'>
            <Col>
                New Customer? <Link to='/register'>
                    Register
                </Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen