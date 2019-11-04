import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import '../App.css';
import styled from 'styled-components';
const Nav = styled.h1`
	color: white;
	text-align: center;
	font-size: 2.0rem;
`;
const Navbar = () => {
	const [ darkMode, setDarkMode ] = useDarkMode();
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className='navbar'>
			<Nav>Women's World Cup</Nav>
			<div className='dark-mode_toggle'>
				<button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
			</div>
		</nav>
	);
};
export default Navbar;
