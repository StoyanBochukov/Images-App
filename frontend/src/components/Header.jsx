import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaImages, FaPhone, FaHome, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { logout, reset } from '../reducers/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const Header = () => {

  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }

  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>PhotoMastery</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to='/'>
                  <Nav.Link> <FaHome /> Home</Nav.Link>
                </LinkContainer>

                {!user ? (
                  <LinkContainer to='/users/login'>
                    <Nav.Link> <FaSignInAlt /> Sign In</Nav.Link>
                  </LinkContainer>
                ) : (
                  <LinkContainer to='/'>
                    <Nav.Link onClick={logoutHandler}> <FaSignOutAlt /> Sign Out</Nav.Link>
                  </LinkContainer>
                )}

                <LinkContainer to='/images'>
                  <Nav.Link><FaImages/> Images</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/contact'>
                  <Nav.Link><FaPhone/> Contacts</Nav.Link>
                </LinkContainer>

                  {user && (
                    <LinkContainer to='/profile'>
                      <Nav.Link><FaUser/> Profile</Nav.Link>
                    </LinkContainer>
                  )}
                
              </Nav>
            </Navbar.Collapse>
          </Container>  
        </Navbar>
    </header>
  )
}

export default Header