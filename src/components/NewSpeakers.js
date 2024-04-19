import React from 'react'
import './NewSpeakers.css'
import akshay from '../Assets/akshaysaini.png'
import Supriyapurohit from '../Assets/Supriyapurohit2.png'
import keertipurswani from '../Assets/keertipurswani.png'

const NewSpeakers = () => {
    return (
        <div id='xsponsors' className='xsponsors'>
            <h1 class="xsponsor-heading text-center">Speakers</h1>
            <div className="xsponsor-cards">
                <div class="xcard">
                    {/* <p style={{ fontSize: "80px" }}>⏳</p> */}
                    <img className='s-img'  src={akshay} alt="" />
                    <p class="heading">
                        Akshay Saini
                    </p>
                    <p>Associate Sponsor
                    </p>
                    <div className="icon flex gap-5">
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                    </div>
                    </div>
                    <div class="xcard">
                    {/* <p style={{ fontSize: "80px" }}>⏳</p> */}
                    <img className='s-img'  src={keertipurswani} alt="" />
                    <p class="heading">
                    Keerti Purswani
                    </p>
                    <p>Associate Sponsor
                    </p>
                    <div className="icon flex gap-5">
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                    </div>
                    </div>
                    <div class="xcard">
                    {/* <p style={{ fontSize: "80px" }}>⏳</p> */}
                    <img className='s-img'  src={Supriyapurohit} alt="" />
                    <p class="heading">
                    Supriya Purohit
                    </p>
                    <p>Associate Sponsor
                    </p>
                    <div className="icon flex gap-5">
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                    </div>
                    </div>
                
           
           
            </div>
        </div>
    )
}

export default NewSpeakers
