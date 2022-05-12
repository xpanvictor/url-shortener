import React from 'react'
import { Container, Navbar, NavDropdown, Form, FormControl, Nav, Row, Col, Button } from 'react-bootstrap';


function Navig() {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand className='pd fw-normal' href="#">URL shvtnr</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
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