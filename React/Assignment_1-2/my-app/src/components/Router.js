import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import {Main} from './main'



const AppRouter = () => (
	<Router>
		<Switch>
			<Route exact to="/" component={Main} />
			{/* <Route to="/abc" component={Abc} />
			<Route to="/dbc" component={Def} /> */}
			{/* <Route to="*" component={FourOhFour} /> */}
		</Switch>
	</Router>
);

export Assignment_1;
export default AppRouter;

