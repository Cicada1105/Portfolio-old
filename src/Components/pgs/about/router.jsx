import React from 'react';
import { Switch, Route } from 'react-router-dom';
// About pages
import { About } from './index.jsx';

const AboutRouter = () => {
	return (
		<Switch>
			<Route path="/About" render={({location}) => {
				console.log("About Router");
				return location.state && <About />
			}} />
		</Switch>
	);
}

export default AboutRouter;