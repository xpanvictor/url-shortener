import React from 'react'
import { Link } from 'react-router-dom'
import {Button,} from 'react-bootstrap'

export function Gs() {
  return (
    <Link to='join'><Button size='large' className='rounded-pill mt-4 px-5'>Get Started</Button></Link>
  )
}
