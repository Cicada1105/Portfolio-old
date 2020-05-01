import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Routers
import AboutRouter from './about/router.jsx';
import ContactRouter from './contact/router.jsx';
import HomeRouter from './home/router.jsx';
import ProjectRouter from './projects/router.jsx';

import './index.css';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [
				{
					name:"Josh Colvin",
					path:"/"
				},
				{
					name:"About",
					path:"/About"
				},
				{
					name:"Projects",
					path:"/Projects"
				},
				{
					name:"Contact",
					path:"/Contact"
				}
			]
		}
	}
	handleClick = (e) => {
		let path = e.target.nodeName === "LI" && e.target.firstElementChild.pathname;
		console.log(path);
	}
	render() {
		return(
			<ul>
				<li onClick={this.handleClick}>
					<Link to="/">Josh Colvin</Link>
				</li>
				<li className="divider">|</li>
				{
					this.state.links.map((link,i) => 
						<React.Fragment key={i}>
							<li onClick={this.handleClick} key={link.name}>
								<Link to={link.path} onClick={(e) => e.stopPropagation()}>{link.name}</Link>
							</li>
							<li className="divider" key={i}>|</li>
						</React.Fragment>
					)
				}
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