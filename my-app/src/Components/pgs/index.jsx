import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Routers
import AboutRouter from './about/router.jsx';
import ContactRouter from './contact/router.jsx';
import HomeRouter from './home/router.jsx';
import ProjectRouter from './projects/router.jsx';

import './index.css';

class Navigation extends React.Component {
	handleClick = (e) => {
		console.log(e.target);
	}
	render() {
		return(
			<ul>
				<li onClick={this.handleClick}>
					<Link to="/">Josh Colvin</Link>
				</li>
				<li className="divider">|</li>
				<li>
					<Link to="/Contact">Contact</Link>
				</li>
				<li className="divider">|</li>
				<li>
					<Link to="/Projects">Projects</Link>
				</li>
				<li className="divider">|</li>
				<li>
					<Link to="/About">About</Link>
				</li>
				<li className="divider">|</li>
			</ul>
		);
	}
}
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