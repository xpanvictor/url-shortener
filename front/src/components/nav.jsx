import React from 'react'
import { Container, Navbar, Form, FormControl, Nav, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function Navig() {
  return (
    <Container className='vh-25 mb-0 mb-md-5'>
      <Navbar expand="lg">
        <Link to='/' className='text-decoration-none'><Navbar.Brand className='pd fw-normal'>URL shvtnr</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '140px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Features</Nav.Link>
            <Nav.Link href="#action2">Pricing</Nav.Link> 
            <Nav.Link href="#">Resources</Nav.Link>
        </Nav>
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Navig