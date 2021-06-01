import React, { useEffect, useRef, useContext } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { PageScrollContext } from '../../../context.jsx';

// Styles
import localStyles from './style.module.css';
import globalStyles from '../global.module.css'
import underline from '../resources/imgs/heading_underline.png';

const About = (props) => {
	const location = useLocation();
	const match = useRouteMatch();
	const { state, dispatch } = useContext(PageScrollContext);

	let aboutRef = useRef(null);
	let aboutScrollRef = useRef(null);
	// Keep track of if listener has already been added
	let hasListenerRef = useRef(false);
	let listenerRef = useRef(() => {
		let scrollTop = aboutScrollRef.current.scrollTop;
		let bottomThreshold = aboutScrollRef.current.scrollHeight - aboutScrollRef.current.offsetHeight;

		if ((scrollTop === 0) || (scrollTop === bottomThreshold)) {
			aboutScrollRef.current.style.overflowY = "hidden";
			// Return page scroll back to normal
			dispatch({ type: "normal" });
		}
	})

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				aboutRef.current.scrollIntoView({
					behavior: "smooth"
				});
	});

 	useEffect(() => {
		/*
			Check if current global state passed down through 
			context is on about section and listener has not
			been added previously
		*/
		if (state.section === "about") {
			// Check if listener has already been added
			if (!hasListenerRef.current) {
				aboutScrollRef.current.addEventListener("scroll",listenerRef.current,{ capture: true });
				hasListenerRef.current = true;
			}

			aboutScrollRef.current.style.overflowY = "scroll";
		}
		else {
			// Only need to remove listener if added. Don't need to attempt to remove every time
			if (hasListenerRef.current) {
				aboutScrollRef.current.removeEventListener("scroll",listenerRef.current, { capture: true });	
				hasListenerRef.current = false;
			}

			aboutScrollRef.current.style.overflowY = "hidden";
		}
 	},[state, dispatch]);

	const styles = {
		height:"25rem",
		marginTop:"10rem",
		marginBottom: "calc(100vh - 35rem)"
	}
	return (
		<div ref={aboutRef} className={ globalStyles.section } id="about" style={styles}>
			<h2 className={ localStyles.aboutHeader }>About</h2>
			<img src={ underline } alt="underline" className={ globalStyles.headerUnderline } />
			<section ref={aboutScrollRef} className={ localStyles.aboutSection }>
				<p>
					{/*
						Intro
							- Coding history 
								- Classes?
								- Self taught 
					*/}
					I am a front end web developer who focuses primarily on JavaScript and ReactJS development. I
					enjoy bringing UI to life through a sustainable and modularized code base. From my beginnings
					in junior year of highschool, to my years in college, I have obtained over 4 years of self taught
					web development. Studying, practicing and error handling of various languages, including
					ReactJS, Typescript, NodeJS and others, has helped me acquire flexibility in my coding skills.
				</p>
				<p>
					{/*
						Present
							- What I bring (coding and self discipline)
							- Approach
					*/}
					Because of my self teaching, I have learned to quickly adjust to any challenge or language thrown 
					my way. Languages/Libraries/Frameworks I have learned and done projects on include ReactJS, 
					Typescript, NodeJS, ReactJS, DJango, LESS, Pug and PHP. I believe that code planning, solid 
					infrastructure and reusability are important components in making solid and maintainable software. 
					Every project I work on, I approach with the same meticulous planning of infrastructure, code 
					design and resuability that is needed to account for scalability and maintainability.
				</p>
				<p>
					{/*
						Future/ Direct to contact
							- How I plan on growing and maintain skills
					*/}
					A constant drive for learning, testing, making mistakes and bettering myself allows me to advance 
					through whatever I approach. If you have any questions about me, my previous work or even future 
					work, check out my contact section below for more details. 
				</p>
			</section>
		</div>
	);
}

export { About }