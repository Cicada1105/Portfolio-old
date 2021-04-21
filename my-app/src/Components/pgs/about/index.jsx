import React, { useEffect, useRef, useContext } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { PageScrollContext } from '../../../context.jsx';

// Styles
import localStyles from './style.module.css';
import globalStyles from '../global.module.css'
import underline from '../resources/imgs/heading_underline.png';

const About = (props) => {
	const location = useLocation();
	const match = useRouteMatch();
	const { state, dispatch } = useContext(PageScrollContext);

	let aboutRef = useRef(null);
	let aboutScrollRef = useRef(null);
	// Keep track of if listener has already been added
	let hasListenerRef = useRef(false);
	let listenerRef = useRef(() => {
		let scrollTop = aboutScrollRef.current.scrollTop;
		let bottomThreshold = aboutScrollRef.current.scrollHeight - aboutScrollRef.current.offsetHeight;

		if ((scrollTop === 0) || (scrollTop === bottomThreshold)) {
			console.log("Dispatching from about, back to normal");
			aboutScrollRef.current.style.overflowY = "hidden";
			// Return page scroll back to normal
			dispatch({ type: "normal" });
		}
	})

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				aboutRef.current.scrollIntoView({
					behavior: "smooth"
				});
	});

 	useEffect(() => {
		/*
			Check if current global state passed down through 
			context is on about section and listener has not
			been added previously
		*/
		console.log("%c-------------------------","color:aqua;");
		console.log("%cAbout section info:","font-weight:bold");
		if (state.section === "about") {
			console.log("About section scroll");
			// Check if listener has already been added
			if (!hasListenerRef.current) {
				aboutScrollRef.current.addEventListener("scroll",listenerRef.current,{ capture: true });
				hasListenerRef.current = true;
			}

			aboutScrollRef.current.style.overflowY = "scroll";
		}
		else {
			console.log("Remove about section scroll");
			// Only need to remove listener if added. Don't need to attempt to remove every time
			if (hasListenerRef.current) {
				aboutScrollRef.current.removeEventListener("scroll",listenerRef.current, { capture: true });	
				hasListenerRef.current = false;
			}

			aboutScrollRef.current.style.overflowY = "hidden";
		}
		console.log(`State: ${state.section}`);
		console.log(`hasListener: ${hasListenerRef.current}`);
 	},[state, dispatch]);

	const styles = {
		height:"25rem",
		marginBottom: "calc(100vh - 35rem)"
	}
	return (
		<div ref={aboutRef} className={ globalStyles.section } id="about" style={styles}>
			<h2 className={ localStyles.aboutHeader }>About</h2>
			<img src={ underline } alt="underline" className={ globalStyles.headerUnderline } />
			<section ref={aboutScrollRef} className={ localStyles.aboutSection }>
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

export { About }