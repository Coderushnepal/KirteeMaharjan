import React, { Component } from 'react';

const withRedBull = (WrappedComponent) => {
	return class WithRedBull extends Component {
		constructor(props) {
			super(props);
			this.state = {
				wings: null
			};
		}

		flyAway = () => {
			this.setState({
				wings: true
			});
		};

		render() {
			return <WrappedComponent wings={this.state.wings} flyAway={this.flyAway} {...this.props} />;
		}
	};
};

export default withRedBull;
