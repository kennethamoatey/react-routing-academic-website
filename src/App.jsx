import React from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Form from './pages/Form'
import RootLayout from  './layout/RootLayout'
import ProgrammesLayout from './layout/ProgrammesLayout';
import Undergraduate from './component/Undergraduate';
import Postgraduate from './component/Postgraduate';
import Certificate from './component/Certificate';
import Error from './pages/Error'


import { createBrowserRouter, createRoutesFromElements,Route,
   RouterProvider } from 'react-router-dom';

const App = () => {

  const router=createBrowserRouter(
    
    createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
      <Route index element={<Home/>}/>
      <Route path='Programmes' element={<ProgrammesLayout/>}>
        <Route path='Undergraduate' element={<Undergraduate/>} />
        <Route path='Postgraduate' element={<Postgraduate/>} />
        <Route path='Certificate' element={<Certificate/>} />
      </Route>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Form' element={<Form/>} />
      <Route path='*' element={<Error/>} />,
    </Route>
    
  ))
  return (<div>
    <RouterProvider router={router}/>
  </div>
   
        
       

     
  )
}

export default App;