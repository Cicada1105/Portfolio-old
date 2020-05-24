import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Navigation bar
import Navigation from './navigation/navigation.jsx';

// Routers
import AboutRouter from './about/router.jsx';
import ContactRouter from './contact/router.jsx';
import HomeRouter from './home/router.jsx';
import ProjectRouter from './projects/router.jsx';

import './index.css';

class Page extends React.Component {
	render() {
		return (
			<Router>
				{/*		Block container to have transparency without affecting navigation bar 	*/}
				<div className="navBar">
				</div>	
				<Navigation />

				<AboutRouter />
				<ContactRouter />
				<HomeRouter />
				<ProjectRouter />
			</Router>
		);
	}
}

export default Page