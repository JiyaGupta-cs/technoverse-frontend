import React from 'react'
import './Footer.css'
import innogeeks from '../Assets/innogeeks.png'
import kietlogo from '../Assets/kietlogo.png'

const Footer = () => {
  return (
    <div>

       {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" /> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
     {/* <link rel="stylesheet" href="assets/css/style.css" /> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>

      
        <div class="footer-basic">
          <footer>
    <div className="footer-logos">          
    <img className='foot-logo' src={innogeeks} alt="" /> 
      <img className='foot-logo' src={kietlogo} alt="" />     
      <img className='foot-logo' src={innogeeks} alt="" />
    </div>

            <div class="social">
              <a href="#"><i class="icon ion-social-instagram"></i></a>
              <a href="#"><i class="icon bi bi-discord"></i></a>
              <a href="#"><i class="icon ion-social-twitter"></i></a>
              <a href="#"><i class="icon ion-social-linkedin"></i></a>
              <a href="#"><i class="bi bi-globe"></i></a>
            </div>
            {/* <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul> */}
            <p class="copyright">© 2023 InnoHacks - All Rights Reserved</p>
          </footer>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      

    </div>
  )
}

export default Footer
