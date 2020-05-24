import React from 'react';
import { BackgroundImage } from './bg_image/index.jsx';
import { BlackFade } from './black_fade/index.jsx';

import './index.css';

class Background extends React.Component {
	render() {
		return (
			<div className="bgFragment">
				<BackgroundImage />
				<BlackFade />
			</div>
		)
	}
}

export default Background;