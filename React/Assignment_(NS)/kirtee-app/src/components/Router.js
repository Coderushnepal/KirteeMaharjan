import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Main from './main.js';
import Favouries from './favourites';

import * as router from '../constants/routers';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Main} />
		</Switch>
	</BrowserRouter>
);

export default Router;
