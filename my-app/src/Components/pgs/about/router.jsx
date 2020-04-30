import React from 'react';
import { Switch, Route } from 'react-router-dom';
// About pages
import { About } from './index.jsx';

const AboutRouter = () => {

	return (
		<Switch>
			<Route exact path="/About" render={() => <About /> } />
		</Switch>
	);
}

export default AboutRouter;