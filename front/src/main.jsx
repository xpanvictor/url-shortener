import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Navig, Hero, Footer} from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navig />
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Hero />} />
          <Route path='join' element={<hr />} />
        </Route>
        <Route path='/' element={<h1>Hello world</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
