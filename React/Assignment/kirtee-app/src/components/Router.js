import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from '../constants/routes';
import history from '../utils/history';

import Main from './main';

const Favourite = () => <h2> Favourites Page </h2>;

const RouterApp = () => (
	<BrowserRouter history={history}>
		<Switch>
			<Route path={routes.HOME} component={Main} />
			<Route path={routes.FAVOURITES} component={Favourite} />
		</Switch>
	</BrowserRouter>
);

export default RouterApp;
