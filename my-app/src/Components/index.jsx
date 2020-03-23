import React from 'react';
import Background from './bg/index.jsx';
import Page from './pgs/index.jsx';

class Webpage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Background />
				<Page />
			</React.Fragment>
		);
	}
}

export default Webpage;