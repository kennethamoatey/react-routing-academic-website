import React from 'react'
import NavComponent from '../component/NavComponent';

import CarouselComponent from '../component/CarouselComponent'
import {Container,Row,Col,Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Programmes = () => {

  const navigate=useNavigate();

  return (
  <div>
    <div className="navPosition">
       <NavComponent /> 
         
     </div>
     <CarouselComponent  text='Advance Technical College Academic Programmes' note='Explore our comprehensive range of
       undergraduate, postgraduate, and certificate programs designed to prepare you for successful
        careers in mining, technology, and related fields.' />

    <Container fluid className='programme-container'>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
        <Form.Control type="search" placeholder="Search Programmes" />
      </Form.Group>
          </Form>
        </Col>
      </Row>
      <div className="courseButton">
        <button className='buttons one'onClick={()=>navigate('Undergraduate')}>
          Undergraduate
        </button>

        <button className='buttons two' onClick={()=>navigate('Postgraduate')}>
          Postgraduate
        </button>

        <button className='buttons three'onClick={()=>navigate('Certificate')}>
          Certificate
        </button>
      </div>
      
      
    </Container >
    
  </div>
    
  )
}

export default Programmes;