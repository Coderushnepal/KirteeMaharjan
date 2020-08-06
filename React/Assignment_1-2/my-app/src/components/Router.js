import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './main';
import FourOhFour from './fourOhFour';

const Abc = () => (
	<div>
		<h2>Iam abc</h2>
		<p>
			<link to="/">Main</link>
		</p>
		<p>
			<link to="/dev">def</link>
		</p>
	</div>
);
const Def = () => (
	<div>
		<h2>Iam abc</h2>
		<p>
			<link to="/">Main</link>
		</p>
		<p>
			<link to="/abc">abc</link>
		</p>
	</div>
);

const AppRouter = () => (
	<Router>
		<Switch>
			<Route exact to="/" component={Main} />
			<Route to="/abc" component={Abc} />
			<Route to="/dbc" component={Def} />
			{/* <Route to="*" component={FourOhFour} /> */}
		</Switch>
	</Router>
);

export default AppRouter;
