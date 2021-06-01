import React from 'react';

// React Router
//import { Link, useHistory } from 'react-router-dom';

import { Logo } from './logo.jsx';
import './index.css';

const Navigation = () => {
	//const history = useHistory();
	const links = [
		{
			name:"Contact",
			path:"/Contact",
			hash: "contact"
		},
		{
			name:"Projects",
			path:"/Projects",
			hash: "projects"
		},
		{
			name:"About",
			path:"/About",
			hash: "about"
		}
	];
	/*
	function handleClick(hash) {
		history.push(`#${hash}`);
		document.getElementById(hash).scrollIntoView({
			behavior: "smooth"
		});
	}
*/
	function moveTo(location) {
		console.log(location);
		let app = document.getElementsByClassName("App")[0];
		app.scrollTo({
			top:location,
			behavior:"smooth"
		});
	}
	return(
		<div className="navBar">
			{/*		Block container to have transparency without affecting navigation bar 	*/}
			<div className="navBarBg"></div>	
			<ul>
				<li onClick={() => moveTo(0)}>
					<Logo />
					{/*<Link to={{
						hash: "#home",
						state: {scrollTo: true}
					}} id="initials" onClick={(e) => {
						e.stopPropagation();
					}}>JC</Link>*/}
					<span>JC</span>
				</li>
				<li className="divider">|</li>
				{
					links.map((link,i) =>
						<React.Fragment key={i}>
							<li onClick={() => moveTo(window.innerHeight * (3 - i))} key={link.name}>
								{/*<Link to={{
									hash: `#${link.hash}`,
									state: {scrollTo: true}
								}} 
									onClick={(e) => {
										e.preventDefault();
									}}>{link.name}</Link>*/}
								<span>{link.name}</span>
							</li>
							<li className="divider" key={i}>|</li>
						</React.Fragment>
					)
				}
			</ul>
		</div>
	);
}
export default Navigation;