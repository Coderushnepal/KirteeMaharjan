import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as router from '../../constants/routers';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		};
	}
	handleTextChange = (event) => {
		this.setState({ searchText: event.targer.value });
	};
	render() {
		return (
			<header className="header">
				<div className="Container">
					<div className="header_top">
						<ul>
							<li>
								<Link to={router.HOME} title="home">
									Home
								</Link>
							</li>
							<li>
								<Link to={router.HOME} title="favourites">
									Favourites
								</Link>
							</li>
						</ul>
					</div>
					<div className="header_bottom">
						<h1>The Beer Bank </h1>
						<span>Find your favourite beer here</span>
						<form>
							<input
								type="text"
								placeholder="Search beer name"
								value={this.state.searchText}
								onChange="this.handleTextChange"
							/>
						</form>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
