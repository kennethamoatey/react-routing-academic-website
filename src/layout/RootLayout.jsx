import React from 'react'
import NavComponent from '../component/NavComponent'
import Footer from '../component/Footer'
import Container from 'react-bootstrap/Container'


import  {Outlet} from 'react-router-dom'

const RootLayout = () => {
  return (
    <Container className="App" fluid>
      
     <div className="navPosition">
       <NavComponent /> 
         
     </div>
      <div className="body">
        <Outlet/>
      </div>
      

      <Footer/>
       
      
    </Container>
   
  )
}

export default RootLayout