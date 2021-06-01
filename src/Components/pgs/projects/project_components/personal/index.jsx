import React from 'react';

import { data as personalProjects } from './data.jsx';
import styles from '../index.module.css';

import { WebsiteCard, CodeCard } from '../templates/project_card.jsx';

const Personal = () => {
	return(
		<section className={ styles.project_section }>
			<h3 className={ styles.project_header }>Personal</h3>
			<div className={ styles.projects }>
			{
				personalProjects.map((project,i) =>
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

export { Personal }