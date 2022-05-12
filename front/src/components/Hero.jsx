import React from 'react'
import {Image, Button, Form} from 'react-bootstrap'
import big from '../img/illustration-working.svg'
import bg from '../img/bg-shorten-desktop.svg'
import './hero.scss'

function Hero() {
  return (
    <main className='container py-1'>
        <section className='d-flex w-100 flex-md-row flex-column-reverse p-2 px-sm-0 h-25 align-items-center'>
          <div className="word mt-4 w-75 fw-bold">
              <h1 className="display-2">More than just shorter links</h1>
              <p className="lead">
                  Build your brand’s recognition and get detailed insights 
                  on how your links are performing.
              </p>
              <Button size='large' className='rounded-pill mt-4'>Get Started</Button>
          </div>
          <Image src={big} className='w-75' fluid />
        </section>
        
        <section className="position-absolute top-10 btn has-bg-img btn-lg">
          <Form.Group>
            <Form.Control type="url" />
          </Form.Group>
          <img src={bg} className='bg-img' alt="" /> 
        </section>
    </main>
  )
}

export default Hero