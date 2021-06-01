/*
	File for encapsulaing project button logic
*/
import React from 'react';

import websiteIcon from "./live_site_icon.png";
import githubIcon from "./github_icon.png";

import styles from './index.module.css';

const Button = ({ text, iconSrc, iconAlt, link }) => {
	return (
		<div className={styles.projectCardBtn} onClick={() => window.open(link, "_blank")}>
			<span>{ text }</span>
			<img src={iconSrc} alt={iconAlt} />
		</div>
	)
}

const GithubButton = ({ repositoryLink }) => {
	return (
		<Button text="View Code" iconSrc={ githubIcon } iconAlt="Github Logo" link={ repositoryLink } />
	)
}
const WebsiteButton = ({ liveSiteLink }) => {
	return (
		<Button text="Live Site" iconSrc={ websiteIcon } iconAlt="Website Icon" link={ liveSiteLink } />
	)
}

export { GithubButton, WebsiteButton }