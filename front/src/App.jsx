import { useState } from 'react'
import './App.scss'
import {Navig, Hero, Stats, Footer, Dsp} from './components'


function App() {

  return (
    <div className='App'>
      <Navig />
      <Hero />
      <Stats />
      <Dsp />
      <Footer />
  </div>
  )
}

export default App
