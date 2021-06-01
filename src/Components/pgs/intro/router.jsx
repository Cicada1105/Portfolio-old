import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { IntroCard } from './index.jsx';

const IntroRouter = () => {
	return (
		<Switch>
			<Route exact path="/" render={({location}) => {
				return location.state && <IntroCard />
			}} />
			<Route exact path="/Home">
				<Redirect to="/" />
			</Route>
		</Switch>
	);
}

export default IntroRouter;