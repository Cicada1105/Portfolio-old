import React from 'react';
import { BackgroundImage } from './bg_image/index.jsx';
import { BlackFade } from './black_fade/index.jsx';
import { Canvas } from './canvas/index.jsx';
import { Dots } from './dots/index.jsx';

import './index.css';

class Background extends React.Component {
	render() {
		return (
			<div className="bgFragment">
				<BackgroundImage />
				<BlackFade />
				<Canvas />
				<Dots />
			</div>
		)
	}
}

export default Background;