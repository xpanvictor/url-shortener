import React, {useState, useRef} from 'react'
import { Container, Form, ButtonGroup, Button } from 'react-bootstrap';


function Login() {

  const [user, setUser] = useState({})
  const [reg, setReg] = useState(false)
  const [validated, setValidated] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  const validator = (e) => {
      const form = e.currentTarget
      return form.checkValidity()
  }

  const handleChange = (e) => {
    user[e.target.name] = e.target.value
    setValidated(validator(e))
    setUser(user)
  }
  
  return (
    <Container className='w-50 text-center p-3 py-5 border border-primary'>
        <ButtonGroup>
            <Button variant='outline-primary' active={reg} onClick={()=>setReg(true)}>Register</Button>
            <Button variant='outline-primary' active={!reg} onClick={()=>setReg(false)}>Login</Button>
        </ButtonGroup>
        <Form className='mt-4' validated={validated} id='lon' action='/la' onSubmit={handleSubmit} >
        {(!reg) ? <Logen handleChange={handleChange} user={user} /> : <Register handleChange={handleChange} user={user} />}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
  )
}

function Logen({handleChange, user}){
    return (
        <Container>
            <Form.Group className='mb-3' controlId='fEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control value={user.email} type='email' onChange={handleChange} placeholder='shvtnr@email.xy' name='email' />
                <Form.Control.Feedback>Good</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" name='pw' onChange={handleChange} placeholder="Password" />
                <Form.Control.Feedback type='invalid'>Password is required</Form.Control.Feedback>
            </Form.Group>
        </Container>
    )
}
function Register({handleChange, user}){
    return (
        <Container>
            <Form.Group className='mb-3' controlId='fEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control value={user.email} type='email' onChange={handleChange} placeholder='shvtnr@email.xy' name='email' />
                <Form.Control.Feedback>Good</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" name='pw' onChange={handleChange} placeholder="Password" />
                <Form.Control.Feedback type='invalid'>Password is required</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type="password" name='pw' onChange={handleChange} placeholder="Confirm Password" />
            </Form.Group>
        </Container>
    )
}

export default Login