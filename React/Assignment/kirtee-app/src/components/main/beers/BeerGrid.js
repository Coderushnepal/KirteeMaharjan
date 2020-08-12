import React, { Component } from 'react';

import { Header, Spinner } from '../../common';
import Beer from './Beer';
import { fetchBeers } from '../../../services/beerService';

class BeerGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			beers: []
		};
	}

	scrollParentRef = null;

	fetchBeers = async () => {
		const data = await fetchBeers();
		this.setState({
			beers: data,
			isLoading: false
		});
	};
	componentDidMount() {
		this.fetchBeers();
	}

	render() {
		const isLoading = this.state.isLoading;
		return (
			<div>
				<Header />
				{isLoading ? (
					<Spinner />
				) : (
					<main>
						<div className="container" ref={(r) => (this.scrolParentRef = r)}>
							{this.state.beers.map((beer) => <Beer key={beer.id} info={beer} />)}
						</div>
					</main>
				)}
			</div>
		);
	}
}

export default BeerGrid;
