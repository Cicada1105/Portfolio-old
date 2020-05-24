import React from 'react';

// React Router
import { Link } from 'react-router-dom';

import Circle from './circle.js';

import './index.css';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [
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
			],
			circles: [
				{
					radius:45,
					startAngle:0,
					endAngle:2 * Math.PI
				},
				{
					radius:60,
					startAngle:(2 * Math.PI) / 3,
					endAngle:(3 * Math.PI) / 2
				},
				{
					radius:60,
					startAngle:(7 * Math.PI) / 4,
					endAngle:Math.PI / 3
				},
				{
					radius:75,
					startAngle:Math.PI / 4,
					endAngle:(3 * Math.PI) / 4
				},
				{
					radius:75,
					startAngle:(5 * Math.PI) / 6,
					endAngle:(17 * Math.PI) / 12
				},
				{
					radius:75,
					startAngle:(5 * Math.PI) / 3,
					endAngle:Math.PI / 6
				}
			]
		}

		this.myRef = React.createRef();
	}
	componentDidMount() {
		let cvs = this.myRef.current;
		let ctx = cvs.getContext("2d");

		ctx.strokeStyle = "white";

		for (let circle of this.state.circles) {
			let c = new Circle(circle.radius,circle.startAngle,circle.endAngle,ctx);
			c.draw();
		}
	}
	handleClick = (e) => {
		let path = e.target.nodeName === "LI" ? e.target.lastElementChild.pathname : e.target.nextElementSibling.pathname;
		window.location.pathname = path;
	}
	render() {
		return(
			<ul>
				<li onClick={this.handleClick}>
					<canvas id="broken_circle" ref={this.myRef}/>
					<Link to="/" id="initials" onClick={(e) => e.stopPropagation()}>JC</Link>
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

export default Navigation;