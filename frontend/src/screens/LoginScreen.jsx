import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify'
import { login, reset } from '../reducers/auth/authSlice';

const LoginScreen = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = loginData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isSuccess, isError, message } = useSelector(state => state.auth);

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/');
        }
        dispatch(reset())
    }, [dispatch, navigate, isSuccess, isError, message, user])

    const onChange = (e) => {
        setLoginData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if(email === ''|| password === ''){
            toast.error('Please enter email and password')
        }else{
            const userData = {
                email,
                password
            };
            dispatch(login(userData));
        }
    }

  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={formSubmit}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email'
                value={email} name='email' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password'
                value={password}  name='password' onChange={onChange}></Form.Control>
            </Form.Group>

            <Button className='mt-4' type='submit' variant='primary'>Sing In</Button>
        </Form>

        <Row className='py-3'>
            <Col>
                New Customer? <Link to='/users/register'>
                    Register
                </Link>
            </Col>
        </Row>
    </FormContainer>
  )
}

export default LoginScreen