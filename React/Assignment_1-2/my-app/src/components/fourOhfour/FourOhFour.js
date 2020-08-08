import React from 'react';
import {Link} from 'react-router-dom'

import './fourOhfour.css'

const FourOhFour = () => (
	<div className="four-oh-four">
		<h1>404</h1>
		<h2>Page not found</h2>
		<p>
			Go back to our <Link to="/">main page</Link>.
		</p>
	</div>
);

export default FourOhFour;
