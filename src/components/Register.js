import React, { useEffect, useState } from "react";
import "./Register.css";
import Viewer from "./Viewer";
import sample from "../Assets/sample2.mp4";
import technoverse from "../Assets/technoverse.png";
import Footer from "./Footer";
import NewNavbar from "./NewNavbar";
import qr from "../Assets/qr.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [id, setid] = useState("");

  const [data, setdata] = useState({
    name: name,
    email: email,
    phone: phone,
    branch: branch,
    year: year,
    kietmail: kietmail,
    collegename: collegename,
    transaction: id,
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
      transaction: id,
    });
  });

  const HandleSubmit = async (e) => {
    // e.preventDefault();
    setEmailError("");
    setPhoneError("");

    let isValid = true;

    console.log(data);

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      toast("❌ Not a valid email address");
      isValid = false;
    }

    if (!validatePhone(phone)) {
      setPhoneError("Phone number should contain 10 digits only");
      toast("❌ Not a valid phone number");

      isValid = false;
    }

    console.log(isValid);

    if (isValid) {
      toast("✅ You are registered");

      await fetch("https://technoverse-backend.onrender.com/register", {
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

      console.log(name);

      setName("");
      setEmail("");
      setPhone("");
      setbranch("");
      setcollegename("");
      setkietmail("");
      setid("");

      console.log("this got executed ");
    }
  };

  return (
    <div className="text-white font-syne " style={{ fontFamily: "Poppins" }}>
      
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
	<link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet"/>
	<link rel="stylesheet" type="text/css" href="style.css"/>

      <video id="background-video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
      {/* <Navbar /> */}
      <NewNavbar/>
      <ToastContainer />
      <div className="register w-full h-full">
        <form class="r-form lg:mb-10 mt-20" onSubmit={HandleSubmit}>
          <img
            src={technoverse}
            width={"300px"}
            style={{ marginBottom: "2rem" }}
            alt=""
          />
          <div className="text-white font-syne w-full pl-3 text-xl font-bold ">
            Enter your Name{" "}
          </div>
          <input
            class="r-input"
            type="text"
            placeholder="Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="text-white font-syne w-full pl-3 text-xl font-bold ">
            Enter your Branch
          </div>
          <input
            class="r-input"
            type="text"
            placeholder="Branch"
            required
            onChange={(e) => {
              setbranch(e.target.value);
            }}
          />
          <div className="text-white font-syne w-full pl-3 text-xl font-bold ">
            Enter your Year
          </div>
          <input
            class="r-input"
            type="text"
            placeholder="Year"
            required
            onChange={(e) => {
              setyear(e.target.value);
            }}
          />
          <div className="text-white font-syne w-full pl-3 text-xl font-bold ">
            Enter your Phone number
          </div>

          <input
            class="r-input"
            type="text"
            placeholder="Phone Number"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <div className="text-red-400 ">{phoneError}</div>
          <div className="text-white font-syne w-full pl-3 text-xl font-bold ">
            Enter your Email
          </div>

          <input
            class="r-input"
            type="text"
            placeholder="E-Mail I.D."
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="text-red-400">{emailError}</div>
          <div className="text-white font-syne w-full pl-3 text-xl font-bold ">
            College name ?
          </div>

          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <input
                className="r-input mt-5"
                type="radio"
                name="options"
                checked={!select}
                onChange={() => setSelect(false)}
              />
              <div class="ml-2">KIET</div>
            </div>
            <label className="flex items-center">
              <input
                className="r-input mt-5"
                type="radio"
                name="options"
                onChange={() => setSelect(true)}
              />
              <span class="ml-2">Other</span>
            </label>
          </div>

          {select && (
            <div className="flex flex-col gap-10 text-white font-syne ">
              <input
                type="text"
                placeholder="Enter college name"
                className="r-input text-black"
                onChange={(e) => {
                  setcollegename(e.target.value);
                }}
                required
              />
              <div className="w-44">
                <img src={qr} alt="payment qr logo " />
              </div>
              <div>
                <input
                  type="text"
                  className="r-input"
                  placeholder="Enter your transaction id"
                  onChange={(e) => setid(e.target.value)}
                  required
                />
              </div>
              <div className="text-red-400 ">
                Note:-Rs 50 is registration fee, Do take a screenshot after
                payment{" "}
              </div>
            </div>
          )}

          {!select && (
            <div className="flex flex-col gap-10">
              <input
                type="text"
                placeholder="Enter your Kiet Mail ID"
                className="r-input text-black"
                onChange={(e) => {
                  setkietmail(e.target.value);
                }}
                required
              />
            </div>
          )}

          <center>
            <button class="r-button" type="submit">
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
