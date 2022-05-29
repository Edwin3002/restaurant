import { Link } from 'react-router-dom'
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import '../style/navbar.css'
export const Navb = () => {
  return (
    <Navbar className='navbar text-light' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='link'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link to='/' className='mx-1'><Button  variant="outline-primary">Home</Button></Link>
            <Link to='/menu' className='mx-1'><Button variant="outline-primary"> Menu</Button></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
