import React from 'react'
import { Container, Navbar, Form, FormControl, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'

function Admin() {
  let user = useParams()
  return (
    <Container>
        <h1>Welcome admin {user.username}</h1>
    </Container>
  )
}

export default Admin