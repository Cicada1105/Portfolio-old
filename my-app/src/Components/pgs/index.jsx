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
			top: null,
			containerHeight: null,
			marginBottom: null
		},
		space_between_sections: null
	};
	let THRESHOLDS = {
		about: {
			sticky: null,
			section_scroll: null
		},
		projects: {
			sticky: null,
			section_scroll: null
		}
	}

	function handleResize(e) {
		let currYPos = e.target.defaultView.scrollY;

		if (currYPos < THRESHOLDS.about["sticky"]) {
			// If user scroll position is less than position at which about section sticks, display hidden 
			// This prevents scrolling behavior or overflow from preventing user from scrolling through page
			if (currYPos < THRESHOLDS.about["section_scroll"])
				components["about"].lastElementChild.style.overflowY = "hidden";
			// Else allow user to scroll to rest of about section 
			else
				components["about"].lastElementChild.style.overflowY = "scroll";
			// About and Projects sections are only affected. Revert each section back to original state
			components["about"].style.position = "sticky";
			components["about"].style.marginTop = "10rem";
			components["about"].style.marginBottom = STYLING_DEFAULTS.section_styling["marginBottom"] + "px";
			components["contact"].style.position = "sticky";
			components["contact"].style.marginTop = "10rem";
			components["contact"].style.marginBottom = STYLING_DEFAULTS.section_styling["marginBottom"] + "px";
			components["projects"].style.position = "sticky";
			components["projects"].style.marginTop = "10rem";
			components["projects"].style.marginBottom = STYLING_DEFAULTS.section_styling["marginBottom"] + "px";
		}
		else if (currYPos >= THRESHOLDS.about["sticky"]) {
			if (currYPos < THRESHOLDS.projects["sticky"]) {
				if (currYPos < THRESHOLDS.projects["section_scroll"])
					components["projects"].style.overflowY = "hidden";
				else
					components["projects"].style.overflowY = "scroll";

				components["about"].style.position = "relative";
				components["about"].style.marginTop = (window.innerHeight - STYLING_DEFAULTS.section_styling["containerHeight"]) + "px";
				components["about"].style.marginBottom = "0rem";
				components["about"].lastElementChild.style.overflowY = "hidden";
				components["contact"].style.position = "relative";
				components["contact"].style.marginTop = (window.innerHeight - STYLING_DEFAULTS.section_styling["containerHeight"]) + "px";
				//components["contact"].style.marginBottom = "0rem";
				components["projects"].style.position = "sticky";
				components["projects"].style.marginTop = "10rem";
				components["projects"].style.marginBottom = STYLING_DEFAULTS.section_styling["marginBottom"] + "px";
			}
			else {
				components["projects"].style.overflowY = "hidden";
				components["projects"].style.position = "relative";
				components["projects"].style.marginTop = (window.innerHeight - STYLING_DEFAULTS.section_styling["containerHeight"]) + "px";
				components["projects"].style.marginBottom = "0rem";
				//components["contact"].style.overflowY = "scroll";
				components["contact"].style.position = "sticky";
				components["contact"].style.marginTop = "10rem";
				//components["contact"].style.marginBottom = STYLING_DEFAULTS.section_styling["marginBottom"] + "px";
			}
		}
		//else if (currYPos )
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

		// Store styling defaults 
		STYLING_DEFAULTS["app_font_size"] = parseInt(window.getComputedStyle(document.querySelector(".App"))["fontSize"]);
		STYLING_DEFAULTS.section_styling["marginTop"] = parseInt(window.getComputedStyle(components["projects"]).marginTop);
		STYLING_DEFAULTS.section_styling["top"] = parseInt(window.getComputedStyle(components["projects"]).top);
		STYLING_DEFAULTS.section_styling["containerHeight"] = document.getElementById("about").offsetHeight;
		STYLING_DEFAULTS.section_styling["marginBottom"] = window.innerHeight - (STYLING_DEFAULTS.section_styling["marginTop"] + STYLING_DEFAULTS.section_styling["containerHeight"]);
		STYLING_DEFAULTS.section_styling["space_between_sections"] = STYLING_DEFAULTS.section_styling["marginBottom"] + STYLING_DEFAULTS.section_styling["marginTop"];

		// Store value of thresholds
		THRESHOLDS.about["sticky"] = window.innerHeight + STYLING_DEFAULTS.section_styling["space_between_sections"];
		THRESHOLDS.about["section_scroll"] = window.innerHeight + (STYLING_DEFAULTS.section_styling["marginTop"] - STYLING_DEFAULTS.section_styling["top"]);
		THRESHOLDS.projects["sticky"] = (window.innerHeight * 2) + STYLING_DEFAULTS.section_styling["space_between_sections"];
		THRESHOLDS.projects["section_scroll"] = (window.innerHeight * 2) + STYLING_DEFAULTS.section_styling["top"];
	},[components, STYLING_DEFAULTS, THRESHOLDS]);

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