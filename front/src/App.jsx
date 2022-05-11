import { useState } from 'react'
import './App.scss'
import {Navig, Hero} from './components'
import {Container} from 'react-bootstrap'


function App() {

  return (
    <Container className='App'>
      <Navig></Navig>
      <Hero />
  </Container>
  )
}

export default App
