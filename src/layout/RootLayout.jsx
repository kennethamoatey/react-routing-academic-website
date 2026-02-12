import React from 'react'
import Container from 'react-bootstrap/Container'


import  {Outlet} from 'react-router-dom'

const RootLayout = () => {
  return (
    <Container className="App" fluid>
      
     
      <div className="body">
        <Outlet/>
      </div>
      

      
       
      
    </Container>
   
  )
}

export default RootLayout