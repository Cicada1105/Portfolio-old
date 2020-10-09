import React, { useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

// Navigation bar
import Navigation from './navigation/navigation.jsx';

// Components
import { IntroCard } from './intro/index.jsx';
import { About } from './about/index.jsx';
import { Projects } from './projects/index.jsx';
import { Contact } from './contact/index.jsx';
// Home Router
import { HomeRouter } from './router.jsx';

const Page = () => {
	let components = {
		about: null,
		projects: null,
		contact: null
	};
	let STYLING_DEFAULTS = {
		app_font_size: null,
		section_styling: {
			marginTop: null,
			containerHeight: null,
			marginBottom: null
		}
	};

	function handleResize(e) {
		let currYPos = e.target.defaultView.scrollY;

		// Thresholds
		const spaceBetweenSections = STYLING_DEFAULTS.section_styling["marginBottom"] + STYLING_DEFAULTS.section_styling["marginTop"];

		const aboutStickyThreshold = window.innerHeight + spaceBetweenSections; 
		const projectsStickyThreshold = (window.innerHeight * 2) + spaceBetweenSections; 

		if (currYPos < aboutStickyThreshold) {
			// About and Projects sections are only affected. Revert each section back to original state
			components["about"].style.position = "sticky";
			components["about"].style.marginTop = "8rem";
			components["about"].style.marginBottom = STYLING_DEFAULTS.section_styling["marginBottom"] + "px";
			components["projects"].style.position = "sticky";
			components["projects"].style.marginTop = "8rem";
			components["projects"].style.marginBottom = STYLING_DEFAULTS.section_styling["marginBottom"] + "px";
		}
		else if (currYPos >= aboutStickyThreshold) {
			if (currYPos < projectsStickyThreshold) {
				components["about"].style.position = "relative";
				components["about"].style.marginTop = (window.innerHeight - STYLING_DEFAULTS.section_styling["containerHeight"]) + "px";
				components["about"].style.marginBottom = "0rem";
				components["projects"].style.position = "sticky";
				components["projects"].style.marginTop = "8rem";
				components["projects"].style.marginBottom = STYLING_DEFAULTS.section_styling["marginBottom"] + "px";
			}
			else {
				components["projects"].style.position = "relative";
				components["projects"].style.marginTop = (window.innerHeight - STYLING_DEFAULTS.section_styling["containerHeight"]) + "px";
				components["projects"].style.marginBottom = "0rem";
			}
		}
	}
	useEffect(() => {
		window.addEventListener("scroll",handleResize);

		// useEffect cleanupt function to run after body of useEffect has been ran
		return () => {
			window.removeEventListener("scroll",handleResize);
		}
	});
	useEffect(() => {

		// Store contant values that will be used repeatedly for page resizing
		components["about"] = document.getElementById("about");
		components["projects"] = document.getElementById("projects");
		components["contact"] = document.getElementById("contact");

		STYLING_DEFAULTS["app_font_size"] = parseInt(window.getComputedStyle(document.querySelector(".App"))["fontSize"]);
		STYLING_DEFAULTS.section_styling["marginTop"] = parseInt(window.getComputedStyle(components["projects"]).marginTop);
		STYLING_DEFAULTS.section_styling["containerHeight"] = document.getElementById("about").offsetHeight;
		STYLING_DEFAULTS.section_styling["marginBottom"] = window.innerHeight - (STYLING_DEFAULTS.section_styling["marginTop"] + STYLING_DEFAULTS.section_styling["containerHeight"]);
	},[components, STYLING_DEFAULTS]);

	return (
		<Router>
			{/*Load navigation bar component*/}
			<Navigation />
			{/*Load each component for home page*/}
			<IntroCard />
			<About />
			<Projects />
			<Contact />
			{/*Load home router to handle navigation*/}
			<HomeRouter />
		</Router>
	);
}

export default Page