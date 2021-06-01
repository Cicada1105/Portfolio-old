/*
	Define global context for page scrolling
*/

import React from 'react';

const PageScrollContext = React.createContext(null);

function reducer(state,action) {
	console.log(state);
	switch(action.type) {
		case "about_section":
			return { section: "about" }
		case "projects_section":
			return { section: "projects" }
		case "contact_section":
			return { section: "contact" }
		case "normal":
			return { section: "normal" }
		default:
			throw new Error();
	}
}

export { reducer as ScrollReducer, PageScrollContext };