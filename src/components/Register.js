import React from 'react'
import './Register.css'
import Viewer from './Viewer'
import sample from '../Assets/sample2.mp4';
import technoverse from '../Assets/technoverse.png'
import Footer from './Footer';
import Navbar from './Navbar';

const Register = () => {
    return (<>
        <video id="background-video" autoPlay loop muted>
            <source src={sample} type="video/mp4" />
        </video>
        <Navbar/>
        <div className='register'>
            <form class="r-form">
                <img src={technoverse} width={'300px'} style={{marginBottom:'2rem'}} alt="" />
                <input class="r-input" type="text" placeholder="Name" />
                <input class="r-input" type="text" placeholder="Branch" />
                <input class="r-input" type="text" placeholder="Year" />
                <input class="r-input" type="text" placeholder="Phone Number" />
                <input class="r-input" type="text" placeholder="E-Mail I.D." />
                {/* <textarea class="r-textarea" placeholder="Enter message"></textarea>  */}
                <center><button class="r-button">Register</button></center>
            </form>
            <div className="box">
            <div className='my-viewer'>
                <Viewer />
            </div></div>
        </div>
        <Footer/>
        </>
    )
}

export default Register
