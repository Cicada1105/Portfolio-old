import React, { useState, useEffect, useRef } from 'react';

// Styles
import styles from './index.module.css';

const Home = () => {
	return (
		<React.Fragment>
			<IntroCard />
		</React.Fragment>
	);
}

class IntroCard extends React.Component {
	constructor() {
		super();

		this.myRef = React.createRef();
	}
	handleArrowClick = (clicked) => {
		console.log("Arrow Click");
	}
	render() {
		return(
			<div className={ styles.blackCard } ref={this.myRef}>
				<div className={ styles.blueBorder }>
					<h1>
						Hi, I'm Josh Colvin
					</h1>
					<h4>
						Web Developer
					</h4>
					<Arrow handleClick={ this.handleArrowClick } />
				</div>
			</div>
		);
	}
}

const Arrow = (props) => {
	const [clicked, setClick] = useState(false);

	let initialLoad = useRef(true);

	useEffect(() => {
		if (initialLoad.current) {
			initialLoad.current = false;
			return;
		}
		else
			props.handleClick(clicked);
	});

	return (
		<div className={ styles.arrow } onClick={() => setClick(!clicked)}>
		</div>
	);
}
export { Home }