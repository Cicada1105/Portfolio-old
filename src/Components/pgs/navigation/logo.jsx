import React, { useEffect, useRef } from 'react';

import Circle from './circle.js';

const circleData = [
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

const Logo = () => {
	let myRef = useRef(null);

	useEffect(() => {
		let cvs = myRef.current;
		let ctx = cvs.getContext("2d");

		ctx.strokeStyle = "white";

		for (let circle of circleData) {
			let c = new Circle(circle.radius,circle.startAngle,circle.endAngle,ctx);
			c.draw();
		}
	},[myRef]);

	return (
		<canvas id="broken_circle" ref={myRef}/>
	);
}

export { Logo }