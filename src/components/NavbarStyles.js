// components/NavbarStyles.js

import styled from "styled-components";
export const Nav = styled.nav`

display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
margin: 1rem 5rem !important;
padding: 10px 1rem;
border-radius: 12px;
height: 90px;
z-index: 100;
background-color: transparent;
backdrop-filter: none;
transition: background-color 0.3s ease 0s;



	background: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	/* Fix your navbar by using below two lines of code */
	position: sticky;
	top: 20px;
	/* Fix your navbar by using above two lines of code */
	z-index: 10;

	@media screen and (max-width: 768px) {
		transition: 0.8s all ease;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled.a`
	color: green;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;


    background: rgb(25, 28, 41);
    width: 68px;
    aspect-ratio: 1 / 1;
    position: relative;
    border-radius: 50%;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgba(88, 199, 250, 0);
    cursor: pointer;
    font-family: cursive;
    z-index: 100;

`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 250ms;
`;

export const NavLinks = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #000000;
	}

    margin-left: 8px;
    margin-bottom: 0px;
    list-style-type: none;
    padding: 16px 24px;
    display: flex;


    color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    transition: all 0.25s ease 0s;
    gap: 41px;
    position: relative;
    scroll-behavior: smooth;
`;
