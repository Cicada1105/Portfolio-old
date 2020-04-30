import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pojects
import { Projects } from './index.jsx';

const ProjectRouter = () => {
	return (
		<Switch>
			<Route path="/Projects" render={() => <Projects />} />
		</Switch>
	);
}

export default ProjectRouter;