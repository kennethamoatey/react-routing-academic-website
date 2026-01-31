import React from 'react'
import Programmes from '../pages/Programmes'
import {Outlet} from 'react-router-dom'

const ProgrammesLayout = () => {
  return (
    <div>
        <Programmes/>
        <Outlet/>
    </div>
  )
}

export default ProgrammesLayout