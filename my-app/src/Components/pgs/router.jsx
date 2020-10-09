import React from 'react';

// Routers
import AboutRouter from './about/router.jsx';
import ContactRouter from './contact/router.jsx';
import IntroRouter from './intro/router.jsx';
import ProjectRouter from './projects/router.jsx';

const HomeRouter = () => {
	return (
		<React.Fragment>
			<IntroRouter />
			<AboutRouter />
			<ContactRouter />
			<ProjectRouter />
		</React.Fragment>
	)
}

export { HomeRouter };