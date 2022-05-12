import React from 'react'
import './stats.scss'
import {Container, Card, Row, Col} from 'react-bootstrap'
import recog from '../img/icon-brand-recognition.svg'
import det from '../img/icon-detailed-records.svg'
import cust from '../img/icon-fully-customizable.svg'


function Stats() {
  return (
    <main>
        <section className="stats my-5 px-5 container py-3">
        <div className="mx-auto">
            <div className="top mx-auto text-center w-50">
              <h1>Advanced Statistics</h1>
              <p className="text-muted">
                Track how your links are performing across the web with
                our advanced statistics dashboards
              </p>
            </div>

            <Container fluid>
            <Row className="position-relative text-center w-100 mt-5 mx-0 p-0">
            <hr className="position-absolute bg-primary top-50" style={{height: 8+'px'}} />

              <Col sm={4} className='m-0 p-0'>
              <Card className="bg-light h-100 px-3 py-5 mx-0">
                <div className="img-holder py-0 my-0 mx-sm-0 mx-auto">
                <img src={recog} className="alg rounded-circle p-3" alt="" />
                </div>
                <Card.Title>Brand Recognition</Card.Title>
                <Card.Text>
                <span className="text-secondary">
                Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.
                </span>
                </Card.Text>
              </Card>
              </Col>

              <Col sm={4} className='m-0 p-0'>
              <Card className="bg-light h-100 px-3 py-5 mx-0 mt-3">
                <div className="img-holder py-0 my-0 mx-sm-0 mx-auto">
                <img src={det} className="alg rounded-circle p-3" alt="" />
                </div>
                <Card.Title>Detailed Records</Card.Title>
                <Card.Text>
                <span className="text-secondary">
                Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
                </span>
                </Card.Text>
              </Card>
              </Col>

              <Col sm={4} className='m-0 p-0'>
              <Card className="bg-light h-100 px-3 py-5 mx-0 mt-5">
                <div className="img-holder py-0 my-0 mx-sm-0 mx-auto">
                <img src={cust} className="alg rounded-circle p-3" alt="" />
                </div>
                <Card.Title>Fully customizable</Card.Title>
                <Card.Text>
                <span className="text-secondary">
                Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.
                </span>
                </Card.Text>
              </Card>
              </Col>

            </Row>
            </Container>
        </div>
        </section>
    </main>
  )
}

export default Stats