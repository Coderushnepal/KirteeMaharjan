import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Main, Assignment1, Assignment2 } from './main';

const AppRouter = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/assignment-1" component={Assignment1} />
			<Route path="/assignment-2" component={Assignment2} />
			{/* <Route to="*" component={FourOhFour} /> */}
		</Switch>
	</Router>
);

export default AppRouter;
