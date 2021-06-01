import React from 'react';

import { data as universityProjects } from './data.jsx';
import styles from '../index.module.css';

import { WebsiteCard, CodeCard } from '../templates/project_card.jsx';

const University = () => {

	return (
		<section className={ styles.project_section }>
			<h3 className={ styles.project_header }>University</h3>
			<div className={ styles.projects }>
			{
				universityProjects.map((project, i) => 
					project.hasOwnProperty("website") ?
					<WebsiteCard key={i} projectName={project.name} projectDescription={project.description} 
									 githubLink={project.codeLink} websiteLink={project.website}
									 projectLanguages={project.languages} /> :
					<CodeCard key={i} projectName={project.name} projectDescription={project.description} 
									 githubLink={project.codeLink} projectLanguages={project.languages} />
				)
			}
			</div>
		</section>
	);
}

export { University }