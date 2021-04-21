import React from 'react';

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

export default Page;