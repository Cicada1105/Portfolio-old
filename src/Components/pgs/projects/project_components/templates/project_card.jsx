/*
	File for encapsulating project cards logic
*/
// Imports
import React from 'react';

import { GithubButton, WebsiteButton } from "./buttons.jsx";
import LanguagesCard from './languages_card.jsx';

import styles from './index.module.css';

const ProjectCard = (props) => {
	return (
		<div className={ props.className }>
			<h3>{ props.name }</h3>
			{ props.children[0] }
			<p className={styles.projectDescription}>{ props.description }</p>
			{ props.children[1] }
			{ props.children[2] }
		</div>
	)
}

const WebsiteCard = ({ projectName, projectDescription, websiteLink, githubLink, projectLanguages }) => {
	return (
		<ProjectCard className={ styles.websiteProjectCard } name={ projectName } description={ projectDescription }>
			<LanguagesCard languages={ projectLanguages } />
			<WebsiteButton liveSiteLink={ websiteLink } />
			<GithubButton repositoryLink={ githubLink } />
		</ProjectCard>
	)
}
const CodeCard = ({ projectName, projectDescription, githubLink, projectLanguages }) => {
	return (
		<ProjectCard className={ styles.codeProjectCard } name={ projectName } description={ projectDescription }>
			<LanguagesCard languages={ projectLanguages } />
			<GithubButton repositoryLink={ githubLink } />
		</ProjectCard>
	)
}

export { WebsiteCard, CodeCard } 