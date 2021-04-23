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
		width:"45vw",
		marginTop:"8rem",
		marginBottom: "calc(100vh - 37.15rem)",
		boxShadow:"none"
	}
	return (
		<div ref={ contactRef } className={ globalStyles.section } id="contact" style={ styles }>
			<h2>Contact</h2>
			<img src={ underline } alt="underline" className={ globalStyles.headerUnderline } />
			<section ref={ contactScrollRef } className={ localStyles.contactSection }>
				<p>
					If you would like to contact me about my projects, the code, or for other business inquires,
					you can reach me via my email at <em>joshicolvin@gmail.com</em>
				</p>
			</section>
		</div>
	);
}

export { Contact }