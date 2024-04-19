import React from "react";
import "./HomeBanner.css";
import inno from "../Assets/techno.png";
import _3_img from "../Assets/_3_img.png";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="HomeBanner">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap"
        rel="stylesheet"
      />

      <div className="banner-innohack5">
        <div className="innohack">
          <img className="inno" src={inno} alt="" />
          {/* <img className='hack' src="https://res.cloudinary.com/dzxgf75bh/image/upload/v1702201459/HackNitr/Hero%20Section/kgjxmevu0bvj4yn7ojfy.gif" alt="" /> */}

          <div class="container">
            <div class="background-color">
              <p>Verse</p>
            </div>
          </div>
        </div>
        {/* <div className="_5">
<img  className="_5-img" src={_3_img} alt="" />
</div> */}
      </div>
      <div className="text-white text-2xl text-center font-syne">
        Where Ideas and Tech Collide for limitless possiblities{" "}
      </div>
      <Link to="/register">
        <div className="banner-btn">
          <button class="btn" type="button">
            <strong>REGISTER</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default HomeBanner;
