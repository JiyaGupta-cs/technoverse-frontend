import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
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
            <img className='foot-logo' src={kietlogo} alt="" />
            <img className='foot-logo2' src={logo} alt="" />
          </div>

          <div class="social">
            <a href="https://www.instagram.com/technocrats.kiet/"><i class="icon ion-social-instagram"></i></a>
            <a href="#"><i class="icon bi bi-discord"></i></a>
            <a href="https://twitter.com/Technocrats_?t=lzevmiGsTKuZHYumdZkKIA&s=08"><i class="icon ion-social-twitter"></i></a>
            <a href="https://www.linkedin.com/company/technocrats-kiet/"><i class="icon ion-social-linkedin"></i></a>
            <a href="https://technocrats.live/"><i class="bi bi-globe"></i></a>
          </div>
          <p class="copyright">© 2024 TechnoVerse - All Rights Reserved</p>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>


    </div>
  )
}

export default Footer
