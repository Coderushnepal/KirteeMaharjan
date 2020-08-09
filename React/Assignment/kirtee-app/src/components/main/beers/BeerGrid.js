import React, { Component } from 'react';

import { dummyBeersData } from '../../../constants/dummyData';
import { Header, Spinner } from '../../common';
import Beer from './Beer';

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
		setTimeout(() => {
			this.setState({
				beers: dummyBeersData,
				isLoading: false
			});
		}, 2000);
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
						<div className="container" ref={(r) => (this.scrolParentRef = r)} />
						{this.state.beers.map((beer) => <Beer key={beer.id} info={beer} />)}
					</main>
				)}
			</div>
		);
	}
}

export default BeerGrid;
