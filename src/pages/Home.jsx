import React from 'react'
import CarouselComponent from '../component/CarouselComponent'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../component/Footer';
import NavComponent from '../component/NavComponent';



const Home = () => {
  const Navigate=useNavigate()
  
  return (
  <div>
    <div className="navPosition">
           <NavComponent /> 
             
         </div>

     <CarouselComponent text='Advance Technical College Application Portal'
     note='Apply for admission to Ghana premier University College.'/>
     <div className='button-group'>
      <button className='button' onClick={()=>{Navigate('/Form')}} >Log In </button>
     </div>
     
     <Container fluid >
      <Row>
        <Col>
        <h2 className='process' >Application Process</h2>
        </Col>
      </Row>

      <Row>
        <Col className="stepOne"md={5}>
        <h2 className="stepTitle">Purchase Voucher</h2>
        <p className="step">Purchase an application voucher from designated banks or our online platform.</p>
        </Col>
        <Col className="number" md={1}>
        <h2>1</h2>
        </Col>
        <Col md={5}>

        </Col>
      </Row>


      <Row>
        <Col md={5}>

        </Col>
         <Col className="number" md={1}>
        <h2 style={{justifySelf:'end'}}>2</h2>
        </Col>
        <Col className="stepOne"md={5}>
        <h2 className="stepTitle">Login to your Account</h2>
        <p className="step">Login to your account to get started with your application.</p>
        </Col>
      </Row>

      <Row>
        <Col className="stepOne"md={5}>
        <h2 className="stepTitle">Complete Application</h2>
        <p className="step">Fill in your academic history, upload documents, and select your preferred programs.</p>
        </Col>
        <Col className="number" md={1}>
        <h2>3</h2>
        </Col>
        <Col md={5}>
        
        </Col>
      </Row>
      <Row className='homeFooter'>
        <Col md={5}>
        
        </Col>
        <Col className="number" md={1} >
        <h2 style={{justifySelf:'end'}}>4</h2>
        </Col>
        <Col className="stepOne" md={5}>
        <h2 className="stepTitle">Track Your Application</h2>
        <p className="step">Login anytime to check your application status and admission results.</p>
        </Col>

      </Row>

      <Row >
                  <Col className="footerOne">
                  <h1>Ready to Begin Your Journey?</h1>
                  <h3>Take the first step towards your career in mining and technology. Start your application today.</h3>
                  <button className="button" onClick={()=>Navigate('Form')} >Log In</button>
                  </Col>
              </Row>


     </Container>

     <Footer/>
     
      
    </div>
  )
}

export default Home