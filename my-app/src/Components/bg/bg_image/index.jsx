import React from 'react';
import image from './bg.jpg';
import './index.css';

class BackgroundImage extends React.Component {
	render() {
		return (
			<img src={ image } id="bgImg" alt="Blue Fade" />
		);
	}
}

export { BackgroundImage } 