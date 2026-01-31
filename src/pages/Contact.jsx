import React from 'react'
import CarouselComponent from '../component/CarouselComponent'
import {Container,Row,Col} from 'react-bootstrap'


const Contact = () => {
  return (<div>
    <CarouselComponent text='Contact Us'
    note='Get in touch with our admission team for undergraduate and postgraduate inquiries' />
   

    <Container className='contact'>
      <Row>
        <Col className='atc-contact'>
        <h3>Undergraduate Admissions</h3>
        <ul>
          <li>
            <h6>
              Email
            </h6>
             admissions@atc.edu.gh
          </li>
          </ul>

          <ul>
          <li>
            <h6>
              Phone
            </h6>
             0257997339
             
          </li>
        </ul>

        <ul>
          <li>
            <h6>
              Office Hours
            </h6>
             Monday-Friday <br/>
             8:00AM-5:00PM
          </li>
          </ul>
        </Col>
        <Col className='atc-contact'>
        <h3>Postgraduate Admissions</h3>
        <ul>
          <li>
            <h6>
              Email
            </h6>
             sps@atc.edu.gh
          </li>
          </ul>

          <ul>
          <li>
            <h6>
              Phone
            </h6>
            053 110 0305
          </li>
        </ul>

        <ul>
          <li>
            <h6>
              Office Hours
            </h6>
             Monday-Friday <br/>
             8:00AM-5:00PM
          </li>
          </ul>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Contact