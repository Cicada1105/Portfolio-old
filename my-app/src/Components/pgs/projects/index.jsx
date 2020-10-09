import React, { useEffect, useRef } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

// Styles
//import './index.css';
import globalStyles from '../global.module.css';

const Projects = () => {
	const location = useLocation();
	const match = useRouteMatch();
	let projectsRef = useRef(null);

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				projectsRef.current.scrollIntoView({
					behavior: "smooth"
				})
	});

	return (
		<div ref={ projectsRef } className={ globalStyles.section } id="projects">
			<h2>Projects Page</h2>
		</div>
	);
}

export { Projects }