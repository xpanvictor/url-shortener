import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <footer className='footer-bs mt-auto vh-75 text-light px-5 bg-dark'>
        <Container className='py-5 text-center text-sm-start'>
        <Row gap={1}>
            <Col sm={4}>
                <div className="h2 footer-brand animated fadeInLeft">URL SHVTNR</div>
                <p>copyright xpan 2022, All rights reserved</p>
            </Col>

            <Col sm={2}>
                <h5>Features</h5>
                <ul className='list-unstyled text-secondary'>
                    <li>Link sharing</li>
                    <li>Branded link</li>
                    <li>Analytics</li>
                </ul>
            </Col>
            <Col sm={2}>
                <h5>Resources</h5>
                <ul className='list-unstyled text-secondary'>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </Col>
            <Col sm={2}>
                <h5>Company</h5>
                <ul className='list-unstyled text-secondary'>
                    <li>About</li>
                    <li>Our team</li>
                    <li>Contact</li>
                </ul>
            </Col>

            <Col sm={2}>
                <i className="bi bi-facebook">f</i>
                <i className="bi bi-facebook">t</i>
                <i className="bi bi-facebook">w</i>
                <i className="bi bi-facebook">g</i>
            </Col>
        </Row>

        </Container>
    </footer>
  )
}

export default Footer