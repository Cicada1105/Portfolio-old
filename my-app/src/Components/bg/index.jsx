import React from 'react';
import { BackgroundImage } from './bg_image/index.jsx';
import { BlackFade } from './black_fade/index.jsx';
import { Canvas } from './canvas/index.jsx';
import { Dots } from './dots/index.jsx';

class Background extends React.Component {
	render() {
		return (
			<React.Fragment>
				<BackgroundImage />
				<BlackFade />
				<Canvas />
				<Dots />
			</React.Fragment>
		)
	}
}

export default Background;