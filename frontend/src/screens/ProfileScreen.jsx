import { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col, FormGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import { useUserProfileMutation } from '../reducers/usersApiSlice'
import { setCredentials } from '../reducers/auth/authSlice'

const ProfileScreen = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { firstName, lastName, email, password, confirmPassword } = formData
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        if(user) {
           setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
           })
        }
    }, [user.firstName, user.lastName, user.email])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
   <Row>
    <Col md={3}>
        <h2>User Profile</h2>
        <Form>
            <Form.Group controlId='firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='name' placeholder='First Name'
                value={firstName} name='firstName' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='lastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='name' placeholder='Last Name'
                value={lastName} name='lastName' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Email'
                value={email} name='email' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password'
                value={password} name='password' onChange={onChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='Confirm Password'
                value={confirmPassword} name='confirmPassword' onChange={onChange}></Form.Control>
            </Form.Group>
        </Form>
    </Col>
    <Col md={9}>Column</Col>
   </Row>
  )
}

export default ProfileScreen