import React, { useEffect, useRef, useContext } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { PageScrollContext } from '../../../context.jsx';

// Styles
import globalStyles from '../global.module.css';
import localStyles from './style.module.css';
import underline from '../resources/imgs/heading_underline.png';

const Contact = () => {
	const location = useLocation();
	const match = useRouteMatch();
	const { state, dispatch } = useContext(PageScrollContext);

	let contactRef = useRef(null);
	let contactScrollRef = useRef(null);
	// Keep track if listener has already been added
	let hasListenerRef = useRef(false);
	let listenerRef = useRef(() => {
		let scrollTop = contactScrollRef.current.scrollTop;
		let bottomThreshold = contactScrollRef.current.scrollHeight - contactScrollRef.current.offsetHeight;

		if ((scrollTop === 0) || (scrollTop === bottomThreshold)) {
			contactScrollRef.current.style.overflowY = "hidden";
			// Return page scroll back to normal
			dispatch({ type: "normal" });
		}
	});

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				contactRef.current.scrollIntoView({
					behavior: "smooth"
				});
	});

	useEffect(() => {
		if (state.section === "contact") {
			// Check if listener has already been added 
			if (!hasListenerRef.current) {
				contactScrollRef.current.addEventListener("scroll",listenerRef.current,{ capture: true });
				hasListenerRef.current = true;
			}

			contactScrollRef.current.style.overflowY = "scroll";
		}
		else {
			// Only need to remove listener if added. Don't need to attempt to remove every time
			if (hasListenerRef.current) {
				contactScrollRef.current.removeEventListener("scroll",listenerRef.current,{ capture: true });		
				hasListenerRef.current = false;
			}

			contactScrollRef.current.style.overflowY = "hidden";
		}
	},[state, dispatch]);

	let styles = {
		height:"29.15rem",
		marginBottom: "calc(100vh - 39.15rem)"
	}
	return (
		<div ref={ contactRef } className={ globalStyles.section } id="contact" style={ styles }>
			<h2>Contact</h2>
			<img src={ underline } alt="underline" className={ globalStyles.headerUnderline } />
			<section ref={ contactScrollRef } className={ localStyles.contactSection }>
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