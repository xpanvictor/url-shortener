import { useState } from 'react'
import './App.scss'
import {Navig, Hero} from './components'
import {Container} from 'react-bootstrap'


function App() {

  return (
    <div className='App'>
      <Navig />
      <Hero />
  </div>
  )
}

export default App
