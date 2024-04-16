import React, { useEffect, useState } from "react";
import "./Register.css";
import Viewer from "./Viewer";
import sample from "../Assets/sample2.mp4";
import technoverse from "../Assets/technoverse.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Register = () => {
  const [select, setselect] = useState(false);
  useEffect(() => {
    console.log(select);
  });
  // console.log(select);
  return (
    <>
      <video id="background-video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <Navbar />
      <div className="register w-full h-full">
        <form class="r-form">
          <img
            src={technoverse}
            width={"300px"}
            style={{ marginBottom: "2rem" }}
            alt=""
          />
          <input class="r-input" type="text" placeholder="Name" />
          <input class="r-input" type="text" placeholder="Branch" />
          <input class="r-input" type="text" placeholder="Year" />
          <input class="r-input" type="text" placeholder="Phone Number" />
          <input class="r-input" type="text" placeholder="E-Mail I.D." />
          <div className="r-input">College name ?</div>

          <label>
            <input
              className="r-input"
              type="radio"
              name="options"
              onChange={() => setselect(false)}
            />
            KIET
          </label>
          <label>
            {" "}
            <input
              className="r-input"
              type="radio"
              name="options"
              onChange={() => setselect(true)}
            />
            Other
          </label>

          {select && (
            <div className="flex flex-col ">
              <input type="text" placeholder="Enter college name" />
              <input type="text" placeholder="Enter your house no " />
              <img src="" alt="payment qr logo " />
            </div>
          )}

          <center>
            <button class="r-button">Register</button>
          </center>
        </form>
        <div className="box">
          <div className="my-viewer">
            <Viewer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
