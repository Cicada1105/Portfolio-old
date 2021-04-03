import React, { useEffect, useRef } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

// Styles
import globalStyles from '../global.module.css';
import localStyles from './style.module.css';
import underline from '../resources/imgs/heading_underline.png';

const Contact = () => {
	const location = useLocation();
	const match = useRouteMatch();
	let contactRef = useRef(null);

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				contactRef.current.scrollIntoView({
					behavior: "smooth"
				});
	});
	let styles = {
		height:"29.15rem"
	}
	return (
		<div ref={ contactRef } className={ globalStyles.section } id="contact" style={ styles }>
			<h2>Contact</h2>
			<img src={ underline } alt="underline" className={ globalStyles.headerUnderline } />
			<section className={ localStyles.contactSection }>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel lacus nec magna gravida pellentesque 
					in sed ligula. Nullam tincidunt lectus ac arcu laoreet elementum. Mauris tempus accumsan odio eu euismod. 
					Vivamus lorem ligula, porta eu lobortis mollis, euismod in nulla. Maecenas convallis lectus tellus, sed 
					suscipit diam sollicitudin id. Maecenas iaculis pellentesque leo, id imperdiet enim vehicula et. Maecenas 
					sed velit ut elit dapibus dignissim. Nam finibus lacinia magna ac gravida. Nulla non convallis leo. Nunc 
					non rutrum felis, ac accumsan nibh. Nullam aliquam mi et dignissim porta. Suspendisse efficitur purus ex, 
					a consequat lectus rhoncus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
					cubilia curae; Sed sodales metus eu mi viverra, ac maximus enim tristique. In hac habitasse platea dictumst.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel lacus nec magna gravida pellentesque 
					in sed ligula. Nullam tincidunt lectus ac arcu laoreet elementum. Mauris tempus accumsan odio eu euismod. 
					Vivamus lorem ligula, porta eu lobortis mollis, euismod in nulla. Maecenas convallis lectus tellus, sed 
					suscipit diam sollicitudin id. Maecenas iaculis pellentesque leo, id imperdiet enim vehicula et. Maecenas 
					sed velit ut elit dapibus dignissim. Nam finibus lacinia magna ac gravida. Nulla non convallis leo. Nunc 
					non rutrum felis, ac accumsan nibh. Nullam aliquam mi et dignissim porta. Suspendisse efficitur purus ex, 
					a consequat lectus rhoncus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
					cubilia curae; Sed sodales metus eu mi viverra, ac maximus enim tristique. In hac habitasse platea dictumst.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel lacus nec magna gravida pellentesque 
					in sed ligula. Nullam tincidunt lectus ac arcu laoreet elementum. Mauris tempus accumsan odio eu euismod. 
					Vivamus lorem ligula, porta eu lobortis mollis, euismod in nulla. Maecenas convallis lectus tellus, sed 
					suscipit diam sollicitudin id. Maecenas iaculis pellentesque leo, id imperdiet enim vehicula et. Maecenas 
					sed velit ut elit dapibus dignissim. Nam finibus lacinia magna ac gravida. Nulla non convallis leo. Nunc 
					non rutrum felis, ac accumsan nibh. Nullam aliquam mi et dignissim porta. Suspendisse efficitur purus ex, 
					a consequat lectus rhoncus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
					cubilia curae; Sed sodales metus eu mi viverra, ac maximus enim tristique. In hac habitasse platea dictumst.
				</p>
			</section>
		</div>
	);
}

export { Contact }