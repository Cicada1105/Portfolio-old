import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Contact pages
import { Contact } from './index.jsx'

const ContactRouter = () => {
	return(
		<Switch>
			<Route path="/Contact" render={({location}) => {
				console.log("Contact router");
				return location.state && <Contact />
			}} />
		</Switch>
	);
}

export default ContactRouter;