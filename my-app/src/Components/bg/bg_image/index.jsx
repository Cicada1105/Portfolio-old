import React from 'react';
import image from './imgs/light_trails.png';
import './index.css';

class BackgroundImage extends React.Component {
	render() {
		return (
			<img src={ image } className="bgImg" alt="Blue Fade" />
		);
	}
}

export { BackgroundImage } 