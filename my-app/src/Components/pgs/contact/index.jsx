import React, { useEffect, useRef } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

// Styles
import globalStyles from '../global.module.css';

const Contact = () => {
	const location = useLocation();
	const match = useRouteMatch();
	let contactRef = useRef(null);

	useEffect(() => {
		if (location.state)
			if (match.isExact && location.state.scrollTo)
				contactRef.current.scrollIntoView({
					behavior: "smooth"
				});
	});
	return (
		<div ref={ contactRef } className={ globalStyles.section } id="contact">
			<h2>Contact Page</h2>
		</div>
	);
}

export { Contact }