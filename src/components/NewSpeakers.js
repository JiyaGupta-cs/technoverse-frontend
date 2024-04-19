import React from 'react'
import './NewSpeakers.css'
import akshay from '../Assets/akshaysaini.png'
import Supriyapurohit from '../Assets/Supriyapurohit2.png'
import keertipurswani from '../Assets/keertipurswani.png'

const NewSpeakers = () => {
    return (
        <div id='xsponsors' className='xsponsors font-syne'>
            <h1 class="xsponsor-heading text-center">Speakers</h1>
            <div className="xsponsor-cards">
                <div class="xcard">
                    {/* <p style={{ fontSize: "80px" }}>⏳</p> */}
                    <img className='s-img'  src={akshay} alt="" />
                    <p class="xheading">
                        Akshay Saini
                    </p>
                    <p>Namaste Dev, Founder
                    </p>
                    <div className="icon flex gap-5">
                        <a href="https://www.linkedin.com/in/akshaymarch7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'>
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        </a>                        

                        <a href="https://twitter.com/akshaymarch7" target='_blank'>
                        <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fH0Xv1smcTf_BF9X62XnrDo7ZpDXJJvN87bjv_st3A&s" alt="" />
                        </a>

                        <a href="https://www.instagram.com/akshaymarch7/?igsh=MTl2bTEwZmx6b3oxbg%3D%3D" target='_blank'>
                        <img width={'30px'} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="" /></a>
                    </div>
                    </div>
                    <div class="xcard">
                    {/* <p style={{ fontSize: "80px" }}>⏳</p> */}
                    <img className='s-img'  src={keertipurswani} alt="" />
                    <p class="xheading">
                    Keerti Purswani
                    </p>
                    <p>Educosys , Founder
                    </p>
                    <div className="icon flex gap-5">
                    <a href="https://www.linkedin.com/in/keertipurswani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'>
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        </a>                        

                        <a href="https://twitter.com/KeertiPurswani" target='_blank'>
                        <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fH0Xv1smcTf_BF9X62XnrDo7ZpDXJJvN87bjv_st3A&s" alt="" />
                        </a>

                        <a href="https://www.instagram.com/keerti.purswani/?igsh=bGwwZmU3OTQ5cXJx" target='_blank'>
                        <img width={'30px'} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="" /></a>
                    </div>
                    </div>
                    <div class="xcard">
                    {/* <p style={{ fontSize: "80px" }}>⏳</p> */}

                    <img className='s-img'  src={Supriyapurohit} alt="" />
                    <p class="xheading">
                    Supriya Purohit
                    </p>
                    <p>Product manager, ex- Flipkart
                    </p>
                    <div className="icon flex gap-5">
                    <a href="https://www.linkedin.com/in/supriyapurohit27/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'>
                        <img width={'30px'} src="https://static-00.iconduck.com/assets.00/linkedin-icon-256x256-i5hp0ntv.png" alt="" />
                        </a>                        

                        <a href="https://twitter.com/SupriyaPurohitt" target='_blank'>
                        <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fH0Xv1smcTf_BF9X62XnrDo7ZpDXJJvN87bjv_st3A&s" alt="" />
                        </a>

                        <a href="https://www.instagram.com/supriyapurohittt/?igsh=eWRqNWd1Z3dpaTg3" target='_blank'>
                        <img width={'30px'} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="" /></a>
                    </div>
                    </div>
                
           
           
            </div>
        </div>
    )
}

export default NewSpeakers
