import React, { useEffect, useRef, useContext } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { PageScrollContext } from '../../../context.jsx';

// Styles
import globalStyles from '../global.module.css';
import localStyles from './index.module.css';
import underline from '../resources/imgs/heading_underline.png';

import { Professional } from './project_components/professional/';
import { University } from './project_components/university/';
import { Personal } from './project_components/personal/';

const Projects = () => {
	const location = useLocation();
	const match = useRouteMatch();
	const { state, dispatch } = useContext(PageScrollContext);

	let projectsRef = useRef(null);
	// Keep track of if listener has already been added 
	let hasListenerRef = useRef(false);
	let listenerRef = useRef(() => {
		let scrollTop = projectsRef.current.scrollTop;
		let bottomThreshold = projectsRef.current.scrollHeight - projectsRef.current.offsetHeight;

		if ((scrollTop === 0) || (scrollTop === bottomThreshold)) {
			projectsRef.current.style.overflowY = "hidden";
			// Return page scroll back to normal
			dispatch({ type: "normal" });
		}
	});

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				projectsRef.current.scrollIntoView({
					behavior: "smooth"
				});
	});

	useEffect(() => {
		if (state.section === "projects") {
			// Check if listener has already been added 
			if (!hasListenerRef.current) {
				projectsRef.current.addEventListener("scroll", listenerRef.current, { capture: true });
				hasListenerRef.current = true;
			}

			projectsRef.current.style.overflowY = "scroll";
		}
		else {
			// Only need to remove listener if added. Don't need to attempt to remove every time
			if (hasListenerRef.current) {
				projectsRef.current.removeEventListener("scroll", listenerRef.current, { capture: true });	
				hasListenerRef.current = false;
			}

			projectsRef.current.style.overflowY = "hidden";
		}
	},[state, dispatch]);

	let styles = {
		overflowY:"scroll",
		height:"35.5rem",
		marginTop:"7rem",
		marginBottom: "calc(100vh - 42.5rem)"
	}
	return (
		<div ref={ projectsRef } className={ globalStyles.section } id="projects" style={styles}>
			<div className={ localStyles.projects_header_cont }>
				<h2 className={ localStyles.projects_heading }>Projects</h2>
				<img src={ underline } alt="underline" className={ globalStyles.headerUnderline } />
			</div>
			<Professional />
			<Personal />
			<University />
		</div>
	);
}

export { Projects }