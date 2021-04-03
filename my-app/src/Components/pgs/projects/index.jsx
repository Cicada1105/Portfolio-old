import React, { useEffect, useRef } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

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
	let projectsRef = useRef(null);

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				projectsRef.current.scrollIntoView({
					behavior: "smooth"
				});
	});
	let styles = {
		height:"35.5rem"
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