import React,{useState} from 'react'
import download from '../assets/download2.png'

const Form = () => {
 
  const [formData,setFormData]=useState('');
  const [formPassword,setFormPassword]=useState('');

  const handleFormData=(event)=>{
    setFormData(event.target.value);
  }
  const handleFormPassword=(event)=>{
    setFormPassword(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault()

    setFormData('');
    setFormPassword('');
  }
    
  return (
    <div className='formpage' onSubmit={handleSubmit}>
        <div className="formimage">
          <img src={download} alt="" height='170px' width='230px' />
        </div>
        <h1>Signin into your account</h1>
        <p>Or start your application.</p>
        <form className='form'> 
          <p>For the best experience, please use a PC with one of the following browsers:
             Google Chrome, Microsoft Edge, Opera mini or Brave.
          </p>
          <label>Form Reference Number</label><br/>
          <input type='text' placeholder='' value={formData} onChange={handleFormData} /><br/>
          <label>Password</label><br/>
          <input type='password' placeholder='' value={formPassword} onChange={handleFormPassword} /><br/>
          <button>Sign in</button>
        </form>
        
    </div>
    
  )
}

export default Form