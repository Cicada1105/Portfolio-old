import React, { useEffect, useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';

// Reducer
import { ScrollReducer, PageScrollContext } from './context.jsx';

import Webpage from './Components/index.jsx'
import './index.css';

// This page can be used to make API calls to then cascade down to children
const App = function() {
	const [state, dispatch] = useReducer(ScrollReducer, { section: "normal" });

	let pageRef = useRef(null);
	// Keep track of if listener has already been added
	let hasListenerRef = useRef(false);
	/*
		Keep track of if scrolling has JUST been dispatched from 
		other components to prevent immediate re-dispatching
	*/
	//let justDispatchedToNormal = useRef(false);
	let exitThresholdListenerRef = useRef(() => {
		let currYPos = pageRef.current.scrollTop;
		// Define bounds that allows for user to scroll away from components
		let aboveAbout = currYPos < THRESHOLDS["about"].upper;
		let betweenAboutAndProjects = (currYPos > THRESHOLDS["about"].lower) && (currYPos < THRESHOLDS["projects"].upper);
		let betweenProjectsAndContact = (currYPos > THRESHOLDS["projects"].lower) && (currYPos < THRESHOLDS["contact"].upper);
		
		if (aboveAbout || betweenAboutAndProjects || betweenProjectsAndContact) {
			console.log("Outisde of components");
			// Remove current listener 
			pageRef.current.removeEventListener("scroll",exitThresholdListenerRef.current,true);
			// Add listener to check if user has scrolled within individual components thresholds
			pageRef.current.addEventListener("scroll",listenerRef.current,{ capture: true });
		}

	})
	let listenerRef = useRef(() => {
		let currYPos = pageRef.current.scrollTop;
		console.log("Checking if scroll position is within component thresholds");
		/* 
			Check if state was just dispatched from another component
			if so, allow for user to exit "trigger" section 
		*/
			if ((currYPos >= THRESHOLDS["about"].upper) && (currYPos <= THRESHOLDS["about"].lower)) {
			//if (currYPos === THRESHOLDS["about"]) {
				console.log("Dispatching from normal, to about");
				dispatch({ type: "about_section" });
			}
			else if ((currYPos >= THRESHOLDS["projects"].upper) && (currYPos <= THRESHOLDS["projects"].lower)) 
			//else if (currYPos === THRESHOLDS["projects"])
				dispatch({ type: "projects_section" });
			else if ((currYPos >= THRESHOLDS["contact"].upper) && (currYPos <= THRESHOLDS["contact"].lower))
			//else if (currYPos === THRESHOLDS["contact"])
				dispatch({ type: "contact_section" });	
	});

	let THRESHOLDS = {
		about: {
			upper: null,
			lower: null
		},
		projects: {
			upper: null,
			lower: null
		},
		contact: {
			upper: null,
			lower: null
		}
	}
	
	// Initial load
	useEffect(() => {
		console.log("%c-------------------------","color:aqua;");
		console.log("%cNormal section info:","font-weight:bold");
		if (state.section === "normal") {
			console.log("Normal page scroll");
			// Check if listener has already been added
			if (!hasListenerRef.current) {
				pageRef.current.addEventListener("scroll",exitThresholdListenerRef.current,true);
				hasListenerRef.current = true;	
			}

			pageRef.current.style.overflowY = "scroll";
		}
		else {
			console.log("Remove page scroll");
			// Only need to remove listener if added. Don't need to attempt to remove every time
			if (hasListenerRef.current) {
				pageRef.current.removeEventListener("scroll",listenerRef.current,{ capture: true });	
				hasListenerRef.current = false;
			}

			pageRef.current.style.overflowY = "hidden";
		}
		console.log(`State: ${state.section}`);
		console.log(`hasListener: ${hasListenerRef.current}`);
	},[state]);

	useEffect(() => {
		// Store value of thresholds
		THRESHOLDS["about"].upper = window.innerHeight - 10;
		THRESHOLDS["about"].lower = window.innerHeight + 10;
		THRESHOLDS["projects"].upper = (window.innerHeight * 2) - 10;
		THRESHOLDS["projects"].lower = (window.innerHeight * 2) + 10;
		THRESHOLDS["contact"].upper = (window.innerHeight * 3) - 10;
		THRESHOLDS["contact"].lower = (window.innerHeight * 3) + 10;
	},[THRESHOLDS]);

	return (
		<PageScrollContext.Provider value={{ state, dispatch }}>
      		<div ref={pageRef} className="App">
      			<Webpage />
      		</div>
		</PageScrollContext.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById("root"));
