import React from 'react'
import {Card, Row} from 'react-bootstrap'


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
            <Row className="position-relative gap-4">
            <hr className="position-absolute bg-primary top-50" style={{height: 8+'px'}} />
              <Card className="col-sm bg-light h-50 px-3 py-5">
                <img src="" className="card-image" alt="" />
                <Card.Title>Brand Recognition</Card.Title>
                <Card.Text>
                <span className="text-secondary">
                Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.
                </span>
                </Card.Text>
              </Card>

              <Card className="col-sm bg-light h-50 px-3 py-5 mt-4">
                <Card.Title>Detailed Records</Card.Title>
                <Card.Text>
                <span className="text-secondary">
                Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
                </span>
                </Card.Text>
              </Card>

              <Card className="col-sm bg-light h-50 px-3 py-5 mt-5">
                <Card.Title>Fully customizable</Card.Title>
                <Card.Text>
                <span className="text-secondary">
                Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
                </span>
                </Card.Text>
              </Card>
            </Row>
          </div>
        </section>
    </main>
  )
}

export default Stats