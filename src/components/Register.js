import React from 'react'
import './Register.css'
import Viewer from './Viewer'

const Register = () => {
  return (
    <div className='register'>
      <form class="r-form">
    <input class="r-input" type="text" placeholder="Name"/>
    <input class="r-input" type="text" placeholder="Branch"/>
    <input class="r-input" type="text" placeholder="Year"/>
    <input class="r-input" type="text" placeholder="Phone Number"/>
    <input class="r-input" type="text" placeholder="E-Mail I.D."/>
    {/* <textarea class="r-textarea" placeholder="Enter message"></textarea>  */}
    <center><button class="r-button">Submit</button></center>
</form>
<div className='my-viewer'>
<Viewer/>
</div>
    </div>
  )
}

export default Register
