import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Navig, Login, Hero, Admin, Footer} from './components'
import './index.css'

function NotFound(){
  const location = useLocation()
  return (
    <div className='container p-4 vh-75'>
      <h1>The page "{location.pathname}" has been eaten by bugs</h1>
      <p>However, you can always return to <Link to='/'>Home page</Link></p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <body className='App min-vh-100 d-flex flex-column'>
      <Navig />
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Hero />} />
          <Route path='join' element={<Login />} />
        </Route>
        <Route path='/user/:username' element={<Admin />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
      </body>
    </BrowserRouter>
  </React.StrictMode>
)
