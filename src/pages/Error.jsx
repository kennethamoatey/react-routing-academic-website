import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate=useNavigate()
  return (<div className="errorpage">
        <h1 className='oops '>Oops!</h1>
        <h2 className='errorheading'>That Page Does not Exist</h2>
        <p className='errormessage'>We couldn't find the page you're looking for.</p>
        <button className='errorbutton' onClick={()=>navigate('/')}>Back to Home Page</button>
    </div>
  )
}

export default Error