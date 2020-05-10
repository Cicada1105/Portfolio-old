import React, { useState, useEffect } from 'react';

// Styles
import style from './index.module.css';

const Home = () => {
	return (
		<React.Fragment>
			<IntroCard />
		</React.Fragment>
	);
}

class IntroCard extends React.Component {
	render() {
		return(
			<div className={ style.blackCard }>
				<div className={ style.blueBorder }>
					<h1>
						Hi, I'm Josh Colvin
					</h1>
					<h4>
						Web Developer
					</h4>
					<Arrow />
				</div>
			</div>
		);
	}
}

const Arrow = () => {
	const [clicked, setClick] = useState(false);

	useEffect(() => {
		console.log(`Clicked? ${clicked}`);
	});

	return (
		<div className={ style.arrow } onClick={() => setClick(!clicked)}>
		</div>
	);
}
export { Home }