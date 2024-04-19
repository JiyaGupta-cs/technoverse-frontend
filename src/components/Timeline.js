import React from "react";
import "./Timeline.css";
import "./Card.scss";
import akshay from "../Assets/akshaysaini.png";
import supriya from "../Assets/supriya.JPG";
import kriti from "../Assets/keertipurswani.png";
import goodies from "../Assets/goodies.jpg";
import insta from "../Assets/insta.png";
import link from "../Assets/linkedin.png";

const Timeline = () => {
  return (
    <div className="overflow-hidden ">
      <h1 class="sponsor-heading text-center">Speakers</h1>

      <div class="container">
        <div class="timeline">



          <div class="timeline-row">
            <div class="timeline-time ">Speaker Session 1</div>
            <div class="timeline-content">
              <Card image={akshay} />
            </div>
            <div className="flex justify-center text-white text-center lg:justify-center gap-10 mt-5 mb-10 ">
              <a
                href="https://www.linkedin.com/in/akshaymarch7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                {" "}
                <div className="w-12 lg:w-16">
                  <img src={link} />
                </div>{" "}
              </a>
              <a
                href="https://www.instagram.com/akshaymarch7?igsh=MTl2bTEwZmx6b3oxbg=="
                target="_blank"
              >
                {" "}
                <div className="w-12 lg:w-16">
                  <img src={insta} />
                </div>
              </a>
            </div>
          </div>

          <div class="timeline-row">
            <div class="timeline-time">Speaker Session 2</div>
            <div class="timeline-content">
              <Card image={kriti} />
            </div>
            <div className="flex justify-center text-white text-center lg:justify-center gap-10 mt-5 mb-10 ">
              <a
                href="https://www.linkedin.com/in/keertipurswani?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                {" "}
                <div className="w-12 lg:w-16">
                  <img src={link} />
                </div>
              </a>
              <a
                href="https://www.instagram.com/keerti.purswani?igsh=bGwwZmU3OTQ5cXJx"
                target="_blank"
              >
                {" "}
                <div className="w-12 lg:w-16">
                  <img src={insta} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div class="timeline-row">
        <div class="timeline-time">Speaker Session 3</div>
        <div class="timeline-content">
          <Card image={supriya} />
        </div>
        <div className="flex justify-center text-white text-center lg:justify-center gap-10 mt-5 mb-10 w-screen ">
          <a
            href="https://www.linkedin.com/in/supriyapurohit27?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            {" "}
            <div className="w-12 lg:w-16">
              <img src={link} />
            </div>
          </a>
          <a
            href="https://www.instagram.com/supriyapurohittt?igsh=eWRqNWd1Z3dpaTg3"
            target="_blank"
          >
            {" "}
            <div className="w-12 lg:w-16">
              <img src={insta} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, name }) => {
  return (
    <div className="">
      <p class="browser-warning">
        If this looks wonky to you it's because this browser doesn't support the
        CSS property 'aspect-ratio'.
      </p>
      <div class="stack">
        <div class="card">
          <div class="image">
            <img src={image} alt="name" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
