import { useState } from 'react'
import './App.scss'
import {Stats, Dsp} from './components'
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <div>
      <Outlet />
      <Stats />
      <Dsp />
    </div>
  )
}

export default App
