import React, { useState, Fragment } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./NavbarStyles";
import "../App.css";
import nav_logo from "../Assets/t_logo.png";
import logo from "../Assets/title.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarColor);
  return (
    <Fragment className="nav-m">
      {/* <Nav 
       className={colorChange ? "navbar colorChange" : "navbar"}
      > */}
        <Nav>
			  <NavContainer>
				  <div className="w-44">
					  
          <Link to="/">
            <img className="" src={logo} alt="Your Alt Text" />
          </Link>
			</div>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="/">Speakers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/">Sponsors</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks href="/">FAQs</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/register">Register</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
