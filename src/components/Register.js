import React, { useEffect, useState } from "react";
import "./Register.css";
import Viewer from "./Viewer";
import sample from "../Assets/sample2.mp4";
import technoverse from "../Assets/technoverse.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Register = () => {
  const [select, setSelect] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [kietmail, setkietmail] = useState("");
  const [collegename, setcollegename] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [data, setdata] = useState({
    name: name,
    email: email,
    phone: phone,
    branch: branch,
    year: year,
    kietmail: kietmail,
    collegename: collegename,
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  useEffect(() => {
    setdata({
      name: name,
      email: email,
      phone: phone,
      branch: branch,
      year: year,
      kietmail: kietmail,
      collegename: collegename,
    });

    console.log(data);
  })

  const HandleSubmit = (e) => {

    setdata({
      name: name,
      email: email,
      phone: phone,
      branch: branch,
      year: year,
      kietmail: kietmail,
      collegename: collegename,
    });

    let isValid = true;

    console.log(data);

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!validatePhone(phone)) {
      setPhoneError("Phone number should contain 10 digits only");
      isValid = false;
    }

    if (isValid) {
      fetch("https://technoverse-backend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => {
          console.log("data sent");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      <Navbar />
      <div className="register w-full h-full">
        <form class="r-form" onSubmit={HandleSubmit}>
          <img
            src={technoverse}
            width={"300px"}
            style={{ marginBottom: "2rem" }}
            alt=""
          />
          <div className="text-white ">Enter your Name </div>
          <input
            class="r-input"
            type="text"
            placeholder="Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div>Enter your Branch</div>
          <input
            class="r-input"
            type="text"
            placeholder="Branch"
            required
            onChange={(e) => {
              setbranch(e.target.value);
            }}
          />
          <div>Enter your Year</div>
          <input
            class="r-input"
            type="text"
            placeholder="Year"
            required
            onChange={(e) => {
              setyear(e.target.value);
            }}
          />
          <div>Enter your Phone number</div>

          <input
            class="r-input"
            type="text"
            placeholder="Phone Number"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <div>Enter your Email</div>

          <input
            class="r-input"
            type="text"
            placeholder="E-Mail I.D."
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="r-input">College name ?</div>

          <div className="flex items-center">
            <label className="flex items-center mr-4">
              <input
                className="r-input"
                type="radio"
                name="options"
                checked={!select}
                onChange={() => setSelect(false)}
              />
              <span class="ml-2">KIET</span>
            </label>
            <label className="flex items-center">
              <input
                className="r-input"
                type="radio"
                name="options"
                onChange={() => setSelect(true)}
              />
              <span class="ml-2">Other</span>
            </label>
          </div>

          {select && (
            <div className="flex flex-col gap-10 text-white ">
              <input
                type="text"
                placeholder="Enter college name"
                className="r-input text-black"
                onChange={(e) => {
                  setcollegename(e.target.value);
                }}
              />
              
              <img src="" alt="payment qr logo " />
              <div>Note:- Do take a screenshot after payement </div>
            </div>
          )}

          {!select && (
            <div className="flex flex-col gap-10">
              <input
                type="text"
                placeholder="Enter your kiet mail id"
                className="r-input text-black"
                onChange={(e) => {
                  setkietmail(e.target.value);
                }}
              />
              
            </div>
          )}

          <center>
            <button
              class="r-button"
              
            >
              Register
            </button>
          </center>
        </form>
        <div className="box">
          <div className="my-viewer">
            <Viewer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
