import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, Assignment1, Assignment2 } from './main';
import FourOhFour from './fourOhfour';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/assignment-1" component={Assignment1} />
			<Route exact path="/assignment-2" component={Assignment2} />
			<Route exact path="/" component={Main} />
			<Route to="*" component={FourOhFour} />
		</Switch>
	</BrowserRouter>
);

export default AppRouter;
