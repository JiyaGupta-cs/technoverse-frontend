import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NewNavbar.css";
import n_logo from '../Assets/technoverse.png'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
        <div className="flex justify-center items-center mt-8">
		<header>
			<a href="/"><img className="n-logo" src={n_logo} alt="" /></a>
<div>
			<nav ref={navRef}>
				<a className="font-syne" href="/#speakers">Speakers</a>
				<a className="font-syne" href="/#sponsors">Sponsors</a>
				<a className="font-syne" href="/#faq">FAQ</a>
				<a className="font-syne" href="/register">Register</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav></div>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header></div>
	);
}

export default Navbar;