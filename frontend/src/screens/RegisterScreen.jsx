import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { register, reset } from '../reducers/auth/authSlice';



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
    const { user, isError, isSuccess, message } = useSelector(state => state.auth);

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    }, [isError, isSuccess, message, user, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        if(firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === ''){
            toast.error('Please fill all fields')
        };
        if(password !== confirmPassword){
            toast.error('Passwords do not match')
        }else{
            const userData = {
                firstName,
                lastName,
                email,
                password
            };
            dispatch(register(userData));
        }
       
    }

  return (
    <FormContainer>
        <h1>Sign Up</h1>
        <Form onSubmit={formSubmit}>

            <Form.Group controlId='firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='name' placeholder='Enter First Name'
                value={firstName} name='firstName' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='lastName'>
                <Form.Label>Surname</Form.Label>
                <Form.Control type='name' placeholder='Enter Surname'
                value={lastName} name='lastName' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter Email'
                value={email} name='email' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password'
                value={password} name='password' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='Confirm Password'
                value={confirmPassword} name='confirmPassword' onChange={onChange}></Form.Control>
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