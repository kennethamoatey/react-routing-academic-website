import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Container fluid>

        <Row className="footerTwo">
          <Col>
          <h5>ATC</h5>
          <h6>Advance Techincal College, Tarkwa</h6>
          <h6>Ghana's premier mining and technology university.</h6>
          </Col>
          <Col>
          <h5>Quick Links</h5>
          <NavLink><p>Admission Portal</p></NavLink>
          <NavLink><p>University Website</p></NavLink>
          <NavLink><p>Programs</p></NavLink>
          <p><NavLink>Campus Life</NavLink></p>
          </Col>
          <Col>
          <h5>Contact Us</h5>
          <h6 className='admission'>Undergraduate Admissions</h6>
          <p>Email: admissions@atc.edu.gh</p>
          <p>Phone: 0257997339</p>
          <p>Phone: 0332097781</p>
          <h6 className='admission'>Postgraduate Admissions</h6>
          <p>Email: sps@atc.edu.gh</p>
          <p>Phone: 053 110 0305</p>
          <p>Address: Advance Technical College, Tarkwa, Ghana</p>
          <p>Website: www.atc.edu.gh</p>
          </Col>
          <Col>
          <h5>Follow Us</h5>
          <Link><h6>Facebook</h6></Link>
          <Link><h6>Twitter</h6></Link>
          <Link><h6>LinkedIn</h6></Link>
          <Link><h6>Instagram</h6></Link>
          </Col>
        </Row>
        <Row  >
          <Col className='copyRight justify-content-center align-items-center d-flex'> 

          <p >&copy; 2026 Advance Technical College. All rights reserved.</p>
          </Col>
        </Row>
    </Container>

   
  )
}

export default Footer