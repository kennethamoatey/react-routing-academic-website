import React from 'react'
import download from '../assets/download2.png'
import{Container,Row,Col} from 'react-bootstrap'

import {NavLink, useNavigate} from 'react-router-dom'


const NavComponent = () => {
  const Navigate=useNavigate()
  return (
    <Container className='navbar' fluid>
      <Row>
        <Col>
          <img src={download} alt='' height='100px'width='180px'/>
        </Col>
      </Row>

      <Row>
        <Col>
           <ul>
        
        <NavLink to='/' ><li>Home</li></NavLink>
        <NavLink to='Programmes' ><li>Programmes</li></NavLink>
        <NavLink to='Contact' ><li>Contact Us</li></NavLink>
        
      </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <button className='Button' onClick={()=>{Navigate('/Form')}}  >Apply Now</button>
        </Col>
      </Row>
     
       
      
     
      
      
      
     
    </Container>
  )
}

export default NavComponent