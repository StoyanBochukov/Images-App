import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaUser, FaImages, FaPhone, FaHome } from 'react-icons/fa'

const Header = () => {
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

                <LinkContainer to='/login'>
                  <Nav.Link> <FaUser /> Sign In</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/images'>
                  <Nav.Link><FaImages/> Images</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/contact'>
                  <Nav.Link><FaPhone/> Contacts</Nav.Link>
                </LinkContainer>
                
              </Nav>
            </Navbar.Collapse>
          </Container>  
        </Navbar>
    </header>
  )
}

export default Header