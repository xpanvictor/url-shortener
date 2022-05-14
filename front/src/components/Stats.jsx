import React from 'react'
import './stats.scss'
import {Container, Card, Row} from 'react-bootstrap'
import recog from '../img/icon-brand-recognition.svg'
import det from '../img/icon-detailed-records.svg'
import cust from '../img/icon-fully-customizable.svg'


function Stats() {
  return (
    <Container className='vh-auto h-100 mt-2 mb-4 pt-0 pb-5'>
        <section className="stats my-2 px-0 py-2 pb-3">
        <div className="mx-auto">
            <div className="mx-auto mt-0 py-5 text-center w-50">
              <h1>Advanced Statistics</h1>
              <p className="text-muted my-3">
                Track how your links are performing across the web with
                our advanced statistics dashboards
              </p>
            </div>

            
            <Row className="row w-auto position-relative mx-2 mt-5 mb-4 gap-5 gap-md-3">
            <hr className="position-absolute w-md-100 bg-primary top-50 top-md-50" style={{height: 8+'px'}} />
                <div className="col-md p-0 ">
                    <Card className="bg-light h-100 px-3 py-5 mx-0">
                    <div className="img-holder py-0 my-0 mx-md-0 mx-auto">
                    <img src={recog} className="alg rounded-circle p-3" alt="" />
                    </div>
                    <Card.Body className='text-center'>
                    <Card.Title>Brand Recognition</Card.Title>
                    <Card.Text>
                    <span className="text-secondary">
                    Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.
                    </span>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-md p-0 ">
                    <Card className="bg-light h-100 px-3 py-5 mx-0 mt-0 mt-md-3">
                    <div className="img-holder py-0 my-0 mx-md-0 mx-auto">
                    <img src={det} className="alg rounded-circle p-3" alt="" />
                    </div>
                    <Card.Body className='text-center'>
                    <Card.Title>Detailed Records</Card.Title>
                    <Card.Text>
                    <span className="text-secondary">
                    Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.
                    </span>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-md p-0 ">
                    <Card className="bg-light h-100 px-3 py-5 mx-0 mt-0 mt-md-5">
                    <div className="img-holder py-0 my-0 mx-md-0 mx-auto">
                    <img src={cust} className="alg rounded-circle p-3" alt="" />
                    </div>
                    <Card.Body className='text-center'>
                    <Card.Title>Fully customizable</Card.Title>
                    <Card.Text>
                    <span className="text-secondary">
                    Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.
                    </span>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            </Row>
            
        </div>
        </section>
    </Container>
  )
}

export default Stats