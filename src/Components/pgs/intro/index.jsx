import React, { useState, useEffect, useRef } from 'react';

// Styles
import styles from './index.module.css';

const IntroCard = () => {
	function handleArrowClick(clicked) {
		console.log("Arrow Click");
	}
	return(
		<div className={ styles.blackCard } id="home">
			<div className={ styles.blueBorder }>
				<h1>
					Hi, I'm Josh Colvin
				</h1>
				<h4>
					Web Developer
				</h4>
				<Arrow handleClick={ handleArrowClick } />
			</div>
		</div>
	);
}

const Arrow = (props) => {
	const [clicked, setClick] = useState(false);

	let initialLoad = useRef(true);

	useEffect(() => {
		initialLoad.current ? initialLoad.current = false: props.handleClick(clicked);
	});

	return (
		<div className={ styles.arrow } onClick={() => setClick(!clicked)}>
		</div>
	);
}
export { IntroCard }