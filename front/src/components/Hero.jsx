import React from 'react'
import {Image} from 'react-bootstrap'
import big from '../img/illustration-working.svg'
import './hero.scss'
import {Gs} from './comps'

function Hero() {
  return (
    <main className='container vh-75 py-3 py-md-5 my-0 my-md-5 px-0'>
        <section className='d-flex w-100 flex-md-row flex-column-reverse p-2 px-sm-0 h-25 align-items-center'>
          <div className="word mt-4 w-75 fw-bold">
              <h1 className="display-2 mb-4">More than just shorter links</h1>
              <p className="lead mt-3">
                  Build your brand’s recognition and get detailed insights 
                  on how your links are performing.
              </p>
              <Gs />
          </div>
          <Image src={big} className='w-100' fluid />
        </section>
    </main>
  )
}

export default Hero