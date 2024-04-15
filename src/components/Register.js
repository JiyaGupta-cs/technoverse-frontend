import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='register'>
      <form class="r-form">
    <input class="r-input" type="text" placeholder="Name"/>
    <input class="r-input" type="text" placeholder="E-Mail I.D."/>
    <textarea class="r-textarea" placeholder="Enter message"></textarea> 
    <center><button class="r-button">Submit</button></center>
</form>
    </div>
  )
}

export default Register
