import React from 'react';
import { BackgroundImage } from './bg_image/index.jsx';
import { BlueFadeBlack } from './blue_fade_black/index.jsx';

import './index.css';

class Background extends React.Component {
	render() {
		return (
			<div className="bgFragment">
				<BackgroundImage />
				<BackgroundImage />
				<BackgroundImage />
				<BackgroundImage />
				<BlueFadeBlack />
			</div>
		)
	}
}

export default Background;