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
const Navbar = () => {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener("scroll", changeNavbarColor);
	return (
		<Fragment className="nav-m">
			<Nav
				className={
					colorChange
						? "navbar colorChange"
						: "navbar"
				}
			>
				<NavContainer>
					<NavLogo className="nav-bf" href="#">
                    <img className="nav-bf glow" src="https://res.cloudinary.com/dhnkuonev/image/upload/v1699458313/hnlogo_ei64kd.png" alt="Your Alt Text"/>
					</NavLogo>
					<MobileIcon>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks href="#">
								Timeline
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks href="#">
								Sponsors
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks href="#">
								Glimpses
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks href="#">
								FAQs
							</NavLinks>
						</NavItem>
						
					</NavMenu>
				</NavContainer>
			</Nav>
		</Fragment>
	);
};

export default Navbar;
