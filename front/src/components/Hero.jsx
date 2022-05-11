import React from 'react'
import {Image} from 'react-bootstrap'

function Hero() {
  return (
    <main>
        <div className="show mt-4">
            <h1>More than just shorter links</h1>
            <p class="lead">
                Build your brand’s recognition and get detailed insights 
                on how your links are performing.
            </p>
        </div>
        <Image src='../img/illustration-working.svg' />
    </main>
  )
}

export default Hero