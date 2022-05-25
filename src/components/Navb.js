import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../style/navbar.css'
export const Navb = () => {
  return (
    <Navbar className='navbar text-light' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='link'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='link'>Home</Nav.Link>
            <Nav.Link href="#link" className='link'>Link</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
